// C PATH questions. Mirrors src/data/typescript/questions.js structure.
// Themes are recorded in C_PATH_CHAPTERS_1_3_SPEC.md, C_PATH_CHAPTERS_4_6_SPEC.md,
// C_PATH_CHAPTERS_7_8_SPEC.md, and C_PATH_COURSE_RULES.md. Every world fact needed
// to answer a question is supplied inside its prompt/code/fact string — none rely
// on unstated trivia. FIX answers are the minimal corrected line; the program with
// that line applied is safe, defined C.
const chapters = [
  {
    id: '01_c_basics',
    concept: 'primitive-data-types',
    items: [
      ['write', 'United Nations founding year', 'int variable and printf with %d', 'the United Nations was established in 1945', '1945', '#include <stdio.h>\n\nint main(void) {\n    int year = ___BLANK___;\n    printf("The United Nations was established in %d.\\n", year);\n    return 0;\n}', 'The United Nations was established in 1945.'],
      ['write', 'Olympic rings count', 'int variable and printf', 'the Olympic symbol has five interlaced rings', '5', '#include <stdio.h>\n\nint main(void) {\n    int rings = ___BLANK___;\n    printf("Olympic rings: %d\\n", rings);\n    return 0;\n}', 'Olympic rings: 5'],
      ['write', 'World Health Organization abbreviation', 'char array string literal and printf with %s', 'World Health Organization is commonly abbreviated WHO', '"WHO"', '#include <stdio.h>\n\nint main(void) {\n    char abbreviation[] = ___BLANK___;\n    printf("Abbreviation: %s\\n", abbreviation);\n    return 0;\n}', 'Abbreviation: WHO'],
      ['read', 'Antarctic Treaty year', 'trace int and printf output', 'the Antarctic Treaty was signed in 1959', 'Antarctic Treaty: 1959', '#include <stdio.h>\n\nint main(void) {\n    int year = 1959;\n    printf("Antarctic Treaty: %d\\n", year);\n    return 0;\n}'],
      ['read', 'International Space Station first long-duration crew', 'int and simple arithmetic', 'Expedition 1, the first long-duration ISS crew, began in 2000', '100', '#include <stdio.h>\n\nint main(void) {\n    int beganYear = 2000;\n    int yearsAfter1900 = beganYear - 1900;\n    printf("%d\\n", yearsAfter1900);\n    return 0;\n}'],
      ['read', 'UNESCO name initials', 'char variables and printf with %c', 'UNESCO is an agency associated with education, science, and culture', 'UNE', '#include <stdio.h>\n\nint main(void) {\n    char first = \'U\';\n    char second = \'N\';\n    char third = \'E\';\n    printf("%c%c%c\\n", first, second, third);\n    return 0;\n}'],
      ['fix', 'Vatican City sample population display', 'matching printf format specifier to variable type', 'a sample record stores an illustrative Vatican City population value, not a live statistic', 'printf("Vatican City sample population: %.1f\\n", population);', '#include <stdio.h>\n\nint main(void) {\n    double population = 800.0;\n    printf("Vatican City sample population: %d\\n", population);\n    return 0;\n}'],
      ['fix', 'country-code label', 'a multi-character code needs a string, not a single char', 'sample country codes used in this course include "BR", "JP", and "FR"', 'char code[] = "BR";', '#include <stdio.h>\n\nint main(void) {\n    char code = "BR";\n    printf("%s\\n", code);\n    return 0;\n}'],
      ['fix', 'museum founding-year label', 'a variable must be initialized before it is printed', 'a sample museum record\'s founding year is 1793 (supplied sample data, not a live record)', 'int foundedYear = 1793;', '#include <stdio.h>\n\nint main(void) {\n    int foundedYear;\n    printf("Founded: %d\\n", foundedYear);\n    return 0;\n}'],
      ['mission', 'international organization summary card', 'int, char array, printf format specifiers combined', 'sample records: UN established in 1945, WHO came into being in 1948, UNESCO established in 1945', 'WHO:1948', '#include <stdio.h>\n\nint main(void) {\n    char name[] = "WHO";\n    int foundedYear = 1948;\n    printf("%s:%d\\n", name, foundedYear);\n    return 0;\n}'],
    ],
  },
  {
    id: '02_conditions_loops',
    concept: 'if-else-if-else',
    items: [
      ['write', 'hemisphere label', 'if / else producing a string label', 'a sample location is supplied as being in the Northern Hemisphere', 'isNorthern', '#include <stdio.h>\n\nint main(void) {\n    int isNorthern = 1;\n    if (___BLANK___) {\n        printf("Northern\\n");\n    } else {\n        printf("Southern\\n");\n    }\n    return 0;\n}', 'Northern'],
      ['write', 'UNESCO site category switch', 'switch over an integer category code', 'sample category codes: 1 = cultural, 2 = natural, 3 = mixed', 'printf("natural\\n");', '#include <stdio.h>\n\nint main(void) {\n    int category = 2;\n    switch (category) {\n        case 1:\n            printf("cultural\\n");\n            break;\n        case 2:\n            ___BLANK___\n            break;\n        case 3:\n            printf("mixed\\n");\n            break;\n    }\n    return 0;\n}', 'natural'],
      ['write', 'river length comparison', 'if / else comparison', 'sample table: River A = 6650 km, River B = 6400 km (illustrative supplied values)', 'River A', '#include <stdio.h>\n\nint main(void) {\n    int riverA = 6650;\n    int riverB = 6400;\n    if (riverA > riverB) {\n        printf("___BLANK___\\n");\n    } else {\n        printf("River B\\n");\n    }\n    return 0;\n}', 'River A'],
      ['read', 'time-zone offset counter', 'for loop and printf', 'sample UTC offsets (static, supplied): City A = 0, City B = 5, City C = 9', '0\n5\n9', '#include <stdio.h>\n\nint main(void) {\n    int offsets[3] = {0, 5, 9};\n    for (int i = 0; i < 3; i++) {\n        printf("%d\\n", offsets[i]);\n    }\n    return 0;\n}'],
      ['read', 'World Cup host list counter', 'while loop counter', 'sample historical host list (static, supplied): 1930 Uruguay, 1934 Italy, 1938 France', '1930\n1934\n1938\ncount=3', '#include <stdio.h>\n\nint main(void) {\n    int hostYears[3] = {1930, 1934, 1938};\n    int i = 0;\n    int count = 0;\n    while (i < 3) {\n        printf("%d\\n", hostYears[i]);\n        count++;\n        i++;\n    }\n    printf("count=%d\\n", count);\n    return 0;\n}'],
      ['read', 'climate-zone score accumulation', 'for loop with accumulation', 'sample climate-zone scores (static, illustrative): 2, 4, 6', '12', '#include <stdio.h>\n\nint main(void) {\n    int scores[3] = {2, 4, 6};\n    int total = 0;\n    for (int i = 0; i < 3; i++) {\n        total += scores[i];\n    }\n    printf("%d\\n", total);\n    return 0;\n}'],
      ['fix', 'seven-continent label list', 'a loop must stop before the last valid index, not at it', 'sample list of seven continent labels: Africa, Antarctica, Asia, Australia, Europe, North America, South America', 'for (int i = 0; i < 7; i++) {', '#include <stdio.h>\n\nint main(void) {\n    const char *continents[7] = {"Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"};\n    for (int i = 0; i <= 7; i++) {\n        printf("%s\\n", continents[i]);\n    }\n    return 0;\n}'],
      ['fix', 'transport mode label', 'a switch case needs break or it falls through to the next case', 'sample transport codes: 1 = rail, 2 = air, 3 = ship', 'break;', '#include <stdio.h>\n\nint main(void) {\n    int mode = 1;\n    switch (mode) {\n        case 1:\n            printf("rail\\n");\n        case 2:\n            printf("air\\n");\n        case 3:\n            printf("ship\\n");\n    }\n    return 0;\n}'],
      ['fix', 'museum ticket batches', 'a while loop must update its counter or it never ends', 'sample data: 3 ticket batches need to be processed', 'i++;', '#include <stdio.h>\n\nint main(void) {\n    int batches = 3;\n    int i = 0;\n    while (i < batches) {\n        printf("batch %d\\n", i);\n    }\n    return 0;\n}'],
      ['mission', 'world heritage category counter', 'array of category codes, for loop, if, accumulation', 'sample records (category codes 1=cultural, 2=natural, 3=mixed): site A=1, site B=2, site C=1, site D=3', 'cultural=2', '#include <stdio.h>\n\nint main(void) {\n    int categories[4] = {1, 2, 1, 3};\n    int culturalCount = 0;\n    for (int i = 0; i < 4; i++) {\n        if (categories[i] == 1) {\n            culturalCount++;\n        }\n    }\n    printf("cultural=%d\\n", culturalCount);\n    return 0;\n}'],
    ],
  },
  {
    id: '03_arrays_strings',
    concept: 'arrays',
    items: [
      ['write', 'Great Lakes array', 'const char * array and index access', 'the supplied Great Lakes are Superior, Michigan, Huron, Erie, Ontario', 'lakes[2]', '#include <stdio.h>\n\nint main(void) {\n    const char *lakes[5] = {"Superior", "Michigan", "Huron", "Erie", "Ontario"};\n    printf("%s\\n", ___BLANK___);\n    return 0;\n}', 'Huron'],
      ['write', 'official language labels', 'array of string literals and loop', 'sample country-language pairs: Brazil-Portuguese, Japan-Japanese, France-French', '{"Portuguese", "Japanese", "French"}', '#include <stdio.h>\n\nint main(void) {\n    const char *languages[3] = ___BLANK___;\n    for (int i = 0; i < 3; i++) {\n        printf("%s\\n", languages[i]);\n    }\n    return 0;\n}', 'Portuguese\nJapanese\nFrench'],
      ['write', 'country-code string comparison', 'strcmp for comparing strings', 'sample country codes: "JP", "BR", "FR"', 'strcmp(code, "JP") == 0', '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char code[] = "JP";\n    if (___BLANK___) {\n        printf("match\\n");\n    } else {\n        printf("no match\\n");\n    }\n    return 0;\n}', 'match'],
      ['read', 'alphabetized city labels', 'array index tracing', 'sample city labels from different continents (static, alphabetized, supplied): Cairo, Lima, Tokyo', 'Lima', '#include <stdio.h>\n\nint main(void) {\n    const char *cities[3] = {"Cairo", "Lima", "Tokyo"};\n    printf("%s\\n", cities[1]);\n    return 0;\n}'],
      ['read', 'UNESCO abbreviation length', 'strlen counts characters before the null terminator', 'the supplied string is "UNESCO"', '6', '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char name[] = "UNESCO";\n    printf("%zu\\n", strlen(name));\n    return 0;\n}'],
      ['read', 'route-code traversal', 'char array traversal until the null terminator', 'sample route code is "RAIL"', 'R\nA\nI\nL', '#include <stdio.h>\n\nint main(void) {\n    char route[] = "RAIL";\n    for (int i = 0; route[i] != \'\\0\'; i++) {\n        printf("%c\\n", route[i]);\n    }\n    return 0;\n}'],
      ['fix', 'language-code lookup', 'strings must be compared with strcmp, not ==', 'sample language codes: "EN", "FR"', 'if (strcmp(code, "EN") == 0) {', '#include <stdio.h>\n\nint main(void) {\n    char code[] = "EN";\n    if (code == "EN") {\n        printf("match\\n");\n    }\n    return 0;\n}'],
      ['fix', 'airport code char array', 'a char array used as a string needs room for the null terminator', 'sample airport code is HND', 'char code[4] = {\'H\', \'N\', \'D\', \'\\0\'};', '#include <stdio.h>\n\nint main(void) {\n    char code[3] = {\'H\', \'N\', \'D\'};\n    printf("%s\\n", code);\n    return 0;\n}'],
      ['fix', 'continent array', 'reading past the last valid index is out of bounds', 'sample list of seven continents, valid indexes 0-6', 'printf("%s\\n", continents[6]);', '#include <stdio.h>\n\nint main(void) {\n    const char *continents[7] = {"Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"};\n    printf("%s\\n", continents[7]);\n    return 0;\n}'],
      ['mission', 'country-code directory', 'arrays of strings, indexes, strcmp, loop, safe fallback', 'sample country-code records: "JP"-Japan, "BR"-Brazil, "FR"-France', 'Brazil', '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    const char *codes[3] = {"JP", "BR", "FR"};\n    const char *names[3] = {"Japan", "Brazil", "France"};\n    const char *target = "BR";\n    const char *result = "not found";\n    for (int i = 0; i < 3; i++) {\n        if (strcmp(codes[i], target) == 0) {\n            result = names[i];\n            break;\n        }\n    }\n    printf("%s\\n", result);\n    return 0;\n}'],
    ],
  },
  {
    id: '04_functions_scope',
    concept: 'functions',
    items: [
      ['write', 'population density helper', 'function with double parameters and double return', 'sample population = 900, sample area = 30 (illustrative supplied values)', 'population / area', '#include <stdio.h>\n\ndouble density(double population, double area) {\n    return ___BLANK___;\n}\n\nint main(void) {\n    printf("%.1f\\n", density(900.0, 30.0));\n    return 0;\n}', '30.0'],
      ['write', 'museum founding-year message', 'function parameter and printf in main', 'sample museum "Archive Museum" founded in 1870 (supplied sample data)', 'name', '#include <stdio.h>\n\nvoid printFoundingYear(const char *name, int year) {\n    printf("%s:%d\\n", ___BLANK___, year);\n}\n\nint main(void) {\n    printFoundingYear("Archive Museum", 1870);\n    return 0;\n}', 'Archive Museum:1870'],
      ['write', 'Celsius to Fahrenheit conversion', 'function return value and arithmetic', 'sample polar research station temperature is -10 degrees Celsius', 'celsius * 9.0 / 5.0 + 32.0', '#include <stdio.h>\n\ndouble toFahrenheit(double celsius) {\n    return ___BLANK___;\n}\n\nint main(void) {\n    printf("%.1f\\n", toFahrenheit(-10.0));\n    return 0;\n}', '14.0'],
      ['read', 'decade label function', 'integer division for a decade label', 'sample historical event year is 1969', '1960s', '#include <stdio.h>\n\nint decadeStart(int year) {\n    return (year / 10) * 10;\n}\n\nint main(void) {\n    printf("%ds\\n", decadeStart(1969));\n    return 0;\n}'],
      ['read', 'route-distance function', 'parameter passing by value', 'sample transport-route distance is 1200 kilometers', '1200 km', '#include <stdio.h>\n\nint routeDistanceKm(int distance) {\n    return distance;\n}\n\nint main(void) {\n    printf("%d km\\n", routeDistanceKm(1200));\n    return 0;\n}'],
      ['read', 'health-rate calculation', 'double return and local variable scope', 'sample cases = 25, sample population = 1000 (illustrative supplied values)', '2.5', '#include <stdio.h>\n\ndouble rate(double cases, double population) {\n    double percent = cases / population * 100.0;\n    return percent;\n}\n\nint main(void) {\n    printf("%.1f\\n", rate(25.0, 1000.0));\n    return 0;\n}'],
      ['fix', 'international organization age helper', 'a function used before its definition needs a prototype', 'sample organization founded in 1945; sample current year is 2025', 'int organizationAge(int founded, int currentYear);', '#include <stdio.h>\n\nint main(void) {\n    printf("%d\\n", organizationAge(1945, 2025));\n    return 0;\n}\n\nint organizationAge(int founded, int currentYear) {\n    return currentYear - founded;\n}'],
      ['fix', 'country label builder', 'a function must not return the address of a local array', 'sample country code "JP" should be turned into a label', 'return "JP";', '#include <stdio.h>\n\nchar *buildLabel(void) {\n    char label[3] = "JP";\n    return label;\n}\n\nint main(void) {\n    printf("%s\\n", buildLabel());\n    return 0;\n}'],
      ['fix', 'museum visitor sample data', 'averaging with int division truncates the decimal part', 'sample museum visitor counts: 10, 11, 10 over 3 sample days (illustrative)', 'double average = (double)totalVisitors / days;', '#include <stdio.h>\n\nint main(void) {\n    int totalVisitors = 31;\n    int days = 3;\n    int average = totalVisitors / days;\n    printf("%d\\n", average);\n    return 0;\n}'],
      ['mission', 'city comparison helper', 'function parameters, return value, local variables, if / else', 'sample city records (illustrative, supplied): Cityville population 900 area 30; Townburg population 500 area 50', 'Cityville', '#include <stdio.h>\n\nconst char *denserCity(const char *nameA, double popA, double areaA, const char *nameB, double popB, double areaB) {\n    double densityA = popA / areaA;\n    double densityB = popB / areaB;\n    if (densityA > densityB) {\n        return nameA;\n    } else {\n        return nameB;\n    }\n}\n\nint main(void) {\n    printf("%s\\n", denserCity("Cityville", 900.0, 30.0, "Townburg", 500.0, 50.0));\n    return 0;\n}'],
    ],
  },
  {
    id: '05_pointers',
    concept: 'pointers',
    items: [
      ['write', 'swap two route distances', 'pointer parameters and dereference', 'sample route distances: 1200 and 800 (illustrative)', '*a = *b;', '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    ___BLANK___\n    *b = temp;\n}\n\nint main(void) {\n    int routeA = 1200;\n    int routeB = 800;\n    swap(&routeA, &routeB);\n    printf("%d %d\\n", routeA, routeB);\n    return 0;\n}', '800 1200'],
      ['write', 'update museum visitor count', 'pass pointer to int and increment through it', 'sample museum visitor count starts at 50 and one new visitor arrives', '(*count)++;', '#include <stdio.h>\n\nvoid addVisitor(int *count) {\n    ___BLANK___\n}\n\nint main(void) {\n    int visitors = 50;\n    addVisitor(&visitors);\n    printf("%d\\n", visitors);\n    return 0;\n}', '51'],
      ['write', 'safe pointer check', 'if (ptr != NULL) before using a pointer', 'a sample optional translation label may be missing (NULL) for some languages', 'translation != NULL', '#include <stdio.h>\n\nint main(void) {\n    const char *translation = NULL;\n    if (___BLANK___) {\n        printf("%s\\n", translation);\n    } else {\n        printf("no translation\\n");\n    }\n    return 0;\n}', 'no translation'],
      ['read', 'address and dereference trace', 'int value, pointer to int, *ptr update', 'sample world heritage site count starts at 3', '4', '#include <stdio.h>\n\nint main(void) {\n    int siteCount = 3;\n    int *ptr = &siteCount;\n    *ptr = *ptr + 1;\n    printf("%d\\n", siteCount);\n    return 0;\n}'],
      ['read', 'pointer parameter modifies caller value', 'pass address to function to modify the caller value', 'sample conservation-area score starts at 7', 'before:7\nafter:10', '#include <stdio.h>\n\nvoid boostScore(int *score) {\n    *score += 3;\n}\n\nint main(void) {\n    int score = 7;\n    printf("before:%d\\n", score);\n    boostScore(&score);\n    printf("after:%d\\n", score);\n    return 0;\n}'],
      ['read', 'const pointer to string literal', 'const char * pointing to a string literal', 'sample organization abbreviation label is "WHO"', 'WHO', '#include <stdio.h>\n\nint main(void) {\n    const char *label = "WHO";\n    printf("%s\\n", label);\n    return 0;\n}'],
      ['fix', 'climate score update', 'a function expecting int * needs an address, not a value', 'sample climate score starts at 5 and should be updated through a function', 'updateScore(&score);', '#include <stdio.h>\n\nvoid updateScore(int *score) {\n    *score += 1;\n}\n\nint main(void) {\n    int score = 5;\n    updateScore(score);\n    printf("%d\\n", score);\n    return 0;\n}'],
      ['fix', 'missing language translation', 'a NULL pointer must be checked before dereferencing', 'a sample translation label may be NULL when unavailable', 'if (translation != NULL) printf("%s\\n", translation);', '#include <stdio.h>\n\nint main(void) {\n    const char *translation = NULL;\n    printf("%s\\n", translation);\n    return 0;\n}'],
      ['fix', 'route distance as double', 'a pointer type must match the type of the value it points to', 'sample route distance is stored as a double value, 1200.5', 'double *ptr = &distance;', '#include <stdio.h>\n\nint main(void) {\n    double distance = 1200.5;\n    int *ptr = &distance;\n    printf("%.1f\\n", *ptr);\n    return 0;\n}'],
      ['mission', 'safe record updater', 'pointer parameter, null check, dereference, helper function', 'sample global indicator record stores a literacy rate of 90 (illustrative supplied value)', '92', '#include <stdio.h>\n\nvoid updateIfValid(int *value, int amount) {\n    if (value != NULL) {\n        *value += amount;\n    }\n}\n\nint main(void) {\n    int literacyRate = 90;\n    updateIfValid(&literacyRate, 2);\n    updateIfValid(NULL, 5);\n    printf("%d\\n", literacyRate);\n    return 0;\n}'],
    ],
  },
  {
    id: '06_structs_enums',
    concept: 'structs',
    items: [
      ['write', 'country profile struct', 'struct with name, region, capital fields', 'sample country profile: name "France", region "Europe", capital "Paris" (supplied sample data)', '"Paris"', '#include <stdio.h>\n\nstruct CountryProfile {\n    char name[20];\n    char region[20];\n    char capital[20];\n};\n\nint main(void) {\n    struct CountryProfile france = {"France", "Europe", ___BLANK___};\n    printf("%s\\n", france.capital);\n    return 0;\n}', 'Paris'],
      ['write', 'heritage site struct', 'struct with year and category fields', 'sample heritage site record: year 1979, category 1 (cultural) (supplied sample data)', '1', '#include <stdio.h>\n\nstruct Site {\n    int year;\n    int category;\n};\n\nint main(void) {\n    struct Site chartres = {1979, ___BLANK___};\n    printf("%d %d\\n", chartres.year, chartres.category);\n    return 0;\n}', '1979 1'],
      ['write', 'transport enum', 'enum constants and switch', 'sample transport types: RAIL, AIR, SHIP', 'AIR', '#include <stdio.h>\n\nenum Transport { RAIL, AIR, SHIP };\n\nint main(void) {\n    enum Transport mode = ___BLANK___;\n    switch (mode) {\n        case RAIL:\n            printf("rail\\n");\n            break;\n        case AIR:\n            printf("air\\n");\n            break;\n        case SHIP:\n            printf("ship\\n");\n            break;\n    }\n    return 0;\n}', 'air'],
      ['read', 'scientist record', 'struct field access', 'sample scientist record: name "Curie", field "physics" (supplied sample data)', 'Curie:physics', '#include <stdio.h>\n\nstruct Scientist {\n    char name[20];\n    char field[20];\n};\n\nint main(void) {\n    struct Scientist curie = {"Curie", "physics"};\n    printf("%s:%s\\n", curie.name, curie.field);\n    return 0;\n}'],
      ['read', 'river record array', 'array of structs and loop', 'sample river/country records (supplied): Nile-Egypt, Amazon-Brazil', 'Nile:Egypt\nAmazon:Brazil', '#include <stdio.h>\n\nstruct River {\n    char name[20];\n    char country[20];\n};\n\nint main(void) {\n    struct River rivers[2] = {{"Nile", "Egypt"}, {"Amazon", "Brazil"}};\n    for (int i = 0; i < 2; i++) {\n        printf("%s:%s\\n", rivers[i].name, rivers[i].country);\n    }\n    return 0;\n}'],
      ['read', 'enum branch output', 'switch over enum', 'sample UNESCO category enum: CULTURAL, NATURAL, MIXED', 'mixed', '#include <stdio.h>\n\nenum Category { CULTURAL, NATURAL, MIXED };\n\nint main(void) {\n    enum Category category = MIXED;\n    switch (category) {\n        case CULTURAL:\n            printf("cultural\\n");\n            break;\n        case NATURAL:\n            printf("natural\\n");\n            break;\n        case MIXED:\n            printf("mixed\\n");\n            break;\n    }\n    return 0;\n}'],
      ['fix', 'museum record', 'struct member access must use the exact field name', 'sample museum record uses the field name founded_year', 'printf("%d\\n", archive.founded_year);', '#include <stdio.h>\n\nstruct Museum {\n    char name[20];\n    int founded_year;\n};\n\nint main(void) {\n    struct Museum archive = {"Archive Museum", 1870};\n    printf("%d\\n", archive.foundedYear);\n    return 0;\n}'],
      ['fix', 'treaty record', 'all required struct fields must be initialized before they are read', 'sample treaty record: name "Antarctic Treaty", signed year 1959', 'struct Treaty treaty = {"Antarctic Treaty", 1959};', '#include <stdio.h>\n\nstruct Treaty {\n    char name[30];\n    int signedYear;\n};\n\nint main(void) {\n    struct Treaty treaty;\n    treaty.name[0] = \'\\0\';\n    printf("%d\\n", treaty.signedYear);\n    return 0;\n}'],
      ['fix', 'transport record', 'a switch over an enum must cover every case it needs', 'sample transport types: RAIL, AIR, SHIP', 'case SHIP: printf("ship\\n"); break;', '#include <stdio.h>\n\nenum Transport { RAIL, AIR, SHIP };\n\nint main(void) {\n    enum Transport mode = SHIP;\n    switch (mode) {\n        case RAIL:\n            printf("rail\\n");\n            break;\n        case AIR:\n            printf("air\\n");\n            break;\n    }\n    return 0;\n}'],
      ['mission', 'world site registry', 'struct, enum, array of structs, loop, condition', 'sample heritage site records (supplied): site A CULTURAL, site B NATURAL, site C CULTURAL, site D MIXED', 'cultural=2', '#include <stdio.h>\n\nenum Category { CULTURAL, NATURAL, MIXED };\n\nstruct Site {\n    char name[20];\n    enum Category category;\n};\n\nint main(void) {\n    struct Site sites[4] = {\n        {"Site A", CULTURAL},\n        {"Site B", NATURAL},\n        {"Site C", CULTURAL},\n        {"Site D", MIXED}\n    };\n    int culturalCount = 0;\n    for (int i = 0; i < 4; i++) {\n        if (sites[i].category == CULTURAL) {\n            culturalCount++;\n        }\n    }\n    printf("cultural=%d\\n", culturalCount);\n    return 0;\n}'],
    ],
  },
  {
    id: '07_memory_safety',
    concept: 'arrays',
    items: [
      ['write', 'array length with sizeof', 'sizeof(array) / sizeof(array[0]) for an array in scope', 'sample continent labels: Africa, Antarctica, Asia, Australia, Europe, North America, South America', 'sizeof(continents) / sizeof(continents[0])', '#include <stdio.h>\n\nint main(void) {\n    const char *continents[7] = {"Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"};\n    int length = ___BLANK___;\n    printf("%d\\n", length);\n    return 0;\n}', '7'],
      ['write', 'initialize all yearly counts', 'array initialization', 'sample museum archive yearly counts (illustrative): 2021=12, 2022=15, 2023=9', '{12, 15, 9}', '#include <stdio.h>\n\nint main(void) {\n    int yearlyCounts[3] = ___BLANK___;\n    for (int i = 0; i < 3; i++) {\n        printf("%d\\n", yearlyCounts[i]);\n    }\n    return 0;\n}', '12\n15\n9'],
      ['write', 'safe copy of short country code', 'a bounded char array needs room for the null terminator', 'sample country code is "JP"', '3', '#include <stdio.h>\n\nint main(void) {\n    char buffer[___BLANK___];\n    buffer[0] = \'J\';\n    buffer[1] = \'P\';\n    buffer[2] = \'\\0\';\n    printf("%s\\n", buffer);\n    return 0;\n}', 'JP'],
      ['read', 'sizeof int array', 'sizeof total bytes vs element count', 'sample river length array holds 3 int values (static, illustrative)', '3', '#include <stdio.h>\n\nint main(void) {\n    int lengths[3] = {100, 200, 300};\n    int elementCount = sizeof(lengths) / sizeof(int);\n    printf("%d\\n", elementCount);\n    return 0;\n}'],
      ['read', 'initialized vs uninitialized values', 'tracing initialized array values', 'sample station temperature readings (static, supplied): -5, -10, -15', '-15', '#include <stdio.h>\n\nint main(void) {\n    int temperatures[3] = {-5, -10, -15};\n    printf("%d\\n", temperatures[2]);\n    return 0;\n}'],
      ['read', 'safe fallback for missing string', 'NULL pointer check before printf', 'a sample endangered-language translation label may be NULL', 'unavailable', '#include <stdio.h>\n\nint main(void) {\n    const char *label = NULL;\n    if (label != NULL) {\n        printf("%s\\n", label);\n    } else {\n        printf("unavailable\\n");\n    }\n    return 0;\n}'],
      ['fix', 'three-letter airport code', 'a string buffer needs room for the null terminator', 'sample airport code is "HND"', 'char code[4];', '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char code[3];\n    strcpy(code, "HND");\n    printf("%s\\n", code);\n    return 0;\n}'],
      ['fix', 'country-code list passed to function', 'an array parameter decays to a pointer, so sizeof cannot give its length inside the function', 'sample country-code list contains 3 codes: "JP", "BR", "FR"', 'void printCodes(const char *codes[], int length)', '#include <stdio.h>\n\nvoid printCodes(const char *codes[]) {\n    int length = sizeof(codes) / sizeof(codes[0]);\n    for (int i = 0; i < length; i++) {\n        printf("%s\\n", codes[i]);\n    }\n}\n\nint main(void) {\n    const char *codes[3] = {"JP", "BR", "FR"};\n    printCodes(codes);\n    return 0;\n}'],
      ['fix', 'optional museum website label', 'check for NULL before printing a possibly-missing string', 'a sample museum record may have no website label (NULL)', 'if (website != NULL) printf("%s\\n", website);', '#include <stdio.h>\n\nint main(void) {\n    const char *website = NULL;\n    printf("%s\\n", website);\n    return 0;\n}'],
      ['mission', 'safe country-code lookup', 'array length, string comparison, null-safe fallback, bounded access', 'sample country-code/name records: "JP"-Japan, "BR"-Brazil, "FR"-France', 'not found', '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    const char *codes[3] = {"JP", "BR", "FR"};\n    const char *names[3] = {"Japan", "Brazil", "France"};\n    int length = sizeof(codes) / sizeof(codes[0]);\n    const char *target = "DE";\n    const char *result = "not found";\n    for (int i = 0; i < length; i++) {\n        if (strcmp(codes[i], target) == 0) {\n            result = names[i];\n            break;\n        }\n    }\n    printf("%s\\n", result);\n    return 0;\n}'],
    ],
  },
  {
    id: '08_practical_processing',
    concept: 'structs',
    items: [
      ['write', 'struct-based capital lookup', 'struct array and lookup function', 'sample country-code/capital records: "JP"-Tokyo, "FR"-Paris', 'lookupCapital(capitals, 2, "FR")', '#include <stdio.h>\n#include <string.h>\n\nstruct Capital {\n    char code[3];\n    char city[20];\n};\n\nconst char *lookupCapital(struct Capital list[], int length, const char *code) {\n    for (int i = 0; i < length; i++) {\n        if (strcmp(list[i].code, code) == 0) {\n            return list[i].city;\n        }\n    }\n    return "unknown";\n}\n\nint main(void) {\n    struct Capital capitals[2] = {{"JP", "Tokyo"}, {"FR", "Paris"}};\n    printf("%s\\n", ___BLANK___);\n    return 0;\n}', 'Paris'],
      ['write', 'filter heritage sites by category', 'array of structs, enum, loop, output', 'sample heritage site records: site A CULTURAL, site B NATURAL, site C CULTURAL', 'CULTURAL', '#include <stdio.h>\n\nenum Category { CULTURAL, NATURAL };\n\nstruct Site {\n    char name[20];\n    enum Category category;\n};\n\nint main(void) {\n    struct Site sites[3] = {{"Site A", CULTURAL}, {"Site B", NATURAL}, {"Site C", CULTURAL}};\n    for (int i = 0; i < 3; i++) {\n        if (sites[i].category == ___BLANK___) {\n            printf("%s\\n", sites[i].name);\n        }\n    }\n    return 0;\n}', 'Site A\nSite C'],
      ['write', 'update indicator through pointer', 'pointer parameter and null check', 'sample global development indicator: literacy rate sample value 88 (illustrative, not a live statistic)', '*value += delta;', '#include <stdio.h>\n\nvoid updateIndicator(int *value, int delta) {\n    if (value != NULL) {\n        ___BLANK___\n    }\n}\n\nint main(void) {\n    int literacyRate = 88;\n    updateIndicator(&literacyRate, 1);\n    printf("%d\\n", literacyRate);\n    return 0;\n}', '89'],
      ['read', 'fixed-order output over struct array', 'loop over struct array in existing order', 'sample historical observatory records (static, supplied): Greenwich 1675, Paris 1667', 'Greenwich:1675\nParis:1667', '#include <stdio.h>\n\nstruct Observatory {\n    char name[20];\n    int founded;\n};\n\nint main(void) {\n    struct Observatory observatories[2] = {{"Greenwich", 1675}, {"Paris", 1667}};\n    for (int i = 0; i < 2; i++) {\n        printf("%s:%d\\n", observatories[i].name, observatories[i].founded);\n    }\n    return 0;\n}'],
      ['read', 'aggregation over records', 'sum values in a struct array', 'sample museum collection sample counts (illustrative): 120, 80, 200', '400', '#include <stdio.h>\n\nstruct Collection {\n    int itemCount;\n};\n\nint main(void) {\n    struct Collection collections[3] = {{120}, {80}, {200}};\n    int total = 0;\n    for (int i = 0; i < 3; i++) {\n        total += collections[i].itemCount;\n    }\n    printf("%d\\n", total);\n    return 0;\n}'],
      ['read', 'safe lookup result', 'function returning const char * with fallback', 'sample language-code directory: "EN"-English, "FR"-French', 'unknown', '#include <stdio.h>\n#include <string.h>\n\nconst char *lookupLanguage(const char *codes[], const char *names[], int length, const char *code) {\n    for (int i = 0; i < length; i++) {\n        if (strcmp(codes[i], code) == 0) {\n            return names[i];\n        }\n    }\n    return "unknown";\n}\n\nint main(void) {\n    const char *codes[2] = {"EN", "FR"};\n    const char *names[2] = {"English", "French"};\n    printf("%s\\n", lookupLanguage(codes, names, 2, "DE"));\n    return 0;\n}'],
      ['fix', 'transport station record', 'a pointer to a struct must use -> to access fields, not .', 'sample transport station record is accessed through a pointer', 'printf("%s\\n", ptr->name);', '#include <stdio.h>\n\nstruct Station {\n    char name[20];\n};\n\nint main(void) {\n    struct Station central = {"Central Station"};\n    struct Station *ptr = &central;\n    printf("%s\\n", ptr.name);\n    return 0;\n}'],
      ['fix', 'country directory', 'a not-found lookup must return a safe fallback, not an uninitialized pointer', 'sample country directory: "JP"-Japan, "FR"-France', 'const char *result = "not found";', '#include <stdio.h>\n#include <string.h>\n\nconst char *lookupCountry(const char *codes[], const char *names[], int length, const char *code) {\n    const char *result;\n    for (int i = 0; i < length; i++) {\n        if (strcmp(codes[i], code) == 0) {\n            result = names[i];\n        }\n    }\n    return result;\n}\n\nint main(void) {\n    const char *codes[2] = {"JP", "FR"};\n    const char *names[2] = {"Japan", "France"};\n    printf("%s\\n", lookupCountry(codes, names, 2, "DE"));\n    return 0;\n}'],
      ['fix', 'river basin sample records', 'a loop boundary must be < count, not <= count', 'sample river basin records: 3 entries with sample areas 100, 200, 150 (illustrative)', 'for (int i = 0; i < 3; i++) {', '#include <stdio.h>\n\nint main(void) {\n    int basinAreas[3] = {100, 200, 150};\n    int total = 0;\n    for (int i = 0; i <= 3; i++) {\n        total += basinAreas[i];\n    }\n    printf("%d\\n", total);\n    return 0;\n}'],
      ['mission', 'world data mini-processor', 'structs, arrays, enum, function, pointer-safe output, lookup fallback', 'sample heritage site records: site A CULTURAL, site B NATURAL, site C CULTURAL, site D MIXED', 'cultural=2', '#include <stdio.h>\n#include <string.h>\n\nenum Category { CULTURAL, NATURAL, MIXED };\n\nstruct Site {\n    char name[20];\n    enum Category category;\n};\n\nint countByCategory(struct Site sites[], int length, enum Category target) {\n    int count = 0;\n    for (int i = 0; i < length; i++) {\n        if (sites[i].category == target) {\n            count++;\n        }\n    }\n    return count;\n}\n\nint main(void) {\n    struct Site sites[4] = {\n        {"Site A", CULTURAL},\n        {"Site B", NATURAL},\n        {"Site C", CULTURAL},\n        {"Site D", MIXED}\n    };\n    printf("cultural=%d\\n", countByCategory(sites, 4, CULTURAL));\n    return 0;\n}'],
    ],
  },
];

