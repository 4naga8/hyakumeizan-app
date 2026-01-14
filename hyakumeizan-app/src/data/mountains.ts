import { Mountain } from '../types';

export const mountains: Mountain[] = [
  // 北海道
  { id: 1, name: '利尻山', nameKana: 'りしりざん', elevation: 1721, prefecture: ['北海道'], region: '北海道', lat: 45.1783, lng: 141.2428 },
  { id: 2, name: '羅臼岳', nameKana: 'らうすだけ', elevation: 1661, prefecture: ['北海道'], region: '北海道', lat: 44.0756, lng: 145.1233 },
  { id: 3, name: '斜里岳', nameKana: 'しゃりだけ', elevation: 1547, prefecture: ['北海道'], region: '北海道', lat: 43.7653, lng: 144.7172 },
  { id: 4, name: '阿寒岳', nameKana: 'あかんだけ', elevation: 1499, prefecture: ['北海道'], region: '北海道', lat: 43.3864, lng: 144.0131 },
  { id: 5, name: '大雪山', nameKana: 'たいせつざん', elevation: 2291, prefecture: ['北海道'], region: '北海道', lat: 43.6631, lng: 142.8547 },
  { id: 6, name: 'トムラウシ山', nameKana: 'とむらうしやま', elevation: 2141, prefecture: ['北海道'], region: '北海道', lat: 43.5264, lng: 142.8483 },
  { id: 7, name: '十勝岳', nameKana: 'とかちだけ', elevation: 2077, prefecture: ['北海道'], region: '北海道', lat: 43.4183, lng: 142.6867 },
  { id: 8, name: '幌尻岳', nameKana: 'ぽろしりだけ', elevation: 2052, prefecture: ['北海道'], region: '北海道', lat: 42.7536, lng: 142.7681 },
  { id: 9, name: '後方羊蹄山', nameKana: 'しりべしやま', elevation: 1898, prefecture: ['北海道'], region: '北海道', lat: 42.8267, lng: 140.8114 },

  // 東北
  { id: 10, name: '岩木山', nameKana: 'いわきさん', elevation: 1625, prefecture: ['青森県'], region: '東北', lat: 40.6564, lng: 140.3033 },
  { id: 11, name: '八甲田山', nameKana: 'はっこうださん', elevation: 1585, prefecture: ['青森県'], region: '東北', lat: 40.6594, lng: 140.8767 },
  { id: 12, name: '八幡平', nameKana: 'はちまんたい', elevation: 1613, prefecture: ['岩手県', '秋田県'], region: '東北', lat: 39.9575, lng: 140.8536 },
  { id: 13, name: '岩手山', nameKana: 'いわてさん', elevation: 2038, prefecture: ['岩手県'], region: '東北', lat: 39.8531, lng: 141.0006 },
  { id: 14, name: '早池峰山', nameKana: 'はやちねさん', elevation: 1917, prefecture: ['岩手県'], region: '東北', lat: 39.5578, lng: 141.4883 },
  { id: 15, name: '鳥海山', nameKana: 'ちょうかいさん', elevation: 2236, prefecture: ['山形県', '秋田県'], region: '東北', lat: 39.0978, lng: 140.0489 },
  { id: 16, name: '月山', nameKana: 'がっさん', elevation: 1984, prefecture: ['山形県'], region: '東北', lat: 38.5497, lng: 140.0250 },
  { id: 17, name: '朝日岳', nameKana: 'あさひだけ', elevation: 1871, prefecture: ['山形県', '新潟県'], region: '東北', lat: 38.2556, lng: 139.9272 },
  { id: 18, name: '蔵王山', nameKana: 'ざおうさん', elevation: 1841, prefecture: ['山形県', '宮城県'], region: '東北', lat: 38.1406, lng: 140.4408 },
  { id: 19, name: '飯豊山', nameKana: 'いいでさん', elevation: 2105, prefecture: ['山形県', '福島県', '新潟県'], region: '東北', lat: 37.8539, lng: 139.7044 },
  { id: 20, name: '吾妻山', nameKana: 'あづまやま', elevation: 2035, prefecture: ['山形県', '福島県'], region: '東北', lat: 37.7350, lng: 140.2436 },
  { id: 21, name: '安達太良山', nameKana: 'あだたらやま', elevation: 1700, prefecture: ['福島県'], region: '東北', lat: 37.6211, lng: 140.2878 },
  { id: 22, name: '磐梯山', nameKana: 'ばんだいさん', elevation: 1816, prefecture: ['福島県'], region: '東北', lat: 37.6017, lng: 140.0714 },
  { id: 23, name: '会津駒ヶ岳', nameKana: 'あいづこまがたけ', elevation: 2133, prefecture: ['福島県'], region: '東北', lat: 37.0333, lng: 139.3500 },

  // 北関東
  { id: 24, name: '那須岳', nameKana: 'なすだけ', elevation: 1915, prefecture: ['栃木県'], region: '北関東', lat: 37.1250, lng: 139.9633 },
  { id: 25, name: '燧ヶ岳', nameKana: 'ひうちがたけ', elevation: 2356, prefecture: ['福島県'], region: '北関東', lat: 36.9506, lng: 139.2856 },
  { id: 26, name: '至仏山', nameKana: 'しぶつさん', elevation: 2228, prefecture: ['群馬県'], region: '北関東', lat: 36.9033, lng: 139.2006 },
  { id: 27, name: '日光白根山', nameKana: 'にっこうしらねさん', elevation: 2578, prefecture: ['栃木県', '群馬県'], region: '北関東', lat: 36.7994, lng: 139.3764 },
  { id: 28, name: '皇海山', nameKana: 'すかいさん', elevation: 2144, prefecture: ['栃木県', '群馬県'], region: '北関東', lat: 36.7283, lng: 139.3417 },
  { id: 29, name: '男体山', nameKana: 'なんたいさん', elevation: 2486, prefecture: ['栃木県'], region: '北関東', lat: 36.7650, lng: 139.4906 },
  { id: 30, name: '武尊山', nameKana: 'ほたかやま', elevation: 2158, prefecture: ['群馬県'], region: '北関東', lat: 36.8383, lng: 139.1525 },
  { id: 31, name: '赤城山', nameKana: 'あかぎやま', elevation: 1828, prefecture: ['群馬県'], region: '北関東', lat: 36.5619, lng: 139.1944 },
  { id: 32, name: '草津白根山', nameKana: 'くさつしらねさん', elevation: 2160, prefecture: ['群馬県'], region: '北関東', lat: 36.6183, lng: 138.5361 },
  { id: 33, name: '筑波山', nameKana: 'つくばさん', elevation: 877, prefecture: ['茨城県'], region: '北関東', lat: 36.2253, lng: 140.1064 },

  // 上信越
  { id: 34, name: '四阿山', nameKana: 'あずまやさん', elevation: 2354, prefecture: ['群馬県', '長野県'], region: '上信越', lat: 36.5417, lng: 138.4131 },
  { id: 35, name: '浅間山', nameKana: 'あさまやま', elevation: 2568, prefecture: ['群馬県', '長野県'], region: '上信越', lat: 36.4067, lng: 138.5231 },
  { id: 36, name: '谷川岳', nameKana: 'たにがわだけ', elevation: 1977, prefecture: ['群馬県', '新潟県'], region: '上信越', lat: 36.8319, lng: 138.9294 },
  { id: 37, name: '巻機山', nameKana: 'まきはたやま', elevation: 1967, prefecture: ['群馬県', '新潟県'], region: '上信越', lat: 36.9400, lng: 138.9467 },
  { id: 38, name: '越後駒ヶ岳', nameKana: 'えちごこまがたけ', elevation: 2003, prefecture: ['新潟県'], region: '上信越', lat: 37.1167, lng: 139.1500 },
  { id: 39, name: '平ヶ岳', nameKana: 'ひらがたけ', elevation: 2141, prefecture: ['群馬県', '新潟県'], region: '上信越', lat: 36.9333, lng: 139.2500 },
  { id: 40, name: '苗場山', nameKana: 'なえばさん', elevation: 2145, prefecture: ['新潟県', '長野県'], region: '上信越', lat: 36.8472, lng: 138.6861 },
  { id: 41, name: '妙高山', nameKana: 'みょうこうさん', elevation: 2454, prefecture: ['新潟県'], region: '上信越', lat: 36.8914, lng: 138.1131 },
  { id: 42, name: '火打山', nameKana: 'ひうちやま', elevation: 2462, prefecture: ['新潟県'], region: '上信越', lat: 36.9233, lng: 138.0417 },
  { id: 43, name: '高妻山', nameKana: 'たかつまやま', elevation: 2353, prefecture: ['新潟県', '長野県'], region: '上信越', lat: 36.8033, lng: 138.0400 },
  { id: 44, name: '雨飾山', nameKana: 'あまかざりやま', elevation: 1963, prefecture: ['新潟県', '長野県'], region: '上信越', lat: 36.8950, lng: 137.9617 },

  // 北アルプス
  { id: 45, name: '白馬岳', nameKana: 'しろうまだけ', elevation: 2932, prefecture: ['長野県', '富山県'], region: '北アルプス', lat: 36.7583, lng: 137.7583 },
  { id: 46, name: '五竜岳', nameKana: 'ごりゅうだけ', elevation: 2814, prefecture: ['長野県', '富山県'], region: '北アルプス', lat: 36.7117, lng: 137.7500 },
  { id: 47, name: '鹿島槍ヶ岳', nameKana: 'かしまやりがたけ', elevation: 2889, prefecture: ['長野県', '富山県'], region: '北アルプス', lat: 36.6833, lng: 137.7417 },
  { id: 48, name: '剱岳', nameKana: 'つるぎだけ', elevation: 2999, prefecture: ['富山県'], region: '北アルプス', lat: 36.6233, lng: 137.6183 },
  { id: 49, name: '立山', nameKana: 'たてやま', elevation: 3015, prefecture: ['富山県'], region: '北アルプス', lat: 36.5733, lng: 137.6183 },
  { id: 50, name: '薬師岳', nameKana: 'やくしだけ', elevation: 2926, prefecture: ['富山県'], region: '北アルプス', lat: 36.4700, lng: 137.5450 },
  { id: 51, name: '黒部五郎岳', nameKana: 'くろべごろうだけ', elevation: 2840, prefecture: ['富山県', '岐阜県'], region: '北アルプス', lat: 36.4050, lng: 137.5417 },
  { id: 52, name: '黒岳', nameKana: 'くろだけ', elevation: 2986, prefecture: ['富山県', '岐阜県', '長野県'], region: '北アルプス', lat: 36.3967, lng: 137.6033 },
  { id: 53, name: '鷲羽岳', nameKana: 'わしばだけ', elevation: 2924, prefecture: ['富山県', '長野県'], region: '北アルプス', lat: 36.3917, lng: 137.6200 },
  { id: 54, name: '槍ヶ岳', nameKana: 'やりがたけ', elevation: 3180, prefecture: ['長野県', '岐阜県'], region: '北アルプス', lat: 36.3417, lng: 137.6467 },
  { id: 55, name: '穂高岳', nameKana: 'ほたかだけ', elevation: 3190, prefecture: ['長野県', '岐阜県'], region: '北アルプス', lat: 36.2883, lng: 137.6467 },
  { id: 56, name: '常念岳', nameKana: 'じょうねんだけ', elevation: 2857, prefecture: ['長野県'], region: '北アルプス', lat: 36.3233, lng: 137.7233 },
  { id: 57, name: '笠ヶ岳', nameKana: 'かさがたけ', elevation: 2898, prefecture: ['岐阜県'], region: '北アルプス', lat: 36.3133, lng: 137.5433 },
  { id: 58, name: '焼岳', nameKana: 'やけだけ', elevation: 2455, prefecture: ['長野県', '岐阜県'], region: '北アルプス', lat: 36.2267, lng: 137.5867 },
  { id: 59, name: '乗鞍岳', nameKana: 'のりくらだけ', elevation: 3026, prefecture: ['長野県', '岐阜県'], region: '北アルプス', lat: 36.1067, lng: 137.5533 },

  // 中央アルプス
  { id: 60, name: '御嶽山', nameKana: 'おんたけさん', elevation: 3067, prefecture: ['長野県', '岐阜県'], region: '中央アルプス', lat: 35.8933, lng: 137.4800 },
  { id: 61, name: '木曽駒ヶ岳', nameKana: 'きそこまがたけ', elevation: 2956, prefecture: ['長野県'], region: '中央アルプス', lat: 35.7883, lng: 137.8033 },
  { id: 62, name: '空木岳', nameKana: 'うつぎだけ', elevation: 2864, prefecture: ['長野県'], region: '中央アルプス', lat: 35.7283, lng: 137.8217 },
  { id: 63, name: '恵那山', nameKana: 'えなさん', elevation: 2191, prefecture: ['長野県', '岐阜県'], region: '中央アルプス', lat: 35.4350, lng: 137.5967 },

  // 南アルプス
  { id: 64, name: '甲斐駒ヶ岳', nameKana: 'かいこまがたけ', elevation: 2967, prefecture: ['山梨県', '長野県'], region: '南アルプス', lat: 35.7583, lng: 138.2367 },
  { id: 65, name: '仙丈ヶ岳', nameKana: 'せんじょうがたけ', elevation: 3033, prefecture: ['山梨県', '長野県'], region: '南アルプス', lat: 35.7167, lng: 138.1833 },
  { id: 66, name: '鳳凰山', nameKana: 'ほうおうざん', elevation: 2840, prefecture: ['山梨県'], region: '南アルプス', lat: 35.7300, lng: 138.2983 },
  { id: 67, name: '北岳', nameKana: 'きただけ', elevation: 3193, prefecture: ['山梨県'], region: '南アルプス', lat: 35.6750, lng: 138.2383 },
  { id: 68, name: '間ノ岳', nameKana: 'あいのだけ', elevation: 3190, prefecture: ['山梨県', '静岡県'], region: '南アルプス', lat: 35.6367, lng: 138.2283 },
  { id: 69, name: '塩見岳', nameKana: 'しおみだけ', elevation: 3047, prefecture: ['長野県', '静岡県'], region: '南アルプス', lat: 35.5783, lng: 138.1967 },
  { id: 70, name: '悪沢岳', nameKana: 'わるさわだけ', elevation: 3141, prefecture: ['静岡県'], region: '南アルプス', lat: 35.5283, lng: 138.1967 },
  { id: 71, name: '赤石岳', nameKana: 'あかいしだけ', elevation: 3121, prefecture: ['長野県', '静岡県'], region: '南アルプス', lat: 35.4617, lng: 138.1550 },
  { id: 72, name: '聖岳', nameKana: 'ひじりだけ', elevation: 3013, prefecture: ['長野県', '静岡県'], region: '南アルプス', lat: 35.4150, lng: 138.1317 },
  { id: 73, name: '光岳', nameKana: 'てかりだけ', elevation: 2592, prefecture: ['長野県', '静岡県'], region: '南アルプス', lat: 35.3400, lng: 138.0983 },

  // 八ヶ岳周辺
  { id: 74, name: '八ヶ岳', nameKana: 'やつがたけ', elevation: 2899, prefecture: ['山梨県', '長野県'], region: '八ヶ岳周辺', lat: 35.9717, lng: 138.3700 },
  { id: 75, name: '蓼科山', nameKana: 'たてしなやま', elevation: 2531, prefecture: ['長野県'], region: '八ヶ岳周辺', lat: 36.1033, lng: 138.2950 },
  { id: 76, name: '霧ヶ峰', nameKana: 'きりがみね', elevation: 1925, prefecture: ['長野県'], region: '八ヶ岳周辺', lat: 36.1083, lng: 138.1867 },
  { id: 77, name: '美ヶ原', nameKana: 'うつくしがはら', elevation: 2034, prefecture: ['長野県'], region: '八ヶ岳周辺', lat: 36.2250, lng: 138.1183 },

  // 関東周辺
  { id: 78, name: '両神山', nameKana: 'りょうかみさん', elevation: 1723, prefecture: ['埼玉県'], region: '関東周辺', lat: 36.0125, lng: 138.8792 },
  { id: 79, name: '甲武信ヶ岳', nameKana: 'こぶしがたけ', elevation: 2475, prefecture: ['埼玉県', '山梨県', '長野県'], region: '関東周辺', lat: 35.9350, lng: 138.7233 },
  { id: 80, name: '金峰山', nameKana: 'きんぷさん', elevation: 2599, prefecture: ['山梨県', '長野県'], region: '関東周辺', lat: 35.8733, lng: 138.6267 },
  { id: 81, name: '瑞牆山', nameKana: 'みずがきやま', elevation: 2230, prefecture: ['山梨県'], region: '関東周辺', lat: 35.8917, lng: 138.5900 },
  { id: 82, name: '雲取山', nameKana: 'くもとりやま', elevation: 2017, prefecture: ['東京都', '埼玉県', '山梨県'], region: '関東周辺', lat: 35.8556, lng: 138.9428 },
  { id: 83, name: '大菩薩嶺', nameKana: 'だいぼさつれい', elevation: 2057, prefecture: ['山梨県'], region: '関東周辺', lat: 35.7517, lng: 138.8517 },
  { id: 84, name: '丹沢山', nameKana: 'たんざわさん', elevation: 1567, prefecture: ['神奈川県'], region: '関東周辺', lat: 35.4747, lng: 139.1636 },
  { id: 85, name: '富士山', nameKana: 'ふじさん', elevation: 3776, prefecture: ['山梨県', '静岡県'], region: '関東周辺', lat: 35.3606, lng: 138.7274 },
  { id: 86, name: '天城山', nameKana: 'あまぎさん', elevation: 1406, prefecture: ['静岡県'], region: '関東周辺', lat: 34.8653, lng: 139.0086 },

  // 中部
  { id: 87, name: '白山', nameKana: 'はくさん', elevation: 2702, prefecture: ['石川県', '岐阜県'], region: '中部', lat: 36.1533, lng: 136.7717 },
  { id: 88, name: '荒島岳', nameKana: 'あらしまだけ', elevation: 1523, prefecture: ['福井県'], region: '中部', lat: 35.9444, lng: 136.5992 },

  // 近畿
  { id: 89, name: '伊吹山', nameKana: 'いぶきやま', elevation: 1377, prefecture: ['滋賀県', '岐阜県'], region: '近畿', lat: 35.4167, lng: 136.4069 },
  { id: 90, name: '大台ヶ原山', nameKana: 'おおだいがはらやま', elevation: 1695, prefecture: ['奈良県', '三重県'], region: '近畿', lat: 34.1811, lng: 136.1022 },
  { id: 91, name: '大峰山', nameKana: 'おおみねさん', elevation: 1915, prefecture: ['奈良県'], region: '近畿', lat: 34.1806, lng: 135.9083 },

  // 中国・四国
  { id: 92, name: '大山', nameKana: 'だいせん', elevation: 1729, prefecture: ['鳥取県'], region: '中国・四国', lat: 35.3711, lng: 133.5456 },
  { id: 93, name: '剣山', nameKana: 'つるぎさん', elevation: 1955, prefecture: ['徳島県'], region: '中国・四国', lat: 33.8533, lng: 134.0944 },
  { id: 94, name: '石鎚山', nameKana: 'いしづちさん', elevation: 1982, prefecture: ['愛媛県'], region: '中国・四国', lat: 33.7675, lng: 133.1142 },

  // 九州
  { id: 95, name: '九重山', nameKana: 'くじゅうさん', elevation: 1791, prefecture: ['大分県'], region: '九州', lat: 33.0858, lng: 131.2406 },
  { id: 96, name: '祖母山', nameKana: 'そぼさん', elevation: 1756, prefecture: ['大分県', '宮崎県'], region: '九州', lat: 32.8264, lng: 131.3506 },
  { id: 97, name: '阿蘇山', nameKana: 'あそさん', elevation: 1592, prefecture: ['熊本県'], region: '九州', lat: 32.8847, lng: 131.1039 },
  { id: 98, name: '霧島山', nameKana: 'きりしまやま', elevation: 1700, prefecture: ['宮崎県', '鹿児島県'], region: '九州', lat: 31.9342, lng: 130.8622 },
  { id: 99, name: '開聞岳', nameKana: 'かいもんだけ', elevation: 924, prefecture: ['鹿児島県'], region: '九州', lat: 31.1800, lng: 130.5306 },
  { id: 100, name: '宮之浦岳', nameKana: 'みやのうらだけ', elevation: 1936, prefecture: ['鹿児島県'], region: '九州', lat: 30.3350, lng: 130.5003 },
];

export const regions = [
  '北海道',
  '東北',
  '北関東',
  '上信越',
  '北アルプス',
  '中央アルプス',
  '南アルプス',
  '八ヶ岳周辺',
  '関東周辺',
  '中部',
  '近畿',
  '中国・四国',
  '九州',
] as const;
