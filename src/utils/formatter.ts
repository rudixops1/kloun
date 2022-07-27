import pkg from 'lodash';

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
    .replace(/\?/g, '\n');
};

export const stopwords = (string: string): string => {
  return string
    .replace(/\n/g, ' ')
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
    .replace(/ як /gi, ' ');
};

export const keywordsMap = (string: string): string => {
  const stwords = stopwords(string.toLowerCase())
    .split(' ')
    .filter((i) => i.length > 5);
  return chunk(shuffle(stwords).slice(0, 10), 3)
    .map((i) => i.join(' '))
    .join(',');
};
