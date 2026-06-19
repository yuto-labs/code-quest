export const SQL_DATASETS = [
  {
    "id": "international_organizations",
    "columns": [
      "org_code",
      "name",
      "headquarters",
      "founded_year",
      "role"
    ],
    "rows": [
      [
        "UNESCO",
        "United Nations Educational, Scientific and Cultural Organization",
        "Paris",
        1945,
        "culture and education"
      ],
      [
        "WHO",
        "World Health Organization",
        "Geneva",
        1948,
        "health"
      ],
      [
        "FAO",
        "Food and Agriculture Organization",
        "Rome",
        1945,
        "food and agriculture"
      ],
      [
        "UNICEF",
        "United Nations Children’s Fund",
        "New York",
        1946,
        "children"
      ]
    ]
  },
  {
    "id": "nobel_categories",
    "columns": [
      "category",
      "ceremony_city",
      "started_year"
    ],
    "rows": [
      [
        "Physics",
        "Stockholm",
        1901
      ],
      [
        "Peace",
        "Oslo",
        1901
      ],
      [
        "Literature",
        "Stockholm",
        1901
      ]
    ]
  },
  {
    "id": "ocean_basins",
    "columns": [
      "name",
      "largest"
    ],
    "rows": [
      [
        "Pacific Ocean",
        true
      ],
      [
        "Atlantic Ocean",
        false
      ],
      [
        "Indian Ocean",
        false
      ],
      [
        "Southern Ocean",
        false
      ],
      [
        "Arctic Ocean",
        false
      ]
    ]
  },
  {
    "id": "heritage_sites",
    "columns": [
      "id",
      "country_id",
      "name",
      "category",
      "inscription_year"
    ],
    "rows": [
      [
        1,
        "JP",
        "Yakushima",
        "Natural",
        1993
      ],
      [
        2,
        "US",
        "Grand Canyon National Park",
        "Natural",
        1979
      ],
      [
        3,
        "FR",
        "Palace of Versailles",
        "Cultural",
        1979
      ],
      [
        4,
        "IN",
        "Taj Mahal",
        "Cultural",
        1983
      ]
    ]
  },
  {
    "id": "un_official_languages",
    "columns": [
      "language",
      "native_name",
      "family"
    ],
    "rows": [
      [
        "Arabic",
        "العربية",
        "Afro-Asiatic"
      ],
      [
        "Chinese",
        "中文",
        "Sino-Tibetan"
      ],
      [
        "English",
        "English",
        "Indo-European"
      ],
      [
        "French",
        "français",
        "Indo-European"
      ]
    ]
  },
  {
    "id": "space_missions",
    "columns": [
      "mission",
      "agency",
      "launch_year",
      "priority",
      "target"
    ],
    "rows": [
      [
        "Sputnik 1",
        "Soviet space program",
        1957,
        1,
        "Earth orbit"
      ],
      [
        "Apollo 11",
        "NASA",
        1969,
        2,
        "Moon"
      ],
      [
        "Voyager 1",
        "NASA",
        1977,
        3,
        "Outer Solar System"
      ],
      [
        "Hayabusa2",
        "JAXA",
        2014,
        4,
        "Ryugu"
      ]
    ]
  },
  {
    "id": "health_organizations",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "health_organizations alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "health_organizations beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "health_organizations gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "health_organizations delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "technology_milestones",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "technology_milestones alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "technology_milestones beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "technology_milestones gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "technology_milestones delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "international_days",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "international_days alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "international_days beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "international_days gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "international_days delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "nobel_awards",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "nobel_awards alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "nobel_awards beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "nobel_awards gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "nobel_awards delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "pandemics",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "pandemics alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "pandemics beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "pandemics gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "pandemics delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "religions",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "religions alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "religions beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "religions gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "religions delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "environmental_treaties",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "environmental_treaties alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "environmental_treaties beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "environmental_treaties gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "environmental_treaties delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "currencies",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "currencies alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "currencies beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "currencies gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "currencies delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "migration_routes",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "migration_routes alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "migration_routes beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "migration_routes gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "migration_routes delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "vaccines",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "vaccines alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "vaccines beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "vaccines gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "vaccines delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "historical_events",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "historical_events alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "historical_events beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "historical_events gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "historical_events delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "mountains",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "mountains alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "mountains beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "mountains gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "mountains delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "inventions",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "inventions alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "inventions beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "inventions gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "inventions delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "rivers",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "rivers alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "rivers beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "rivers gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "rivers delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "city_population",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "city_population alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "city_population beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "city_population gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "city_population delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "co2_records",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "co2_records alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "co2_records beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "co2_records gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "co2_records delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "olympic_hosts",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "olympic_hosts alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "olympic_hosts beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "olympic_hosts gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "olympic_hosts delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "treaty_records",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "treaty_records alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "treaty_records beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "treaty_records gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "treaty_records delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "disasters",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "disasters alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "disasters beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "disasters gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "disasters delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "temperature_records",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "temperature_records alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "temperature_records beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "temperature_records gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "temperature_records delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "energy_mix",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "energy_mix alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "energy_mix beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "energy_mix gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "energy_mix delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "protected_areas",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "protected_areas alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "protected_areas beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "protected_areas gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "protected_areas delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "languages",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "languages alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "languages beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "languages gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "languages delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "renewable_energy",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "renewable_energy alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "renewable_energy beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "renewable_energy gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "renewable_energy delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "population_records",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "population_records alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "population_records beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "population_records gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "population_records delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "global_events",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "global_events alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "global_events beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "global_events gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "global_events delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "migration_records",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "migration_records alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "migration_records beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "migration_records gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "migration_records delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "treaty_memberships",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "treaty_memberships alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "treaty_memberships beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "treaty_memberships gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "treaty_memberships delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "countries",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "countries alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "countries beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "countries gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "countries delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "laureates",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "laureates alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "laureates beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "laureates gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "laureates delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "diseases",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "diseases alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "diseases beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "diseases gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "diseases delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "pathogens",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "pathogens alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "pathogens beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "pathogens gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "pathogens delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "treaties",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "treaties alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "treaties beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "treaties gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "treaties delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "space_agencies",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "space_agencies alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "space_agencies beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "space_agencies gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "space_agencies delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "inventors",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "inventors alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "inventors beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "inventors gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "inventors delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "environment_records",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "environment_records alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "environment_records beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "environment_records gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "environment_records delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "regions",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "regions alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "regions beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "regions gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "regions delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "organization_memberships",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "organization_memberships alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "organization_memberships beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "organization_memberships gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "organization_memberships delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "international_programs",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "international_programs alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "international_programs beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "international_programs gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "international_programs delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "country_languages",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "country_languages alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "country_languages beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "country_languages gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "country_languages delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "heritage_country_links",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "heritage_country_links alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "heritage_country_links beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "heritage_country_links gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "heritage_country_links delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "organization_aliases",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "organization_aliases alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "organization_aliases beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "organization_aliases gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "organization_aliases delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  },
  {
    "id": "world_knowledge_records",
    "columns": [
      "name",
      "category",
      "year",
      "region",
      "value"
    ],
    "rows": [
      [
        "world_knowledge_records alpha",
        "history",
        1901,
        "Europe",
        12
      ],
      [
        "world_knowledge_records beta",
        "science",
        1945,
        "Americas",
        28
      ],
      [
        "world_knowledge_records gamma",
        "culture",
        1972,
        "Asia",
        null
      ],
      [
        "world_knowledge_records delta",
        "nature",
        2001,
        "Africa",
        41
      ]
    ]
  }
];
export const SQL_DATASETS_BY_ID = Object.fromEntries(SQL_DATASETS.map(dataset => [dataset.id, dataset]));
