import pkg from 'lodash';

export interface Cat {
  cat: string;
  count: number;
  slug: string;
  altcount?: number;
  althref?: string;
}

export const slugify = (string: string): string => {
  return string
    .toUpperCase()
    .replace(/\*/g, '-')
    .replace(/ /g, '-')
    .replace(/А/g, 'a')
    .replace(/Б/g, 'b')
    .replace(/В/g, 'v')
    .replace(/Г/g, 'g')
    .replace(/Д/g, 'd')
    .replace(/Е/g, 'e')
    .replace(/Ж/g, 'zh')
    .replace(/З/g, 'z')
    .replace(/И/g, 'i')
    .replace(/Й/g, 'j')
    .replace(/К/g, 'k')
    .replace(/Л/g, 'l')
    .replace(/М/g, 'm')
    .replace(/Н/g, 'n')
    .replace(/О/g, 'o')
    .replace(/П/g, 'p')
    .replace(/Р/g, 'r')
    .replace(/С/g, 's')
    .replace(/Т/g, 't')
    .replace(/У/g, 'u')
    .replace(/Ф/g, 'f')
    .replace(/Х/g, 'h')
    .replace(/Ц/g, 'c')
    .replace(/Ч/g, 'ch')
    .replace(/Ш/g, 'sh')
    .replace(/Щ/g, 'sht')
    .replace(/Ь/g, '')
    .replace(/Ъ/g, 'a')
    .replace(/Ю/g, 'ju')
    .replace(/Я/g, 'ya');
};
const catsdata1 = [
  {
    cat: 'Разни',
    count: 11516,
  },
  {
    cat: 'Семейни',
    count: 8115,
  },
  {
    cat: 'Бисери',
    count: 7511,
  },
  {
    cat: 'Жени',
    count: 7400,
  },
  {
    cat: 'Мръсни',
    count: 3035,
  },
  {
    cat: 'Професионални',
    count: 2377,
  },
  {
    cat: 'Животни',
    count: 2319,
  },
  {
    cat: 'Блондинки',
    count: 2242,
  },
  {
    cat: 'Любими Герои',
    count: 2084,
  },
  {
    cat: 'Черен хумор',
    count: 1892,
  },
  {
    cat: 'Програмисти',
    count: 1861,
  },
  {
    cat: 'Политически',
    count: 1750,
  },
  {
    cat: 'Иванчо и Марийка',
    count: 1485,
  },
  {
    cat: 'Пиянски',
    count: 1410,
  },
  {
    cat: 'Лекари',
    count: 1074,
  },
  {
    cat: 'Полицаи',
    count: 934,
  },
  {
    cat: 'Други',
    count: 801,
  },
  {
    cat: 'Спортни',
    count: 768,
  },
  {
    cat: 'Проститутки',
    count: 762,
  },
  {
    cat: 'Студентски',
    count: 762,
  },
  {
    cat: 'Борци',
    count: 696,
  },
  {
    cat: 'Деца',
    count: 694,
  },
  {
    cat: 'Иванчо',
    count: 575,
  },
  {
    cat: 'Цигани',
    count: 529,
  },
  {
    cat: 'Младоженци',
    count: 481,
  },
  {
    cat: 'Фармацевти',
    count: 471,
  },
  {
    cat: 'Ученически',
    count: 468,
  },
  {
    cat: 'Монаси',
    count: 465,
  },
  {
    cat: 'Шофьори',
    count: 439,
  },
  {
    cat: 'Свалки',
    count: 434,
  },
  {
    cat: 'Тъщи',
    count: 431,
  },
  {
    cat: 'Глупави',
    count: 430,
  },
  {
    cat: 'Надписи',
    count: 421,
  },
  {
    cat: 'Радио Ереван',
    count: 401,
  },
  {
    cat: 'Доктори',
    count: 400,
  },
  {
    cat: 'Адвокати',
    count: 399,
  },
  {
    cat: 'Фейсбук',
    count: 397,
  },
  {
    cat: 'Евреи',
    count: 396,
  },
  {
    cat: 'Гинеколози',
    count: 387,
  },
  {
    cat: 'Съседи',
    count: 380,
  },
  {
    cat: 'Цигари',
    count: 378,
  },
  {
    cat: 'Америка',
    count: 364,
  },
  {
    cat: 'Мъже',
    count: 362,
  },
  {
    cat: 'Огледало',
    count: 361,
  },
  {
    cat: 'Щерки',
    count: 359,
  },
  {
    cat: 'Тоалетна',
    count: 355,
  },
  {
    cat: 'Умрели',
    count: 349,
  },
  {
    cat: 'Плажове',
    count: 342,
  },
  {
    cat: 'Родители',
    count: 341,
  },
  {
    cat: 'Професии',
    count: 341,
  },
  {
    cat: 'Младежи',
    count: 340,
  },
  {
    cat: 'Прасета',
    count: 340,
  },
  {
    cat: 'Принцове и принцеси',
    count: 335,
  },
  {
    cat: 'Вино',
    count: 331,
  },
  {
    cat: 'Подаръци',
    count: 329,
  },
  {
    cat: 'С*кс',
    count: 329,
  },
  {
    cat: 'Дядовци',
    count: 326,
  },
  {
    cat: 'Ракия',
    count: 322,
  },
  {
    cat: 'Рожденици',
    count: 319,
  },
  {
    cat: 'Тъпизми',
    count: 316,
  },
  {
    cat: 'Радио ереван',
    count: 316,
  },
  {
    cat: 'Катаджии',
    count: 314,
  },
  {
    cat: 'SMS',
    count: 314,
  },
  {
    cat: 'Военни',
    count: 313,
  },
  {
    cat: 'Кръчми',
    count: 311,
  },
  {
    cat: 'Дебели',
    count: 310,
  },
  {
    cat: 'Психиатрия',
    count: 306,
  },
  {
    cat: 'Празнични',
    count: 293,
  },
  {
    cat: 'Градове',
    count: 277,
  },
  {
    cat: 'Затворници',
    count: 276,
  },
  {
    cat: 'Влакове',
    count: 275,
  },
  {
    cat: 'Каква е разликата',
    count: 270,
  },
  {
    cat: 'Бебета',
    count: 268,
  },
  {
    cat: 'Филми',
    count: 267,
  },
  {
    cat: 'Лято',
    count: 266,
  },
  {
    cat: 'Сутиени',
    count: 265,
  },
  {
    cat: 'Гадории',
    count: 265,
  },
  {
    cat: 'Петък',
    count: 261,
  },
  {
    cat: 'Уиски',
    count: 261,
  },
  {
    cat: 'Секретарки',
    count: 257,
  },
  {
    cat: 'Математика',
    count: 255,
  },
  {
    cat: 'Любовник',
    count: 255,
  },
  {
    cat: 'Марийка',
    count: 254,
  },
  {
    cat: 'Купони',
    count: 250,
  },
  {
    cat: 'Плуване',
    count: 250,
  },
  {
    cat: 'Отслабване',
    count: 248,
  },
  {
    cat: 'Обувки',
    count: 244,
  },
  {
    cat: 'Командировки',
    count: 244,
  },
  {
    cat: 'Крави',
    count: 244,
  },
  {
    cat: 'Овчари',
    count: 243,
  },
  {
    cat: 'Наркомански',
    count: 240,
  },
  {
    cat: 'Директори',
    count: 240,
  },
  {
    cat: 'Професори',
    count: 239,
  },
  {
    cat: 'Кокошки',
    count: 234,
  },
  {
    cat: 'Слонове',
    count: 234,
  },
  {
    cat: 'Хляб',
    count: 233,
  },
  {
    cat: 'Чък Норис',
    count: 229,
  },
  {
    cat: 'Шоколад',
    count: 228,
  },
  {
    cat: 'Зима',
    count: 226,
  },
  {
    cat: 'Маймуни',
    count: 226,
  },
  {
    cat: 'Китай',
    count: 223,
  },
  {
    cat: 'Грозни',
    count: 219,
  },
  {
    cat: 'Любовница',
    count: 218,
  },
  {
    cat: 'Храна',
    count: 215,
  },
  {
    cat: 'Усмивки',
    count: 211,
  },
  {
    cat: 'Такси',
    count: 210,
  },
  {
    cat: 'Перничани',
    count: 209,
  },
  {
    cat: 'Русия',
    count: 205,
  },
  {
    cat: 'Татковци',
    count: 202,
  },
  {
    cat: 'Водка',
    count: 201,
  },
  {
    cat: 'Нова година',
    count: 200,
  },
  {
    cat: 'Капитани',
    count: 199,
  },
  {
    cat: 'Котки',
    count: 197,
  },
  {
    cat: 'Съдии',
    count: 197,
  },
  {
    cat: 'Маса',
    count: 197,
  },
  {
    cat: 'Готвачи',
    count: 195,
  },
  {
    cat: 'Планина',
    count: 195,
  },
  {
    cat: 'София',
    count: 194,
  },
  {
    cat: 'Супи',
    count: 188,
  },
  {
    cat: 'Чукчи',
    count: 184,
  },
  {
    cat: 'Франция',
    count: 181,
  },
  {
    cat: 'Луди',
    count: 181,
  },
  {
    cat: 'Хотели',
    count: 179,
  },
  {
    cat: 'България',
    count: 177,
  },
  {
    cat: 'Мутри',
    count: 177,
  },
];
export const catsdata: Cat[] = catsdata1.map((item) => {
  return {
    cat: item.cat,
    count: item.count,
    slug: slugify(item.cat),
  };
});

