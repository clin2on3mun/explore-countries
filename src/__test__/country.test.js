import countryReducer, { fetchCountries, showCountry } from '../redux/country/countrySlice';

const countryObj = {
  name: {
    common: 'Jordan',
    official: 'Hashemite Kingdom of Jordan',
    nativeName: {
      ara: {
        official: 'المملكة الأردنية الهاشمية',
        common: 'الأردن',
      },
    },
  },
  tld: [
    '.jo',
    'الاردن.',
  ],
  cca2: 'JO',
  ccn3: '400',
  cca3: 'JOR',
  cioc: 'JOR',
  independent: true,
  status: 'officially-assigned',
  unMember: true,
  currencies: {
    JOD: {
      name: 'Jordanian dinar',
      symbol: 'د.ا',
    },
  },
  idd: {
    root: '+9',
    suffixes: [
      '62',
    ],
  },
  capital: [
    'Amman',
  ],
  altSpellings: [
    'JO',
    'Hashemite Kingdom of Jordan',
    'al-Mamlakah al-Urdunīyah al-Hāshimīyah',
  ],
  region: 'Asia',
  subregion: 'Western Asia',
  languages: {
    ara: 'Arabic',
  },
  translations: {
    ara: {
      official: 'المملكة الأردنية الهاشمية',
      common: 'الأردن',
    },
    bre: {
      official: 'Rouantelezh hachemit Jordania',
      common: 'Jordania',
    },
    ces: {
      official: 'Jordánské hášimovské království',
      common: 'Jordánsko',
    },
    cym: {
      official: 'Hashemite Kingdom of Jordan',
      common: 'Jordan',
    },
    deu: {
      official: 'Haschemitisches Königreich Jordanien',
      common: 'Jordanien',
    },
    est: {
      official: 'Jordaania Hašimiidi Kuningriik',
      common: 'Jordaania',
    },
    fin: {
      official: 'Jordanian hašemiittinen kunigaskunta',
      common: 'Jordania',
    },
    fra: {
      official: 'Royaume hachémite de Jordanie',
      common: 'Jordanie',
    },
    hrv: {
      official: 'Hašemitske Kraljevine Jordan',
      common: 'Jordan',
    },
    hun: {
      official: 'Jordánia',
      common: 'Jordánia',
    },
    ita: {
      official: 'Regno hascemita di Giordania',
      common: 'Giordania',
    },
    jpn: {
      official: 'ヨルダン·ハシミテ王国',
      common: 'ヨルダン',
    },
    kor: {
      official: '요르단 하심 왕국',
      common: '요르단',
    },
    nld: {
      official: 'Hasjemitisch Koninkrijk Jordanië',
      common: 'Jordanië',
    },
    per: {
      official: 'پادشاهی اُردُن هاشمی',
      common: 'اردن',
    },
    pol: {
      official: 'Jordańskie Królestwo Haszymidzkie',
      common: 'Jordania',
    },
    por: {
      official: 'Reino Hachemita da Jordânia',
      common: 'Jordânia',
    },
    rus: {
      official: 'Иорданского Хашимитского Королевства',
      common: 'Иордания',
    },
    slk: {
      official: 'Jordánske hášimovské kráľovstvo',
      common: 'Jordánsko',
    },
    spa: {
      official: 'Reino Hachemita de Jordania',
      common: 'Jordania',
    },
    srp: {
      official: 'Хашемитска Краљевина Јордан',
      common: 'Јордан',
    },
    swe: {
      official: 'Hashimitiska kungadömet Jordanien',
      common: 'Jordanien',
    },
    tur: {
      official: 'Ürdün Hâşimi Krallığı',
      common: 'Ürdün',
    },
    urd: {
      official: 'ھاشمی مملکتِ اردن',
      common: 'اردن',
    },
    zho: {
      official: '约旦哈希姆王国',
      common: '约旦',
    },
  },
  latlng: [
    31,
    36,
  ],
  landlocked: false,
  borders: [
    'IRQ',
    'ISR',
    'PSE',
    'SAU',
    'SYR',
  ],
  area: 89342,
  demonyms: {
    eng: {
      f: 'Jordanian',
      m: 'Jordanian',
    },
    fra: {
      f: 'Jordanienne',
      m: 'Jordanien',
    },
  },
  flag: '🇯🇴',
  maps: {
    googleMaps: 'https://goo.gl/maps/ko1dzSDKg8Gsi9A98',
    openStreetMaps: 'https://www.openstreetmap.org/relation/184818',
  },
  population: 10203140,
  gini: {
    2010: 33.7,
  },
  fifa: 'JOR',
  car: {
    signs: [
      'HKJ',
    ],
    side: 'right',
  },
  timezones: [
    'UTC+03:00',
  ],
  continents: [
    'Asia',
  ],
  flags: {
    png: 'https://flagcdn.com/w320/jo.png',
    svg: 'https://flagcdn.com/jo.svg',
    alt: 'The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.',
  },
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/jo.png',
    svg: 'https://mainfacts.com/media/images/coats_of_arms/jo.svg',
  },
  startOfWeek: 'sunday',
  capitalInfo: {
    latlng: [
      31.95,
      35.93,
    ],
  },
  postalCode: {
    format: '#####',
    regex: '^(\\d{5})$',
  },
};

describe('countrySlice reducer', () => {
  it('should handle fetchCountries.pending', () => {
    const initialState = { isLoading: false };
    const nextState = countryReducer(initialState, fetchCountries.pending());
    expect(nextState.isLoading).toBe(true);
  });

  it('should handle fetchCountries.fulfilled', () => {
    const initialState = { isLoading: true, countries: [] };
    const countriesData = [countryObj];
    const nextState = countryReducer(initialState, fetchCountries.fulfilled(countriesData));
    expect(nextState.isLoading).toBe(false);
    expect(nextState.countries).toEqual(countriesData);
  });

  it('should handle showCountry.pending', () => {
    const initialState = { isLoading: false };
    const nextState = countryReducer(initialState, showCountry.pending());
    expect(nextState.isLoading).toBe(true);
  });

  it('should handle showCountry.fulfilled', () => {
    const initialState = { isLoading: true, countryInfo: [] };
    const countryInfoData = countryObj;
    const nextState = countryReducer(initialState, showCountry.fulfilled(countryInfoData));
    expect(nextState.isLoading).toBe(false);
    expect(nextState.countryInfo).toEqual(countryInfoData);
  });
});
