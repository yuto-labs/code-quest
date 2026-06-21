const chapters = [
  {
    id: '01_type_basics',
    concept: 'type-annotations',
    items: [
      ['write', 'United Nations founding year', 'const, number, string, template literal', 'the United Nations was established in 1945', '1945', 'const foundedYear: number = ___BLANK___;\nconst name: string = "United Nations";\nconsole.log(`${name}:${foundedYear}`);', 'United Nations:1945'],
      ['write', 'World Health Organization', 'boolean annotation and string output', 'WHO came into being in 1948', 'true', 'const organization: string = "WHO";\nconst cameIntoBeingIn1948: boolean = ___BLANK___;\nconsole.log(`${organization}:${cameIntoBeingIn1948}`);', 'WHO:true'],
      ['write', 'Olympic rings', 'number annotation and simple output', 'the Olympic symbol has five interlaced rings', '5', 'const rings: number = ___BLANK___;\nconsole.log(rings);', '5'],
      ['read', 'Antarctic Treaty', 'infer string and number values', 'the Antarctic Treaty was signed in 1959', 'Antarctic Treaty:1959', 'const treatyName = "Antarctic Treaty";\nconst signedYear = 1959;\nconsole.log(`${treatyName}:${signedYear}`);'],
      ['read', 'World Heritage Convention', 'trace const values and string concatenation', 'the World Heritage Convention was adopted in 1972', 'World Heritage Convention adopted in 1972', 'const title = "World Heritage Convention";\nconst year = 1972;\nconst message = title + " adopted in " + year;\nconsole.log(message);'],
      ['read', 'International Space Station first long-duration crew', 'boolean / number tracing', 'Expedition 1 began in 2000', 'true:2000', 'const expedition = 1;\nconst beganYear = 2000;\nconst isFirstLongCrew = expedition === 1;\nconsole.log(`${isFirstLongCrew}:${beganYear}`);'],
      ['fix', 'International Labour Organization', 'assigning a string year to a number variable', 'ILO was founded in 1919', 'const foundedYear: number = 1919;', 'const foundedYear: number = "1919";\nconsole.log(foundedYear);'],
      ['fix', 'landlocked countries dataset', '"true" used where boolean true is expected', 'sample data marks a country as landlocked with a boolean', 'landlocked: true', 'type Country = { name: string; landlocked: boolean };\nconst sample: Country = { name: "Mongolia", landlocked: "true" };'],
      ['fix', 'UNESCO language code labels', 'reassigning number to a string variable', 'sample labels use language code strings such as EN and FR', 'code = "FR";', 'let code = "EN";\ncode = 33;\nconsole.log(code);'],
      ['mission', 'international organization profile card', 'string, number, boolean, type annotation, template literal', 'sample data includes UN, WHO, and UNESCO; WHO came into being in 1948', 'WHO:1948:true', 'const profiles: { code: string; year: number; active: boolean }[] = [\n  { code: "UN", year: 1945, active: true },\n  { code: "WHO", year: 1948, active: true },\n  { code: "UNESCO", year: 1945, active: true },\n];\nconst who = profiles[1];\nconsole.log(`${who.code}:${who.year}:${who.active}`);'],
    ],
  },
  {
    id: '02_arrays_objects',
    concept: 'arrays',
    items: [
      ['write', 'Great Lakes', 'string[] and index access', 'the supplied Great Lakes are Superior, Michigan, Huron, Erie, Ontario', 'lakes[0]', 'const lakes: string[] = ["Superior", "Michigan", "Huron", "Erie", "Ontario"];\nconsole.log(___BLANK___);', 'Superior'],
      ['write', 'Galápagos Islands', 'object type and property access', 'the Galápagos Islands are part of Ecuador', 'islands.country', 'const islands: { name: string; country: string } = { name: "Galápagos Islands", country: "Ecuador" };\nconsole.log(___BLANK___);', 'Ecuador'],
      ['write', 'Suez Canal', 'typed object with year and country fields', 'the Suez Canal opened in 1869', 'canal.year', 'const canal: { name: string; year: number; country: string } = { name: "Suez Canal", year: 1869, country: "Egypt" };\nconsole.log(___BLANK___);', '1869'],
      ['read', 'Kilimanjaro', 'array iteration and output accumulation', 'Kilimanjaro is in Tanzania', 'Kilimanjaro-Tanzania', 'const values = ["Kilimanjaro", "Tanzania"];\nlet label = "";\nfor (const value of values) {\n  label += label ? `-${value}` : value;\n}\nconsole.log(label);'],
      ['read', 'Angkor', 'object array and map-like access', 'Angkor is associated with Cambodia', 'Angkor:Cambodia', 'const sites = [{ name: "Angkor", country: "Cambodia" }];\nconst label = sites.map(site => `${site.name}:${site.country}`)[0];\nconsole.log(label);'],
      ['read', 'Machu Picchu', 'object property tracing', 'Machu Picchu is in Peru', 'Peru', 'const site = { name: "Machu Picchu", country: "Peru", region: "Andes" };\nconst selected = site.country;\nconsole.log(selected);'],
      ['fix', 'major rivers', 'number inside string[] where river names are expected', 'sample river names are Nile, Amazon, Yangtze', '"Amazon"', 'const rivers: string[] = ["Nile", 6500, "Yangtze"];'],
      ['fix', 'national parks and countries', 'object lacks required property', 'sample park data requires name and country', 'country: "Kenya"', 'type Park = { name: string; country: string };\nconst park: Park = { name: "Maasai Mara" };'],
      ['fix', 'Taj Mahal', 'using site.place when the object defines site.country', 'the Taj Mahal is in India', 'site.country', 'const site = { name: "Taj Mahal", country: "India" };\nconsole.log(site.place);'],
      ['mission', 'world heritage record list', 'typed arrays, object types, property access, filtering', 'records include different regions and categories', 'Angkor,Cusco', 'type Site = { name: string; region: string; category: "cultural" | "natural" };\nconst sites: Site[] = [\n  { name: "Angkor", region: "Asia", category: "cultural" },\n  { name: "Serengeti", region: "Africa", category: "natural" },\n  { name: "Cusco", region: "Americas", category: "cultural" },\n];\nconsole.log(sites.filter(site => site.category === "cultural").map(site => site.name).join(","));'],
    ],
  },
  {
    id: '03_union_literal',
    concept: 'unions',
    items: [
      ['write', 'UNESCO site category', 'literal union "cultural" | "natural" | "mixed"', 'sample category is cultural', '"cultural"', 'type SiteCategory = "cultural" | "natural" | "mixed";\nconst category: SiteCategory = ___BLANK___;\nconsole.log(category);', 'cultural'],
      ['write', 'climate-zone label', 'literal union for climate zones', 'sample region uses polar', '"polar"', 'type ClimateZone = "tropical" | "arid" | "temperate" | "polar";\nconst antarcticZone: ClimateZone = ___BLANK___;\nconsole.log(antarcticZone);', 'polar'],
      ['write', 'currency-code label', 'union of string literals such as JPY, EUR, USD', 'sample data uses JPY', '"JPY"', 'type CurrencyCode = "JPY" | "EUR" | "USD";\nconst yen: CurrencyCode = ___BLANK___;\nconsole.log(yen);', 'JPY'],
      ['read', 'shipment status for global aid supplies', 'union status and function message', 'shipment status can be planned, in_transit, or delivered', 'Aid is in transit', 'type Status = "planned" | "in_transit" | "delivered";\nfunction message(status: Status): string {\n  return status === "in_transit" ? "Aid is in transit" : status;\n}\nconsole.log(message("in_transit"));'],
      ['read', 'hemisphere labels', 'union type and conditional branch', 'sample label is Both', 'Both hemispheres', 'type Hemisphere = "Northern" | "Southern" | "Both";\nconst label: Hemisphere = "Both";\nconsole.log(label === "Both" ? "Both hemispheres" : label);'],
      ['read', 'protected-area category', 'literal type narrowing through comparison', 'sample category is natural', 'nature record', 'type Category = "cultural" | "natural";\nconst category: Category = "natural";\nif (category === "natural") {\n  console.log("nature record");\n}'],
      ['fix', 'UNESCO site type', 'assigning culture instead of cultural', 'valid UNESCO site type is cultural', '"cultural"', 'type SiteType = "cultural" | "natural" | "mixed";\nconst type: SiteType = "culture";'],
      ['fix', 'global transport status', 'missing case for delayed', 'status values include planned, in_transit, delivered, delayed', 'case "delayed": return "Delayed";', 'type TransportStatus = "planned" | "in_transit" | "delivered" | "delayed";\nfunction label(status: TransportStatus): string {\n  switch (status) {\n    case "planned": return "Planned";\n    case "in_transit": return "Moving";\n    case "delivered": return "Done";\n  }\n}'],
      ['fix', 'treaty status', 'status typed as string instead of restricted literal union', 'sample treaty status values are signed and ratified', 'type TreatyStatus = "signed" | "ratified";', 'type Treaty = { name: string; status: string };\nconst item: Treaty = { name: "Sample Treaty", status: "anything" };'],
      ['mission', 'heritage and climate classification', 'union types, literal types, conditionals, result labels', 'records from multiple countries include heritage and climate labels', 'Peru:mixed:temperate', 'type Heritage = "cultural" | "natural" | "mixed";\ntype Climate = "tropical" | "arid" | "temperate" | "polar";\nconst record: { country: string; heritage: Heritage; climate: Climate } = { country: "Peru", heritage: "mixed", climate: "temperate" };\nconst label = record.heritage === "mixed" ? `${record.country}:mixed:${record.climate}` : record.country;\nconsole.log(label);'],
    ],
  },
  {
    id: '04_functions',
    concept: 'functions',
    items: [
      ['write', 'population density calculation', 'parameter types and return type', 'population density is population divided by area', 'population / area', 'function density(population: number, area: number): number {\n  return ___BLANK___;\n}\nconsole.log(density(900, 30));', '30'],
      ['write', 'museum founding-year message', 'function parameter and string return', 'sample museum opened in 1870', '`${name}:${year}`', 'function museumLabel(name: string, year: number): string {\n  return ___BLANK___;\n}\nconsole.log(museumLabel("Museum", 1870));', 'Museum:1870'],
      ['write', 'timezone offset label', 'default parameter', 'sample default offset is UTC+0', '"UTC+0"', 'function zoneLabel(offset: string = ___BLANK___): string {\n  return offset;\n}\nconsole.log(zoneLabel());', 'UTC+0'],
      ['read', 'Celsius to Fahrenheit for a polar research station', 'numeric function return', 'sample temperature is -10 Celsius', '14', 'function toF(celsius: number): number {\n  return celsius * 9 / 5 + 32;\n}\nconsole.log(toF(-10));'],
      ['read', 'historic decade label', 'function returning a string from a year', 'sample event year is 1969', '1960s', 'function decade(year: number): string {\n  return `${Math.floor(year / 10) * 10}s`;\n}\nconsole.log(decade(1969));'],
      ['read', 'public-health rate calculation', 'parameter types and arithmetic tracing', 'sample cases 25 and population 1000', '2.5', 'function rate(cases: number, population: number): number {\n  return cases / population * 100;\n}\nconsole.log(rate(25, 1000));'],
      ['fix', 'country-code formatter', 'function declared to return number but returns string', 'country code label should be a string', 'function formatCode(code: string): string', 'function formatCode(code: string): number {\n  return `code:${code}`;\n}'],
      ['fix', 'language label', 'optional parameter may be undefined', 'sample language label may be omitted', 'if (name === undefined) return "unknown";', 'function label(name?: string): string {\n  return name.toUpperCase();\n}'],
      ['fix', 'distance label for trade routes', 'passing a string where number is expected', 'sample distance is 1200 km', 'distanceLabel(1200)', 'function distanceLabel(km: number): string {\n  return `${km} km`;\n}\nconsole.log(distanceLabel("1200"));'],
      ['mission', 'city comparison helper', 'typed parameters, return values, optional parameter, condition', 'sample city data comes from multiple continents', 'Tokyo>Lima', 'function compareCity(a: string, aPop: number, b: string, bPop: number, suffix = ""): string {\n  const winner = aPop > bPop ? a : b;\n  return `${winner}${suffix}`;\n}\nconsole.log(compareCity("Tokyo", 37, "Lima", 11, ">Lima"));'],
    ],
  },
  {
    id: '05_interface_alias',
    concept: 'objects',
    items: [
      ['write', 'country profile', 'interface with name, region, capital', 'sample country profile uses France, Europe, Paris', 'capital: "Paris"', 'interface CountryProfile {\n  name: string;\n  region: string;\n  capital: string;\n}\nconst france: CountryProfile = { name: "France", region: "Europe", ___BLANK___ };\nconsole.log(france.capital);', 'Paris'],
      ['write', 'World Heritage site profile', 'type alias with optional property', 'sample site has optional year', 'year?: number', 'type SiteProfile = { name: string; country: string; ___BLANK___ };\nconst site: SiteProfile = { name: "Chartres Cathedral", country: "France", year: 1979 };\nconsole.log(site.year);', '1979'],
      ['write', 'museum card', 'readonly property', 'sample museum data has a stable id', 'readonly id: string;', 'type MuseumCard = { ___BLANK___ name: string };\nconst card: MuseumCard = { id: "M01", name: "Archive Museum" };\nconsole.log(card.id);', 'M01'],
      ['read', 'scientist profile', 'object typed by interface', 'supplied scientist field is discipline', 'Curie:physics', 'interface Scientist { name: string; field: string }\nconst scientist: Scientist = { name: "Curie", field: "physics" };\nconsole.log(`${scientist.name}:${scientist.field}`);'],
      ['read', 'river record', 'type alias and property tracing', 'sample river/country data uses Nile and Egypt', 'Egypt', 'type River = { name: string; country: string };\nconst river: River = { name: "Nile", country: "Egypt" };\nconsole.log(river.country);'],
      ['read', 'treaty summary', 'optional property check in output', 'sample treaty has no end year', 'open', 'type Treaty = { name: string; endYear?: number };\nconst treaty: Treaty = { name: "Sample Treaty" };\nconsole.log(treaty.endYear === undefined ? "open" : treaty.endYear);'],
      ['fix', 'international organization profile', 'object missing required headquarters or founded field', 'profile requires headquarters and founded', 'founded: 1945', 'interface Org { name: string; headquarters: string; founded: number }\nconst org: Org = { name: "UN", headquarters: "New York" };'],
      ['fix', 'archive catalog number', 'trying to mutate a readonly ID', 'catalog ID should not be reassigned', 'create a new object instead of assigning record.id', 'type ArchiveRecord = { readonly id: string; title: string };\nconst record: ArchiveRecord = { id: "A1", title: "Map" };\nrecord.id = "A2";'],
      ['fix', 'festival record', 'possibly undefined property', 'festival month is optional', 'if (festival.month !== undefined)', 'type Festival = { name: string; month?: number };\nconst festival: Festival = { name: "Music Day" };\nconsole.log(festival.month.toFixed(0));'],
      ['mission', 'global archive records', 'interface, type alias, readonly ID, optional fields, object arrays', 'records include heritage, science, and culture', 'H01:heritage,S01:science', 'interface ArchiveBase { readonly id: string; title: string }\ntype ArchiveRecord = ArchiveBase & { category: "heritage" | "science" | "culture"; year?: number };\nconst records: ArchiveRecord[] = [\n  { id: "H01", title: "Site", category: "heritage" },\n  { id: "S01", title: "Lab", category: "science", year: 1950 },\n];\nconsole.log(records.map(record => `${record.id}:${record.category}`).join(","));'],
    ],
  },
  {
    id: '06_narrowing',
    concept: 'type-narrowing',
    items: [
      ['write', 'cultural vs natural heritage record', 'discriminated union', 'sample cultural record has kind cultural', '"cultural"', 'type Heritage = { kind: "cultural"; monument: string } | { kind: "natural"; ecosystem: string };\nconst record: Heritage = { kind: ___BLANK___, monument: "Old City" };\nconsole.log(record.kind);', 'cultural'],
      ['write', 'earthquake vs volcano event', 'in narrowing', 'volcano event has volcanoName', '"volcanoName" in event', 'type Event = { earthquakeMagnitude: number } | { volcanoName: string };\nconst event: Event = { volcanoName: "Etna" };\nif (___BLANK___) {\n  console.log(event.volcanoName);\n}', 'Etna'],
      ['write', 'text vs numeric observation', 'typeof narrowing', 'sample climate observation may be text or number', 'typeof observation === "number"', 'const observation: string | number = 12;\nif (___BLANK___) {\n  console.log(observation + 1);\n}', '13'],
      ['read', 'rail route vs flight route', 'discriminated union branch tracing', 'sample route is rail', 'rail:Paris-Lyon', 'type Route = { kind: "rail"; line: string } | { kind: "flight"; code: string };\nconst route: Route = { kind: "rail", line: "Paris-Lyon" };\nconsole.log(route.kind === "rail" ? `rail:${route.line}` : "flight");'],
      ['read', 'missing translation', 'null check', 'sample multilingual label is missing', 'missing', 'const translation: string | null = null;\nconsole.log(translation === null ? "missing" : translation.toUpperCase());'],
      ['read', 'treaty vs organization record', 'in operator selected output', 'treaty record has signedYear', 'treaty:1959', 'type RecordItem = { name: string; signedYear: number } | { name: string; headquarters: string };\nconst item: RecordItem = { name: "Antarctic Treaty", signedYear: 1959 };\nconsole.log("signedYear" in item ? `treaty:${item.signedYear}` : item.headquarters);'],
      ['fix', 'global disaster event', 'accessing property that exists only on one union member', 'flood has river, earthquake has magnitude', 'check "river" in event first', 'type Disaster = { kind: "flood"; river: string } | { kind: "earthquake"; magnitude: number };\nfunction label(event: Disaster): string {\n  return event.river;\n}'],
      ['fix', 'endangered-language translation', 'possible null value', 'translation can be null when unavailable', 'if (translation !== null)', 'const translation: string | null = null;\nconsole.log(translation.toUpperCase());'],
      ['fix', 'public transport record', 'missing case for ship', 'transport kinds include rail, bus, and ship', 'case "ship": return route.port;', 'type Transport = { kind: "rail"; line: string } | { kind: "bus"; route: string } | { kind: "ship"; port: string };\nfunction label(route: Transport): string {\n  if (route.kind === "rail") return route.line;\n  if (route.kind === "bus") return route.route;\n  return route.kind;\n}'],
      ['mission', 'mixed global record processor', 'typeof, in, discriminated union, null check, safe output', 'mixed records include text, number, and organization data', 'UNESCO:Paris', 'type Org = { kind: "org"; name: string; headquarters: string | null };\ntype Value = string | number | Org;\nconst value: Value = { kind: "org", name: "UNESCO", headquarters: "Paris" };\nif (typeof value === "object" && "headquarters" in value && value.headquarters !== null) {\n  console.log(`${value.name}:${value.headquarters}`);\n}'],
    ],
  },
  {
    id: '07_generics',
    concept: 'generics',
    items: [
      ['write', 'first item from a city list', 'generic function first<T>', 'sample city list starts with Cairo', 'items[0]', 'function first<T>(items: T[]): T | undefined {\n  return ___BLANK___;\n}\nconsole.log(first(["Cairo", "Lima"]));', 'Cairo'],
      ['write', 'find record by code', 'generic function with constraint', 'country-code records have code fields', 'item.code === code', 'function findByCode<T extends { code: string }>(items: T[], code: string): T | undefined {\n  return items.find(item => ___BLANK___);\n}\nconsole.log(findByCode([{ code: "JP", name: "Japan" }], "JP")?.name);', 'Japan'],
      ['write', 'API response wrapper', 'generic interface ApiResponse<T>', 'museum response wraps one museum object', 'data: T', 'interface ApiResponse<T> { ok: boolean; ___BLANK___ }\nconst response: ApiResponse<{ name: string }> = { ok: true, data: { name: "Museum" } };\nconsole.log(response.data.name);', 'Museum'],
      ['read', 'preserve type through identity function', 'generic identity<T>', 'supplied heritage-site object keeps its fields', 'Angkor', 'function identity<T>(value: T): T { return value; }\nconst site = identity({ name: "Angkor", country: "Cambodia" });\nconsole.log(site.name);'],
      ['read', 'get property by key', 'keyof and generic key access', 'river record has name and country', 'Amazon', 'function getValue<T, K extends keyof T>(item: T, key: K): T[K] { return item[key]; }\nconst river = { name: "Amazon", country: "Brazil" };\nconsole.log(getValue(river, "name"));'],
      ['read', 'map records to labels', 'generic function with mapper callback', 'language records have code and name', 'EN-English,FR-French', 'function mapLabels<T>(items: T[], mapper: (item: T) => string): string[] { return items.map(mapper); }\nconst languages = [{ code: "EN", name: "English" }, { code: "FR", name: "French" }];\nconsole.log(mapLabels(languages, item => `${item.code}-${item.name}`).join(","));'],
      ['fix', 'archive lookup', 'returning string where T is expected', 'lookup should return the matched record', 'return item;', 'function firstMatch<T>(items: T[]): T {\n  return "record";\n}'],
      ['fix', 'country records with code', 'accessing item.code without constraint', 'records need a code constraint', 'function codes<T extends { code: string }>(items: T[]): string[]', 'function codes<T>(items: T[]): string[] {\n  return items.map(item => item.code);\n}'],
      ['fix', 'climate station measurements', 'mixing number and string in number[]', 'measurements must be numbers', '12', 'const measurements: number[] = [10, "12", 14];'],
      ['mission', 'generic search utility', 'generic constraints, keyof, arrays, typed return', 'world-knowledge records have code, type, and title', 'HER-1:Angkor', 'type RecordItem = { code: string; title: string; type: "heritage" | "science" };\nfunction findValue<T extends { code: string }, K extends keyof T>(items: T[], code: string, key: K): T[K] | undefined {\n  return items.find(item => item.code === code)?.[key];\n}\nconst records: RecordItem[] = [{ code: "HER-1", title: "Angkor", type: "heritage" }];\nconsole.log(`HER-1:${findValue(records, "HER-1", "title")}`);'],
    ],
  },
  {
    id: '08_practical_modeling',
    concept: 'objects',
    items: [
      ['write', 'capital lookup table', 'Record<CountryCode, string>', 'supplied country codes are JP and FR', 'Record<CountryCode, string>', 'type CountryCode = "JP" | "FR";\nconst capitals: ___BLANK___ = { JP: "Tokyo", FR: "Paris" };\nconsole.log(capitals.FR);', 'Paris'],
      ['write', 'draft country profile', 'Partial<CountryProfile>', 'draft profile may contain only some fields', 'Partial<CountryProfile>', 'type CountryProfile = { name: string; capital: string; region: string };\nconst draft: ___BLANK___ = { name: "Peru" };\nconsole.log(draft.name);', 'Peru'],
      ['write', 'public museum card', 'Pick<T, K>', 'public card includes only name and city', 'Pick<Museum, "name" | "city">', 'type Museum = { id: string; name: string; city: string; storageCode: string };\nconst card: ___BLANK___ = { name: "Gallery", city: "Madrid" };\nconsole.log(card.city);', 'Madrid'],
      ['read', 'safe public API response', 'Omit<T, K>', 'organization record hides internalNote', 'UN', 'type Org = { code: string; name: string; internalNote: string };\ntype PublicOrg = Omit<Org, "internalNote">;\nconst org: PublicOrg = { code: "UN", name: "United Nations" };\nconsole.log(org.code);'],
      ['read', 'success/error result', 'discriminated result type', 'climate-data API sample succeeds with value 18', '18', 'type Result = { ok: true; value: number } | { ok: false; error: string };\nconst result: Result = { ok: true, value: 18 };\nconsole.log(result.ok ? result.value : result.error);'],
      ['read', 'region code model', 'literal union alternative to enum', 'sample region code is EU', 'Europe', 'type RegionCode = "AF" | "AS" | "EU";\nconst labels: Record<RegionCode, string> = { AF: "Africa", AS: "Asia", EU: "Europe" };\nconst code: RegionCode = "EU";\nconsole.log(labels[code]);'],
      ['fix', 'global indicator response', 'using unknown without checking', 'unknown data must be checked before property access', 'if (typeof data === "object" && data !== null && "value" in data)', 'const data: unknown = { value: 12 };\nconsole.log(data.value);'],
      ['fix', 'country-code table', 'key not included in CountryCode union', 'CountryCode includes JP and FR only', 'add "US" to CountryCode or remove US key', 'type CountryCode = "JP" | "FR";\nconst capitals: Record<CountryCode, string> = { JP: "Tokyo", FR: "Paris", US: "Washington" };'],
      ['fix', 'public heritage-site summary', 'bad Pick/Omit usage', 'public summary should expose name and country only', 'Pick<Site, "name" | "country">', 'type Site = { name: string; country: string; secretNote: string };\ntype PublicSite = Pick<Site, "name" | "place">;'],
      ['mission', 'global indicator API model', 'Record, Partial, Pick/Omit, literal union, Result-style error handling', 'stable sample indicators are supplied, not live statistics', 'ok:life_expectancy', 'type IndicatorCode = "life_expectancy" | "literacy";\ntype Indicator = { code: IndicatorCode; label: string; internalSource: string; value?: number };\ntype PublicIndicator = Omit<Indicator, "internalSource">;\ntype Result = { ok: true; data: PublicIndicator } | { ok: false; error: string };\nconst labels: Record<IndicatorCode, string> = { life_expectancy: "Life expectancy", literacy: "Literacy" };\nconst draft: Partial<Indicator> = { code: "life_expectancy", label: labels.life_expectancy };\nconst result: Result = { ok: true, data: { code: draft.code!, label: draft.label! } };\nconsole.log(result.ok ? `ok:${result.data.code}` : result.error);'],
    ],
  },
];