const { shuffle, chunk } = pkg;
export const formattedjoke = (joke: string): string => {
  return joke
    .replace(/\s+/g, ' ')
    .replace(/- А/g, '\n- А')
    .replace(/- Б/g, '\n- Б')
    .replace(/- В/g, '\n- В')
    .replace(/- Г/g, '\n- Г')
    .replace(/- Д/g, '\n- Д')
    .replace(/- Е/g, '\n- Е')
    .replace(/- Ж/g, '\n- Ж')
    .replace(/- З/g, '\n- З')
    .replace(/- И/g, '\n- И')
    .replace(/- Й/g, '\n- Й')
    .replace(/- К/g, '\n- К')
    .replace(/- Л/g, '\n- Л')
    .replace(/- М/g, '\n- М')
    .replace(/- Н/g, '\n- Н')
    .replace(/- О/g, '\n- О')
    .replace(/- П/g, '\n- П')
    .replace(/- Р/g, '\n- Р')
    .replace(/- С/g, '\n- С')
    .replace(/- Т/g, '\n- Т')
    .replace(/- У/g, '\n- У')
    .replace(/- Ф/g, '\n- Ф')
    .replace(/- Х/g, '\n- Х')
    .replace(/- Ц/g, '\n- Ц')
    .replace(/- Ч/g, '\n- Ч')
    .replace(/- Ш/g, '\n- Ш')
    .replace(/- Щ/g, '\n- Щ')
    .replace(/- Ю/g, '\n- Ю')
    .replace(/- Я/g, '\n- Я')
    .replace(/-А/g, '\n-А')
    .replace(/-Б/g, '\n-Б')
    .replace(/-В/g, '\n-В')
    .replace(/-Г/g, '\n-Г')
    .replace(/-Д/g, '\n-Д')
    .replace(/-Е/g, '\n-Е')
    .replace(/-Ж/g, '\n-Ж')
    .replace(/-З/g, '\n-З')
    .replace(/-И/g, '\n-И')
    .replace(/-Й/g, '\n-Й')
    .replace(/-К/g, '\n-К')
    .replace(/-Л/g, '\n-Л')
    .replace(/-М/g, '\n-М')
    .replace(/-Н/g, '\n-Н')
    .replace(/-О/g, '\n-О')
    .replace(/-П/g, '\n-П')
    .replace(/-Р/g, '\n-Р')
    .replace(/-С/g, '\n-С')
    .replace(/-Т/g, '\n-Т')
    .replace(/-У/g, '\n-У')
    .replace(/-Ф/g, '\n-Ф')
    .replace(/-Х/g, '\n-Х')
    .replace(/-Ц/g, '\n-Ц')
    .replace(/-Ч/g, '\n-Ч')
    .replace(/-Ш/g, '\n-Ш')
    .replace(/-Щ/g, '\n-Щ')
    .replace(/-Ю/g, '\n-Ю')
    .replace(/-Я/g, '\n-Я')
    .replace(/—/g, '\n-')
    .replace(/\?/g, '?\n');
};

