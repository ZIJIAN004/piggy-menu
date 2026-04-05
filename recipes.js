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
    imagePrompt: "cute anime kawaii style illustration of mapo tofu in a ceramic bowl, vibrant red spicy sauce, silky soft tofu cubes, garnished with green onions and Sichuan pepper, studio ghibli inspired food art, pastel warm background, sparkles"
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
    imagePrompt: "cute anime kawaii illustration of kung pao chicken dish, golden fried chicken pieces, roasted peanuts, colorful dried red chilies, glossy sauce, kawaii food art style, pastel background, cute chibi food character"
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
    imagePrompt: "cute anime style illustration of yu xiang rou si pork shreds with wood ear mushrooms, colorful vegetables, glossy brown sauce, kawaii food art, warm pastel colors, ghibli inspired"
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
    imagePrompt: "cute anime kawaii illustration of twice-cooked pork hui guo rou, caramelized pork belly slices with green peppers, rich red sauce, sizzling in a wok, kawaii style, warm cozy colors"
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
    imagePrompt: "cute anime kawaii illustration of steamed fish on a white plate, garnished with colorful julienned ginger and green onions, glistening soy sauce, elegant and fresh, kawaii food art style, light airy background"
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
    imagePrompt: "cute anime kawaii illustration of sweet and sour pork ribs, glossy caramelized sauce, golden crispy ribs, sesame seeds, warm amber tones, kawaii chibi food art, sparkles and stars around"
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
    imagePrompt: "cute anime kawaii illustration of poached white cut chicken, sliced beautifully on a plate, jade green spring onion ginger dip, elegant cantonese style, kawaii food art, clean white background with soft shadows"
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
    imagePrompt: "cute anime kawaii illustration of steamed fish head with chili, vibrant red chopped chilies covering the fish, steam rising, dramatic and spicy, kawaii food art style, fire and hearts around it"
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
    imagePrompt: "cute anime kawaii illustration of stir-fried pork with peppers, crispy pork slices with colorful peppers, sizzling hot wok, kawaii chibi style, warm red tones, cozy rustic background"
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
    imagePrompt: "cute anime kawaii illustration of zha jiang mian noodles, thick rich soybean sauce over noodles, colorful vegetable toppings cucumber shreds and bean sprouts, kawaii bowl art, cozy warm colors"
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
    imagePrompt: "cute anime kawaii illustration of vinegar cabbage stir fry, crisp translucent cabbage in glossy sauce, steaming hot, kawaii minimalist food art, fresh green and white tones"
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
    imagePrompt: "cute anime kawaii illustration of di san xian stir fry, golden potato chunks, soft purple eggplant, bright green peppers in glossy sauce, kawaii colorful food art, cheerful warm background"
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
    imagePrompt: "cute anime kawaii illustration of northeast chinese braised pork with vermicelli and cabbage, steaming clay pot, rich brown broth, cozy winter food art, warm orange tones, kawaii comfort food style"
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
    imagePrompt: "cute anime kawaii illustration of tomato and egg stir fry, vibrant red tomatoes with fluffy yellow scrambled eggs, steaming hot, classic chinese home cooking kawaii art, cheerful bright colors, hearts"
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
    imagePrompt: "cute anime kawaii illustration of sour and spicy potato shreds, crisp thin potato strips with red chili, tangy refreshing dish, kawaii food art style, bright fresh colors"
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
    imagePrompt: "cute anime kawaii illustration of fried rice with eggs, golden fluffy egg fried rice in a wok, green onion specks, steam rising, kawaii late night food art, warm yellow tones, cozy atmosphere"
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
    imagePrompt: "cute anime kawaii illustration of hong shao rou braised pork belly, glossy caramelized pork cubes, rich dark sauce, steam rising, kawaii luxurious food art, deep warm tones, hearts floating"
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
    imagePrompt: "cute anime kawaii illustration of tomato beef brisket stew with potatoes, rich red tomato broth, tender beef chunks, soft potato pieces, kawaii hearty stew art, rustic cozy bowl"
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
    imagePrompt: "cute anime kawaii illustration of steamed egg custard in a white bowl, silky smooth custard surface, drizzled with soy sauce and sesame oil, green onion dots, soft gentle kawaii food art, light airy pastel tones"
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
    imagePrompt: "cute anime kawaii illustration of pork strips with green pepper stir fry, tender pork shreds and vibrant green peppers, kawaii simple home cooking art, fresh green color palette"
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
    imagePrompt: "cute anime kawaii illustration of garlic water spinach stir fry, vibrant green hollow vegetables, golden garlic bits, fresh and healthy kawaii food art, bright clean colors"
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
    imagePrompt: "cute anime kawaii illustration of shrimp and egg stir fry, plump pink shrimp with fluffy yellow eggs, kawaii seafood food art, light golden color palette, ocean sparkles"
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
    imagePrompt: "cute anime kawaii illustration of stir-fried bean sprouts, crisp white sprouts with red chili and garlic, fresh and simple kawaii food art, light refreshing colors, cheerful minimalist style"
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
    imagePrompt: "cute anime kawaii illustration of braised pork ribs with potatoes, golden potatoes and tender ribs in rich brown gravy, kawaii hearty comfort food art, warm autumn colors"
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
    imagePrompt: "cute anime kawaii illustration of chive and egg stir fry, vibrant green chives with fluffy scrambled egg, simple rustic kawaii food art, spring green and yellow colors, fresh feeling"
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
    imagePrompt: "cute anime kawaii illustration of shui zhu yu boiled fish, vibrant red spicy broth with tender fish slices, bean sprouts underneath, sizzling hot oil being poured over red chilies and Sichuan pepper, dramatic fire effect, kawaii spicy food art"
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
    imagePrompt: "cute anime kawaii illustration of fu qi fei pian cold spiced beef slices, glistening red chili oil, peanuts and sesame, elegant plating, kawaii sichuan cold dish art, rich red tones"
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
    imagePrompt: "cute anime kawaii illustration of mao xue wang spicy hot pot dish, bright red broth with duck blood tofu and tripe, sizzling with chilies, dramatic kawaii spicy food art, intense red orange colors"
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
    imagePrompt: "cute anime kawaii illustration of suan cai yu sour cabbage fish soup, golden sour broth with tender white fish slices and pickled vegetables, kawaii comforting soup art, warm yellow green tones"
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
    imagePrompt: "cute anime kawaii illustration of shui zhu rou pian boiled pork slices, silky tender pork in red spicy broth, vibrant chilies, kawaii sichuan dish art, fiery reds"
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
    imagePrompt: "cute anime kawaii illustration of la zi ji spicy diced chicken, golden crispy chicken pieces buried in a mountain of dried red chilies and Sichuan pepper, kawaii dramatic dish, fiery dramatic composition"
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
    imagePrompt: "cute anime kawaii illustration of tang cu li yu sweet and sour carp, whole golden fried fish with glossy sweet and sour sauce, elegant presentation, kawaii traditional chinese dish, golden amber tones"
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
    imagePrompt: "cute anime kawaii illustration of scallion braised tofu, golden tofu blocks in rich brown soy sauce with caramelized green onion, kawaii homestyle dish, warm savory tones"
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
    imagePrompt: "cute anime kawaii illustration of jiu zhuan da chang braised pork intestine, glossy caramelized pork rolls in rich sauce, traditional shandong cuisine kawaii art, deep amber brown tones"
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
    imagePrompt: "cute anime kawaii illustration of hong shao shi zi tou red braised lion head meatball, giant pork meatball in rich brown sauce with cabbage, kawaii grand presentation, warm cozy tones"
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
    imagePrompt: "cute anime kawaii illustration of yan shui ya nanjing salted duck, pale silky duck pieces on a plate, simple elegant presentation, kawaii traditional nanjing cuisine art, soft white and golden tones"
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
    imagePrompt: "cute anime kawaii illustration of qing chao xia ren stir fried shrimp, plump pink shrimp with colorful vegetables, light fresh kawaii dish art, clean spring colors, delicate presentation"
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
    imagePrompt: "cute anime kawaii illustration of west lake vinegar fish, whole steamed fish with glossy sweet sour sauce and ginger, elegant hangzhou cuisine kawaii art, soft elegant blue green tones inspired by west lake"
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
    imagePrompt: "cute anime kawaii illustration of dong po rou braised pork belly, square pork cube with caramelized skin on top in rich dark sauce, tied with string, kawaii luxurious dish art, deep rich brown tones"
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
    imagePrompt: "cute anime kawaii illustration of long jing xia ren shrimp with dragon well tea, plump white shrimp with delicate green tea leaves, elegant spring dish, kawaii refined chinese cuisine art, fresh spring green tones"
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
    imagePrompt: "cute anime kawaii illustration of chou gui yu stinky mandarin fish, golden braised fish in savory sauce, mysterious and intriguing kawaii dish art, earthy rustic tones, curiosity expression"
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
    imagePrompt: "cute anime kawaii illustration of li zhi rou lychee pork, golden pork pieces shaped like lychee fruits with sweet sour sauce, creative fujianese dish kawaii art, golden pink tones"
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
    imagePrompt: "cute anime kawaii illustration of oyster sauce beef, tender juicy beef slices with green peppers in glossy oyster sauce, cantonese stir fry kawaii art, savory warm brown tones"
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
    imagePrompt: "cute anime kawaii illustration of gu lao rou sweet and sour pork with pineapple, golden crispy pork with colorful pineapple and peppers in glossy sauce, kawaii tropical vibes, vibrant yellow red greens"
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
    imagePrompt: "cute anime kawaii illustration of char siu cantonese bbq pork, caramelized honey glazed pork slices with beautiful char marks, glistening and appetizing, kawaii hongkong cuisine art, golden red tones"
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
    imagePrompt: "cute anime kawaii illustration of xiao ji dun mo gu chicken stewed with mushrooms, clay pot with tender chicken and woodland mushrooms, cozy winter kawaii food art, earthy warm brown tones"
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
    imagePrompt: "cute anime kawaii illustration of guo bao rou northeast crispy pork, extra crispy golden pork pieces in sweet sour sauce with carrot shreds, kawaii northeastern style, vibrant golden orange"
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
    imagePrompt: "cute anime kawaii illustration of ba si di gua candied sweet potato, golden sweet potato pieces with dramatic caramel strings being pulled apart, magical golden sparkles, kawaii dessert art"
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
    imagePrompt: "cute anime kawaii illustration of la wei he zheng steamed cured meats, colorful cured pork sausage and duck on a plate with black beans and chilies, kawaii traditional hunan dish, rustic warm tones"
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
    imagePrompt: "cute anime kawaii illustration of gan guo hua cai dry pot cauliflower, crispy charred cauliflower florets with pork and spicy sauce in a sizzling wok, kawaii spicy food art, dramatic orange red"
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
    imagePrompt: "cute anime kawaii illustration of cola chicken wings, caramelized glossy chicken wings with cola reduction sauce, appetizing shine, kawaii popular dish art, golden caramel tones"
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
    imagePrompt: "cute anime kawaii illustration of suan ni bai rou garlic pork slices, thin rolled pork slices with cucumber drizzled with vibrant red chili oil and garlic sauce, elegant cold dish kawaii art"
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
    imagePrompt: "cute anime kawaii illustration of tomato egg drop soup, bright red tomato broth with silky egg flower swirls, steam rising from a bowl, kawaii comfort soup art, warm red yellow tones, healing feeling"
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
    imagePrompt: "cute anime kawaii illustration of ma la xiang guo spicy hot pot stir fry, colorful mix of meats and vegetables in fiery red spicy sauce, abundance and variety, kawaii feast art, dramatic spicy red tones"
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
    imagePrompt: "cute anime kawaii illustration of jiang niu rou soy sauce braised beef, sliced marinated beef showing beautiful cross section grain, rich brown spiced broth, kawaii traditional dish art, deep savory tones"
  }
];

