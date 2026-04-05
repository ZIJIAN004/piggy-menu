const RECIPES = [
  // ===== 川菜 =====
  {
    id: 1, name: "麻婆豆腐", region: "川菜", emoji: "🌶️",
    difficulty: "简单", time: "20分钟", spicy: 3,
    ingredients: ["豆腐", "猪肉末", "豆瓣酱", "花椒", "大蒜", "姜", "葱", "豆豉"],
    steps: [
      "豆腐切小块，加盐焯水1分钟捞出",
      "锅热油，炒香郫县豆瓣酱和豆豉至出红油",
      "加入蒜末姜末炒香，下猪肉末炒散",
      "加热水或高汤，放入豆腐小火煮5分钟",
      "水淀粉勾薄芡，撒花椒粉和葱花即可"
    ],
    pigComment: "麻辣鲜香！小猪的心头好，配白米饭能吃三碗不停嘴！🐷",
    source: { platform: "抖音", likes: "86.2万", saves: "45.1万" },
    imagePrompt: "close-up mapo tofu in a rustic ceramic bowl, glistening fiery red chili oil pooling around trembling silky white tofu cubes, scattered minced pork, freshly ground Sichuan peppercorns releasing visible aroma, chopped scallion garnish, tiny bubbles in the sauce, 45-degree camera angle"
  },
  {
    id: 2, name: "宫保鸡丁", region: "川菜", emoji: "🥜",
    difficulty: "中等", time: "25分钟", spicy: 2,
    ingredients: ["鸡胸肉", "花生", "干辣椒", "黄瓜", "大蒜", "姜", "葱", "酱油", "醋", "糖"],
    steps: [
      "鸡肉切丁，加料酒、盐、淀粉腌15分钟",
      "调汁：酱油、醋、糖、淀粉、水混合",
      "花生炸酥捞出，干辣椒剪段",
      "热锅下油，炒香辣椒和花椒",
      "下鸡丁大火翻炒至熟",
      "倒入料汁快速翻炒，加花生和黄瓜即可"
    ],
    pigComment: "糊辣荔枝味！酸甜微辣，花生脆脆的，小猪每次都忍不住偷吃花生米！",
    source: { platform: "B站", likes: "52.3万", saves: "28.7万" },
    imagePrompt: "kung pao chicken top-down view, golden seared chicken cubes tossed with crunchy roasted peanuts and dozens of dried red chilies, glossy caramel-brown sauce coating each piece, diced cucumber and carrot accents, wok hei smoke rising, served in a dark clay plate"
  },
  {
    id: 3, name: "鱼香肉丝", region: "川菜", emoji: "🥩",
    difficulty: "中等", time: "25分钟", spicy: 2,
    ingredients: ["猪肉", "木耳", "胡萝卜", "青椒", "姜", "蒜", "葱", "豆瓣酱", "醋", "糖"],
    steps: [
      "猪肉切细丝，加盐和淀粉腌制",
      "木耳泡发切丝，胡萝卜和青椒切丝",
      "调鱼香汁：酱油、醋、糖、豆瓣酱、淀粉混合",
      "热油炒肉丝至变色盛出",
      "炒香姜蒜，下蔬菜翻炒",
      "倒入肉丝和鱼香汁大火翻炒均匀"
    ],
    pigComment: "根本没有鱼却有鱼香味！这是川菜最神奇的地方～小猪百吃不厌！",
    imagePrompt: "yu xiang rou si shredded pork, thin julienned pork strips with black wood ear mushrooms, bamboo shoots, and bright carrot shreds in a glossy sweet-sour-spicy garlic sauce, arranged elegantly on a white porcelain plate, drizzle of chili oil on top"
  },
  {
    id: 4, name: "回锅肉", region: "川菜", emoji: "🫕",
    difficulty: "中等", time: "40分钟", spicy: 2,
    ingredients: ["五花肉", "青椒", "豆瓣酱", "甜面酱", "大蒜", "姜", "葱", "料酒"],
    steps: [
      "五花肉冷水下锅，加姜葱料酒煮至筷子能插入",
      "捞出晾凉后切薄片",
      "热锅少油，下肉片煸炒至出油微卷曲",
      "加豆瓣酱、甜面酱炒出红油",
      "下青椒和蒜苗大火翻炒",
      "加生抽调味，翻炒均匀出锅"
    ],
    pigComment: "灵魂在于把肉煸出灯盏窝！肥而不腻，小猪光看颜色就开始流口水了～",
    imagePrompt: "hui guo rou twice-cooked pork belly, thin curled slices of caramelized pork with crispy edges, bright green leek segments and red fermented bean paste sauce, sizzling on a hot iron plate with visible oil splatter, wok-tossed action shot"
  },

  // ===== 粤菜 =====
  {
    id: 5, name: "清蒸鱼", region: "粤菜", emoji: "🐟",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["鱼", "姜", "葱", "生抽", "料酒", "香油"],
    steps: [
      "鱼两面划刀，抹盐和料酒腌10分钟",
      "姜片垫底，鱼放盘中，鱼身再铺姜丝",
      "大火蒸8-10分钟（根据鱼大小调整）",
      "倒掉多余蒸鱼水，铺上葱丝",
      "烧热油淋在葱丝上（听到滋滋声超爽）",
      "淋上蒸鱼豉油即可"
    ],
    pigComment: "粤菜的精髓！鲜甜嫩滑，浇热油那一刻小猪每次都要鼓掌～简单又高级！",
    imagePrompt: "cantonese steamed whole fish on an oval white platter, translucent glistening soy sauce drizzle, julienned ginger and spring onion threads on top, hot oil just poured creating tiny sizzling bubbles, delicate and elegant presentation, side angle with fish eye visible"
  },
  {
    id: 6, name: "糖醋排骨", region: "粤菜", emoji: "🍖",
    difficulty: "中等", time: "45分钟", spicy: 0,
    ingredients: ["排骨", "糖", "醋", "生抽", "料酒", "姜", "葱", "淀粉"],
    steps: [
      "排骨焯水去腥，捞出沥干",
      "排骨加淀粉拌匀，炸至金黄捞出",
      "锅留底油，加糖小火熬至焦糖色",
      "加醋、生抽、料酒和少量水",
      "下排骨翻炒至汤汁收浓包裹排骨",
      "撒白芝麻出锅"
    ],
    pigComment: "酸酸甜甜最好吃！小猪每次都忍不住把盘子舔干净（不是，是用勺子刮干净！）",
    imagePrompt: "tang cu pai gu sweet and sour spare ribs, glossy amber caramel glaze coating each rib, visible bone cross-sections, scattered white sesame seeds, sticky sauce dripping in slow motion, stacked on a round blue-rimmed plate, dramatic close-up"
  },
  {
    id: 7, name: "白切鸡", region: "粤菜", emoji: "🍗",
    difficulty: "简单", time: "35分钟", spicy: 0,
    ingredients: ["鸡", "姜", "葱", "盐", "香油"],
    steps: [
      "鸡洗净，锅中水烧开",
      "鸡放入，反复提出三次（让内外温度均衡）",
      "小火浸煮约20分钟至熟",
      "捞出立刻放入冰水中定型",
      "斩件装盘",
      "姜葱末加盐，淋热油，调蘸碟"
    ],
    pigComment: "皮爽肉滑！灵魂在于蘸碟！小猪的经验是姜葱碟要多放点盐才够香！",
    imagePrompt: "bai qie ji white cut chicken, perfectly poached skin-on chicken slices showing moist tender pink-white meat, arranged in overlapping crescent formation, small dipping bowl of jade-green scallion ginger sauce beside it, ice-crystal skin texture, minimalist cantonese plating"
  },

  // ===== 湘菜 =====
  {
    id: 8, name: "剁椒鱼头", region: "湘菜", emoji: "🌶️🐟",
    difficulty: "中等", time: "30分钟", spicy: 4,
    ingredients: ["鱼头", "剁椒", "姜", "蒜", "葱", "料酒", "生抽", "豆豉"],
    steps: [
      "鱼头对半劈开，加料酒和盐腌15分钟",
      "剁椒加蒜末、姜末、豆豉拌匀",
      "鱼头摆盘，铺上厚厚的剁椒",
      "大火蒸12-15分钟",
      "撒上葱花，烧热油淋上",
      "可再淋少许生抽提鲜"
    ],
    pigComment: "超级无敌辣！！小猪吃这道菜会边吃边哭边喊好吃！鱼头胶质满满，太爽了！",
    imagePrompt: "duo jiao yu tou steamed fish head smothered in a thick layer of bright red and yellow chopped pickled chilies, massive fish head filling the entire plate, billowing white steam clouds, visible fish cheek meat, fiery dramatic presentation on a large oval plate"
  },
  {
    id: 9, name: "农家小炒肉", region: "湘菜", emoji: "🥩🌶️",
    difficulty: "简单", time: "20分钟", spicy: 3,
    ingredients: ["猪肉", "青椒", "红椒", "大蒜", "豆豉", "生抽"],
    steps: [
      "猪肉带皮切薄片，青红椒切滚刀块",
      "热锅不放油，直接下猪肉煸炒出油",
      "加豆豉和蒜片炒香",
      "下青红椒大火翻炒",
      "加生抽、少量糖调味",
      "大火爆炒均匀出锅"
    ],
    pigComment: "下饭神器！辣香鲜！关键是猪皮要煸出油，嚼起来QQ的！小猪超爱吃肥肉的～",
    imagePrompt: "xiao chao rou hunan stir-fried pork with peppers, thin sliced pork belly with crispy caramelized edges tossed with charred green and red peppers, smoky wok hei aroma visible, glistening garlic and fermented black bean bits, served in a cast iron wok"
  },

  // ===== 京菜 =====
  {
    id: 10, name: "炸酱面", region: "京菜", emoji: "🍜",
    difficulty: "中等", time: "35分钟", spicy: 0,
    ingredients: ["猪肉末", "黄豆酱", "甜面酱", "面条", "黄瓜", "豆芽", "大蒜", "姜", "葱"],
    steps: [
      "肉末加姜末炒散至变色",
      "加黄豆酱和甜面酱（3:1比例）小火慢炒",
      "加少量水，小火熬至酱香浓郁",
      "面条煮熟，过冷水沥干",
      "黄瓜切丝，豆芽焯水",
      "面条盛碗，铺菜码，浇炸酱，拌匀"
    ],
    pigComment: "北京人的灵魂！酱要慢慢熬才香！小猪吃炸酱面一定要放大量黄瓜丝，爽口！",
    imagePrompt: "zha jiang mian Beijing noodles in a deep ceramic bowl, thick dark fermented soybean paste sauce pooled in the center of hand-pulled noodles, surrounded by colorful toppings: julienned cucumber, white radish shreds, blanched bean sprouts, edamame, arranged like a clock face, chopsticks lifting noodles"
  },
  {
    id: 11, name: "醋溜白菜", region: "京菜", emoji: "🥬",
    difficulty: "简单", time: "10分钟", spicy: 1,
    ingredients: ["白菜", "醋", "花椒", "干辣椒", "生抽", "糖", "大蒜"],
    steps: [
      "白菜手撕成片（手撕比切好吃）",
      "热锅多放油，下花椒和干辣椒炸香",
      "捞出花椒辣椒，下蒜片爆香",
      "大火下白菜快速翻炒",
      "沿锅边淋醋（醋要多！），加生抽和糖",
      "大火收汁出锅，全程不超过3分钟"
    ],
    pigComment: "简单到极致的美味！醋要大胆放！小猪最喜欢锅边那一下嗞的声音，太解压了！",
    imagePrompt: "cu liu bai cai hot and sour cabbage, crisp translucent napa cabbage chunks in a tangy glossy vinegar sauce with dried red chili flakes and Sichuan peppercorns, glistening oil droplets on surface, served in a simple white ceramic dish, fresh and appetizing"
  },

  // ===== 东北菜 =====
  {
    id: 12, name: "地三鲜", region: "东北菜", emoji: "🍆🥔",
    difficulty: "简单", time: "25分钟", spicy: 0,
    ingredients: ["土豆", "茄子", "青椒", "大蒜", "生抽", "淀粉"],
    steps: [
      "土豆和茄子切滚刀块，青椒切片",
      "土豆炸至金黄捞出",
      "茄子炸至软烂捞出",
      "锅留底油，爆香蒜末",
      "下所有食材翻炒",
      "加生抽、糖、少量水勾薄芡即可"
    ],
    pigComment: "纯素三剑客！油炸过的土豆和茄子配青椒，太香了！东北菜就是豪爽！",
    imagePrompt: "di san xian three treasures stir fry, golden deep-fried potato wedges, soft purple eggplant chunks with velvety texture, vivid green pepper triangles, all coated in a rich savory garlic soy glaze, colorful tricolor composition on a round earthenware plate"
  },
  {
    id: 13, name: "猪肉炖粉条", region: "东北菜", emoji: "🍲",
    difficulty: "简单", time: "60分钟", spicy: 0,
    ingredients: ["猪肉", "粉条", "白菜", "生抽", "大酱", "大蒜", "姜", "葱", "八角"],
    steps: [
      "猪肉切块，冷水焯水去腥",
      "热锅炒糖色，下猪肉翻炒上色",
      "加生抽、大酱、八角、姜、蒜和热水",
      "大火烧开转小火炖40分钟",
      "粉条提前泡软，白菜切大块",
      "下粉条和白菜继续炖15分钟至软烂"
    ],
    pigComment: "冬天的灵魂！热乎乎的一锅端上来，粉条吸满汤汁，小猪能连汤都喝光！",
    imagePrompt: "zhu rou dun fen tiao northeast braised pork with glass noodles, bubbling clay pot filled with tender pork chunks, translucent vermicelli absorbing rich brown broth, soft napa cabbage leaves, hearty winter comfort food, thick soupy texture, rustic ceramic pot with lid on side"
  },

  // ===== 家常菜 =====
  {
    id: 14, name: "西红柿炒鸡蛋", region: "家常", emoji: "🍅🥚",
    difficulty: "简单", time: "10分钟", spicy: 0,
    ingredients: ["西红柿", "鸡蛋", "糖", "盐", "葱"],
    steps: [
      "鸡蛋打散加少许盐，西红柿切块",
      "热锅多放油，倒入蛋液炒成大块盛出",
      "锅留底油，下葱花爆香",
      "下西红柿翻炒出汁",
      "加糖（这是灵魂！）和盐调味",
      "倒入炒好的鸡蛋翻炒均匀出锅"
    ],
    pigComment: "中华第一家常菜！谁说简单？加了糖的才是正解！小猪觉得这道菜能治愈一切烦恼～",
    source: { platform: "小红书", likes: "127.5万", saves: "89.3万" },
    imagePrompt: "xi hong shi chao ji dan tomato scrambled eggs, fluffy golden egg curds nestled among juicy burst red tomato wedges, natural tomato juice creating a vibrant red-orange sauce, sprinkled with chopped scallion, the most iconic Chinese home-cooked dish, served in a shallow white plate"
  },
  {
    id: 15, name: "酸辣土豆丝", region: "家常", emoji: "🥔",
    difficulty: "简单", time: "15分钟", spicy: 2,
    ingredients: ["土豆", "醋", "干辣椒", "花椒", "大蒜", "盐"],
    steps: [
      "土豆切细丝，泡水去淀粉，沥干",
      "热锅多油，下花椒和干辣椒炸香",
      "下蒜片爆香",
      "大火下土豆丝快速翻炒",
      "沿锅边淋醋，加盐调味",
      "土豆丝断生即出锅（保持脆感）"
    ],
    pigComment: "开胃神器！关键是要保持脆感，炒过头就不好吃了！小猪最爱配粥吃！",
    source: { platform: "抖音", likes: "156.3万", saves: "72.1万" },
    imagePrompt: "suan la tu dou si shredded potato stir fry, a mountain of ultra-thin crispy matchstick potato strips glistening with vinegar and chili oil, scattered dried red chili segments and Sichuan peppercorns, crunchy texture visible, served on a blue and white porcelain plate"
  },
  {
    id: 16, name: "蛋炒饭", region: "家常", emoji: "🍳🍚",
    difficulty: "简单", time: "10分钟", spicy: 0,
    ingredients: ["鸡蛋", "米饭", "葱", "盐", "生抽"],
    steps: [
      "米饭最好用隔夜冷饭（更松散好炒）",
      "鸡蛋打散，葱切葱花",
      "热锅多放油，倒蛋液快速翻炒成小块",
      "下米饭，大火翻炒，用锅铲压散",
      "加盐和生抽调味",
      "最后撒葱花翻炒均匀"
    ],
    pigComment: "深夜食堂的神！隔夜饭才是王道！小猪版秘诀：油要多，火要大，炒出来才有锅气！",
    imagePrompt: "dan chao fan egg fried rice, each grain of golden rice individually coated with egg, perfectly separated and fluffy, dotted with bright green scallion bits, wok hei smoke curling up, served mounded in a traditional round-bottomed bowl then flipped onto a plate"
  },
  {
    id: 17, name: "红烧肉", region: "家常", emoji: "🍖",
    difficulty: "中等", time: "90分钟", spicy: 0,
    ingredients: ["五花肉", "生抽", "老抽", "糖", "料酒", "姜", "葱", "八角", "桂皮"],
    steps: [
      "五花肉切3cm方块，冷水焯水",
      "热锅少油，下糖小火熬焦糖色",
      "下肉块翻炒上糖色",
      "加生抽、老抽、料酒、香料",
      "加热水没过肉，大火烧开",
      "转小火炖1小时，最后大火收汁"
    ],
    pigComment: "传世经典！小猪觉得红烧肉是世界上最幸福的味道！肥而不腻，入口即化！",
    source: { platform: "B站", likes: "210.8万", saves: "95.6万" },
    imagePrompt: "hong shao rou red braised pork belly, perfect cubes of jiggly layered pork belly with caramelized mahogany glaze, alternating fat and lean layers visible in cross section, rich collagen-thick sauce pooling beneath, star anise and cinnamon stick garnish, luxurious shine"
  },
  {
    id: 18, name: "番茄牛腩", region: "家常", emoji: "🍅🥩",
    difficulty: "中等", time: "90分钟", spicy: 0,
    ingredients: ["牛肉", "西红柿", "土豆", "洋葱", "大蒜", "生抽", "番茄酱"],
    steps: [
      "牛腩切块，冷水焯水，洗净",
      "洋葱和蒜爆香，下番茄酱炒出酱香",
      "下牛腩翻炒，加生抽上色",
      "加西红柿块翻炒出汁",
      "加热水没过，大火烧开转小火炖1小时",
      "下土豆块继续炖20分钟至软烂"
    ],
    pigComment: "酸甜浓郁超下饭！土豆软烂吸满汤汁！小猪连汤都要拌饭吃，一点不剩！",
    imagePrompt: "fan qie dun niu nan tomato braised beef brisket, thick rich crimson tomato broth with fall-apart tender beef chunks and soft golden potato wedges, herbs floating on surface, served in a deep earthenware casserole dish, hearty and warming, side view showing depth of stew"
  },
  {
    id: 19, name: "蒸鸡蛋羹", region: "家常", emoji: "🥚",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["鸡蛋", "生抽", "香油", "葱"],
    steps: [
      "鸡蛋打散，加1.5倍温水（约40°C）",
      "加少量盐，搅拌均匀",
      "用细筛过滤蛋液（去气泡，更嫩滑）",
      "盖上保鲜膜或盖子",
      "水开后中小火蒸12分钟",
      "出锅淋生抽和香油，撒葱花"
    ],
    pigComment: "嫩滑到可以颤动！温水是秘诀！小猪生病没胃口的时候最想吃这个，太温柔了～",
    imagePrompt: "zheng ji dan steamed egg custard, mirror-smooth silky golden custard surface in a white ceramic bowl, delicate drizzle of dark soy sauce and amber sesame oil creating artistic swirl patterns, three tiny scallion rings floating on top, spoon revealing custardy jiggly texture inside"
  },
  {
    id: 20, name: "青椒肉丝", region: "家常", emoji: "🌿",
    difficulty: "简单", time: "20分钟", spicy: 1,
    ingredients: ["猪肉", "青椒", "姜", "大蒜", "生抽", "料酒", "淀粉"],
    steps: [
      "猪肉切细丝，加盐、料酒、淀粉腌10分钟",
      "青椒切丝，姜蒜切末",
      "热锅多油，下肉丝滑散至变色盛出",
      "锅留底油，爆香姜蒜",
      "下青椒大火翻炒",
      "下肉丝，加生抽翻炒均匀出锅"
    ],
    pigComment: "快手家常菜！肉嫩椒脆！小猪的秘诀是肉丝一定要提前腌，滑嫩的关键！",
    imagePrompt: "qing jiao rou si shredded pork with green peppers, tender pink pork strips stir-fried with crisp bright green pepper strips, light savory soy sauce glaze, simple but perfectly executed, glistening with a thin sheen of cooking oil, piled high on a white plate"
  },
  {
    id: 21, name: "蒜蓉炒空心菜", region: "家常", emoji: "🥬",
    difficulty: "简单", time: "8分钟", spicy: 0,
    ingredients: ["空心菜", "大蒜", "盐"],
    steps: [
      "空心菜摘洗干净，大蒜切末",
      "锅烧热，多放油",
      "下蒜末爆香至金黄",
      "大火下空心菜快速翻炒",
      "加盐调味，翻炒均匀",
      "菜稍软即出锅（保持翠绿）"
    ],
    pigComment: "3分钟出锅！简单是简单，但火候是关键！大火快炒，菜要翠绿！小猪夏天最爱！",
    imagePrompt: "suan rong kong xin cai garlic water spinach, vibrant jade-green hollow stem vegetables stir-fried until just wilted, golden minced garlic bits scattered throughout, bright fresh and healthy appearance, high heat wok flavor visible, served on a clean oval plate"
  },
  {
    id: 22, name: "虾仁炒鸡蛋", region: "家常", emoji: "🦐🥚",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["虾", "鸡蛋", "葱", "料酒", "盐"],
    steps: [
      "虾去壳去线，加盐和料酒腌5分钟",
      "鸡蛋打散加盐",
      "热锅下虾仁炒至变红盛出",
      "锅加油，倒蛋液炒至半凝固",
      "下虾仁翻炒均匀",
      "撒葱花出锅"
    ],
    pigComment: "鲜上加鲜！虾的甜和蛋的香简直绝配！小猪觉得这道菜能让人忘记所有烦恼～",
    imagePrompt: "xia ren chao dan shrimp with scrambled eggs, plump curled pink-orange shrimp nestled in soft fluffy golden egg curds, bright contrast of pink and yellow, light and delicate wok-tossed presentation, garnished with a sprig of cilantro"
  },
  {
    id: 23, name: "清炒豆芽", region: "家常", emoji: "🌱",
    difficulty: "简单", time: "8分钟", spicy: 1,
    ingredients: ["豆芽", "大蒜", "干辣椒", "醋", "盐"],
    steps: [
      "豆芽洗净，大蒜切片",
      "热锅多油，下干辣椒和蒜片爆香",
      "大火下豆芽快速翻炒",
      "沿锅边淋醋，加盐",
      "翻炒均匀立刻出锅（保持脆感）"
    ],
    pigComment: "穷开心三件套之一！清爽脆嫩，加点醋超开胃！小猪穷的时候最爱吃这个！",
    imagePrompt: "qing chao dou ya stir-fried bean sprouts, crisp translucent white-yellow sprouts with red chili threads and golden garlic slices, fresh and crunchy texture visible, light simple presentation on a green-rimmed plate, minimalist wholesome food"
  },
  {
    id: 24, name: "土豆烧排骨", region: "家常", emoji: "🥔🍖",
    difficulty: "中等", time: "60分钟", spicy: 0,
    ingredients: ["排骨", "土豆", "姜", "生抽", "老抽", "料酒", "糖", "葱"],
    steps: [
      "排骨冷水焯水，土豆切滚刀块",
      "热锅炒糖色，下排骨翻炒上色",
      "加生抽、老抽、料酒和热水",
      "大火烧开转中小火炖30分钟",
      "下土豆块继续炖20分钟",
      "大火收汁，撒葱花出锅"
    ],
    pigComment: "土豆和排骨是天生一对！土豆吸满了排骨的香气，排骨软到脱骨！小猪超幸福！",
    imagePrompt: "pai gu dun tu dou braised pork ribs with potatoes, fall-off-the-bone meaty ribs and golden soft potato chunks in a thick savory brown gravy, rich collagen-glossy sauce, simmered until perfectly tender, served in a deep stoneware bowl"
  },
  {
    id: 25, name: "韭菜炒鸡蛋", region: "家常", emoji: "🌿🥚",
    difficulty: "简单", time: "10分钟", spicy: 0,
    ingredients: ["韭菜", "鸡蛋", "盐"],
    steps: [
      "韭菜切段，鸡蛋打散加盐",
      "热锅多油，先炒鸡蛋成大块盛出",
      "锅加油，下韭菜大火翻炒",
      "加盐调味",
      "下鸡蛋翻炒均匀",
      "出锅，趁热吃最香"
    ],
    pigComment: "春天必吃！韭菜的香气配上鸡蛋，简单到不能再简单却好吃到不行！小猪的春天食谱！",
    imagePrompt: "jiu cai chao ji dan chive and egg stir fry, vivid emerald green chive segments intertwined with fluffy golden scrambled egg pieces, beautiful spring-like green and gold contrast, simple rustic home cooking charm, served on a round ceramic plate"
  },

  // ===== 更多川菜 =====
  {
    id: 26, name: "水煮鱼", region: "川菜", emoji: "🐟🌶️",
    difficulty: "中等", time: "35分钟", spicy: 4,
    ingredients: ["草鱼", "豆芽", "豆瓣酱", "干辣椒", "花椒", "姜", "蒜", "葱", "料酒", "淀粉"],
    steps: [
      "鱼片加盐、料酒、淀粉腌15分钟",
      "豆芽焯水铺在碗底",
      "热锅炒豆瓣酱出红油，加姜蒜炒香",
      "加热水煮沸，下鱼骨煮5分钟",
      "下鱼片，变色立刻捞出铺在豆芽上",
      "铺干辣椒和花椒，烧热油淋上，滋滋作响即可"
    ],
    pigComment: "看到那一锅红汤小猪就激动！烧热油那一下是整道菜的高潮！麻辣鲜嫩，吃一次想一周！",
    source: { platform: "抖音", likes: "203.5万", saves: "112.8万" },
    imagePrompt: "shui zhu yu Sichuan boiled fish in chili oil, delicate white fish fillets submerged in a sea of fiery crimson chili oil, dried red chilies and Sichuan peppercorns floating on surface, bean sprouts and celery underneath, hot oil just poured sizzling violently, dramatic steam and spice explosion"
  },
  {
    id: 27, name: "夫妻肺片", region: "川菜", emoji: "🥩",
    difficulty: "中等", time: "60分钟", spicy: 3,
    ingredients: ["牛肉", "牛杂", "花椒", "干辣椒", "花生", "芝麻", "葱", "红油", "酱油", "醋"],
    steps: [
      "牛肉和牛杂冷水下锅，加香料卤熟",
      "晾凉后切薄片摆盘",
      "调红油拌汁：红油、酱油、醋、花椒粉、糖",
      "淋拌汁，撒花生碎和芝麻",
      "最后放芹菜段或葱花提香"
    ],
    pigComment: "名字吓人实则超香！冷吃最妙，麻辣鲜香，花生脆香，小猪每次都要多舀一勺红油！",
    imagePrompt: "fu qi fei pian husband wife lung slices, paper-thin slices of spiced beef and offal arranged flat on an oval plate, drenched in bright red aromatic chili oil, scattered crushed roasted peanuts, toasted sesame seeds, and celery leaf garnish, glistening and seductive cold dish"
  },
  {
    id: 28, name: "毛血旺", region: "川菜", emoji: "🫕",
    difficulty: "中等", time: "40分钟", spicy: 4,
    ingredients: ["鸭血", "毛肚", "午餐肉", "豆芽", "豆瓣酱", "干辣椒", "花椒", "大蒜", "姜", "高汤"],
    steps: [
      "毛肚和鸭血切块，分别焯水",
      "热锅炒豆瓣酱出红油",
      "加姜蒜炒香，倒入高汤烧开",
      "下毛肚、鸭血、午餐肉煮熟",
      "豆芽垫底，捞食材铺上",
      "大量干辣椒和花椒铺面，浇热油"
    ],
    pigComment: "重庆人的骄傲！又麻又辣又烫，小猪每次都大汗淋漓还不停筷子！配白米饭超级爽！",
    imagePrompt: "mao xue wang spicy blood curd stew, bubbling intense red chili broth filled with cubed dark duck blood, honeycomb tripe strips, tender luncheon meat, yellow bean sprouts, covered in a thick layer of dried chilies and Sichuan peppercorns, volcanic and dramatic, cast iron pot"
  },
  {
    id: 29, name: "酸菜鱼", region: "川菜", emoji: "🐟🥬",
    difficulty: "中等", time: "35分钟", spicy: 2,
    ingredients: ["草鱼", "泡酸菜", "泡椒", "姜", "蒜", "花椒", "料酒", "淀粉", "蛋清"],
    steps: [
      "鱼片加盐、料酒、蛋清、淀粉腌制",
      "热锅炒泡酸菜和泡椒出香味",
      "加热水或高汤烧开",
      "下鱼骨煮10分钟出鲜味",
      "下鱼片大火烫熟即捞出",
      "撒葱花，浇热油激香"
    ],
    pigComment: "酸辣爽口！比水煮鱼更清爽，酸菜的酸和鱼的鲜完美融合！小猪喝汤都能喝三碗！",
    imagePrompt: "suan cai yu pickled cabbage fish soup, milky golden tangy broth with silky white fish fillets, shredded pickled mustard greens, sliced pickled peppers, tiny bubbles on broth surface, comforting sour warmth, served in a large stone pot with ladle"
  },
  {
    id: 30, name: "水煮肉片", region: "川菜", emoji: "🥩🌶️",
    difficulty: "中等", time: "30分钟", spicy: 4,
    ingredients: ["猪里脊", "白菜", "豆芽", "豆瓣酱", "干辣椒", "花椒", "蒜", "姜", "淀粉"],
    steps: [
      "里脊切薄片，加盐、淀粉、蛋清腌制",
      "蔬菜焯水铺底碗",
      "豆瓣酱炒出红油，加蒜姜和高汤",
      "肉片滑入汤中，变色立即捞出",
      "铺干辣椒花椒，烧热油淋上"
    ],
    pigComment: "水煮系列的猪肉版！肉片嫩滑辣椒香，小猪最爱那层厚厚的红油，拌饭简直绝了！",
    imagePrompt: "shui zhu rou pian boiled pork in chili broth, ultra-thin silky pork slices floating in a pool of searingly red chili oil, topped with a mountain of dried chilies and crushed garlic, hot oil just poured creating sizzling aroma, fiery and intense"
  },
  {
    id: 31, name: "辣子鸡", region: "川菜", emoji: "🍗🌶️",
    difficulty: "中等", time: "35分钟", spicy: 4,
    ingredients: ["鸡腿肉", "干辣椒", "花椒", "大蒜", "姜", "料酒", "生抽", "糖"],
    steps: [
      "鸡腿肉切小块，加盐料酒腌20分钟",
      "鸡块炸至金黄酥脆捞出",
      "锅留少油，大量干辣椒和花椒炒出香气",
      "下鸡块翻炒均匀",
      "加生抽和少量糖提鲜",
      "撒芝麻和葱花出锅"
    ],
    pigComment: "找鸡块大作战！辣椒比鸡肉还多！小猪专门负责在辣椒堆里挖鸡块，找到一块开心一下！",
    imagePrompt: "la zi ji Chongqing spicy chicken, tiny golden crispy chicken pieces almost hidden beneath a towering mountain of hundreds of dried red chilies and Sichuan peppercorns, treasure-hunt style presentation, wok-fried until fragrant, dramatic overhead shot showing the chili mountain"
  },

  // ===== 鲁菜 =====
  {
    id: 32, name: "糖醋鲤鱼", region: "鲁菜", emoji: "🐟🍬",
    difficulty: "复杂", time: "45分钟", spicy: 0,
    ingredients: ["鲤鱼", "糖", "醋", "生抽", "淀粉", "葱", "姜", "蒜"],
    steps: [
      "鲤鱼两侧打花刀，抹盐和料酒腌15分钟",
      "裹薄淀粉，热油炸至金黄定型",
      "捞出复炸一次至酥脆",
      "锅留底油，炒香葱姜蒜",
      "加糖、醋、生抽、水勾芡成糖醋汁",
      "将汁淋在鱼上即可"
    ],
    pigComment: "鲁菜的经典颜值担当！外酥里嫩，酸甜可口！小猪最爱啃鱼尾巴，脆脆的超好吃！",
    imagePrompt: "tang cu li yu sweet and sour Yellow River carp, whole deep-fried golden carp with its body scored into a blooming flower pattern, draped in glossy bright orange-red sweet and sour sauce, crispy tail standing up dramatically, traditional Shandong banquet presentation"
  },
  {
    id: 33, name: "葱烧豆腐", region: "鲁菜", emoji: "🧅",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["豆腐", "大葱", "生抽", "老抽", "糖", "蚝油"],
    steps: [
      "豆腐切厚片，煎至两面金黄",
      "大葱切长段，下锅煸至微焦",
      "加生抽、老抽、蚝油、糖和少量水",
      "下豆腐小火焖5分钟入味",
      "大火收汁，让汤汁裹满豆腐"
    ],
    pigComment: "葱香扑鼻！鲁菜用葱的功力天下无双！豆腐吸满酱汁，入口鲜香！小猪觉得简单的才最难忘！",
    imagePrompt: "cong shao dou fu scallion braised tofu, golden pan-fried tofu blocks with crispy outer crust in rich dark soy braising sauce, caramelized thick scallion segments draped over top, savory and aromatic, served in a shallow brown ceramic dish"
  },
  {
    id: 34, name: "九转大肠", region: "鲁菜", emoji: "🌀",
    difficulty: "复杂", time: "90分钟", spicy: 1,
    ingredients: ["猪大肠", "糖", "醋", "肉桂", "胡椒", "砂仁", "葱", "姜", "蒜"],
    steps: [
      "大肠反复清洗，加料酒和盐揉搓去腥",
      "焯水后切段",
      "下油锅炸至金黄起泡捞出",
      "炒糖色，下大肠翻炒上色",
      "加醋、生抽、香料和少量水",
      "小火焖至入味收汁，撒香菜"
    ],
    pigComment: "鲁菜最考功力的一道！又酸又甜又香又软烂，九种工序造就完美口感！小猪第一次吃惊为天人！",
    imagePrompt: "jiu zhuan da chang nine-turn large intestine, perfectly braised thick intestine rings with a deep mahogany caramelized glaze, complex layered sauce with hints of vinegar sweetness and spice, traditional Shandong imperial cuisine, arranged in a spiral pattern on a carved plate"
  },

  // ===== 苏菜/淮扬菜 =====
  {
    id: 35, name: "红烧狮子头", region: "苏菜", emoji: "🍖",
    difficulty: "中等", time: "60分钟", spicy: 0,
    ingredients: ["猪肉末", "马蹄", "鸡蛋", "生抽", "老抽", "姜", "葱", "淀粉", "白菜"],
    steps: [
      "肉末加马蹄碎、鸡蛋、姜末、淀粉搅打上劲",
      "团成大肉丸，下油锅炸至定型金黄",
      "砂锅铺白菜，放入肉丸",
      "加生抽、老抽、糖、高汤没过",
      "小火炖40分钟至酥软",
      "大火收汁即可"
    ],
    pigComment: "大气磅礴！一个肉丸大如狮头，软糯鲜美！小猪每次都要把汤汁也喝干净，实在太鲜了！",
    imagePrompt: "hong shao shi zi tou red braised lion head meatball, an enormous hand-shaped pork meatball the size of a fist, glossy dark brown braising sauce, surrounded by tender baby bok choy leaves, cross-section showing juicy tender interior with visible meat grain texture, majestic presentation in a clay pot"
  },
  {
    id: 36, name: "盐水鸭", region: "苏菜", emoji: "🦆",
    difficulty: "中等", time: "90分钟", spicy: 0,
    ingredients: ["鸭", "盐", "花椒", "八角", "桂皮", "姜", "葱", "料酒"],
    steps: [
      "盐加花椒炒热，揉遍鸭身腌制2小时",
      "清洗干净，鸭腹塞入姜葱香料",
      "锅中水加香料烧开，放鸭子",
      "保持小火不沸腾，浸煮40分钟",
      "关火再焖20分钟",
      "捞出晾凉后斩件"
    ],
    pigComment: "南京鸭子天下第一！皮白肉嫩，咸鲜适中！小猪觉得冷吃才是灵魂，越嚼越香！",
    imagePrompt: "yan shui ya Nanjing salted duck, pale ivory-skinned duck pieces with a rosy pink interior showing perfectly brined meat, skin glistening with rendered fat, elegant simple slicing arrangement, a small dish of dipping sauce alongside, refined understated Nanjing style"
  },
  {
    id: 37, name: "清炒虾仁", region: "苏菜", emoji: "🦐",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["虾", "黄瓜", "胡萝卜", "盐", "料酒", "淀粉", "蛋清"],
    steps: [
      "虾剥壳去虾线，加盐、蛋清、淀粉腌10分钟",
      "黄瓜和胡萝卜切丁",
      "热锅多油，下虾仁快速滑炒至变色盛出",
      "锅留底油，下蔬菜丁翻炒",
      "下虾仁，加盐和少量料酒",
      "翻炒均匀，清淡出锅"
    ],
    pigComment: "苏菜的清淡之美！虾仁鲜甜弹牙，清清爽爽不油腻！小猪觉得这道菜是春天的味道！",
    imagePrompt: "qing chao xia ren crystal clear stir-fried shrimp, plump jade-white shrimp with a translucent crystalline texture from velvet technique, bright green snap peas and white water chestnuts, light glistening sauce, clean elegant Jiangsu cuisine style, spring freshness"
  },

  // ===== 浙菜 =====
  {
    id: 38, name: "西湖醋鱼", region: "浙菜", emoji: "🐟🍶",
    difficulty: "中等", time: "30分钟", spicy: 0,
    ingredients: ["草鱼", "糖", "醋", "生抽", "姜", "葱", "淀粉"],
    steps: [
      "草鱼洗净，背部打刀花",
      "冷水下锅，加姜葱，水沸后小火煮8分钟",
      "调糖醋汁：糖、醋、生抽、淀粉、水",
      "将鱼小心捞出摆盘",
      "锅中煮糖醋汁至浓稠",
      "将汁淋在鱼上，撒姜丝"
    ],
    pigComment: "西湖边的传世名菜！不放一滴油！鱼肉鲜嫩，糖醋汁酸甜微辣，小猪觉得清雅极了！",
    imagePrompt: "xi hu cu yu West Lake vinegar fish, a whole poached grass carp with translucent glossy sweet-sour dark vinegar sauce draped over it, ginger thread garnish, the fish resting elegantly on a celadon-green oval plate evoking the colors of West Lake, classical Hangzhou refinement"
  },
  {
    id: 39, name: "东坡肉", region: "浙菜", emoji: "🍖",
    difficulty: "复杂", time: "120分钟", spicy: 0,
    ingredients: ["五花肉", "绍兴黄酒", "生抽", "老抽", "糖", "姜", "葱"],
    steps: [
      "五花肉切大方块，焯水洗净",
      "锅底铺葱姜，皮朝下摆肉",
      "加黄酒、生抽、老抽、糖",
      "加水至没过一半，大火烧开",
      "加盖小火焖1.5小时",
      "翻面皮朝上再焖30分钟收汁"
    ],
    pigComment: "苏东坡大文豪的杰作！慢工出细活，肥而不腻，入口即化！小猪觉得等待的过程都是享受！",
    imagePrompt: "dong po rou Su Dongpo braised pork, a single perfect square of pork belly tied with straw string, the skin is deep amber-caramelized and gelatinous, fat layer is translucent and jiggly, lean layer is burgundy-red, sitting in a pool of concentrated dark braising jus, individual serving in a small covered clay pot"
  },
  {
    id: 40, name: "龙井虾仁", region: "浙菜", emoji: "🍵🦐",
    difficulty: "中等", time: "20分钟", spicy: 0,
    ingredients: ["虾", "龙井茶叶", "盐", "料酒", "蛋清", "淀粉"],
    steps: [
      "龙井茶叶用80°C热水泡开，留茶汤备用",
      "虾仁加盐、蛋清、淀粉腌10分钟",
      "热锅多油，下虾仁滑炒至变色",
      "淋入茶汤快速翻炒",
      "下泡好的茶叶翻炒均匀",
      "加盐调味，清香出锅"
    ],
    pigComment: "茶与虾的绝妙搭配！清香扑鼻，虾仁鲜甜，茶香萦绕！小猪觉得这道菜最适合春天品味！",
    imagePrompt: "long jing xia ren Dragon Well tea shrimp, plump white jade-like shrimp scattered with tiny delicate Dragon Well tea leaves, the pale green tea leaves clinging to each shrimp, light and ethereal spring dish, served on a white porcelain plate with a cup of green tea alongside, poetic Hangzhou elegance"
  },

  // ===== 徽菜 =====
  {
    id: 41, name: "臭鳜鱼", region: "徽菜", emoji: "🐟",
    difficulty: "复杂", time: "30分钟", spicy: 1,
    ingredients: ["鳜鱼", "盐", "姜", "葱", "料酒", "生抽", "猪油", "干辣椒"],
    steps: [
      "鳜鱼用盐腌制发酵（传统需5-7天，购买现成臭鱼）",
      "鱼两面打刀花",
      "热锅猪油，将鱼煎至两面金黄",
      "加姜葱、料酒、生抽和水",
      "中火焖15分钟入味",
      "大火收汁，撒干辣椒和葱花"
    ],
    pigComment: "闻着臭吃着香！这就是徽菜最神秘的菜！小猪第一次被朋友骗着吃，一口下去爱上了！",
    imagePrompt: "chou gui yu Anhui stinky mandarin fish, a whole golden-brown pan-fried fermented fish with crispy charred skin, rich savory dark sauce with bamboo shoots and mushroom slices, aromatic and mysterious, served on a rustic wooden board, traditional Huizhou cuisine atmosphere with ink-wash mountain backdrop"
  },

  // ===== 闽菜 =====
  {
    id: 42, name: "荔枝肉", region: "闽菜", emoji: "🍈🥩",
    difficulty: "中等", time: "30分钟", spicy: 0,
    ingredients: ["猪里脊", "荸荠", "糖", "醋", "番茄酱", "淀粉", "料酒"],
    steps: [
      "猪肉切块，在表面打交叉花刀",
      "加盐料酒腌制，裹淀粉",
      "下锅炸至形似荔枝状捞出",
      "荸荠切块下锅炸一下",
      "调糖醋汁：糖、醋、番茄酱、淀粉",
      "肉和荸荠下锅翻炒，倒入糖醋汁收汁"
    ],
    pigComment: "形如荔枝，味似荔枝！闽菜的创意令小猪叹为观止！酸甜多汁，这就是福建人的幸福感！",
    imagePrompt: "li zhi rou Fujian lychee pork, golden-fried pork pieces scored into a cross-hatch pattern curling up to resemble lychee fruits, coated in a glossy sweet and sour tangy red sauce with water chestnuts, creative and playful presentation, vibrant orange-red and gold tones"
  },

  // ===== 更多粤菜 =====
  {
    id: 43, name: "蚝油牛肉", region: "粤菜", emoji: "🥩",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["牛肉", "蚝油", "生抽", "淀粉", "小苏打", "姜", "葱", "青椒"],
    steps: [
      "牛肉切薄片，加小苏打、生抽、淀粉、蚝油腌20分钟（小苏打是嫩肉关键）",
      "热锅多油，牛肉大火快速滑炒至变色盛出",
      "锅留底油，炒香姜片",
      "下青椒翻炒",
      "下牛肉，加蚝油翻炒均匀",
      "大火出锅"
    ],
    pigComment: "蚝油是粤菜的灵魂！牛肉嫩滑到不可思议！小苏打是秘诀，小猪学到这招之后牛肉再也没炒老过！",
    imagePrompt: "hao you niu rou oyster sauce beef, velvety tender sliced beef with a silky brown oyster sauce glaze, stir-fried with crisp green bell pepper slices and white onion, each beef slice showing perfect wok sear marks, classic Cantonese restaurant style plating on a hot sizzling iron plate"
  },
  {
    id: 44, name: "咕噜肉", region: "粤菜", emoji: "🍍🥩",
    difficulty: "中等", time: "35分钟", spicy: 0,
    ingredients: ["猪里脊", "菠萝", "青椒", "红椒", "糖", "醋", "番茄酱", "淀粉"],
    steps: [
      "猪肉切块，加盐料酒腌15分钟",
      "裹蛋液和淀粉，炸至金黄酥脆",
      "菠萝、青红椒切块备用",
      "调糖醋汁：番茄酱、糖、醋、水、淀粉",
      "锅中倒糖醋汁烧开",
      "下肉、菠萝和彩椒翻炒均匀"
    ],
    pigComment: "菠萝入菜！酸甜多汁！外国人最爱的中国菜！小猪觉得菠萝块比肉块还好吃，果汁都浸入了！",
    imagePrompt: "gu lao rou Cantonese sweet and sour pork, golden crispy battered pork chunks with bright yellow pineapple wedges, red and green bell pepper chunks, all coated in a vibrant glossy orange-red sweet and sour sauce, tropical and colorful, sauce dripping in slow motion"
  },
  {
    id: 45, name: "叉烧肉", region: "粤菜", emoji: "🍖",
    difficulty: "中等", time: "90分钟", spicy: 0,
    ingredients: ["猪梅花肉", "叉烧酱", "蜂蜜", "生抽", "老抽", "糖", "料酒"],
    steps: [
      "猪肉切条，加叉烧酱、生抽、糖、料酒腌一夜",
      "烤箱200°C预热，肉放烤架",
      "刷蜂蜜，烤20分钟",
      "翻面刷蜂蜜再烤15分钟",
      "最后5分钟调高至220°C上色",
      "切片，淋剩余汁液"
    ],
    pigComment: "港式茶餐厅的灵魂！蜜汁焦香，外焦里嫩！小猪觉得切开那一刀是全宇宙最美的截面！",
    imagePrompt: "cha shao Cantonese BBQ pork, thick slices of honey-glazed roasted pork showing a caramelized burnt-red exterior with charred edges, juicy pink center with marbled fat, glistening honey drizzle, iconic Hong Kong roast meat shop style, hanging from hooks in background"
  },

  // ===== 更多东北菜 =====
  {
    id: 46, name: "小鸡炖蘑菇", region: "东北菜", emoji: "🍄🍗",
    difficulty: "简单", time: "60分钟", spicy: 0,
    ingredients: ["鸡", "榛蘑", "粉条", "大酱", "生抽", "姜", "葱", "八角"],
    steps: [
      "干榛蘑提前泡发，鸡斩块焯水",
      "热锅少油，鸡块炒至表面微黄",
      "加大酱、生抽翻炒出香味",
      "加热水没过鸡块，放榛蘑和香料",
      "大火烧开转小火炖40分钟",
      "下粉条再炖15分钟，汤汁浓郁即可"
    ],
    pigComment: "东北冬天的味道！榛蘑的香气飘满整个屋子！小猪最爱喝那锅汤，能用来拌饭吃三碗！",
    imagePrompt: "xiao ji dun mo gu chicken stewed with wild mushrooms, a bubbling clay pot of tender free-range chicken pieces with plump hazel mushrooms and dried shiitake, rich golden collagen-heavy broth, glass noodles soaking up the stock, thick steam rising, cozy northeastern winter comfort food"
  },
  {
    id: 47, name: "锅包肉", region: "东北菜", emoji: "🥩🍊",
    difficulty: "中等", time: "30分钟", spicy: 0,
    ingredients: ["猪里脊", "糖", "醋", "番茄酱", "淀粉", "胡萝卜", "葱", "姜"],
    steps: [
      "猪肉切厚片，加盐腌制",
      "裹厚淀粉糊，下油锅炸至酥脆金黄",
      "捞出复炸一次更酥脆",
      "调糖醋汁：糖、醋、番茄酱",
      "锅中倒汁烧开，下肉片快速翻炒",
      "下胡萝卜丝和葱丝翻匀出锅"
    ],
    pigComment: "东北版糖醋肉！比南方版更豪放！外壳超级酥脆，蘸满糖醋汁！小猪每次恨不得整盘抱走！",
    source: { platform: "B站", likes: "178.2万", saves: "86.9万" },
    imagePrompt: "guo bao rou northeast crispy sweet pork, thick-cut pork slices in a shatteringly crispy golden batter, coated in a tangy orange sweet-sour sauce with julienned carrot and cilantro garnish, each piece showing the contrast of crunchy exterior and tender meat, sauce splattering dramatically"
  },
  {
    id: 48, name: "拔丝地瓜", region: "东北菜", emoji: "🍠",
    difficulty: "中等", time: "25分钟", spicy: 0,
    ingredients: ["红薯", "糖", "油"],
    steps: [
      "红薯去皮切滚刀块",
      "下锅炸至外脆内软捞出",
      "锅中只放糖，小火慢熬至焦糖色起泡",
      "迅速下红薯翻炒至每块裹满糖浆",
      "立刻出锅，上桌前用筷子夹起能拉丝",
      "配一碗冷水，吃前蘸一下"
    ],
    pigComment: "甜蜜蜜的幸福感！拉丝那一刻超有成就感！小猪觉得抢着夹的时候是饭桌上最快乐的时刻！",
    imagePrompt: "ba si di gua candied sweet potato with pulled sugar threads, golden deep-fried sweet potato chunks being lifted by chopsticks with long dramatic stretchy caramel sugar threads connecting them, molten golden syrup dripping, magical sparkling crystallized sugar effect, action shot of the pull"
  },

  // ===== 更多湘菜 =====
  {
    id: 49, name: "腊味合蒸", region: "湘菜", emoji: "🥩🌿",
    difficulty: "简单", time: "30分钟", spicy: 1,
    ingredients: ["腊肉", "腊肠", "腊鸭", "豆豉", "辣椒", "姜", "料酒"],
    steps: [
      "腊肉、腊肠、腊鸭分别切片",
      "腊肉先蒸10分钟软化",
      "将三样摆入盘中（颜色搭配好看）",
      "加豆豉、辣椒碎、姜片",
      "淋少许料酒",
      "大火蒸15分钟即可"
    ],
    pigComment: "腊香扑鼻！三种腊味同蒸，香气叠加！小猪觉得腊肉的油脂蒸出来滴在腊肠上，那叫一个香！",
    imagePrompt: "la wei he zheng Hunan steamed cured meats, layers of sliced smoky cured pork belly, dark reddish cured sausage, and salted fish arranged in a deep steaming bowl, rendered fat glistening on surfaces, fermented black beans and dried chili flakes scattered, rustic countryside Hunan atmosphere"
  },
  {
    id: 50, name: "干锅花菜", region: "湘菜", emoji: "🥦",
    difficulty: "简单", time: "20分钟", spicy: 2,
    ingredients: ["花椰菜", "五花肉", "干辣椒", "大蒜", "豆瓣酱", "生抽", "料酒"],
    steps: [
      "花椰菜掰小朵，下油锅炸至边缘微焦捞出",
      "五花肉切薄片，煸炒出油",
      "下干辣椒和蒜片爆香",
      "加豆瓣酱炒出红油",
      "下花椰菜大火翻炒",
      "加生抽调味，收干汤汁出锅"
    ],
    pigComment: "素菜里的战斗机！花菜焦香微辣，五花肉点睛！小猪说这是最下饭的素菜，没有之一！",
    imagePrompt: "gan guo hua cai dry pot cauliflower, charred crispy cauliflower florets with blackened edges stir-fried with sliced pork belly, dried red chilies, and garlic cloves in a mini cast iron wok, smoky dry-fried texture visible, no sauce but glistening with chili oil, Hunan dry pot style"
  },

  // ===== 更多家常菜 =====
  {
    id: 51, name: "可乐鸡翅", region: "家常", emoji: "🥤🍗",
    difficulty: "简单", time: "30分钟", spicy: 0,
    ingredients: ["鸡翅", "可乐", "生抽", "老抽", "姜", "料酒"],
    steps: [
      "鸡翅两面划刀，冷水焯水去血沫",
      "热锅少油，鸡翅皮朝下煎至金黄",
      "加姜片和料酒翻炒",
      "倒入可乐没过鸡翅（约一罐）",
      "加生抽和老抽，大火烧开",
      "中火收汁至浓稠裹满鸡翅"
    ],
    pigComment: "三个字：下饭！绝！可乐收汁后的焦糖香气太迷人了！小猪做给朋友吃，每次都被要求留下菜谱！",
    source: { platform: "小红书", likes: "98.7万", saves: "65.4万" },
    imagePrompt: "ke le ji chi cola chicken wings, plump glossy chicken wings coated in a deep caramel-brown cola reduction sauce, sticky and shiny with visible bubbling caramelization, arranged in a small black iron skillet, ice-cold glass of cola with condensation beside it for contrast"
  },
  {
    id: 52, name: "蒜泥白肉", region: "家常", emoji: "🧄🥩",
    difficulty: "简单", time: "35分钟", spicy: 2,
    ingredients: ["五花肉", "大蒜", "红油", "生抽", "醋", "糖", "葱", "姜", "料酒", "黄瓜"],
    steps: [
      "五花肉冷水下锅，加姜葱料酒煮熟",
      "捞出放冷水中浸凉，切薄片",
      "黄瓜切丝垫底，肉片卷黄瓜摆盘",
      "大蒜捣成泥",
      "调汁：蒜泥、红油、生抽、醋、糖、芝麻油",
      "将汁均匀淋在肉片上"
    ],
    pigComment: "川式凉菜扛把子！蒜香浓郁，红油诱人！小猪最爱把肉片裹着黄瓜丝一口吃，爽快极了！",
    imagePrompt: "suan ni bai rou garlic white pork, paper-thin slices of boiled pork belly rolled into elegant curls layered over fresh cucumber slices, drenched in a bright red chili oil and mashed garlic sauce, cilantro leaf garnish, beautiful cold appetizer presentation on a long rectangular plate"
  },
  {
    id: 53, name: "番茄蛋花汤", region: "家常", emoji: "🍅🥚🍲",
    difficulty: "简单", time: "10分钟", spicy: 0,
    ingredients: ["西红柿", "鸡蛋", "葱", "盐", "香油", "淀粉"],
    steps: [
      "西红柿切块，鸡蛋打散",
      "热锅下油，炒西红柿出汁",
      "加热水烧开",
      "水淀粉勾薄芡",
      "缓缓倒入蛋液，用筷子轻轻搅动成蛋花",
      "加盐、香油、葱花即可"
    ],
    pigComment: "最温柔的一碗汤！酸甜鲜美，蛋花软嫩！小猪生病的时候最想喝这个，5分钟暖胃暖心！",
    imagePrompt: "fan qie dan hua tang tomato egg drop soup, clear bright ruby-red tomato broth with delicate golden egg ribbons swirling like flower petals, diced soft tomato pieces visible, chopped scallion and a few drops of sesame oil on surface, steaming in a white porcelain soup bowl with a Chinese spoon"
  },
  {
    id: 54, name: "麻辣香锅", region: "家常", emoji: "🫕🌶️",
    difficulty: "中等", time: "30分钟", spicy: 3,
    ingredients: ["毛肚", "土豆", "藕", "豆皮", "蟹棒", "蘑菇", "豆瓣酱", "干辣椒", "花椒", "大蒜", "姜"],
    steps: [
      "所有食材处理好，分别焯水或过油",
      "热锅多油，炒豆瓣酱出红油",
      "下干辣椒、花椒、姜蒜爆香",
      "按难熟到易熟顺序下食材翻炒",
      "加生抽、糖、芝麻调味",
      "翻炒均匀，撒熟芝麻和葱花出锅"
    ],
    pigComment: "食材随心配！想放啥放啥！麻辣香到让人上瘾！小猪每次都会放一大堆藕片，超级入味！",
    source: { platform: "小红书", likes: "145.6万", saves: "93.2万" },
    imagePrompt: "ma la xiang guo spicy numbing stir-fry pot, an overflowing wok packed with colorful ingredients: sliced lotus root, broccoli, enoki mushrooms, luncheon meat, shrimp, tofu skin, quail eggs, all coated in a fiery red mala sauce with visible Sichuan peppercorns and dried chilies, abundant and extravagant"
  },
  {
    id: 55, name: "酱牛肉", region: "家常", emoji: "🥩",
    difficulty: "简单", time: "120分钟", spicy: 0,
    ingredients: ["牛腱子", "生抽", "老抽", "黄豆酱", "糖", "八角", "桂皮", "花椒", "姜", "葱", "料酒"],
    steps: [
      "牛腱子冷水浸泡2小时去血水",
      "焯水洗净",
      "锅中加所有调料和热水",
      "放入牛腱子大火烧开",
      "转小火煮1.5小时至筷子能穿透",
      "关火在卤汤中浸泡至少2小时，切片即可"
    ],
    pigComment: "绝佳的下酒菜！卤香浓郁，越嚼越香！小猪建议多卤一些，放冰箱想吃随时切！做一次吃三天！",
    imagePrompt: "jiang niu rou soy-braised spiced beef, beautifully sliced cold beef showing a deep burgundy-brown interior with tight grain texture, arranged in overlapping shingle pattern on a wooden cutting board, star anise and cinnamon bark garnish beside it, rich aromatic spiced broth in a small bowl nearby"
  },

  // ===== 社交平台热门收录 =====
  {
    id: 56, name: "酸汤肥牛", region: "家常", emoji: "🥩🍋",
    difficulty: "简单", time: "15分钟", spicy: 2,
    ingredients: ["肥牛卷", "金针菇", "泡椒", "西红柿", "黄灯笼椒酱", "大蒜", "姜", "葱", "醋"],
    steps: [
      "金针菇洗净撕开，西红柿切块",
      "锅中少油炒香泡椒、姜蒜末和黄灯笼椒酱",
      "加入西红柿炒出汁，倒入适量清水烧开",
      "放入金针菇煮2分钟",
      "肥牛卷下锅烫至变色立即捞出，不要过久",
      "将肥牛铺在金针菇上，浇上酸汤，撒葱花即可"
    ],
    pigComment: "酸辣开胃到停不下来！肥牛一定不要煮老！小猪每次喝汤都要喝到肚子圆滚滚！",
    source: { platform: "抖音", likes: "326.7万", saves: "187.5万" },
    imagePrompt: "suan tang fei niu sour soup with fatty beef rolls, bright golden-red sour broth with tender pink beef slices unfurling, golden needle mushrooms underneath, sliced tomatoes, pickled peppers floating, served in a deep white bowl, tangy appetizing steam rising"
  },
  {
    id: 57, name: "蒜蓉粉丝蒸虾", region: "粤菜", emoji: "🦐🧄",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["大虾", "粉丝", "大蒜", "生抽", "蚝油", "料酒", "葱", "红椒"],
    steps: [
      "粉丝温水泡软，铺在盘底",
      "大虾剪去虾枪虾须，从背部剖开去虾线",
      "整齐摆放在粉丝上，淋少许料酒去腥",
      "大量蒜末用油炒至金黄出蒜香",
      "将蒜蓉油均匀铺在每只虾上",
      "蒸锅大火蒸8分钟，出锅淋生抽、撒葱花红椒丝"
    ],
    pigComment: "宴客菜首选！看起来高大上做起来超简单！蒜蓉的香气和虾的鲜甜绝配！小猪每次请客必出这道！",
    source: { platform: "小红书", likes: "215.3万", saves: "156.8万" },
    imagePrompt: "garlic vermicelli steamed prawns, large butterflied prawns arranged in a fan pattern on glass noodles, each topped with golden fried garlic, green scallion and red chili threads on top, steaming hot, elegant banquet presentation on a white oval plate"
  },
  {
    id: 58, name: "手撕鸡", region: "粤菜", emoji: "🍗✋",
    difficulty: "简单", time: "30分钟", spicy: 1,
    ingredients: ["鸡腿", "姜", "葱", "花椒", "料酒", "生抽", "香油", "辣椒油", "花生"],
    steps: [
      "鸡腿冷水下锅，加姜片、葱段、花椒、料酒",
      "大火煮开后转中火煮20分钟",
      "用筷子戳入无血水即熟，捞出冰水浸泡10分钟",
      "沿纹理手撕成条状，越细越入味",
      "调汁：生抽、香油、辣椒油、蒜末、白芝麻混合",
      "浇汁在鸡丝上，撒碎花生和葱花拌匀"
    ],
    pigComment: "手撕的灵魂在于冰水浸泡！皮爽肉嫩！小猪每次撕着撕着就偷吃了一半，根本停不下来！",
    source: { platform: "抖音", likes: "178.9万", saves: "94.6万" },
    imagePrompt: "hand-shredded chicken, tender white chicken strips torn into long thin shreds piled high, drizzled with glossy red chili oil and light soy sauce, scattered crushed roasted peanuts, white sesame seeds, cilantro garnish, cold dish presentation"
  },
  {
    id: 59, name: "空气炸锅蜜汁鸡翅", region: "家常", emoji: "🍗🔥",
    difficulty: "简单", time: "25分钟", spicy: 0,
    ingredients: ["鸡翅", "蜂蜜", "生抽", "蚝油", "料酒", "姜", "大蒜", "黑胡椒"],
    steps: [
      "鸡翅两面划几刀方便入味",
      "加生抽、蚝油、料酒、姜末、蒜末、黑胡椒腌制2小时以上",
      "空气炸锅200度预热5分钟",
      "鸡翅放入炸篮，200度炸8分钟",
      "翻面，刷一层蜂蜜，再炸8分钟",
      "出锅再刷一层蜂蜜，撒白芝麻即可"
    ],
    pigComment: "空气炸锅封神之作！外焦里嫩蜜汁浓郁！小猪每次腌鸡翅都腌一大盆，冰箱常备随吃随炸！",
    source: { platform: "小红书", likes: "287.4万", saves: "198.6万" },
    imagePrompt: "air fryer honey glazed chicken wings, golden brown crispy wings with a shiny honey glaze, visible char marks and caramelization, white sesame seeds on top, arranged on parchment paper in an air fryer basket, one wing being picked up showing juicy interior"
  },
  {
    id: 60, name: "芝士焗饭", region: "家常", emoji: "🧀🍚",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["米饭", "鸡蛋", "火腿", "玉米粒", "豌豆", "马苏里拉芝士", "番茄酱", "黑胡椒"],
    steps: [
      "米饭加入番茄酱、黑胡椒炒匀，铺入烤碗",
      "火腿切丁、玉米粒、豌豆铺在饭上",
      "打一个鸡蛋在中间",
      "厚厚铺上马苏里拉芝士",
      "烤箱200度烤15分钟至芝士金黄冒泡",
      "出炉趁热搅拌，芝士拉丝超长"
    ],
    pigComment: "芝士拉丝那一刻幸福感爆棚！小猪最喜欢把芝士和蛋黄搅在一起拌饭，浓郁到飞起！",
    source: { platform: "小红书", likes: "345.2万", saves: "267.8万" },
    imagePrompt: "cheese baked rice in a ceramic ramekin, golden bubbly melted mozzarella cheese on top with dramatic cheese pull stretching from a spoon, tomato rice underneath with ham and corn visible, egg yolk oozing in center, freshly out of oven steam"
  },
  {
    id: 61, name: "金汤酸菜鱼", region: "川菜", emoji: "🐟💛",
    difficulty: "中等", time: "30分钟", spicy: 1,
    ingredients: ["草鱼", "酸菜", "金汤酱", "泡椒", "大蒜", "姜", "葱", "鸡蛋", "淀粉"],
    steps: [
      "鱼片加蛋清、淀粉、盐抓匀上浆，静置15分钟",
      "酸菜切丝，泡椒切碎",
      "锅中炒香姜蒜和泡椒，加入酸菜翻炒出酸香",
      "加金汤酱和清水煮开，转中火煮5分钟出味",
      "鱼片逐片下锅，轻轻推动避免粘连",
      "鱼片变白即熟，关火盛出，撒葱花"
    ],
    pigComment: "金黄色的汤底酸爽到灵魂颤抖！鱼片嫩滑入口即化！小猪每次都喝到撑还想再来一碗汤！",
    source: { platform: "抖音", likes: "412.6万", saves: "231.4万" },
    imagePrompt: "jin tang suan cai yu golden soup pickled cabbage fish, brilliant golden-yellow broth with silky white fish slices floating, shredded pickled mustard greens, pickled yellow peppers, the golden color is vivid and appetizing, large deep ceramic bowl, overhead shot"
  },
  {
    id: 62, name: "糖醋里脊", region: "鲁菜", emoji: "🥩🍬",
    difficulty: "中等", time: "25分钟", spicy: 0,
    ingredients: ["猪里脊", "淀粉", "鸡蛋", "番茄酱", "糖", "醋", "生抽"],
    steps: [
      "里脊肉切条，加盐、料酒、蛋液腌10分钟",
      "裹上干淀粉，再蘸湿淀粉糊",
      "油温六成热下锅炸至定型捞出",
      "升高油温复炸至金黄酥脆",
      "另起锅加番茄酱、糖、醋、生抽、水烧成浓稠糖醋汁",
      "倒入里脊条快速翻炒裹汁，撒芝麻出锅"
    ],
    pigComment: "外酥里嫩！糖醋汁裹满每一条！小猪觉得复炸才是酥脆的灵魂，千万不能偷懒只炸一次！",
    source: { platform: "B站", likes: "265.1万", saves: "142.3万" },
    imagePrompt: "tang cu li ji sweet and sour pork tenderloin strips, shatteringly crispy golden battered pork strips coated in glossy bright orange-red sweet and sour sauce, white sesame seeds, sauce dripping in slow motion, piled high on a white plate"
  },
  {
    id: 63, name: "蒜蓉烤生蚝", region: "粤菜", emoji: "🦪🧄",
    difficulty: "简单", time: "15分钟", spicy: 1,
    ingredients: ["生蚝", "大蒜", "小米椒", "葱", "生抽", "蚝油"],
    steps: [
      "生蚝刷洗干净，撬开取半壳",
      "大量蒜末用油小火炒至金黄",
      "加入生抽、蚝油、小米椒碎调成蒜蓉酱",
      "每个生蚝上铺一勺蒜蓉酱",
      "烤箱200度烤8-10分钟",
      "出炉撒葱花，趁热享用"
    ],
    pigComment: "夜市排档的灵魂！蒜香和海鲜的碰撞太绝了！小猪每次路过烧烤摊都走不动道，现在自己烤更过瘾！",
    source: { platform: "抖音", likes: "189.3万", saves: "76.5万" },
    imagePrompt: "garlic roasted oysters on half shell, fresh oysters topped with golden fried garlic paste and red chili bits, sizzling and bubbling in the oven, arranged on a bed of rock salt, nightmarket street food vibes, close-up showing the plump oyster meat"
  },
  {
    id: 64, name: "咖喱鸡肉饭", region: "家常", emoji: "🍛🍗",
    difficulty: "简单", time: "30分钟", spicy: 1,
    ingredients: ["鸡腿", "土豆", "胡萝卜", "洋葱", "咖喱块", "椰奶"],
    steps: [
      "鸡腿去骨切块，土豆胡萝卜切滚刀块，洋葱切丝",
      "锅中炒香洋葱至透明",
      "下鸡块煎至两面金黄",
      "加入土豆和胡萝卜翻炒",
      "倒入热水没过食材，大火烧开转小火炖15分钟",
      "关火加入咖喱块搅拌至融化，加椰奶再煮2分钟，浇在米饭上"
    ],
    pigComment: "一人食神器！浓郁的咖喱汁拌饭能让小猪吃到天荒地老！加了椰奶更丝滑！懒人必备！",
    source: { platform: "小红书", likes: "167.8万", saves: "124.5万" },
    imagePrompt: "Japanese-style curry rice, thick golden curry sauce with tender chicken chunks, soft potato cubes and carrot pieces, poured over a mound of white rice on one side of the plate, creamy coconut milk swirl visible in curry, comfort food one-plate meal"
  },
  {
    id: 65, name: "烤箱蜜汁排骨", region: "家常", emoji: "🍖🍯",
    difficulty: "简单", time: "45分钟", spicy: 0,
    ingredients: ["排骨", "蜂蜜", "生抽", "蚝油", "料酒", "大蒜", "姜", "黑胡椒"],
    steps: [
      "排骨冷水下锅焯水去血沫，捞出洗净",
      "加生抽、蚝油、料酒、蒜末、姜末、黑胡椒腌制4小时",
      "烤盘铺锡纸，排骨摆好",
      "烤箱200度烤20分钟",
      "取出翻面，刷蜂蜜和腌料汁",
      "再烤15分钟至表面焦糖色，出炉撒芝麻"
    ],
    pigComment: "懒人烤箱菜天花板！腌好往烤箱一丢就完事！蜜汁焦香到小猪舔手指都觉得不过瘾！",
    source: { platform: "小红书", likes: "198.4万", saves: "143.7万" },
    imagePrompt: "oven roasted honey glazed spare ribs, dark caramelized ribs with a shiny sticky honey glaze, charred edges and visible bone tips, arranged on a baking sheet lined with foil, white sesame seeds, one rib being pulled apart showing tender juicy meat inside"
  },
  {
    id: 66, name: "番茄虾滑汤", region: "家常", emoji: "🍅🦐",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["虾", "西红柿", "鸡蛋", "淀粉", "葱", "姜", "盐"],
    steps: [
      "虾去壳去虾线，剁成虾泥，加蛋清、淀粉、盐搅打上劲",
      "西红柿切十字，开水烫后去皮切块",
      "锅中少油炒香姜片，加入西红柿炒出红汤",
      "加适量清水煮开",
      "用勺子将虾滑挖成丸子状下锅",
      "虾滑浮起即熟，调味后撒葱花"
    ],
    pigComment: "高蛋白低脂肪！减肥小猪的最爱！番茄的酸甜和虾滑的鲜嫩搭配太妙了！喝完整个人都暖暖的！",
    source: { platform: "小红书", likes: "234.6万", saves: "178.9万" },
    imagePrompt: "tomato shrimp ball soup, bright red tomato broth with plump pink handmade shrimp balls floating, fresh tomato chunks visible, wisps of egg drop, chopped scallion garnish, clear and appetizing soup in a white ceramic bowl, healthy comfort food"
  },
  {
    id: 67, name: "椒盐虾", region: "粤菜", emoji: "🦐🧂",
    difficulty: "简单", time: "15分钟", spicy: 1,
    ingredients: ["大虾", "大蒜", "小米椒", "葱", "椒盐粉", "料酒"],
    steps: [
      "大虾剪去虾须虾枪，开背去虾线",
      "加料酒、少许盐腌5分钟，擦干水分",
      "锅中多油，大虾煎至两面酥脆金红",
      "倒出多余油，加蒜末、小米椒圈爆香",
      "撒入椒盐粉大火翻炒均匀",
      "出锅撒葱花，趁热吃最酥脆"
    ],
    pigComment: "壳都要嚼碎吃掉！椒盐的香和虾的鲜太上头了！小猪吃椒盐虾从来不吐壳，连壳一起嚼才够味！",
    source: { platform: "抖音", likes: "145.7万", saves: "68.3万" },
    imagePrompt: "salt and pepper fried prawns, whole crispy golden-red prawns coated in speckled salt and pepper seasoning, minced garlic bits and red chili rings, crunchy texture visible on shell, piled on a plate, one prawn being picked up by chopsticks"
  },
  {
    id: 68, name: "酱爆茄子", region: "鲁菜", emoji: "🍆",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["茄子", "猪肉末", "甜面酱", "大蒜", "姜", "葱", "生抽", "糖"],
    steps: [
      "茄子切滚刀块，用盐腌10分钟杀水分，挤干",
      "锅中多油，茄子煎至软塌金黄捞出",
      "留底油炒香姜蒜末，下肉末炒散",
      "加甜面酱炒出酱香",
      "倒入茄子翻炒裹酱",
      "调味后大火收汁，撒葱花出锅"
    ],
    pigComment: "茄子吸油又吸酱，每一口都是浓郁酱香！小猪光用酱爆茄子的汁就能拌两碗饭！鲁菜yyds！",
    source: { platform: "B站", likes: "92.4万", saves: "51.6万" },
    imagePrompt: "jiang bao qie zi braised eggplant in bean paste, soft glistening purple-brown eggplant chunks coated in thick dark sweet bean paste sauce with minced pork, caramelized and savory, served on a blue and white plate, chopsticks picking up a piece"
  },
  {
    id: 69, name: "奥尔良烤鸡腿", region: "家常", emoji: "🍗🔥",
    difficulty: "简单", time: "40分钟", spicy: 1,
    ingredients: ["鸡腿", "奥尔良腌料", "蜂蜜", "生抽", "料酒"],
    steps: [
      "鸡腿正反面划几刀深至骨头",
      "加奥尔良腌料、生抽、料酒抓匀，冷藏腌制过夜",
      "烤盘铺锡纸，放上鸡腿",
      "烤箱200度烤20分钟",
      "取出翻面，刷蜂蜜和腌料汁",
      "继续烤15分钟至表面金红焦香"
    ],
    pigComment: "腌过夜的鸡腿才够入味！外焦里嫩汁水四溢！小猪每周末都要烤一批当零食，冰箱必囤！",
    source: { platform: "小红书", likes: "312.5万", saves: "245.1万" },
    imagePrompt: "Orleans roasted chicken legs, deep golden-red roasted chicken drumsticks with crispy caramelized skin, honey glaze glistening, charred spots showing smoky flavor, one leg torn open revealing juicy white meat, on parchment paper in a baking tray"
  },
  {
    id: 70, name: "韩式部队锅", region: "家常", emoji: "🍲🌭",
    difficulty: "简单", time: "20分钟", spicy: 2,
    ingredients: ["方便面", "午餐肉", "芝士", "泡菜", "年糕", "火腿", "豆腐", "鸡蛋", "韩式辣酱"],
    steps: [
      "午餐肉、火腿切片，豆腐切块",
      "锅底铺一层泡菜，四周码放午餐肉、火腿、年糕、豆腐",
      "中间放方便面饼",
      "倒入清水或高汤，加韩式辣酱搅匀",
      "大火煮开后转中火煮5分钟至年糕变软",
      "铺上芝士片和鸡蛋，盖盖焖2分钟"
    ],
    pigComment: "一锅乱炖但就是超好吃！芝士融化拉丝的时候小猪的心也融化了！追剧必备！冬天吃超幸福！",
    source: { platform: "小红书", likes: "276.3万", saves: "189.7万" },
    imagePrompt: "Korean army stew budae jjigae, a bubbling hot pot filled with sliced spam, sausages, ramyeon noodles, rice cakes, kimchi, tofu, melted cheese stretching on top, cracked egg in center, fiery red spicy broth, cozy winter hotpot scene"
  },

  // ===== 新增 71-120 =====
  {
    id: 71, name: "口水鸡", region: "川菜", emoji: "🐔🌶️",
    difficulty: "简单", time: "30分钟", spicy: 3,
    ingredients: ["鸡腿", "花椒", "干辣椒", "花生", "芝麻", "大蒜", "姜", "葱", "生抽", "醋", "糖"],
    steps: ["鸡腿冷水下锅加姜葱料酒煮20分钟","捞出冰水浸泡15分钟","切块摆盘","调汁：红油辣椒、花椒油、生抽、醋、糖、蒜泥混合","浇汁在鸡肉上，撒花生碎和芝麻"],
    pigComment: "光听名字就流口水！麻辣鲜香酸甜全占了！小猪每次口水鸡的红油都要拌到饭里吃，一滴不剩！",
    source: { platform: "抖音", likes: "267.3万", saves: "134.8万" },
    imagePrompt: "kou shui ji Sichuan mouth-watering chicken, cold poached chicken pieces drowned in a pool of bright red chili oil with visible Sichuan peppercorns, crushed peanuts, white sesame seeds, scallion rings, glistening and seductive"
  },
  {
    id: 72, name: "担担面", region: "川菜", emoji: "🍜🌶️",
    difficulty: "中等", time: "25分钟", spicy: 2,
    ingredients: ["面条", "猪肉末", "芽菜", "花椒", "干辣椒", "芝麻酱", "生抽", "醋", "葱"],
    steps: ["肉末加料酒炒散，加芽菜炒香备用","碗底调汁：芝麻酱、辣椒油、花椒粉、生抽、醋、糖","面条煮熟捞入碗中","铺上炒好的肉末和芽菜","撒葱花和花生碎，拌匀食用"],
    pigComment: "一碗面吃出百味人生！芝麻酱和辣椒油的碰撞太绝了！小猪每次都要加双倍辣椒油！",
    source: { platform: "B站", likes: "89.6万", saves: "47.2万" },
    imagePrompt: "dan dan mian Sichuan noodles, thin wheat noodles in a rich reddish sesame and chili sauce, topped with crispy minced pork and preserved vegetables, chopped scallion and peanuts, close-up of chopsticks lifting noodles with sauce dripping"
  },
  {
    id: 73, name: "京酱肉丝", region: "京菜", emoji: "🥩🥬",
    difficulty: "中等", time: "20分钟", spicy: 0,
    ingredients: ["猪里脊", "甜面酱", "豆腐皮", "葱", "黄瓜", "姜", "料酒", "淀粉"],
    steps: ["里脊肉切丝，加料酒、淀粉、蛋清腌15分钟","锅中宽油滑熟肉丝捞出","留底油，下甜面酱小火炒出酱香","倒入肉丝翻炒裹酱","豆腐皮铺平，放肉丝、葱丝、黄瓜丝卷着吃"],
    pigComment: "卷着吃才过瘾！甜面酱裹着嫩肉丝配脆葱丝，咬一口层次感爆炸！小猪能卷十个不停嘴！",
    source: { platform: "抖音", likes: "112.4万", saves: "58.7万" },
    imagePrompt: "jing jiang rou si Beijing sauce shredded pork, tender pork strips coated in glossy dark sweet bean sauce, served with thin tofu skin wraps, julienned cucumber and scallion whites, one wrap being rolled up showing the filling"
  },
  {
    id: 74, name: "葱油拌面", region: "家常", emoji: "🍝🧅",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["面条", "葱", "生抽", "老抽", "糖", "香油"],
    steps: ["大量小葱切段备用","锅中多油小火慢慢炸葱至深棕色酥脆","调汁：生抽、老抽、糖、少许开水混合","面条煮熟捞出","浇上葱油和调味汁，拌匀即可"],
    pigComment: "最简单的面却最让人上瘾！葱油的焦香能把小猪的馋虫全勾出来！深夜一碗葱油面治愈一切！",
    source: { platform: "小红书", likes: "356.7万", saves: "278.4万" },
    imagePrompt: "cong you ban mian scallion oil noodles, glistening noodles coated in dark caramelized scallion oil, deeply browned crispy fried scallion bits scattered on top, simple but irresistible, chopsticks pulling noodles upward, oil dripping, midnight snack vibes"
  },
  {
    id: 75, name: "红烧茄子", region: "家常", emoji: "🍆🔥",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["茄子", "大蒜", "姜", "葱", "生抽", "老抽", "糖", "醋", "淀粉"],
    steps: ["茄子切滚刀块，盐腌10分钟挤水","锅中多油煎茄子至两面金黄","另起锅炒香蒜末姜末","加生抽、老抽、糖、醋、水调成汁","倒入茄子烧至入味，勾薄芡撒葱花"],
    pigComment: "茄子界的天花板！软糯到入口即化！小猪觉得茄子吸满汤汁的那一刻就是世界上最幸福的食物！",
    source: { platform: "抖音", likes: "198.5万", saves: "123.6万" },
    imagePrompt: "hong shao qie zi braised eggplant, soft glossy eggplant chunks in a rich dark soy-based sauce, caramelized and glistening, garnished with scallion, served on a white plate, comfort home cooking"
  },
  {
    id: 76, name: "黄焖鸡米饭", region: "鲁菜", emoji: "🍗🍚",
    difficulty: "简单", time: "30分钟", spicy: 1,
    ingredients: ["鸡腿", "青椒", "土豆", "香菇", "姜", "大蒜", "生抽", "老抽", "料酒", "糖"],
    steps: ["鸡腿剁小块焯水洗净","锅中油热，下姜蒜爆香，放鸡块煎至微黄","加生抽、老抽、料酒、糖翻炒上色","加入土豆块、香菇和热水没过食材","大火烧开转小火焖20分钟","加青椒翻炒收汁，配米饭食用"],
    pigComment: "国民快餐在家也能做！鸡肉软烂入味，汤汁拌饭绝绝子！小猪觉得比外面的还好吃十倍！",
    source: { platform: "抖音", likes: "445.2万", saves: "267.8万" },
    imagePrompt: "huang men ji braised chicken with rice, golden-brown braised chicken pieces with soft potato chunks and shiitake mushrooms in a thick savory sauce, served in a clay pot next to a bowl of steamed white rice, comfort fast food style"
  },
  {
    id: 77, name: "豉汁蒸排骨", region: "粤菜", emoji: "🥩🫘",
    difficulty: "简单", time: "25分钟", spicy: 0,
    ingredients: ["排骨", "豆豉", "大蒜", "姜", "生抽", "蚝油", "淀粉", "红椒"],
    steps: ["排骨剁小段，冲洗干净泡去血水","加豆豉、蒜末、姜末、生抽、蚝油、淀粉、油腌20分钟","放入盘中铺平","蒸锅大火蒸15分钟","出锅撒红椒圈和葱花"],
    pigComment: "茶楼经典！豆豉香气渗透到每一块排骨里！小猪去喝早茶必点这道！现在自己蒸更划算！",
    source: { platform: "小红书", likes: "87.3万", saves: "62.1万" },
    imagePrompt: "chi zhi zheng pai gu steamed spare ribs with black bean sauce, small rib segments glistening with dark fermented black bean sauce and minced garlic, red chili rings on top, steamed in a dim sum bamboo steamer, classic Cantonese yum cha"
  },
  {
    id: 78, name: "煲仔饭", region: "粤菜", emoji: "🍚🥘",
    difficulty: "中等", time: "35分钟", spicy: 0,
    ingredients: ["米饭", "腊肠", "腊肉", "鸡蛋", "青菜", "生抽", "老抽", "糖", "香油"],
    steps: ["砂锅内壁刷油，米洗净加水浸泡30分钟","大火烧开转最小火焖15分钟","腊肠腊肉切片铺在饭上，打入鸡蛋","盖盖继续焖5分钟","关火后沿锅边淋入混合好的酱油汁","焖2分钟，放入烫熟的青菜，刮起锅巴拌匀"],
    pigComment: "锅巴才是灵魂！焦香酥脆的锅巴蘸着酱油汁，小猪能把整个砂锅刮干净！腊味飘香满屋子！",
    source: { platform: "B站", likes: "156.7万", saves: "98.4万" },
    imagePrompt: "claypot rice bao zai fan, sizzling in a traditional clay pot, sliced Chinese sausage and cured meat on top of rice, a sunny-side-up egg in center, dark soy sauce drizzled, crispy golden rice crust visible on edges, blanched bok choy garnish, steam rising"
  },
  {
    id: 79, name: "大盘鸡", region: "西北菜", emoji: "🍗🫑",
    difficulty: "中等", time: "40分钟", spicy: 2,
    ingredients: ["鸡腿", "土豆", "青椒", "红椒", "洋葱", "干辣椒", "花椒", "姜", "大蒜", "生抽", "老抽", "面条"],
    steps: ["鸡腿剁块焯水，土豆切大块","锅中炒糖色，下鸡块翻炒上色","加姜蒜、干辣椒、花椒爆香","加生抽、老抽、料酒调味","倒入热水没过食材，加土豆大火烧开转小火炖20分钟","加青红椒和洋葱翻炒收汁，配宽面条拌汤汁吃"],
    pigComment: "新疆饭馆的灵魂！鸡肉酥烂土豆绵软，但面条蘸汤才是真正的主角！小猪光吃面就能吃两盘！",
    source: { platform: "抖音", likes: "378.9万", saves: "198.6万" },
    imagePrompt: "da pan ji big plate chicken, a massive plate of braised chicken chunks with soft potato wedges, green and red pepper slices, wide hand-pulled belt noodles underneath soaking up the rich spicy sauce, hearty northwestern Chinese feast"
  },
  {
    id: 80, name: "羊肉泡馍", region: "西北菜", emoji: "🐑🫓",
    difficulty: "复杂", time: "60分钟", spicy: 0,
    ingredients: ["羊肉", "馍", "粉丝", "木耳", "大蒜", "姜", "葱", "香菜"],
    steps: ["羊肉冷水下锅焯水去膻","另起锅加清水、姜葱、香料炖羊肉1.5小时","馍掰成黄豆大小的碎块","羊肉汤烧开，下馍粒、粉丝、木耳煮3分钟","盛入碗中铺上羊肉片","配糖蒜、辣酱和香菜食用"],
    pigComment: "掰馍是仪式感！越碎越好吃！小猪每次掰馍都掰得超级细，泡在浓汤里吸满汁，太幸福了！",
    imagePrompt: "yang rou pao mo lamb soup with broken bread, rich milky lamb broth with tiny hand-torn bread pieces soaking in soup, tender lamb slices, glass noodles, wood ear mushrooms, garnished with cilantro and chili oil, traditional Shaanxi ceramic bowl"
  },
  {
    id: 81, name: "过桥米线", region: "云贵菜", emoji: "🍜🌿",
    difficulty: "中等", time: "30分钟", spicy: 0,
    ingredients: ["米线", "鸡胸肉", "鹌鹑蛋", "豆腐皮", "韭菜", "豆芽", "鸡汤"],
    steps: ["鸡胸肉切薄片，各种蔬菜洗净切好","熬制浓郁鸡汤，表面要有一层油封住热量","大碗盛入滚烫鸡汤","依次放入生肉片（汤会烫熟）、鹌鹑蛋","再放入米线和蔬菜","轻轻搅拌，鲜美即食"],
    pigComment: "先涮肉再下菜的仪式感太棒了！鸡汤鲜美到小猪想把碗都舔干净！在昆明吃过一次就念念不忘！",
    source: { platform: "小红书", likes: "134.5万", saves: "89.7万" },
    imagePrompt: "guo qiao mi xian crossing bridge rice noodles, a large bowl of milky golden chicken broth with a layer of oil on surface, surrounded by small plates of raw thin-sliced chicken, quail eggs, vegetables, tofu skin, rice noodles ready to be dipped in, Yunnan cuisine spread"
  },
  {
    id: 82, name: "酸辣粉", region: "川菜", emoji: "🍜🌶️",
    difficulty: "简单", time: "15分钟", spicy: 2,
    ingredients: ["红薯粉", "花生", "黄豆", "醋", "辣椒油", "大蒜", "葱", "香菜", "芽菜"],
    steps: ["红薯粉提前泡软","花生和黄豆分别炸酥","碗底放蒜泥、辣椒油、醋、生抽、花椒粉","粉条煮熟连汤倒入碗中","撒上花生碎、黄豆、芽菜、香菜、葱花"],
    pigComment: "酸到皱眉辣到冒汗但就是停不下来！红薯粉Q弹爽滑！小猪每次都要加醋加到不能再加！",
    source: { platform: "抖音", likes: "234.8万", saves: "156.3万" },
    imagePrompt: "suan la fen sour and spicy sweet potato noodles, translucent bouncy red sweet potato noodles in a dark vinegar and chili oil broth, topped with crushed peanuts, fried soybeans, preserved vegetables, cilantro, fiery red oil pooling on surface"
  },
  {
    id: 83, name: "啤酒鸭", region: "家常", emoji: "🦆🍺",
    difficulty: "中等", time: "45分钟", spicy: 1,
    ingredients: ["鸭", "啤酒", "姜", "大蒜", "干辣椒", "八角", "桂皮", "生抽", "老抽", "糖"],
    steps: ["鸭肉剁块焯水洗净","锅中少油煎鸭块至出油微黄","加姜蒜、干辣椒、八角、桂皮爆香","倒入一整瓶啤酒","加生抽、老抽、糖调味","大火烧开转小火炖30分钟至鸭肉酥烂","大火收汁即可"],
    pigComment: "啤酒去膻增香！鸭肉炖到酥烂入味！小猪觉得啤酒的麦芽香和鸭肉简直是天作之合！",
    source: { platform: "B站", likes: "76.8万", saves: "43.2万" },
    imagePrompt: "pi jiu ya beer braised duck, dark brown braised duck pieces in a rich beer-infused sauce with star anise and cinnamon bark visible, glistening and tender, served in a deep plate, empty beer bottle in background"
  },
  {
    id: 84, name: "油焖大虾", region: "鲁菜", emoji: "🦐🔥",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["大虾", "葱", "姜", "料酒", "糖", "醋", "生抽", "番茄酱"],
    steps: ["大虾剪须去虾线，背部剪开","锅中油热，大虾煎至两面红","加姜丝、葱段爆香","加料酒、糖、醋、生抽、番茄酱和少许水","大火收汁至浓稠裹满虾身","出锅码盘"],
    pigComment: "红亮油润超有食欲！大虾连壳都入味了！小猪吃油焖大虾就是要大口吃，吃完吮指才过瘾！",
    source: { platform: "抖音", likes: "189.4万", saves: "94.7万" },
    imagePrompt: "you men da xia oil-braised prawns, large whole prawns glistening in a glossy sweet and savory red sauce, bright red shells, scallion garnish, arranged in a fan pattern on an oval plate, each prawn plump and succulent"
  },
  {
    id: 85, name: "松鼠鳜鱼", region: "苏菜", emoji: "🐟🐿️",
    difficulty: "复杂", time: "40分钟", spicy: 0,
    ingredients: ["鳜鱼", "番茄酱", "糖", "醋", "淀粉", "松子", "豌豆", "虾仁"],
    steps: ["鳜鱼去骨，鱼肉切交叉花刀不切断鱼皮","拍干淀粉，抖去多余粉","油温七成热，提鱼尾下锅炸至金黄定型","炸至酥脆捞出摆盘","锅中调番茄酱、糖、醋、水烧成糖醋汁","浇在鱼身上，撒松子和豌豆"],
    pigComment: "宴席上的C位！炸好的鱼身张开像松鼠尾巴！淋汁那一刻发出嗞嗞声，全桌都在鼓掌！小猪崇拜！",
    imagePrompt: "song shu gui yu squirrel-shaped mandarin fish, whole deep-fried fish scored into a blooming pattern resembling a squirrel tail, bright orange-red sweet and sour sauce poured over creating sizzling sound, pine nuts and green peas scattered, spectacular banquet presentation"
  },
  {
    id: 86, name: "铁锅炖大鹅", region: "东北菜", emoji: "🪿🫕",
    difficulty: "中等", time: "60分钟", spicy: 1,
    ingredients: ["鹅", "土豆", "粉条", "酸菜", "八角", "桂皮", "姜", "大蒜", "生抽", "老抽"],
    steps: ["鹅肉剁大块焯水","锅中炒糖色，下鹅肉翻炒上色","加姜蒜、八角、桂皮爆香","加生抽老抽调味，倒入热水","大火烧开转小火炖40分钟","加土豆块和酸菜继续炖15分钟","最后下粉条煮5分钟"],
    pigComment: "东北铁锅炖系列的王者！鹅肉紧实有嚼劲，酸菜解腻！小猪冬天最想围着大铁锅吃这个！暖到心里！",
    source: { platform: "抖音", likes: "156.3万", saves: "78.9万" },
    imagePrompt: "tie guo dun da e iron pot stewed goose, a large cast iron pot filled with braised goose chunks, potato pieces, sauerkraut, and glass noodles in a rich brown broth, rustic northeastern countryside kitchen setting, steam and warmth"
  },
  {
    id: 87, name: "佛跳墙", region: "闽菜", emoji: "🏺✨",
    difficulty: "复杂", time: "120分钟", spicy: 0,
    ingredients: ["鲍鱼", "海参", "鱼翅", "花胶", "瑶柱", "鸡", "排骨", "香菇"],
    steps: ["各种干货提前泡发处理","鸡和排骨熬制高汤","所有食材分层码入坛中","倒入高汤和料酒","封口小火慢炖2-3小时","开坛即飘满屋浓香"],
    pigComment: "传说中的满汉全席头菜！一坛子全是宝贝！小猪这辈子吃过一次就再也忘不了那个鲜字！",
    imagePrompt: "fo tiao qiang Buddha jumps over the wall, a traditional sealed clay jar being opened revealing a luxurious golden broth with abalone, sea cucumber, fish maw, scallops, and mushrooms, steam billowing out dramatically, imperial-level Fujian cuisine"
  },
  {
    id: 88, name: "贵州酸汤鱼", region: "云贵菜", emoji: "🐟🍅",
    difficulty: "中等", time: "30分钟", spicy: 2,
    ingredients: ["草鱼", "西红柿", "酸汤", "木姜子", "姜", "大蒜", "葱", "香菜", "小米椒"],
    steps: ["草鱼切块加盐和料酒腌10分钟","西红柿炒出红汤","加入贵州红酸汤烧开","放入鱼块煮至变白","加木姜子油提香","出锅撒香菜和小米椒圈"],
    pigComment: "贵州人的灵魂！这个酸和醋酸完全不一样！发酵出来的酸鲜无比！小猪在贵阳吃到人生新高度！",
    source: { platform: "抖音", likes: "167.8万", saves: "89.3万" },
    imagePrompt: "Guizhou suan tang yu sour soup fish, bright crimson-red fermented tomato sour broth with whole fish pieces, unique woody aroma from mu jiang zi oil, fresh tomato chunks, cilantro, sliced chili peppers floating, served in a traditional clay pot"
  },
  {
    id: 89, name: "鸡公煲", region: "家常", emoji: "🍗🫕",
    difficulty: "中等", time: "35分钟", spicy: 2,
    ingredients: ["鸡腿", "土豆", "洋葱", "青椒", "干辣椒", "豆瓣酱", "大蒜", "姜", "啤酒"],
    steps: ["鸡腿剁块焯水，土豆切块","锅中炒香豆瓣酱和干辣椒","下鸡块大火翻炒上色","加姜蒜、生抽、老抽调味","倒入半瓶啤酒和土豆，焖煮20分钟","加洋葱和青椒翻炒收汁"],
    pigComment: "饭店最火的砂锅菜！酱香浓郁超级下饭！小猪每次点外卖都忍不住点鸡公煲，现在学会自己做更爽！",
    source: { platform: "小红书", likes: "198.6万", saves: "134.5万" },
    imagePrompt: "ji gong bao chicken clay pot, a bubbling sizzling clay pot filled with braised chicken chunks, soft potato cubes, onion wedges, and green peppers in a thick spicy dark sauce, restaurant style presentation"
  },
  {
    id: 90, name: "水煮虾", region: "家常", emoji: "🦐💧",
    difficulty: "简单", time: "10分钟", spicy: 0,
    ingredients: ["大虾", "姜", "葱", "料酒", "盐"],
    steps: ["大虾剪须去虾线，洗净","锅中水烧开，加姜片、葱段、料酒","大虾下锅煮至变红弯曲（约2-3分钟）","捞出沥水装盘","配蘸料食用：生抽+醋+蒜末+姜末"],
    pigComment: "最简单最鲜甜！好虾不需要复杂做法！小猪觉得水煮虾蘸着蒜醋汁吃就是人间至味！",
    source: { platform: "小红书", likes: "89.4万", saves: "56.7万" },
    imagePrompt: "shui zhu xia boiled whole shrimp, plump bright orange-red boiled shrimp piled on a plate, perfectly curled, a small dipping bowl of ginger vinegar garlic sauce beside it, clean simple presentation, fresh seafood"
  },
  {
    id: 91, name: "干煸四季豆", region: "川菜", emoji: "🫛🌶️",
    difficulty: "简单", time: "15分钟", spicy: 1,
    ingredients: ["四季豆", "猪肉末", "芽菜", "干辣椒", "花椒", "大蒜", "姜", "生抽"],
    steps: ["四季豆掐头去筋撕成段","锅中多油，四季豆炸至表皮起皱捞出","留底油炒香肉末至酥","加干辣椒、花椒、姜蒜、芽菜爆香","倒入四季豆大火翻炒","加生抽调味出锅"],
    pigComment: "干煸到起虎皮才好吃！四季豆吸满了肉末和芽菜的香气！小猪觉得这是下饭蔬菜里的no.1！",
    source: { platform: "B站", likes: "67.8万", saves: "38.9万" },
    imagePrompt: "gan bian si ji dou dry-fried green beans, wrinkled blistered green beans stir-fried with crispy minced pork, preserved vegetables, dried red chilies, and Sichuan peppercorns, dry fragrant texture, served on a round plate"
  },
  {
    id: 92, name: "蛋黄焗南瓜", region: "家常", emoji: "🎃🥚",
    difficulty: "中等", time: "20分钟", spicy: 0,
    ingredients: ["南瓜", "咸蛋黄", "淀粉", "糖", "盐"],
    steps: ["南瓜去皮切条，裹薄淀粉","油炸至金黄酥脆捞出","咸蛋黄蒸熟压碎","锅中少油小火炒蛋黄至起泡","倒入南瓜条快速翻炒裹匀蛋黄","金沙状态出锅"],
    pigComment: "咸蛋黄裹满南瓜的那一刻太惊艳了！金沙效果闪闪发光！小猪每次都要把盘子里的蛋黄渣都扫干净！",
    source: { platform: "小红书", likes: "145.2万", saves: "98.7万" },
    imagePrompt: "dan huang ju nan gua salted egg yolk pumpkin, golden pumpkin strips coated in a sandy crumbly salted egg yolk crust, each piece shimmering with golden sand-like texture, stacked on a plate, luxurious golden tones"
  },
  {
    id: 93, name: "泡椒凤爪", region: "川菜", emoji: "🐔🌶️",
    difficulty: "简单", time: "20分钟（+腌4小时）", spicy: 2,
    ingredients: ["鸡爪", "泡椒", "花椒", "八角", "姜", "大蒜", "醋", "料酒", "白糖"],
    steps: ["鸡爪剪指甲对半切，冷水下锅焯水","另起锅加水、八角、花椒、姜片煮鸡爪15分钟","捞出冰水浸泡至完全冷却","泡椒、泡椒水、蒜、醋、糖、盐调成腌汁","鸡爪放入腌汁中，冷藏腌4小时以上"],
    pigComment: "追剧零食之王！酸辣脆爽越吃越上瘾！小猪的冰箱里常年备着一盆泡椒凤爪，随时开吃！",
    source: { platform: "小红书", likes: "267.8万", saves: "187.3万" },
    imagePrompt: "pao jiao feng zhua pickled pepper chicken feet, plump pale chicken feet in a clear spicy pickled pepper brine with bright yellow and red pickled peppers, garlic cloves, in a glass container, tangy and crunchy snack"
  },
  {
    id: 94, name: "凉拌黄瓜", region: "家常", emoji: "🥒🥢",
    difficulty: "简单", time: "5分钟", spicy: 1,
    ingredients: ["黄瓜", "大蒜", "干辣椒", "醋", "生抽", "香油", "糖", "盐"],
    steps: ["黄瓜拍碎切段","蒜末、干辣椒碎用热油泼出香味","加醋、生抽、香油、糖、盐调汁","浇在黄瓜上拌匀","冷藏10分钟更爽口"],
    pigComment: "5分钟搞定的开胃神器！拍黄瓜的时候最解压！小猪夏天天天吃这个，清爽到飞起！",
    source: { platform: "抖音", likes: "456.7万", saves: "312.4万" },
    imagePrompt: "liang ban huang gua smashed cucumber salad, roughly smashed cucumber chunks drizzled with glistening chili oil and garlic sauce, red chili flakes, sesame seeds, refreshing and crunchy, simple white plate, summer appetizer"
  },
  {
    id: 95, name: "红烧牛腩", region: "家常", emoji: "🥩🫕",
    difficulty: "中等", time: "90分钟", spicy: 0,
    ingredients: ["牛腩", "土豆", "胡萝卜", "八角", "桂皮", "姜", "葱", "生抽", "老抽", "料酒"],
    steps: ["牛腩切块冷水焯水去浮沫","锅中炒糖色至琥珀色","下牛腩翻炒裹色","加姜葱、八角、桂皮、生抽、老抽、料酒","加开水没过牛腩，大火烧开转小火炖60分钟","加土豆和胡萝卜继续炖20分钟","大火收汁"],
    pigComment: "慢炖才出真味道！牛腩炖到用筷子一夹就断！小猪觉得等待的两小时绝对值得，配面条更绝！",
    source: { platform: "B站", likes: "134.5万", saves: "89.6万" },
    imagePrompt: "hong shao niu nan red braised beef brisket, fall-apart tender beef brisket chunks with soft potato and carrot pieces in a thick dark glossy braising sauce, star anise and cinnamon visible, served in a deep clay pot"
  },
  {
    id: 96, name: "铁板豆腐", region: "家常", emoji: "🫘🔥",
    difficulty: "简单", time: "10分钟", spicy: 1,
    ingredients: ["豆腐", "鸡蛋", "大蒜", "小米椒", "葱", "孜然", "辣椒粉", "生抽"],
    steps: ["豆腐切厚片，裹薄蛋液","平底锅刷油，小火煎豆腐至两面金黄","调汁：生抽、蚝油、糖、水混合","淋在豆腐上，小火收至微干","撒蒜末、小米椒、孜然粉、辣椒粉","大火爆香，撒葱花出锅"],
    pigComment: "路边摊的味道在家也能做！外焦里嫩加上孜然香太上头了！小猪每次路过铁板摊都走不动道！",
    source: { platform: "抖音", likes: "345.6万", saves: "234.5万" },
    imagePrompt: "tie ban dou fu iron plate tofu, golden pan-fried tofu slices sizzling on a hot iron plate, drizzled with savory sauce, sprinkled with cumin, chili powder, minced garlic and green scallion, street food vibes, smoke and sizzle"
  },
  {
    id: 97, name: "照烧鸡腿饭", region: "家常", emoji: "🍗🍚",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["鸡腿", "生抽", "蜂蜜", "味啉", "糖", "西兰花", "米饭"],
    steps: ["鸡腿去骨，皮面朝下用叉子扎孔","平底锅不放油，皮面朝下煎至金黄出油","翻面煎至八成熟","倒入照烧汁（生抽、蜂蜜、味啉、糖）","小火收汁至浓稠裹满鸡腿","切片铺在米饭上，配西兰花"],
    pigComment: "日式快餐在家做！鸡皮煎到焦脆浇上照烧汁太无敌了！小猪觉得比吉野家的还好吃！",
    source: { platform: "小红书", likes: "267.3万", saves: "198.4万" },
    imagePrompt: "teriyaki chicken leg rice bowl, sliced golden-brown chicken thigh with crispy skin glazed in thick glossy teriyaki sauce, placed over steamed white rice, blanched broccoli and pickled ginger on the side, Japanese donburi style"
  },
  {
    id: 98, name: "糖醋虾", region: "家常", emoji: "🦐🍬",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["大虾", "番茄酱", "糖", "醋", "生抽", "淀粉", "姜", "葱"],
    steps: ["大虾去虾线，背部剪开","虾裹薄淀粉","油温六成热炸至金红酥脆","锅中留底油，加番茄酱、糖、醋、生抽烧成糖醋汁","倒入炸虾快速翻炒裹汁","撒葱花出锅"],
    pigComment: "酸甜酥脆一口一个根本停不下来！小猪觉得炸过的虾壳都变得酥脆可吃，连壳带肉一起嚼！",
    imagePrompt: "tang cu xia sweet and sour shrimp, crispy golden battered whole shrimp coated in a glossy bright orange-red sweet and sour sauce, scallion garnish, each shrimp glistening, piled high on a plate"
  },
  {
    id: 99, name: "毛氏红烧肉", region: "湘菜", emoji: "🥩🔴",
    difficulty: "中等", time: "60分钟", spicy: 1,
    ingredients: ["五花肉", "干辣椒", "八角", "桂皮", "姜", "大蒜", "生抽", "老抽", "糖", "料酒"],
    steps: ["五花肉切大块焯水","锅中炒糖色至深琥珀","下五花肉翻炒上色","加姜蒜、干辣椒、八角、桂皮","加生抽、老抽、料酒和开水","大火烧开转小火慢炖50分钟","大火收汁至浓稠"],
    pigComment: "伟人最爱的红烧肉！比普通版多了辣椒的香气！入口即化肥而不腻！小猪觉得这才是红烧肉的终极版！",
    source: { platform: "B站", likes: "187.3万", saves: "102.6万" },
    imagePrompt: "Mao shi hong shao rou Chairman Mao style red braised pork, large cubes of caramelized pork belly with a deep reddish-brown glaze, dried red chilies visible, rich thick sauce, traditional Hunan style, served in a deep bowl"
  },
  {
    id: 100, name: "烤羊肉串", region: "西北菜", emoji: "🍢🐑",
    difficulty: "简单", time: "20分钟", spicy: 2,
    ingredients: ["羊肉", "洋葱", "孜然", "辣椒粉", "盐", "花椒粉"],
    steps: ["羊肉切2cm方块，加洋葱碎、盐腌30分钟","穿入竹签，肥瘦相间","烤箱230度或炭火烤","烤5分钟翻面","撒大量孜然、辣椒粉、花椒粉","再烤3分钟至边缘微焦"],
    pigComment: "夏天配啤酒的灵魂搭档！孜然和羊肉的组合是人类最伟大的发明！小猪一次能吃20串不带停的！",
    source: { platform: "抖音", likes: "278.9万", saves: "134.5万" },
    imagePrompt: "roasted lamb skewers yang rou chuan, sizzling lamb cubes on bamboo skewers with charred edges, heavily dusted with cumin seeds and red chili powder, fat dripping and sizzling on charcoal grill, nighttime street food atmosphere"
  },
  {
    id: 101, name: "蒜蓉西兰花", region: "家常", emoji: "🥦🧄",
    difficulty: "简单", time: "8分钟", spicy: 0,
    ingredients: ["西兰花", "大蒜", "蚝油", "盐"],
    steps: ["西兰花掰小朵，焯水1分钟捞出","锅中油热，爆香大量蒜末","下西兰花大火快炒","加蚝油和少许盐调味","翻炒均匀即可出锅"],
    pigComment: "减脂期小猪的救命菜！3分钟出锅！蒜香让本来平平无奇的西兰花变得超好吃！健康又美味！",
    source: { platform: "小红书", likes: "178.9万", saves: "145.6万" },
    imagePrompt: "garlic stir-fried broccoli, bright vivid green broccoli florets glistening with oyster sauce and golden minced garlic, quick wok-fried with visible wok hei, healthy and vibrant, clean simple plating"
  },
  {
    id: 102, name: "东北乱炖", region: "东北菜", emoji: "🥘🫕",
    difficulty: "简单", time: "30分钟", spicy: 0,
    ingredients: ["五花肉", "白菜", "土豆", "粉条", "玉米", "排骨", "豆腐"],
    steps: ["排骨和五花肉焯水","锅中炒肉至出油","加入土豆、玉米段翻炒","倒入开水大火煮开","加白菜、豆腐、粉条","小火炖20分钟至所有食材软烂","调味出锅"],
    pigComment: "东北人的哲学就是啥都能炖！看着乱七八糟但每样食材都吸满了汤汁！小猪冬天最爱这一大锅！",
    imagePrompt: "dong bei luan dun northeast big stew, a massive pot filled with pork belly, napa cabbage, potato chunks, corn segments, glass noodles, and tofu all simmered together in a rich broth, rustic hearty countryside comfort food"
  },
  {
    id: 103, name: "椒麻鸡", region: "川菜", emoji: "🐔🌿",
    difficulty: "简单", time: "30分钟", spicy: 2,
    ingredients: ["鸡腿", "花椒", "青花椒", "葱", "姜", "生抽", "醋", "香油", "芝麻"],
    steps: ["鸡腿冷水下锅加姜葱煮熟","捞出冰水浸泡","切块摆盘","大量花椒和青花椒炸油，加葱花","调入生抽、醋、糖、鸡汤","浇在鸡块上，撒芝麻"],
    pigComment: "麻到嘴唇发颤但就是停不了！青花椒的清香太绝了！小猪每次吃完嘴巴都在跳舞！",
    source: { platform: "抖音", likes: "134.6万", saves: "72.3万" },
    imagePrompt: "jiao ma ji Sichuan numbing spicy chicken, cold poached chicken pieces drenched in a fragrant green and red Sichuan peppercorn oil with scallion, sesame seeds, intensely aromatic and numbing, dark greenish tinged oil"
  },
  {
    id: 104, name: "白灼生菜", region: "粤菜", emoji: "🥬💧",
    difficulty: "简单", time: "5分钟", spicy: 0,
    ingredients: ["生菜", "大蒜", "蚝油", "生抽", "糖"],
    steps: ["水烧开加少许油和盐","生菜焯水30秒捞出摆盘","蒜末用热油爆香","加蚝油、生抽、糖和少许水烧成蚝油汁","淋在生菜上即可"],
    pigComment: "粤菜的灵魂在于食材本味！脆嫩的生菜配蚝油汁就是大道至简！小猪觉得吃蔬菜也可以很幸福！",
    imagePrompt: "bai zhuo sheng cai blanched lettuce with oyster sauce, bright green crisp whole lettuce leaves arranged elegantly, drizzled with a glossy dark oyster sauce and golden fried garlic bits, clean minimalist Cantonese presentation"
  },
  {
    id: 105, name: "肉末茄子", region: "家常", emoji: "🍆🥩",
    difficulty: "简单", time: "15分钟", spicy: 1,
    ingredients: ["茄子", "猪肉末", "大蒜", "姜", "葱", "豆瓣酱", "生抽", "糖"],
    steps: ["茄子切条，用盐腌出水挤干","锅中多油煎茄子软塌捞出","留底油炒香肉末","加豆瓣酱、蒜末、姜末炒出红油","倒入茄子翻炒裹酱","加少许水焖2分钟，收汁撒葱花"],
    pigComment: "肉末和茄子是天生一对！茄子吸满了肉香和酱香！小猪觉得这就是家的味道，百吃不厌！",
    source: { platform: "抖音", likes: "223.4万", saves: "156.7万" },
    imagePrompt: "rou mo qie zi minced pork with eggplant, soft melting eggplant strips mixed with savory minced pork in a dark chili bean paste sauce, glistening and richly flavored, garnished with scallion, classic home cooking"
  },
  {
    id: 106, name: "麻辣小龙虾", region: "家常", emoji: "🦞🌶️",
    difficulty: "中等", time: "30分钟", spicy: 3,
    ingredients: ["小龙虾", "干辣椒", "花椒", "大蒜", "姜", "葱", "啤酒", "豆瓣酱"],
    steps: ["小龙虾刷洗干净，去虾线","锅中多油爆香大量干辣椒和花椒","加姜蒜、豆瓣酱炒出红油","下小龙虾大火翻炒至变红","倒入啤酒和调味料","加盖焖煮10分钟","大火收汁，撒葱花"],
    pigComment: "夏天没有小龙虾的夜晚是不完整的！麻辣鲜香吸吮虾头的时候是最快乐的！小猪能吃3斤不带停！",
    source: { platform: "抖音", likes: "567.8万", saves: "345.2万" },
    imagePrompt: "ma la xiao long xia spicy crawfish, a mountain of bright red spicy crawfish piled high, coated in glistening chili oil with dried chilies and Sichuan peppercorns, beer bottles in background, nightlife summer eating scene"
  },
  {
    id: 107, name: "葱姜炒蟹", region: "粤菜", emoji: "🦀🧅",
    difficulty: "中等", time: "20分钟", spicy: 0,
    ingredients: ["螃蟹", "葱", "姜", "料酒", "生抽", "糖", "淀粉"],
    steps: ["螃蟹处理干净，对半切开","切口处蘸干淀粉锁住蟹黄","锅中油热，蟹切口朝下煎至变红","加大量姜片和葱段爆香","加料酒、生抽、糖和少许水","大火翻炒收汁"],
    pigComment: "秋天吃蟹的最佳方式！葱姜的香和蟹的鲜完美融合！小猪吃蟹从来不嫌麻烦，一个人能啃俩小时！",
    source: { platform: "B站", likes: "98.7万", saves: "56.4万" },
    imagePrompt: "cong jiang chao xie ginger scallion stir-fried crab, bright red crab pieces with visible golden roe, thick scallion segments and ginger slices, glossy savory sauce coating each piece, wok-tossed action, autumn delicacy"
  },
  {
    id: 108, name: "酸豆角炒肉末", region: "湘菜", emoji: "🫘🥩",
    difficulty: "简单", time: "10分钟", spicy: 1,
    ingredients: ["酸豆角", "猪肉末", "干辣椒", "大蒜", "姜", "生抽"],
    steps: ["酸豆角切小丁","锅中少油炒散肉末至变色","加干辣椒、蒜末爆香","倒入酸豆角大火翻炒3分钟","加少许生抽调味即可"],
    pigComment: "湘菜下饭王！酸豆角的酸脆配上肉末的香，小猪不开玩笑，光这一个菜能干三碗饭！",
    source: { platform: "抖音", likes: "178.9万", saves: "123.4万" },
    imagePrompt: "suan dou jiao chao rou mo stir-fried pickled long beans with minced pork, finely diced green pickled beans mixed with browned minced pork, dried red chili bits, quick wok-fried, classic Hunan rice accompaniment"
  },
  {
    id: 109, name: "香煎豆腐", region: "家常", emoji: "🫘🔥",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["豆腐", "鸡蛋", "葱", "生抽", "蚝油"],
    steps: ["豆腐切1.5cm厚片","裹蛋液","平底锅中小火煎至两面金黄","调汁：生抽、蚝油、糖、水","淋在豆腐上小火收汁","撒葱花出锅"],
    pigComment: "外焦里嫩！最朴实的食材最惊艳的味道！小猪觉得煎豆腐就是要慢慢煎，不着急，金黄色才最好吃！",
    imagePrompt: "xiang jian dou fu pan-fried tofu, golden crispy exterior with soft white tofu interior visible where cut, dark savory soy glaze drizzled on top, scallion garnish, simple rustic home cooking"
  },
  {
    id: 110, name: "剁椒蒸金针菇", region: "湘菜", emoji: "🍄🌶️",
    difficulty: "简单", time: "10分钟", spicy: 2,
    ingredients: ["金针菇", "剁椒", "大蒜", "葱", "生抽", "香油"],
    steps: ["金针菇去根洗净，铺在盘中","铺上厚厚一层剁椒和蒜末","蒸锅大火蒸8分钟","出锅淋生抽和热油","撒葱花"],
    pigComment: "零厨艺也能做的硬菜！金针菇吸满了剁椒的辣和鲜！小猪每次蒸一大盘5分钟就被吃光！",
    source: { platform: "小红书", likes: "198.7万", saves: "156.3万" },
    imagePrompt: "duo jiao zheng jin zhen gu steamed enoki mushrooms with chopped chili, a bed of white enoki mushrooms topped with a vibrant layer of red and green chopped pickled chilies and garlic, just steamed with hot oil poured over, sizzling"
  },
  {
    id: 111, name: "汽锅鸡", region: "云贵菜", emoji: "🐔🫖",
    difficulty: "中等", time: "90分钟", spicy: 0,
    ingredients: ["鸡", "枸杞", "红枣", "姜", "葱", "盐"],
    steps: ["鸡剁小块焯水洗净","鸡块放入汽锅中","加姜片、葱段、枸杞、红枣","不加水！利用蒸汽凝结成汤","大火蒸1.5小时","开盖加盐调味即可"],
    pigComment: "不加一滴水全靠蒸汽！鸡汤鲜甜到灵魂颤抖！小猪在云南第一次喝到汽锅鸡就惊为天人！",
    imagePrompt: "qi guo ji Yunnan steam pot chicken, a traditional clay steam pot with lid removed revealing crystal-clear golden chicken broth with tender chicken pieces, goji berries, and red dates, no added water pure steam condensation, ethereal steam rising"
  },
  {
    id: 112, name: "糖拌西红柿", region: "家常", emoji: "🍅🍬",
    difficulty: "简单", time: "3分钟", spicy: 0,
    ingredients: ["西红柿", "白糖"],
    steps: ["西红柿洗净切片","均匀撒上白糖","冷藏15分钟更佳","直接食用"],
    pigComment: "全世界最简单的菜！但夏天冰镇过的糖拌西红柿就是无敌的存在！小猪夏天的续命水果沙拉！",
    imagePrompt: "tang ban xi hong shi sugar-coated tomato slices, bright red juicy tomato slices arranged on a plate sprinkled with white sugar crystals, condensation drops showing it is chilled, summer refreshment, nostalgic childhood snack"
  },
  {
    id: 113, name: "腐乳空心菜", region: "家常", emoji: "🥬🧱",
    difficulty: "简单", time: "5分钟", spicy: 0,
    ingredients: ["空心菜", "腐乳", "大蒜", "盐"],
    steps: ["空心菜摘洗干净切段","腐乳碾碎加少许腐乳汁调匀","锅中油热爆香蒜末","大火快炒空心菜至断生","加入腐乳汁翻炒均匀","快速出锅保持翠绿"],
    pigComment: "腐乳是神奇调味料！给普通空心菜注入了灵魂！小猪第一次吃到的时候直呼为什么没有早点发现！",
    source: { platform: "小红书", likes: "89.4万", saves: "67.8万" },
    imagePrompt: "fu ru kong xin cai fermented tofu sauce water spinach, vivid green water spinach stir-fried with pinkish fermented tofu sauce coating each stem, garlic bits, quick wok-fried, simple but flavor-packed"
  },
  {
    id: 114, name: "蒜蓉蒸扇贝", region: "粤菜", emoji: "🐚🧄",
    difficulty: "简单", time: "15分钟", spicy: 0,
    ingredients: ["扇贝", "粉丝", "大蒜", "葱", "生抽", "料酒"],
    steps: ["扇贝清洗干净取半壳","粉丝泡软剪短铺在壳里","大量蒜末炒至金黄","铺在每个扇贝上","蒸锅大火蒸5分钟","出锅淋生抽和葱花油"],
    pigComment: "宴客神器！颜值高味道绝做法简单！蒜蓉焦香配上扇贝的鲜甜！小猪请客每次都靠这道菜撑场面！",
    source: { platform: "小红书", likes: "167.8万", saves: "123.4万" },
    imagePrompt: "garlic steamed scallops on half shell, plump white scallops on shells lined with glass noodles, topped with golden fried garlic, scallion and soy sauce drizzle, arranged on a steamer, elegant seafood appetizer"
  },
  {
    id: 115, name: "香辣蟹", region: "川菜", emoji: "🦀🌶️",
    difficulty: "中等", time: "25分钟", spicy: 3,
    ingredients: ["螃蟹", "干辣椒", "花椒", "大蒜", "姜", "葱", "豆瓣酱", "料酒"],
    steps: ["螃蟹处理干净对半切，裹薄淀粉","油锅炸至变红捞出","锅中留油，爆香大量干辣椒和花椒","加豆瓣酱、姜蒜炒出红油","下螃蟹翻炒","加料酒和调味料大火翻炒收汁","撒葱花出锅"],
    pigComment: "吃螃蟹最过瘾的方式！辣到手舞足蹈但根本停不下来！小猪吃完壳都要吮三遍才罢休！",
    source: { platform: "抖音", likes: "234.5万", saves: "123.7万" },
    imagePrompt: "xiang la xie spicy stir-fried crab, bright red crab pieces tossed with a mountain of dried red chilies and Sichuan peppercorns, glistening spicy sauce, dramatic fiery presentation"
  },
  {
    id: 116, name: "番茄牛腩面", region: "家常", emoji: "🍅🍜",
    difficulty: "中等", time: "90分钟", spicy: 0,
    ingredients: ["牛腩", "西红柿", "面条", "姜", "葱", "八角", "生抽", "盐"],
    steps: ["牛腩切块焯水","西红柿切块炒出汁","加入牛腩翻炒","倒入开水加八角姜葱","大火烧开转小火炖60分钟","面条煮熟盛入碗中","浇上牛腩和番茄汤"],
    pigComment: "一碗面的终极享受！番茄汤酸甜浓郁，牛腩软烂入味！小猪冬天每周都要炖一锅慢慢吃！",
    source: { platform: "B站", likes: "167.8万", saves: "112.3万" },
    imagePrompt: "fan qie niu nan mian tomato beef brisket noodles, rich crimson tomato broth with fall-apart tender beef chunks over wheat noodles, diced tomato pieces visible in the soup, scallion garnish, steaming bowl of comfort"
  },
  {
    id: 117, name: "酱香饼", region: "家常", emoji: "🫓🫘",
    difficulty: "中等", time: "30分钟", spicy: 1,
    ingredients: ["面粉", "甜面酱", "豆瓣酱", "芝麻", "葱", "糖", "五香粉"],
    steps: ["面粉加温水揉成光滑面团醒20分钟","调酱：甜面酱、豆瓣酱、糖、五香粉、油混合","面团擀薄刷油撒葱花卷起再擀平","平底锅少油烙至两面金黄","刷上酱料撒芝麻","切块食用"],
    pigComment: "路边早餐摊的明星！酱香浓郁外酥内软！小猪每次经过都走不动道，现在自己做，随时能吃到！",
    source: { platform: "抖音", likes: "345.6万", saves: "256.7万" },
    imagePrompt: "jiang xiang bing sauce-flavored flatbread, golden crispy layered flatbread slathered with dark glossy bean sauce, sprinkled with sesame seeds, flaky layers visible where torn, street food breakfast, cut into triangular pieces"
  },
  {
    id: 118, name: "香菇滑鸡", region: "粤菜", emoji: "🍄🍗",
    difficulty: "简单", time: "20分钟", spicy: 0,
    ingredients: ["鸡腿", "香菇", "生抽", "蚝油", "淀粉", "姜", "葱", "糖"],
    steps: ["鸡腿去骨切块，加生抽、蚝油、淀粉、姜末腌15分钟","香菇切片","鸡块和香菇铺在盘中","蒸锅大火蒸12分钟","出锅撒葱花，淋少许热油"],
    pigComment: "粤式蒸菜的精髓！鸡肉滑嫩到不可思议！香菇的鲜香渗透到每一块鸡肉里！小猪的拌饭神器！",
    source: { platform: "小红书", likes: "98.7万", saves: "72.3万" },
    imagePrompt: "xiang gu hua ji steamed chicken with shiitake mushrooms, silky tender chicken pieces with plump sliced shiitake mushrooms, glistening with a light savory sauce, scallion on top, classic Cantonese steamed dish in a white plate"
  },
  {
    id: 119, name: "麻辣拌", region: "东北菜", emoji: "🥗🌶️",
    difficulty: "简单", time: "10分钟", spicy: 2,
    ingredients: ["土豆", "海带", "豆皮", "宽粉", "丸子", "生菜", "辣椒面", "花生", "芝麻"],
    steps: ["各种蔬菜和宽粉分别焯熟","捞出沥干放入大盆","加辣椒面、花椒粉、蒜末、芝麻、花生碎","淋热油泼出香味","加生抽、醋、香油拌匀","冷吃或温吃均可"],
    pigComment: "东北版冷麻辣烫！比热的还好吃！小猪每次都要加超多土豆和宽粉，拌完一大盆5分钟吃完！",
    source: { platform: "小红书", likes: "456.3万", saves: "345.6万" },
    imagePrompt: "ma la ban northeastern cold spicy mix, a large bowl overflowing with blanched potato slices, kelp strips, tofu skin, wide noodles, meatballs, lettuce, all tossed in fiery red chili oil with sesame and crushed peanuts, vibrant and appetizing cold mix"
  },
  {
    id: 120, name: "虎皮青椒", region: "家常", emoji: "🫑🐯",
    difficulty: "简单", time: "10分钟", spicy: 1,
    ingredients: ["青椒", "大蒜", "生抽", "醋", "糖", "盐"],
    steps: ["青椒洗净去籽不切","锅中不放油干煸青椒","用锅铲按压至表皮起虎皮纹路","盛出备用","锅中少油炒香蒜末","加生抽、醋、糖调汁","倒入青椒翻炒裹汁出锅"],
    pigComment: "最便宜最好吃的下饭菜！干煸到起皮那一刻太有成就感了！小猪觉得虎皮青椒是穷学生的救星！",
    source: { platform: "抖音", likes: "289.4万", saves: "198.7万" },
    imagePrompt: "hu pi qing jiao tiger skin peppers, whole green peppers with blistered charred tiger-stripe skin pattern, glistening with a sweet soy vinegar glaze, garlic bits, smoky and fragrant, simple rustic home cooking on a white plate"
  }
];