export const stopwords = (string: string): string => {
  return string
    .replace(/[^a-z\u0400-\u04FF]/gi, ' ')
    .replace(/ а /gi, ' ')
    .replace(/ автентичен /gi, ' ')
    .replace(/ аз /gi, ' ')
    .replace(/ ако /gi, ' ')
    .replace(/ ала /gi, ' ')
    .replace(/ бе /gi, ' ')
    .replace(/ без /gi, ' ')
    .replace(/ беше /gi, ' ')
    .replace(/ би /gi, ' ')
    .replace(/ бивш /gi, ' ')
    .replace(/ бивша /gi, ' ')
    .replace(/ бившо /gi, ' ')
    .replace(/ бил /gi, ' ')
    .replace(/ била /gi, ' ')
    .replace(/ били /gi, ' ')
    .replace(/ било /gi, ' ')
    .replace(/ благодаря /gi, ' ')
    .replace(/ близо /gi, ' ')
    .replace(/ бъдат /gi, ' ')
    .replace(/ бъде /gi, ' ')
    .replace(/ бяха /gi, ' ')
    .replace(/ в /gi, ' ')
    .replace(/ вас /gi, ' ')
    .replace(/ ваш /gi, ' ')
    .replace(/ ваша /gi, ' ')
    .replace(/ вероятно /gi, ' ')
    .replace(/ вече /gi, ' ')
    .replace(/ взема /gi, ' ')
    .replace(/ ви /gi, ' ')
    .replace(/ вие /gi, ' ')
    .replace(/ винаги /gi, ' ')
    .replace(/ внимава /gi, ' ')
    .replace(/ време /gi, ' ')
    .replace(/ все /gi, ' ')
    .replace(/ всеки /gi, ' ')
    .replace(/ всички /gi, ' ')
    .replace(/ всичко /gi, ' ')
    .replace(/ всяка /gi, ' ')
    .replace(/ във /gi, ' ')
    .replace(/ въпреки /gi, ' ')
    .replace(/ върху /gi, ' ')
    .replace(/ г /gi, ' ')
    .replace(/ ги /gi, ' ')
    .replace(/ главен /gi, ' ')
    .replace(/ главна /gi, ' ')
    .replace(/ главно /gi, ' ')
    .replace(/ глас /gi, ' ')
    .replace(/ го /gi, ' ')
    .replace(/ година /gi, ' ')
    .replace(/ години /gi, ' ')
    .replace(/ годишен /gi, ' ')
    .replace(/ д /gi, ' ')
    .replace(/ да /gi, ' ')
    .replace(/ дали /gi, ' ')
    .replace(/ два /gi, ' ')
    .replace(/ двама /gi, ' ')
    .replace(/ двамата /gi, ' ')
    .replace(/ две /gi, ' ')
    .replace(/ двете /gi, ' ')
    .replace(/ ден /gi, ' ')
    .replace(/ днес /gi, ' ')
    .replace(/ дни /gi, ' ')
    .replace(/ до /gi, ' ')
    .replace(/ добра /gi, ' ')
    .replace(/ добре /gi, ' ')
    .replace(/ добро /gi, ' ')
    .replace(/ добър /gi, ' ')
    .replace(/ докато /gi, ' ')
    .replace(/ докога /gi, ' ')
    .replace(/ дори /gi, ' ')
    .replace(/ досега /gi, ' ')
    .replace(/ доста /gi, ' ')
    .replace(/ друг /gi, ' ')
    .replace(/ друга /gi, ' ')
    .replace(/ други /gi, ' ')
    .replace(/ е /gi, ' ')
    .replace(/ евтин /gi, ' ')
    .replace(/ едва /gi, ' ')
    .replace(/ един /gi, ' ')
    .replace(/ една /gi, ' ')
    .replace(/ еднаква /gi, ' ')
    .replace(/ еднакви /gi, ' ')
    .replace(/ еднакъв /gi, ' ')
    .replace(/ едно /gi, ' ')
    .replace(/ екип /gi, ' ')
    .replace(/ ето /gi, ' ')
    .replace(/ живот /gi, ' ')
    .replace(/ за /gi, ' ')
    .replace(/ забавям /gi, ' ')
    .replace(/ зад /gi, ' ')
    .replace(/ заедно /gi, ' ')
    .replace(/ заради /gi, ' ')
    .replace(/ засега /gi, ' ')
    .replace(/ заспал /gi, ' ')
    .replace(/ затова /gi, ' ')
    .replace(/ защо /gi, ' ')
    .replace(/ защото /gi, ' ')
    .replace(/ и /gi, ' ')
    .replace(/ из /gi, ' ')
    .replace(/ или /gi, ' ')
    .replace(/ им /gi, ' ')
    .replace(/ има /gi, ' ')
    .replace(/ имат /gi, ' ')
    .replace(/ иска /gi, ' ')
    .replace(/ й /gi, ' ')
    .replace(/ каза /gi, ' ')
    .replace(/ как /gi, ' ')
    .replace(/ каква /gi, ' ')
    .replace(/ какво /gi, ' ')
    .replace(/ както /gi, ' ')
    .replace(/ какъв /gi, ' ')
    .replace(/ като /gi, ' ')
    .replace(/ кога /gi, ' ')
    .replace(/ когато /gi, ' ')
    .replace(/ което /gi, ' ')
    .replace(/ които /gi, ' ')
    .replace(/ кой /gi, ' ')
    .replace(/ който /gi, ' ')
    .replace(/ колко /gi, ' ')
    .replace(/ която /gi, ' ')
    .replace(/ къде /gi, ' ')
    .replace(/ където /gi, ' ')
    .replace(/ към /gi, ' ')
    .replace(/ лесен /gi, ' ')
    .replace(/ лесно /gi, ' ')
    .replace(/ ли /gi, ' ')
    .replace(/ лош /gi, ' ')
    .replace(/ м /gi, ' ')
    .replace(/ май /gi, ' ')
    .replace(/ малко /gi, ' ')
    .replace(/ ме /gi, ' ')
    .replace(/ между /gi, ' ')
    .replace(/ мек /gi, ' ')
    .replace(/ мен /gi, ' ')
    .replace(/ месец /gi, ' ')
    .replace(/ ми /gi, ' ')
    .replace(/ много /gi, ' ')
    .replace(/ мнозина /gi, ' ')
    .replace(/ мога /gi, ' ')
    .replace(/ могат /gi, ' ')
    .replace(/ може /gi, ' ')
    .replace(/ мокър /gi, ' ')
    .replace(/ моля /gi, ' ')
    .replace(/ момента /gi, ' ')
    .replace(/ му /gi, ' ')
    .replace(/ н /gi, ' ')
    .replace(/ на /gi, ' ')
    .replace(/ над /gi, ' ')
    .replace(/ назад /gi, ' ')
    .replace(/ най /gi, ' ')
    .replace(/ направи /gi, ' ')
    .replace(/ напред /gi, ' ')
    .replace(/ например /gi, ' ')
    .replace(/ нас /gi, ' ')
    .replace(/ не /gi, ' ')
    .replace(/ него /gi, ' ')
    .replace(/ нещо /gi, ' ')
    .replace(/ нея /gi, ' ')
    .replace(/ ни /gi, ' ')
    .replace(/ ние /gi, ' ')
    .replace(/ никой /gi, ' ')
    .replace(/ нито /gi, ' ')
    .replace(/ нищо /gi, ' ')
    .replace(/ но /gi, ' ')
    .replace(/ нов /gi, ' ')
    .replace(/ нова /gi, ' ')
    .replace(/ нови /gi, ' ')
    .replace(/ новина /gi, ' ')
    .replace(/ някои /gi, ' ')
    .replace(/ някой /gi, ' ')
    .replace(/ няколко /gi, ' ')
    .replace(/ няма /gi, ' ')
    .replace(/ обаче /gi, ' ')
    .replace(/ около /gi, ' ')
    .replace(/ освен /gi, ' ')
    .replace(/ особено /gi, ' ')
    .replace(/ от /gi, ' ')
    .replace(/ отгоре /gi, ' ')
    .replace(/ отново /gi, ' ')
    .replace(/ още /gi, ' ')
    .replace(/ пак /gi, ' ')
    .replace(/ по /gi, ' ')
    .replace(/ повече /gi, ' ')
    .replace(/ повечето /gi, ' ')
    .replace(/ под /gi, ' ')
    .replace(/ поне /gi, ' ')
    .replace(/ поради /gi, ' ')
    .replace(/ после /gi, ' ')
    .replace(/ почти /gi, ' ')
    .replace(/ прави /gi, ' ')
    .replace(/ пред /gi, ' ')
    .replace(/ преди /gi, ' ')
    .replace(/ през /gi, ' ')
    .replace(/ при /gi, ' ')
    .replace(/ пък /gi, ' ')
    .replace(/ първата /gi, ' ')
    .replace(/ първи /gi, ' ')
    .replace(/ първо /gi, ' ')
    .replace(/ пъти /gi, ' ')
    .replace(/ равен /gi, ' ')
    .replace(/ равна /gi, ' ')
    .replace(/ с /gi, ' ')
    .replace(/ са /gi, ' ')
    .replace(/ сам /gi, ' ')
    .replace(/ само /gi, ' ')
    .replace(/ се /gi, ' ')
    .replace(/ сега /gi, ' ')
    .replace(/ си /gi, ' ')
    .replace(/ син /gi, ' ')
    .replace(/ скоро /gi, ' ')
    .replace(/ след /gi, ' ')
    .replace(/ следващ /gi, ' ')
    .replace(/ сме /gi, ' ')
    .replace(/ смях /gi, ' ')
    .replace(/ според /gi, ' ')
    .replace(/ сред /gi, ' ')
    .replace(/ срещу /gi, ' ')
    .replace(/ сте /gi, ' ')
    .replace(/ съм /gi, ' ')
    .replace(/ със /gi, ' ')
    .replace(/ също /gi, ' ')
    .replace(/ т /gi, ' ')
    .replace(/ т.н. /gi, ' ')
    .replace(/ тази /gi, ' ')
    .replace(/ така /gi, ' ')
    .replace(/ такива /gi, ' ')
    .replace(/ такъв /gi, ' ')
    .replace(/ там /gi, ' ')
    .replace(/ твой /gi, ' ')
    .replace(/ те /gi, ' ')
    .replace(/ тези /gi, ' ')
    .replace(/ ти /gi, ' ')
    .replace(/ то /gi, ' ')
    .replace(/ това /gi, ' ')
    .replace(/ тогава /gi, ' ')
    .replace(/ този /gi, ' ')
    .replace(/ той /gi, ' ')
    .replace(/ толкова /gi, ' ')
    .replace(/ точно /gi, ' ')
    .replace(/ три /gi, ' ')
    .replace(/ трябва /gi, ' ')
    .replace(/ тук /gi, ' ')
    .replace(/ тъй /gi, ' ')
    .replace(/ тя /gi, ' ')
    .replace(/ тях /gi, ' ')
    .replace(/ у /gi, ' ')
    .replace(/ утре /gi, ' ')
    .replace(/ харесва /gi, ' ')
    .replace(/ хиляди /gi, ' ')
    .replace(/ ч /gi, ' ')
    .replace(/ часа /gi, ' ')
    .replace(/ че /gi, ' ')
    .replace(/ често /gi, ' ')
    .replace(/ чрез /gi, ' ')
    .replace(/ ще /gi, ' ')
    .replace(/ щом /gi, ' ')
    .replace(/ юмрук /gi, ' ')
    .replace(/ я /gi, ' ')
    .replace(/ як /gi, ' ')
    .split(' ')
    .filter((word) => word.length > 1)
    .join(' ')
    .trim();
};

export const keywordsMap = (string: string): string => {
  const stwords = stopwords(string.toLowerCase())
    .split(' ')
    .filter((i) => i.length > 4);
  return chunk(shuffle(stwords).slice(0, 10), 3)
    .map((i) => i.join(' '))
    .join(',');
};

export const deslugify = (slug: string): string => {
  const item = catsdata.find((x) => x.slug === slug);
  return item ? item.cat : '';
};
// SEO keywords