// All available regions
const REGIONS = ["全部", "川菜", "粤菜", "湘菜", "京菜", "东北菜", "苏菜", "浙菜", "鲁菜", "闽菜", "徽菜", "家常"];

// All available ingredients
const ALL_INGREDIENTS = [
  // 蛋奶豆
  "鸡蛋", "豆腐",
  // 猪肉类
  "猪肉", "猪肉末", "五花肉", "排骨", "猪蹄", "猪肚", "猪肝", "猪血", "猪大肠", "腊肉",
  // 禽肉类
  "鸡胸肉", "鸡腿", "鸡翅", "鸡", "鸭", "鸭血",
  // 牛羊肉类
  "牛肉", "牛腱子", "羊肉",
  // 水产类
  "虾", "鱼", "鱼头", "草鱼", "鲤鱼", "鳜鱼", "带鱼", "蛤蜊",
  // 蔬菜类
  "土豆", "西红柿", "茄子", "青椒", "红椒", "白菜", "空心菜", "韭菜", "花椰菜",
  "豆芽", "黄瓜", "胡萝卜", "洋葱", "木耳", "蘑菇", "榛蘑", "粉条", "红薯", "莲藕",
  "毛肚", "马蹄", "生菜", "荷兰豆",
  // 主食类
  "面条", "米饭",
  // 调味料
  "大蒜", "姜", "葱", "花椒", "干辣椒", "剁椒", "豆瓣酱", "豆豉",
  "生抽", "老抽", "料酒", "醋", "糖", "盐", "淀粉", "花生",
  "蚝油", "叉烧酱", "蜂蜜", "可乐", "龙井茶叶"
];