const modeNames = { write: 'WRITE', read: 'READ', fix: 'FIX', mission: 'MISSION' };

function optionsFor(answer, mode) {
  const wrong = mode === 'fix'
    ? ['keep the broken code', 'change unrelated variable', 'remove the type']
    : ['different output', 'compile error', 'undefined behavior'];
  return [
    { id: answer, label: answer },
    ...wrong.map(label => ({ id: label, label })),
  ];
}

function makeQuestion(chapter, item, index) {
  const [mode, title, concept, fact, answer, code, output] = item;
  const order = index + 1;
  const id = `c${chapter.id.slice(0, 2)}_${mode[0]}${String(order).padStart(2, '0')}`;
  const isWrite = mode === 'write';
  return {
    id,
    courseId: 'c',
    chapterId: chapter.id,
    order,
    mode,
    title,
    prompt: `${title} を題材にした C 問題です。事実: ${fact}. ${isWrite ? '下のコードを実行したとき EXPECTED OUTPUT と同じ結果になるよう、___BLANK___ を埋めてください。' : 'コードを読み、正しい答えを選んでください。'}`,
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
        `2. C の中心概念は ${concept} です。`,
        `3. コード上で必要な値と型を確認すると、答えは ${answer} になります。`,
      ],
      commonMistakes: [
        { wrong: 'テーマ名だけで答える', reason: 'この PATH では C の構文や処理の読み取りが答えを決めます。', correct: answer },
        { wrong: '型やメモリを無視して値を選ぶ', reason: 'C では型やポインタの扱いが合わないと未定義動作になります。', correct: '型と値をセットで確認する' },
      ],
      programmingExplanation: `${concept} の練習です。コード内の宣言、分岐、または戻り値を順番に読んで答えを決めます。`,
      themeExplanation: fact,
      sourceRefs: [],
    },
    cConceptIds: [chapter.concept],
    globalFactIds: [`gf_${id}`],
    difficulty: mode === 'mission' ? 'mission' : order <= 3 ? 'basic' : order <= 6 ? 'trace' : 'debug',
  };
}

export const C_QUESTIONS = chapters.flatMap(chapter => chapter.items.map((item, index) => makeQuestion(chapter, item, index)));

export const C_QUESTIONS_BY_ID = Object.fromEntries(C_QUESTIONS.map(question => [question.id, question]));

export const C_QUESTIONS_BY_CHAPTER = C_QUESTIONS.reduce((byChapter, question) => {
  byChapter[question.chapterId] ||= [];
  byChapter[question.chapterId].push(question);
  return byChapter;
}, {});

for (const questions of Object.values(C_QUESTIONS_BY_CHAPTER)) {
  questions.sort((a, b) => a.order - b.order);
}

export function getCQuestionsForChapter(chapterId) {
  return C_QUESTIONS_BY_CHAPTER[chapterId] || [];
}

export const C_MODE_LABELS = modeNames;
