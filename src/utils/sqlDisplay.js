function splitTopLevel(input, delimiter = ',') {
  const parts = [];
  let depth = 0;
  let quote = '';
  let current = '';
  for (const char of String(input)) {
    if ((char === "'" || char === '"') && !quote) quote = char;
    else if (char === quote) quote = '';
    else if (!quote && char === '(') depth += 1;
    else if (!quote && char === ')') depth = Math.max(0, depth - 1);

    if (!quote && depth === 0 && char === delimiter) {
      parts.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function tableRows(table) {
  return (table?.rows || []).map((row) =>
    Object.fromEntries((table.columns || []).map((column, index) => [column, row[index]])),
  );
}

function parseLiteral(value) {
  const trimmed = String(value || '').trim();
  const quoted = trimmed.match(/^['"](.+)['"]$/);
  if (quoted) return quoted[1];
  const numeric = Number(trimmed);
  return Number.isNaN(numeric) ? trimmed : numeric;
}

function applyWhere(rows, whereClause) {
  if (!whereClause) return rows;
  const clause = whereClause.trim().replace(/;$/, '');
  const isNull = clause.match(/^(\w+)\s+IS\s+NULL$/i);
  if (isNull) return rows.filter((row) => row[isNull[1]] == null);
  const inMatch = clause.match(/^(\w+)\s+IN\s*\((.+)\)$/i);
  if (inMatch) {
    const values = splitTopLevel(inMatch[2]).map(parseLiteral);
    return rows.filter((row) => values.includes(row[inMatch[1]]));
  }
  const comparison = clause.match(/^(\w+)\s*(=|>=|<=|>|<)\s*(.+)$/);
  if (!comparison) return rows;
  const [, column, op, rawValue] = comparison;
  const expected = parseLiteral(rawValue);
  return rows.filter((row) => {
    const actual = row[column];
    if (op === '=') return actual === expected;
    if (op === '>=') return actual >= expected;
    if (op === '<=') return actual <= expected;
    if (op === '>') return actual > expected;
    if (op === '<') return actual < expected;
    return false;
  });
}

function getExpressionLabel(expression, index) {
  const alias = expression.match(/\s+AS\s+(\w+)$/i);
  if (alias) return alias[1];
  const cleaned = expression.replace(/^DISTINCT\s+/i, '').trim();
  if (/^COUNT\(\*\)$/i.test(cleaned)) return 'count';
  const fn = cleaned.match(/^(AVG|SUM|MIN|MAX)\((\w+)\)$/i);
  if (fn) return `${fn[1].toLowerCase()}_${fn[2]}`;
  const coalesce = cleaned.match(/^COALESCE\((\w+),\s*['"](.+)['"]\)$/i);
  if (coalesce) return coalesce[1];
  return cleaned || `col_${index + 1}`;
}

function evaluateExpression(expression, rows, row, selectExpressions) {
  const cleaned = expression.replace(/\s+AS\s+\w+$/i, '').replace(/^DISTINCT\s+/i, '').trim();
  if (/^COUNT\(\*\)$/i.test(cleaned)) return rows.length;
  const fn = cleaned.match(/^(AVG|SUM|MIN|MAX)\((\w+)\)$/i);
  if (fn) {
    const values = rows.map((item) => Number(item[fn[2]])).filter((value) => !Number.isNaN(value));
    if (fn[1].toUpperCase() === 'SUM') return values.reduce((sum, value) => sum + value, 0);
    if (fn[1].toUpperCase() === 'AVG') return values.length ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2)) : null;
    if (fn[1].toUpperCase() === 'MIN') return values.length ? Math.min(...values) : null;
    if (fn[1].toUpperCase() === 'MAX') return values.length ? Math.max(...values) : null;
  }
  const coalesce = cleaned.match(/^COALESCE\((\w+),\s*['"](.+)['"]\)$/i);
  if (coalesce) return row?.[coalesce[1]] ?? coalesce[2];
  const position = cleaned.match(/^\d+$/);
  if (position && selectExpressions?.[Number(cleaned) - 1]) {
    return evaluateExpression(selectExpressions[Number(cleaned) - 1], rows, row, selectExpressions);
  }
  return row?.[cleaned] ?? null;
}

export function buildCompletedSql(query, answer) {
  return String(query || '').replace(/___BLANK___/g, answer || '');
}

export function buildSqlHint(question, currentDebugStep = null) {
  const query = String(currentDebugStep?.query || question?.query || '');
  const table = question?.tables?.[0];
  const columns = table?.columns?.length ? `使える列は ${table.columns.join(', ')} です。` : '';

  const isUsefulHint = (hint) => {
    if (!hint || /\?{3,}/.test(hint)) return false;
    if (/QUERY の SELECT|RESULT に出したい値|列名、句、キーワード/.test(hint)) return false;
    return true;
  };
  if (isUsefulHint(currentDebugStep?.hint)) return currentDebugStep.hint;
  if (isUsefulHint(question?.hint)) return question.hint;

  if (/SELECT\s+___BLANK___/i.test(query)) {
    return `空欄は SELECT の直後です。RESULT に出したい列または集計式を入れます。${columns}`;
  }
  if (/FROM\s+___BLANK___/i.test(query)) {
    return `空欄は FROM の後ろです。どの TABLE から行を読むかを、表の名前と見比べて入れます。表示されている TABLE 名をそのまま確認してください。`;
  }
  if (/WHERE\s+___BLANK___/i.test(query)) {
    return `空欄は WHERE 条件です。RESULT に残る行と消える行を比べて、列名・比較記号・値を順に考えます。${columns}`;
  }
  if (/ORDER BY\s+___BLANK___/i.test(query)) {
    return `空欄は ORDER BY です。RESULT の並び順を見て、並べ替える列と ASC/DESC を決めます。${columns}`;
  }
  if (/GROUP BY\s+___BLANK___/i.test(query)) {
    return `空欄は GROUP BY です。同じ値をまとめたい列、または SELECT 句の列位置を確認します。SELECT に出ている項目を左から数えるのも手です。`;
  }
  if (/JOIN[\s\S]+ON\s+___BLANK___/i.test(query)) {
    return '空欄は JOIN の ON 条件です。2つの表で同じ意味を持つキー列を結びます。';
  }
  if (/INSERT|UPDATE|DELETE/i.test(query)) {
    return '空欄は書き込み文の安全な一部です。列と値の対応、または対象を絞る WHERE を確認します。';
  }
  if (question?.mode === 'execute') return 'TABLE と QUERY を上から読み、SELECT する列、条件、並び順を一つずつ追って RESULT を選びます。';
  if (question?.mode === 'debug') return '壊れた QUERY のどの句が、TABLE や期待する動きと合っていないかを探します。';
  return 'QUERY の空欄の前後を読み、TABLE と RESULT のどちらに対応しているかを見比べます。';
}

export function normalizeSqlOptionLabel(option) {
  const label = typeof option === 'string' ? option : (option?.label || option?.id || '');
  const id = typeof option === 'string' ? option : option?.id;
  if (/^\?{2,}\s*[ABC]$/i.test(label)) return `結果${String(label).trim().slice(-1).toUpperCase()}`;
  if (/^[abc]$/i.test(id) && !label) return `結果${String(id).toUpperCase()}`;
  return label;
}

export function evaluateSqlResult(question, query) {
  const sql = String(query || '').replace(/\s+/g, ' ').trim();
  const tableName = sql.match(/\bFROM\s+(\w+)/i)?.[1];
  const table = question?.tables?.find((item) => item.id === tableName) || question?.tables?.[0];
  if (!table || !/^SELECT\b/i.test(sql)) return null;

  const selectMatch = sql.match(/^SELECT\s+(.+?)\s+FROM\s+\w+/i);
  if (!selectMatch) return null;
  let selectPart = selectMatch[1].trim();
  const distinct = /^DISTINCT\s+/i.test(selectPart);
  selectPart = selectPart.replace(/^DISTINCT\s+/i, '');

  const whereClause = sql.match(/\bWHERE\s+(.+?)(?:\s+GROUP BY|\s+ORDER BY|\s+LIMIT|;|$)/i)?.[1];
  const groupClause = sql.match(/\bGROUP BY\s+(.+?)(?:\s+ORDER BY|\s+LIMIT|;|$)/i)?.[1];
  const orderClause = sql.match(/\bORDER BY\s+(.+?)(?:\s+LIMIT|;|$)/i)?.[1];
  const limitValue = Number(sql.match(/\bLIMIT\s+(\d+)/i)?.[1] || 0);
  const expressions = selectPart === '*' ? table.columns : splitTopLevel(selectPart);

  let rows = applyWhere(tableRows(table), whereClause);
  const hasAggregate = expressions.some((expression) => /^(COUNT|AVG|SUM|MIN|MAX)\(/i.test(expression.replace(/\s+AS\s+\w+$/i, '').trim()));

  let resultRows;
  if (groupClause) {
    const groupExpression = groupClause.trim();
    const groupIndex = /^\d+$/.test(groupExpression) ? Number(groupExpression) - 1 : -1;
    const groupColumn = groupIndex >= 0 ? expressions[groupIndex]?.replace(/\s+AS\s+\w+$/i, '').trim() : groupExpression;
    const groups = new Map();
    for (const row of rows) {
      const key = row[groupColumn];
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(row);
    }
    resultRows = [...groups.values()].map((groupRows) =>
      expressions.map((expression) => evaluateExpression(expression, groupRows, groupRows[0], expressions)),
    );
  } else if (hasAggregate) {
    resultRows = [expressions.map((expression) => evaluateExpression(expression, rows, rows[0], expressions))];
  } else {
    resultRows = rows.map((row) => expressions.map((expression) => evaluateExpression(expression, rows, row, expressions)));
  }

  if (distinct) {
    const seen = new Set();
    resultRows = resultRows.filter((row) => {
      const key = JSON.stringify(row);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  if (orderClause) {
    const [rawColumn, rawDirection = 'ASC'] = orderClause.split(/\s+/);
    const columnIndex = expressions.findIndex((expression) => getExpressionLabel(expression, 0) === rawColumn || expression.replace(/\s+AS\s+\w+$/i, '').trim() === rawColumn);
    if (columnIndex >= 0) {
      const direction = rawDirection.toUpperCase() === 'DESC' ? -1 : 1;
      resultRows = [...resultRows].sort((a, b) => (a[columnIndex] > b[columnIndex] ? 1 : a[columnIndex] < b[columnIndex] ? -1 : 0) * direction);
    }
  }

  if (limitValue > 0) resultRows = resultRows.slice(0, limitValue);

  return {
    columns: expressions.map(getExpressionLabel),
    rows: resultRows,
  };
}
