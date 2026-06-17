import { COUNTRIES } from '../data/countries';

// progress のキーは 'JP_python' 形式。国IDを抽出してクリア済みSetを作る
export function getUnlockedIds(progress) {
  const cleared = new Set(
    Object.keys(progress).map(k => k.split('_')[0])
  );
  const unlocked = new Set();
  COUNTRIES.forEach((c, i) => {
    if (i === 0) { unlocked.add(c.id); return; }
    if (cleared.has(COUNTRIES[i - 1].id)) unlocked.add(c.id);
  });
  return unlocked;
}