// All available regions
const REGIONS = ["全部", "川菜", "粤菜", "湘菜", "京菜", "东北菜", "苏菜", "浙菜", "鲁菜", "闽菜", "徽菜", "西北菜", "云贵菜", "家常"];

// All available ingredients
const ALL_INGREDIENTS = [
  // 蛋奶豆
  "鸡蛋", "豆腐",
  // 猪肉类
  "猪肉", "猪肉末", "五花肉", "排骨", "猪蹄", "猪肚", "猪肝", "猪血", "猪大肠", "腊肉",
  // 禽肉类
  "鸡胸肉", "鸡腿", "鸡翅", "鸡", "鸡爪", "鸭", "鸭血", "鹅",
  // 牛羊肉类
  "牛肉", "牛腱子", "羊肉",
  // 水产类
  "虾", "大虾", "小龙虾", "鱼", "鱼头", "草鱼", "鲤鱼", "鳜鱼", "带鱼", "蛤蜊", "生蚝", "螃蟹", "扇贝", "鲍鱼", "海参",
  // 蔬菜类
  "土豆", "西红柿", "茄子", "青椒", "红椒", "白菜", "空心菜", "韭菜", "花椰菜",
  "豆芽", "黄瓜", "胡萝卜", "洋葱", "木耳", "蘑菇", "榛蘑", "粉条", "红薯", "莲藕",
  "毛肚", "马蹄", "生菜", "荷兰豆", "金针菇", "酸菜", "泡菜", "年糕", "玉米粒", "豌豆",
  "四季豆", "南瓜", "西兰花", "海带", "豆皮", "酸豆角", "香菇", "腐乳", "香菜",
  // 主食类
  "面条", "米饭", "方便面", "粉丝", "米线", "红薯粉", "宽粉", "面粉", "馍",
  // 调味料
  "大蒜", "姜", "葱", "花椒", "干辣椒", "剁椒", "豆瓣酱", "豆豉",
  "生抽", "老抽", "料酒", "醋", "糖", "盐", "淀粉", "花生",
  "蚝油", "叉烧酱", "蜂蜜", "可乐", "龙井茶叶", "咖喱块", "椰奶",
  "奥尔良腌料", "番茄酱", "甜面酱", "韩式辣酱", "午餐肉", "芝士", "火腿", "椒盐粉",
  "味啉", "啤酒", "芝麻酱", "腊肠", "八角", "桂皮", "孜然", "辣椒面", "五香粉", "咸蛋黄"
];