const modeNames = { write: 'WRITE', read: 'READ', fix: 'FIX', mission: 'MISSION' };

function optionsFor(answer, mode) {
  const wrong = mode === 'fix'
    ? ['keep the broken code', 'change unrelated variable', 'remove the type']
    : ['different output', 'type error', 'undefined'];
  return [
    { id: answer, label: answer },
    ...wrong.map(label => ({ id: label, label })),
  ];
}

function makeQuestion(chapter, item, index) {
  const [mode, title, concept, fact, answer, code, output] = item;
  const order = index + 1;
  const id = `ts${chapter.id.slice(0, 2)}_${mode[0]}${String(order).padStart(2, '0')}`;
  const isWrite = mode === 'write';
  return {
    id,
    courseId: 'typescript',
    chapterId: chapter.id,
    order,
    mode,
    title,
    prompt: `${title} を題材にした TypeScript 問題です。事実: ${fact}. ${isWrite ? '下のコードを実行したとき EXPECTED OUTPUT と同じ結果になるよう、___BLANK___ を埋めてください。' : 'コードを読み、正しい答えを選んでください。'}`,
    code,
    expectedOutput: output || answer,
    answer,
    options: isWrite ? undefined : optionsFor(answer, mode),
    hint: `${concept} に注目します。事実として必要な値は問題文かコード内にすべて書かれています。`,
    explanation: {
      correctAnswer: answer,
      completedCode: isWrite ? code.replace('___BLANK___', answer) : code,
      executionSteps: [
        `1. テーマ事実: ${fact}.`,
        `2. TypeScript の中心概念は ${concept} です。`,
        `3. コード上で必要な値と型を確認すると、答えは ${answer} になります。`,
      ],
      commonMistakes: [
        { wrong: 'テーマ名だけで答える', reason: 'この PATH では TypeScript の型や処理の読み取りが答えを決めます。', correct: answer },
        { wrong: '型を無視して値を選ぶ', reason: 'TypeScript では値の種類が合わないとエラーになります。', correct: '型と値をセットで確認する' },
      ],
      programmingExplanation: `${concept} の練習です。コード内の型注釈、推論、分岐、または戻り値を順番に読んで答えを決めます。`,
      themeExplanation: fact,
      sourceRefs: [],
    },
    tsConceptIds: [chapter.concept],
    globalFactIds: [`gf_${id}`],
    difficulty: mode === 'mission' ? 'mission' : order <= 3 ? 'basic' : order <= 6 ? 'trace' : 'debug',
  };
}

export const TYPESCRIPT_QUESTIONS = chapters.flatMap(chapter => chapter.items.map((item, index) => makeQuestion(chapter, item, index)));

export const TYPESCRIPT_QUESTIONS_BY_ID = Object.fromEntries(TYPESCRIPT_QUESTIONS.map(question => [question.id, question]));

export const TYPESCRIPT_QUESTIONS_BY_CHAPTER = TYPESCRIPT_QUESTIONS.reduce((byChapter, question) => {
  byChapter[question.chapterId] ||= [];
  byChapter[question.chapterId].push(question);
  return byChapter;
}, {});

for (const questions of Object.values(TYPESCRIPT_QUESTIONS_BY_CHAPTER)) {
  questions.sort((a, b) => a.order - b.order);
}

export function getTypeScriptQuestionsForChapter(chapterId) {
  return TYPESCRIPT_QUESTIONS_BY_CHAPTER[chapterId] || [];
}

export const TYPESCRIPT_MODE_LABELS = modeNames;
