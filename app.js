const STORAGE_KEYS = {
  completed: "prague-completed",
  edits: "prague-edits",
  customItems: "prague-custom-items",
  dataVersion: "prague-data-version",
};

const DATA_VERSION = "2026-06-29-day4-agnes-walkin-lunch";

const tripDays = [
  {
    id: "day1",
    label: "7/1 第 1 天",
    short: "Old Town",
    title: "老城區與小城區",
    status: "抵達與經典老城",
    accent: "#d86b2a",
    center: [50.0856, 14.4152],
    zoom: 14,
    note:
      "06:55 抵達後搭乘機場接駁車前往 W Prague 放行李。11:00 Café Imperial、13:00 克萊門特學院導覽為固定預約；上午用 Prague Visitor Pass 補老市政廳塔樓與火藥塔登塔，市民會館導覽不排入主線以免撞餐廳與導覽預約。下午依序安排遊船、小城區路過弗爾特巴花園、佩特任山，傍晚慢慢下山回 W Prague 用餐。",
    items: [
      makeItem(
        "d1-01",
        "06:55-09:15",
        "機場接駁車到 W Prague 放行李",
        "Václav Havel Airport Prague -> W Prague",
        [50.0824, 14.4261],
        "機場接駁車",
        "45-70 分鐘",
        "確認接駁車集合點與飯店可寄放行李",
        "W Prague 位在瓦茨拉夫廣場。放完行李後，建議從 Můstek 搭地鐵 A 線 1 站到 Staroměstská，再步行約 8 分鐘到老城廣場；若想看街景，也可直接步行約 15-20 分鐘。",
        ["transport", "booking", "warning"],
      ),
      makeItem(
        "d1-01a",
        "抵達後",
        "ATM 提領現金",
        "Cash buffer / ATM",
        [50.0824, 14.4261],
        "機場 ATM 或 W Prague 附近銀行 ATM；提款時選 CZK 扣款，避免動態貨幣轉換 DCC",
        "5-10 分鐘",
        "刷卡優先：1 人 1,500-2,000 CZK；2 人 3,000-4,000 CZK",
        "布拉格餐廳與大多數交通可刷卡，現金主要留給小費、小店、公廁、寄物櫃、庫倫洛夫小額消費與緊急備用。提款或刷卡時選 CZK，不要選 TWD/USD 的動態貨幣轉換。",
        ["warning"],
      ),
      makeItem(
        "d1-02",
        "09:20-10:05",
        "老市政廳與天文鐘塔",
        "Old Town Hall / Astronomical Clock Tower",
        [50.08704, 14.42125],
        "W Prague 出發：Můstek 搭地鐵 A 線到 Staroměstská 後步行，或直接步行",
        "12-22 分鐘",
        "Prague Visitor Pass：塔樓通常不需預約，可走 PVP priority counter；歷史內部導覽才需看場次",
        "先看老城廣場與天文鐘，再用 Visitor Pass 上塔樓俯瞰廣場。為了不撞 11:00 Café Imperial，建議只登塔，不加老市政廳歷史內部導覽；10:05 左右往火藥塔方向移動。",
        ["booking", "warning"],
      ),
      makeItem(
        "d1-04",
        "10:15-10:50",
        "火藥塔登塔 / 市民會館外觀",
        "Powder Gate Tower / Municipal House exterior",
        [50.08758, 14.42886],
        "步行",
        "8-12 分鐘",
        "火藥塔通常不需預約；7/1 市民會館英文導覽 13:00、14:30、16:00、17:00，會撞既定行程，不排入主線",
        "火藥塔改成短登塔，抓 20-35 分鐘。市民會館只看外觀或順手看大廳/咖啡館；若想參加導覽，需要犧牲 13:00 克萊門特學院、遊船或佩特任山其中一段，不建議當天硬排。",
        ["booking", "warning"],
      ),
      makeItem(
        "d1-05",
        "11:00-12:20",
        "午餐：帝國咖啡",
        "Café Imperial",
        [50.08994, 14.43096],
        "從老城廣場步行，或搭短程電車/地鐵到 Náměstí Republiky 周邊",
        "12-20 分鐘",
        "11:00 已預約完成",
        "這是第 1 天固定餐廳時段。因 13:00 還有克萊門特學院導覽，建議用餐抓 80 分鐘左右，12:20 開始移動。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d1-03",
        "13:00-14:15",
        "克萊門特學院",
        "Clementinum / Klementinum",
        [50.08646, 14.41678],
        "從 Café Imperial 步行或搭短程電車回老城，再步行到克萊門特學院",
        "20-30 分鐘含緩衝",
        "13:00 圖書館與天文塔導覽已預約完成，預約編號 PRA-94644882",
        "13:00 是固定預約，預約編號 PRA-94644882。建議 12:20 左右離開 Café Imperial，12:45 前抵達克萊門特學院集合點。",
        ["booking", "warning"],
      ),
      makeItem(
        "d1-07",
        "14:25-15:25",
        "伏爾塔瓦河遊船",
        "Vltava River Cruise",
        [50.08701, 14.41462],
        "步行至碼頭",
        "從克萊門特學院約 5-10 分鐘",
        "建議預訂船班",
        "克萊門特學院導覽結束後直接前往碼頭最順。船班碼頭位置不同，出發前確認集合點。",
        ["transport", "booking"],
      ),
      makeItem(
        "d1-vrtba",
        "15:40-15:50",
        "弗爾特巴花園路過快看",
        "Vrtba Garden / Vrtbovská zahrada",
        [50.0873, 14.4034],
        "遊船後往小城區移動，經 Karmelitská 一帶路過",
        "從碼頭約 15-20 分鐘",
        "Visitor Pass 可用；通常不需預約",
        "只排 10 分鐘瞄一眼，不進行完整參觀。若現場排隊或時間落後，直接跳過上佩特任山，避免壓縮傍晚下山與晚餐。",
        ["transport", "booking", "warning"],
      ),
      makeItem(
        "d1-08",
        "15:50-17:45",
        "佩特任山 / 佩特任瞭望塔",
        "Petřín Hill / Petřín Lookout Tower",
        [50.08352, 14.3951],
        "從弗爾特巴花園/小城區往 Újezd 或 Pohořelec 方向上佩特任山；纜車若未恢復，以電車加步行為主",
        "25-45 分鐘",
        "佩特任纜車仍可能停駛，7/1 出發前再確認",
        "加入弗爾特巴花園快看後，佩特任山時間略縮短；重點放在瞭望塔外觀、山上視角與拍照。若纜車未恢復，建議搭 22/23 號電車到 Pohořelec 再步行，17:45 左右開始下山。",
        ["transport", "warning"],
      ),
      makeItem(
        "d1-06",
        "17:45-19:00",
        "佩特任山下山 / 慢慢回 W Prague",
        "Petřín -> Charles Bridge -> W Prague",
        [50.08648, 14.41143],
        "步行",
        "約 45-75 分鐘",
        "無",
        "從佩特任山下山後穿過小城區與查理大橋，慢慢走回 W Prague。地圖估算約 29 分鐘，但第一天沒有研討會，建議把拍照、橋上人潮與買水休息都算進去，抓 45-75 分鐘會舒服很多。",
        ["transport", "warning"],
      ),
      makeItem(
        "d1-09",
        "19:00-晚間",
        "晚餐：W Prague 飯店",
        "Dinner at W Prague Hotel",
        [50.0821319, 14.4271549],
        "從查理大橋或老城可步行回 W Prague；若想省腳力，從 Staroměstská 搭地鐵 A 線 1 站到 Můstek 再步行",
        "12-25 分鐘",
        "主方案：W Prague 飯店內用餐；建議確認 Le Petit Beefbar au Grand Café 或 W Lounge 是否需要訂位",
        "第一天沒有研討會，最舒服的安排是慢慢回飯店，在 W Prague 內用餐或喝一杯休息。若飯店餐廳客滿或想換口味，可改用下方備選餐廳。",
        ["transport", "booking", "warning"],
      ),
      makeItem(
        "d1-dinner-louvre",
        "備選晚餐",
        "備選餐廳：Café Louvre",
        "Café Louvre",
        [50.0820667, 14.4187313],
        "從查理大橋回程可先走到 Národní；吃完再步行或搭電車/地鐵回 W Prague",
        "從查理大橋約 12-18 分鐘；到 W Prague 約 10-15 分鐘",
        "備選；建議出發前查空位或線上訂位",
        "地址：Národní 22。經典咖啡館，適合想在回飯店前先坐下來吃晚餐；官方頁面顯示營業到 23:30，仍建議當天再確認。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d1-dinner-vytopna",
        "備選晚餐",
        "備選餐廳：Výtopna",
        "Výtopna Railway Restaurant",
        [50.0801481, 14.4285752],
        "回到瓦茨拉夫廣場後步行前往，離 W Prague 很近",
        "從 W Prague 約 5-8 分鐘",
        "備選；熱門時段建議訂位",
        "地址：Václavské náměstí 56。餐點由模型火車送餐，第一天晚上若想輕鬆有趣、又不想離飯店太遠，這間很方便；官方頁面顯示布拉格店每日 11:00-24:00。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d1-dinner-kantyna",
        "備選晚餐",
        "備選餐廳：Kantýna",
        "Kantýna",
        [50.0833836, 14.4287566],
        "從 W Prague 步行到 Politických vězňů 5",
        "從 W Prague 約 6-10 分鐘",
        "備選；適合想吃肉類與捷克風格料理",
        "地址：Politických vězňů 1511/5。距離飯店近，氣氛較熱鬧；官方頁面顯示週一至週六 11:30-23:00、週日 11:30-22:00。",
        ["booking", "transport", "warning"],
      ),
    ],
  },
  {
    id: "day2",
    label: "7/2 第 2 天",
    short: "Castle",
    title: "城堡區",
    status: "上山參觀城堡群",
    accent: "#6c5ce7",
    center: [50.0902, 14.4005],
    zoom: 15,
    note:
      "早上從 W Prague 出發，先走到 Můstek 搭地鐵 A 線，再轉 22 號電車上山到 Pražský hrad，減少爬坡。聖維特主教堂可用城堡主線/Visitor Pass；南塔是另計的觀景塔票，北塔不作一般登塔景點。BRICK'S 18:30 已訂位，傍晚只在小城區順路看聖尼古拉鐘樓外觀。",
    items: [
      makeItem(
        "d2-00",
        "08:20-09:00",
        "W Prague 出發：前往布拉格城堡",
        "W Prague -> Prague Castle",
        [50.0824, 14.4261],
        "步行到 Můstek，搭地鐵 A 線往 Nemocnice Motol 方向至 Malostranská，轉 22 號電車到 Pražský hrad",
        "25-35 分鐘",
        "使用 30 分鐘或 90 分鐘 PID 票，依當日等車時間調整",
        "這條路線可避免從河邊一路爬坡。若不想轉乘，也可地鐵 A 線搭到 Hradčanská，再步行或接電車到城堡入口。",
        ["transport", "warning"],
      ),
      makeItem(
        "d2-01",
        "09:20-11:15",
        "聖維特大教堂",
        "St. Vitus Cathedral / Katedrála svatého Víta",
        [50.0909, 14.40052],
        "Pražský hrad 站下車後步行入場",
        "8-15 分鐘",
        "城堡套票 / Visitor Pass；南塔觀景需另付費或使用 Pass 折扣",
        "重點看慕夏彩繪玻璃與聖約翰之墓，旺季安檢需預留時間。聖維特大教堂主體屬城堡主線；Great South Tower 南塔是單獨觀景塔票，官方價目表列成人 200 CZK、優惠 150 CZK、家庭 500 CZK，Prague Visitor Pass 頁面標示為折扣而非免費。北塔沒有列為一般遊客可登塔景點，不排入。",
        ["transport", "booking", "warning"],
      ),
      makeItem(
        "d2-005",
        "09:00-09:20",
        "星巴克布拉格城堡短暫拜訪",
        "Starbucks Prague Castle / Hradčany",
        [50.08962, 14.39776],
        "Pražský hrad 站下車後步行到城堡廣場附近",
        "5-8 分鐘",
        "無，營業時間出發前再確認",
        "這間星巴克以城堡區景觀露台聞名，適合買杯咖啡、拍城市景，停留 15-20 分鐘即可。若排隊太長，直接跳過進城堡。",
        ["transport", "warning"],
      ),
      makeItem(
        "d2-02",
        "11:15-11:50",
        "舊皇宮",
        "Old Royal Palace / Starý královský palác",
        [50.09008, 14.40143],
        "城堡內步行",
        "3-5 分鐘",
        "城堡套票",
        "維拉迪斯拉夫大廳與布拉格拋窗事件相關地點可快速參觀。",
        ["booking"],
      ),
      makeItem(
        "d2-03",
        "12:00-12:20",
        "衛兵交接",
        "Changing of the Guard",
        [50.09016, 14.3984],
        "城堡內步行",
        "5-8 分鐘",
        "無",
        "12:00 正門儀式較完整，建議 11:50 前抵達正門附近卡位。",
        ["warning"],
      ),
      makeItem(
        "d2-04",
        "12:20-13:00",
        "聖喬治大殿",
        "St. George's Basilica / Bazilika svatého Jiří",
        [50.09046, 14.40287],
        "城堡內步行",
        "3-5 分鐘",
        "城堡套票",
        "城堡區最古老教堂之一，粉紅色外觀很醒目。",
        ["booking"],
      ),
      makeItem(
        "d2-05",
        "13:00-14:10",
        "黃金小巷 / 達利波塔",
        "Golden Lane / Daliborka Tower",
        [50.09113, 14.40512],
        "城堡內步行",
        "5 分鐘以內",
        "城堡套票",
        "22 號小屋曾與卡夫卡相關，達利波塔適合安排在城堡尾段。",
        ["booking"],
      ),
      makeItem(
        "d2-06",
        "14:10-15:40",
        "洛克維茲宮",
        "Lobkowicz Palace / Lobkowiczký palác",
        [50.09042, 14.40428],
        "城堡內步行",
        "3-5 分鐘",
        "另購票 / 可預約",
        "私人博物館收藏豐富，陽台可眺望布拉格市景。",
        ["booking"],
      ),
      makeItem(
        "d2-07",
        "15:40-17:00",
        "羅瑞塔教堂",
        "Loreto / Loreta",
        [50.08988, 14.39188],
        "步行往城堡西側",
        "10-15 分鐘",
        "可現場購票",
        "整點鐘琴演奏很有特色，從洛克維茲宮到此需往西走一段。",
        ["transport", "booking"],
      ),
      makeItem(
        "d2-stnicholas",
        "17:20-17:30",
        "聖尼古拉鐘樓順路快看",
        "St Nicholas Bell Tower / Svatomikulášská městská zvonice",
        [50.0879, 14.4031],
        "從羅瑞塔下坡往 Malostranské náměstí，再步行前往 BRICK'S",
        "羅瑞塔到鐘樓約 15-25 分鐘；鐘樓到 BRICK'S 約 10-15 分鐘",
        "Visitor Pass 可用；通常不需預約",
        "只排 10 分鐘看外觀/入口，不登塔；若想登塔需 20-30 分鐘，會壓縮 18:30 BRICK'S 訂位緩衝，不建議當天登塔。",
        ["transport", "booking", "warning"],
      ),
      makeItem(
        "d2-08",
        "18:30-20:00",
        "晚餐：BRICK'S",
        "BRICK'S | Hergetova Cihelna",
        [50.08876, 14.40957],
        "步行下山或電車銜接",
        "25-35 分鐘",
        "18:30 已訂位完成",
        "17:00 後留緩衝下山，18:30 前抵達餐廳。餐廳可看查理大橋夜景。",
        ["transport", "booking"],
      ),
    ],
  },
  {
    id: "day3",
    label: "7/3 第 3 天",
    short: "Tour",
    title: "庫倫洛夫一日團",
    status: "跟團日",
    accent: "#3a8e5a",
    center: [49.455, 14.285],
    zoom: 8,
    note:
      "此日為旅行團日：08:00 從 W Prague 飯店出發，行程總長約 9 小時，預計 17:00 左右回到飯店。",
    items: [
      makeItem(
        "d3-00",
        "07:40-08:00",
        "W Prague 大廳集合準備",
        "W Prague hotel lobby",
        [50.0824, 14.4261],
        "飯店接送 / 旅行團車",
        "飯店大廳集合",
        "08:00 飯店出發",
        "建議 07:40 前整理好隨身物品、確認護照/票券/水，07:50 前到 W Prague 大廳等候接送。",
        ["transport", "booking", "warning"],
      ),
      makeItem(
        "d3-01",
        "08:00",
        "旅行團從飯店出發",
        "Hotel pick-up / Departure",
        [50.0824, 14.4261],
        "旅行團巴士",
        "行程總長約 9 小時",
        "已確認 08:00 從飯店出發",
        "從 W Prague 直接出發，不需另行前往市區集合點。",
        ["transport", "booking"],
      ),
      makeItem(
        "d3-02",
        "08:00-17:00",
        "庫倫洛夫古城",
        "Český Krumlov Day Tour",
        [48.8127, 14.3175],
        "旅行團巴士",
        "約 9 小時含來回車程與導覽",
        "旅行團已含",
        "跟隨導覽即可，古城石板路多，鞋子以好走為優先。回程預估 17:00 左右抵達 W Prague。",
        ["transport"],
      ),
      makeItem(
        "d3-03",
        "約17:00",
        "返回 W Prague / 自由晚餐",
        "Return to W Prague / Free dinner",
        [50.0824, 14.4261],
        "旅行團巴士",
        "約 17:00 回飯店",
        "晚餐自理",
        "回程時間可能受交通影響，晚餐建議安排飯店附近或可彈性候位的餐廳。",
        ["warning"],
      ),
    ],
  },
  {
    id: "day4",
    label: "7/4 第 4 天",
    short: "New Town",
    title: "老城藝術、高堡與新城精華",
    status: "中世紀藝術與新城收尾",
    accent: "#0f8b8d",
    center: [50.079, 14.421],
    zoom: 13,
    note:
      "7/4 是星期六，猶太博物館管理的會堂與老猶太公墓休館，因此早上只看 Josefov 外觀，再參觀聖艾格尼絲修道院。第四天沒有 Prague Visitor Pass：修道院成人票 250 CZK，交通以步行和單程票為主。Mlýnec 已取消，午餐不訂位，從三個順路備案中依現場候位狀況選一間即可。",
    items: [
      makeItem(
        "d4-00",
        "09:00-09:25",
        "W Prague 出發：步行前往 Josefov",
        "W Prague -> Josefov",
        [50.0824, 14.4261],
        "直接步行穿過老城；想省腳力可從 Můstek 搭地鐵 A 線 1 站到 Staroměstská",
        "步行約 20-25 分鐘；地鐵約 12-18 分鐘",
        "第四天無 Visitor Pass；步行免票，搭車可買 30 分鐘 PID 單程票",
        "建議直接步行，把交通預算留給下午前往高堡。紙本 30 分鐘票 39 CZK，PID Lítačka App 票 36 CZK。",
        ["transport"],
      ),
      makeItem(
        "d4-01",
        "09:25-09:55",
        "猶太區外觀散步",
        "Josefov exterior walk",
        [50.09018, 14.42004],
        "沿巴黎大街步行，經老新會堂、西班牙會堂與老猶太公墓外圍",
        "區內步行約 30 分鐘",
        "免費看外觀；星期六內部休館",
        "7/4 是星期六，梅瑟會堂、西班牙會堂、老猶太公墓等猶太博物館景點不開放。這段只看街景與建築外觀，09:55 左右前往聖艾格尼絲修道院。",
        ["transport", "warning"],
      ),
      makeItem(
        "d4-agnes",
        "10:00-11:30",
        "聖艾格尼絲修道院",
        "Convent of St Agnes of Bohemia / Klášter sv. Anežky České",
        [50.0922573, 14.4239939],
        "從西班牙會堂周邊步行前往",
        "約 5-8 分鐘",
        "成人 250 CZK，可現場購票，通常不需預約",
        "星期六 10:00-18:00 開放。重點為哥德式修道院與「波希米亞及中歐中世紀藝術 1200-1550」常設展；建議停留 75-90 分鐘。戶外修道院花園與雕塑區可免費參觀。",
        ["booking"],
      ),
      makeItem(
        "d4-02",
        "12:00-13:10",
        "午餐備案 A：Naše maso",
        "Naše maso Dlouhá",
        [50.0912346, 14.4267504],
        "從聖艾格尼絲修道院步行到 Dlouhá 39",
        "約 5-8 分鐘",
        "不訂位；星期六 10:00-22:00",
        "捷克肉舖兼快速用餐店，可點漢堡、香腸或現場料理，適合想快速吃完繼續行程。座位有限且可能排隊；人太多就改選 Mistral Café 或 Gruzie。",
        ["transport", "warning"],
      ),
      makeItem(
        "d4-lunch-b-mistral",
        "12:00-13:10",
        "午餐備案 B：Mistral Café",
        "Mistral Café",
        [50.0883139, 14.4162862],
        "從聖艾格尼絲修道院穿過 Josefov 步行到 Valentinská 11",
        "約 10-15 分鐘",
        "不訂位；星期六約 09:00-18:00",
        "Google 評分約 4.6，適合早午餐、輕食與咖啡，步調比正式餐廳彈性。現場客滿就換下一個備案，最晚 13:10 離開前往慕夏博物館。",
        ["transport", "warning"],
      ),
      makeItem(
        "d4-lunch-c-gruzie",
        "12:00-13:10",
        "午餐備案 C：Gruzie Restaurant",
        "Gruzie Restaurant",
        [50.0910404, 14.4212469],
        "從聖艾格尼絲修道院步行到 Bílkova 14",
        "約 6-10 分鐘",
        "不訂位、現場候位；星期六 12:00-00:00",
        "Google 評分約 4.6，提供喬治亞料理，適合想吃完整正餐時選擇。這間用餐可能較久，入座時可先告知 13:10 左右需要離開；若候位太長就改 Naše maso。",
        ["transport", "warning"],
      ),
      makeItem(
        "d4-03",
        "13:35-14:45",
        "慕夏博物館",
        "Mucha Museum",
        [50.08443, 14.42903],
        "從選定的午餐地點步行穿過老城與新城",
        "約 15-25 分鐘",
        "可提前購票",
        "午餐最晚 13:10 左右離開，預留步行與找入口時間。若 Gruzie 用餐延誤，可把慕夏停留縮成 55-60 分鐘，仍要保留前往高堡的交通時間。",
        ["booking"],
      ),
      makeItem(
        "d4-04",
        "15:10-15:45",
        "高堡區散步",
        "Vyšehrad",
        [50.06425, 14.41958],
        "從慕夏博物館步行到 Muzeum 站，搭地鐵 C 線到 Vyšehrad；也可搭電車至 Výtoň 後步行上山",
        "約 20-30 分鐘",
        "第四天無 Visitor Pass，購買 PID 單程票",
        "從 Vyšehrad 站進入較直接，先走城牆與河景視角，再接聖伯多祿聖保祿聖殿。若選 Výtoň 入口會有較多上坡。",
        ["transport"],
      ),
      makeItem(
        "d4-045",
        "15:45-16:40",
        "聖伯多祿聖保祿聖殿",
        "Basilica of St. Peter and St. Paul / Bazilika sv. Petra a Pavla",
        [50.06478, 14.41707],
        "高堡區內步行",
        "3-8 分鐘",
        "教堂可現場購票，開放時間出發前再確認",
        "新哥德式雙塔是高堡代表地標，內部裝飾華麗；旁邊就是高堡公墓，可順看德弗札克、史麥塔納、慕夏等名人墓園。",
        ["booking", "warning"],
      ),
      makeItem(
        "d4-05",
        "17:05-17:30",
        "跳舞的房子",
        "Dancing House / Tančící dům",
        [50.07545, 14.41419],
        "步行或電車",
        "15-20 分鐘",
        "無",
        "從高堡搭電車或沿河往北，外觀拍照約 20-25 分鐘即可，接著前往瓦茨拉夫廣場。",
        ["transport"],
      ),
      makeItem(
        "d4-06",
        "17:45-19:00",
        "瓦茨拉夫廣場 / 國家博物館",
        "Wenceslas Square / National Museum",
        [50.08164, 14.42634],
        "步行或電車",
        "10-15 分鐘",
        "晚餐自由安排",
        "新城商圈適合最後採買，也可看國家博物館夜景。",
        [],
      ),
    ],
  },
];

function makeItem(id, time, zh, en, coords, transport, moveTime, booking, note, tags) {
  return { id, time, zh, en, coords, transport, moveTime, booking, note, tags };
}

const state = {
  currentDay: tripDays[0].id,
  selectedId: tripDays[0].items[1].id,
  filter: "all",
  editMode: false,
  completed: readJson(STORAGE_KEYS.completed, {}),
  edits: readJson(STORAGE_KEYS.edits, {}),
  customItems: readJson(STORAGE_KEYS.customItems, {}),
};

applyDataMigrations();

let map;
let markerLayer;
let routeLayer;
let fallbackMap = false;
let fallbackMapReason = "";
const markers = new Map();

const els = {
  dayTabs: document.querySelector("#day-tabs"),
  dayStatus: document.querySelector("#day-status"),
  dayTitle: document.querySelector("#day-title"),
  dayNote: document.querySelector("#day-note"),
  timeline: document.querySelector("#timeline"),
  drawer: document.querySelector("#detail-drawer"),
  fallback: document.querySelector("#map-fallback"),
  addSpot: document.querySelector("#add-spot"),
  editToggle: document.querySelector("#edit-toggle"),
  fitRoute: document.querySelector("#fit-route"),
  resetProgress: document.querySelector("#reset-progress"),
  metricSpots: document.querySelector("#metric-spots"),
  metricStatus: document.querySelector("#metric-status"),
  spotModal: document.querySelector("#spot-modal"),
  spotForm: document.querySelector("#spot-form"),
  spotCancel: document.querySelector("#spot-cancel"),
  spotCancelX: document.querySelector("#spot-cancel-x"),
  spotDelete: document.querySelector("#spot-delete"),
  spotModalMode: document.querySelector("#spot-modal-mode"),
  spotModalTitle: document.querySelector("#spot-modal-title"),
  spotFormHint: document.querySelector("#spot-form-hint"),
  spotId: document.querySelector("#spot-id"),
  spotTime: document.querySelector("#spot-time"),
  spotZh: document.querySelector("#spot-zh"),
  spotEn: document.querySelector("#spot-en"),
  spotTransport: document.querySelector("#spot-transport"),
  spotMoveTime: document.querySelector("#spot-move-time"),
  spotBooking: document.querySelector("#spot-booking"),
  spotLat: document.querySelector("#spot-lat"),
  spotLon: document.querySelector("#spot-lon"),
  spotNote: document.querySelector("#spot-note"),
};

boot();

async function boot() {
  registerServiceWorker();
  loadOptionalStylesheet("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
  await Promise.all([
    loadOptionalScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", 2500, () => Boolean(window.L)),
    loadOptionalScript("https://unpkg.com/lucide@latest/dist/umd/lucide.min.js", 900, () => Boolean(window.lucide)),
  ]);
  init();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function loadOptionalScript(src, timeoutMs, isReady) {
  if (isReady()) return Promise.resolve(true);
  return new Promise((resolve) => {
    let done = false;
    const finish = (loaded) => {
      if (done) return;
      done = true;
      resolve(Boolean(loaded && isReady()));
    };
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.crossOrigin = "";
    script.onload = () => finish(true);
    script.onerror = () => finish(false);
    window.setTimeout(() => finish(false), timeoutMs);
    document.head.appendChild(script);
  });
}

function loadOptionalStylesheet(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.crossOrigin = "";
  document.head.appendChild(link);
}

function init() {
  hydrateIcons();
  renderDayTabs();
  initMap();
  wireEvents();
  render();
}

function hydrateIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initMap() {
  if (!window.L) {
    useFallbackMap("線上地圖元件無法載入，已切換為可編輯景點的本機示意地圖。");
    return;
  }

  map = L.map("map", { zoomControl: false, scrollWheelZoom: true });
  L.control.zoom({ position: "bottomright" }).addTo(map);

  const tileLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    subdomains: "abcd",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    referrerPolicy: "origin",
  }).addTo(map);

  let loadedTile = false;
  let totalTiles = 0;
  let tileErrors = 0;

  tileLayer.on("tileloadstart", () => {
    totalTiles += 1;
  });
  tileLayer.on("tileload", () => {
    loadedTile = true;
    els.fallback.style.display = "none";
  });
  tileLayer.on("tileerror", () => {
    tileErrors += 1;
    const tooManyErrors = tileErrors >= 3 || (totalTiles >= 6 && tileErrors / totalTiles > 0.25);
    if (tooManyErrors && !fallbackMap) {
      useFallbackMap("線上地圖圖磚被擋或連線不穩，已切換為本機示意地圖。");
      renderMap();
    }
  });
  window.setTimeout(() => {
    if (!loadedTile && !fallbackMap) {
      useFallbackMap("線上地圖逾時，已切換為本機示意地圖。");
      renderMap();
    }
  }, 4500);

  markerLayer = L.layerGroup().addTo(map);
  routeLayer = L.layerGroup().addTo(map);
}

function useFallbackMap(reason) {
  fallbackMap = true;
  fallbackMapReason = reason;
  if (map) {
    map.remove();
    map = null;
  }
  document.querySelector("#map").classList.add("fallback-mode");
  els.fallback.style.display = "none";
}

function wireEvents() {
  els.addSpot.addEventListener("click", () => openSpotForm("add"));

  els.editToggle.addEventListener("click", () => {
    state.editMode = !state.editMode;
    els.editToggle.setAttribute("aria-pressed", String(state.editMode));
    render();
  });

  els.fitRoute.addEventListener("click", fitCurrentRoute);

  els.resetProgress.addEventListener("click", () => {
    getDayItems().forEach((item) => {
      delete state.completed[item.id];
    });
    saveJson(STORAGE_KEYS.completed, state.completed);
    render();
  });

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.filter = chip.dataset.filter;
      document.querySelectorAll(".filter-chip").forEach((node) => node.classList.toggle("is-active", node === chip));
      renderTimeline();
    });
  });

  els.spotForm.addEventListener("submit", saveSpotForm);
  els.spotCancel.addEventListener("click", closeSpotForm);
  els.spotCancelX.addEventListener("click", closeSpotForm);
  els.spotDelete.addEventListener("click", () => deleteCustomItem(els.spotId.value));
  els.spotModal.addEventListener("click", (event) => {
    if (event.target === els.spotModal) closeSpotForm();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.spotModal.hidden) closeSpotForm();
  });
}

function render() {
  const day = getCurrentDay();
  document.documentElement.style.setProperty("--accent", day.accent);
  renderDayTabs();
  renderBrief();
  renderTimeline();
  renderMap();
  renderDrawer(getSelectedItem());
  renderMetrics();
  hydrateIcons();
}

function renderDayTabs() {
  els.dayTabs.innerHTML = tripDays
    .map((day) => {
      const active = day.id === state.currentDay ? " is-active" : "";
      const customCount = getCustomItems(day.id).length;
      const suffix = customCount ? `<em>+${customCount}</em>` : "";
      return `<button class="day-tab${active}" style="--accent:${day.accent}" type="button" data-day="${day.id}">
        <strong>${day.label}${suffix}</strong><span>${day.short}</span>
      </button>`;
    })
    .join("");

  els.dayTabs.querySelectorAll(".day-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const nextDay = tripDays.find((day) => day.id === tab.dataset.day) || tripDays[0];
      state.currentDay = nextDay.id;
      state.selectedId = getDayItems(nextDay)[0]?.id || "";
      state.filter = "all";
      document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("is-active", chip.dataset.filter === "all"));
      render();
      fitCurrentRoute();
    });
  });
}

function renderBrief() {
  const day = getCurrentDay();
  els.dayStatus.textContent = day.status;
  els.dayStatus.style.color = day.accent;
  els.dayTitle.textContent = `${day.label}｜${day.title}`;
  els.dayNote.textContent = day.note;
}

function renderTimeline() {
  const day = getCurrentDay();
  const allItems = getDayItems(day);
  const items = allItems.filter((item) => {
    const data = withEdits(item);
    return state.filter === "all" || safeTags(data).includes(state.filter);
  });

  if (!items.length) {
    els.timeline.innerHTML = `<div class="empty-state">這個篩選目前沒有行程。</div>`;
    return;
  }

  els.timeline.innerHTML = items
    .map((item) => {
      const data = withEdits(item);
      const allIndex = allItems.findIndex((entry) => entry.id === item.id);
      const selected = item.id === state.selectedId ? " is-selected" : "";
      const complete = state.completed[item.id] ? " is-complete" : "";
      const custom = isCustomItem(item.id) ? " is-custom" : "";
      return `<article class="timeline-card${selected}${complete}${custom}" data-id="${item.id}" style="--accent:${day.accent}">
        <input type="checkbox" ${state.completed[item.id] ? "checked" : ""} aria-label="完成 ${escapeHtml(data.zh)}" />
        <div class="time-block">
          <strong class="editable" data-field="time" contenteditable="${state.editMode}">${escapeHtml(data.time)}</strong>
          <span>${String(allIndex + 1).padStart(2, "0")}</span>
        </div>
        <div class="timeline-body">
          <h3 class="spot-title editable" data-field="zh" contenteditable="${state.editMode}">${escapeHtml(data.zh)}</h3>
          <p class="spot-subtitle editable" data-field="en" contenteditable="${state.editMode}">${escapeHtml(data.en)}</p>
          <div class="meta-row">
            ${tagPill(data, "transport", data.transport)}
            ${tagPill(data, "booking", data.booking)}
            ${safeTags(data).includes("warning") ? `<span class="pill warning">提醒</span>` : ""}
            ${isCustomItem(item.id) ? `<span class="pill custom">自訂</span>` : ""}
          </div>
          <p class="note editable" data-field="note" contenteditable="${state.editMode}">${escapeHtml(data.note)}</p>
        </div>
      </article>`;
    })
    .join("");

  els.timeline.querySelectorAll(".timeline-card").forEach((card) => {
    const id = card.dataset.id;
    card.addEventListener("click", (event) => {
      if (event.target.matches("input") || event.target.closest("[contenteditable='true']")) return;
      selectItem(id);
    });

    card.querySelector("input").addEventListener("change", (event) => {
      state.completed[id] = event.target.checked;
      if (!event.target.checked) delete state.completed[id];
      saveJson(STORAGE_KEYS.completed, state.completed);
      renderTimeline();
      renderMetrics();
    });

    card.querySelectorAll("[contenteditable='true']").forEach((node) => {
      node.addEventListener("blur", () => {
        updateEdit(id, node.dataset.field, node.textContent.trim());
      });
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          node.blur();
        }
      });
    });
  });
}

function tagPill(data, tag, value) {
  if (!value && !safeTags(data).includes(tag)) return "";
  const className = safeTags(data).includes(tag) ? ` ${tag}` : "";
  return `<span class="pill${className}">${escapeHtml(value || tag)}</span>`;
}

function renderMap() {
  if (fallbackMap) {
    renderFallbackMap();
    return;
  }
  if (!map) return;

  const day = getCurrentDay();
  const items = getDayItems(day);
  markers.clear();
  markerLayer.clearLayers();
  routeLayer.clearLayers();

  const routePoints = items.map((item) => withEdits(item).coords).filter(isValidCoords);
  if (routePoints.length > 1) {
    L.polyline(routePoints, {
      color: "#ffffff",
      weight: 8,
      opacity: 0.86,
    }).addTo(routeLayer);
    L.polyline(routePoints, {
      color: day.accent,
      weight: 4,
      opacity: 0.95,
    }).addTo(routeLayer);
  }

  items.forEach((item, index) => {
    const data = withEdits(item);
    if (!isValidCoords(data.coords)) return;
    const marker = L.marker(data.coords, {
      icon: L.divIcon({
        className: "",
        html: `<div class="marker-pin ${item.id === state.selectedId ? "is-selected" : ""}" style="--accent:${day.accent}">${index + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      }),
    }).addTo(markerLayer);
    marker.on("click", () => selectItem(item.id));
    marker.bindTooltip(`${data.zh}<br>${data.en}`, { direction: "top", offset: [0, -12] });
    markers.set(item.id, marker);
  });

  fitCurrentRoute(false);
}

function fitCurrentRoute(animate = true) {
  if (fallbackMap) {
    renderFallbackMap();
    return;
  }
  if (!map) return;

  const day = getCurrentDay();
  const points = getDayItems(day).map((item) => withEdits(item).coords).filter(isValidCoords);
  if (points.length) {
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [56, 56], animate });
  } else {
    map.setView(day.center, day.zoom, { animate });
  }
}

function selectItem(id) {
  state.selectedId = id;
  const item = getSelectedItem();
  renderTimeline();
  renderMapSelection();
  renderDrawer(item);
  hydrateIcons();

  if (fallbackMap) {
    renderFallbackMapSelection();
    return;
  }
  if (map && item) {
    const data = withEdits(item);
    if (isValidCoords(data.coords)) {
      map.flyTo(data.coords, Math.max(map.getZoom(), 15), { duration: 0.45 });
    }
  }
}

function renderMapSelection() {
  if (fallbackMap) {
    renderFallbackMapSelection();
    return;
  }
  if (!map) return;

  const day = getCurrentDay();
  const items = getDayItems(day);
  markers.forEach((marker, id) => {
    marker.setIcon(
      L.divIcon({
        className: "",
        html: `<div class="marker-pin ${id === state.selectedId ? "is-selected" : ""}" style="--accent:${day.accent}">${items.findIndex((item) => item.id === id) + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      }),
    );
  });
}

function renderFallbackMap() {
  const day = getCurrentDay();
  const mapEl = document.querySelector("#map");
  const items = getDayItems(day);
  const projectedItems = projectFallbackItems(items);
  const route = projectedItems.map((item) => `${item.x},${item.y}`).join(" ");
  mapEl.innerHTML = `<div class="offline-map" style="--accent:${day.accent}">
    <div class="offline-map-status">${escapeHtml(fallbackMapReason || "目前使用本機示意地圖")}</div>
    <svg class="offline-map-svg" viewBox="0 0 1000 620" role="img" aria-label="${escapeHtml(day.label)} 旅行地圖">
      <defs>
        <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d8cfc2" stroke-width="1" opacity="0.55" />
        </pattern>
      </defs>
      <rect width="1000" height="620" fill="#f8f2e7" />
      <rect width="1000" height="620" fill="url(#smallGrid)" />
      ${fallbackBaseLabels(day.id)}
      <path d="M470 36 C430 145 530 214 470 330 C420 428 470 512 428 602" fill="none" stroke="#a9d7e8" stroke-width="42" opacity="0.8" />
      <path d="M470 36 C430 145 530 214 470 330 C420 428 470 512 428 602" fill="none" stroke="#74bbd7" stroke-width="9" opacity="0.75" />
      <polyline points="${route}" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
      <polyline points="${route}" fill="none" stroke="${day.accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    ${projectedItems
      .map((item, index) => {
        const data = withEdits(item.source);
        const isSelected = item.source.id === state.selectedId ? " is-selected" : "";
        return `<button class="offline-pin${isSelected}" type="button" data-id="${item.source.id}" style="left:${item.x / 10}%; top:${item.y / 6.2}%;" title="${escapeHtml(data.zh)}">
          ${index + 1}
        </button>
        <button class="offline-label${isSelected}" type="button" data-id="${item.source.id}" style="left:${Math.min(item.x / 10 + 2, 82)}%; top:${Math.max(item.y / 6.2 - 2, 5)}%;">
          <strong>${escapeHtml(data.zh)}</strong><span>${escapeHtml(data.en)}</span>
        </button>`;
      })
      .join("")}
    <div class="offline-map-note">景點與路線仍可點選、修改與新增。</div>
  </div>`;

  mapEl.querySelectorAll("[data-id]").forEach((node) => {
    node.addEventListener("click", () => selectItem(node.dataset.id));
  });
}

function renderFallbackMapSelection() {
  document.querySelectorAll(".offline-pin, .offline-label").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.id === state.selectedId);
  });
}

function projectFallbackItems(items) {
  const usableItems = items.filter((item) => isValidCoords(withEdits(item).coords));
  const lats = usableItems.map((item) => withEdits(item).coords[0]);
  const lons = usableItems.map((item) => withEdits(item).coords[1]);
  let minLat = Math.min(...lats);
  let maxLat = Math.max(...lats);
  let minLon = Math.min(...lons);
  let maxLon = Math.max(...lons);

  if (!Number.isFinite(minLat) || !Number.isFinite(minLon)) return [];
  if (maxLat - minLat < 0.015) {
    minLat -= 0.0075;
    maxLat += 0.0075;
  }
  if (maxLon - minLon < 0.015) {
    minLon -= 0.0075;
    maxLon += 0.0075;
  }

  const padX = 120;
  const padY = 82;
  return usableItems.map((item) => {
    const [lat, lon] = withEdits(item).coords;
    return {
      source: item,
      x: padX + ((lon - minLon) / (maxLon - minLon)) * (1000 - padX * 2),
      y: padY + ((maxLat - lat) / (maxLat - minLat)) * (620 - padY * 2),
    };
  });
}

function fallbackBaseLabels(dayId) {
  if (dayId === "day3") {
    return `
      <text x="152" y="118" class="offline-region">Prague</text>
      <text x="674" y="522" class="offline-region">Český Krumlov</text>
      <path d="M200 142 C360 200 565 342 710 490" fill="none" stroke="#e8d6bf" stroke-width="34" stroke-linecap="round" opacity="0.75" />`;
  }
  return `
    <text x="118" y="110" class="offline-region">Castle District</text>
    <text x="562" y="156" class="offline-region">Old Town</text>
    <text x="592" y="448" class="offline-region">New Town</text>
    <text x="146" y="420" class="offline-region">Petřín / Lesser Town</text>
    <text x="496" y="308" class="offline-river-label">Vltava River</text>`;
}

function renderDrawer(item) {
  if (!item) {
    els.drawer.innerHTML = "";
    return;
  }
  const data = withEdits(item);
  const custom = isCustomItem(item.id);
  const hasEdits = Boolean(state.edits[item.id] && Object.keys(state.edits[item.id]).length);
  els.drawer.innerHTML = `<h3>${escapeHtml(data.zh)}</h3>
    <p>${escapeHtml(data.en)}</p>
    <div class="detail-grid">
      <span>時間</span><span>${escapeHtml(data.time)}</span>
      <span>交通</span><span>${escapeHtml(data.transport)}</span>
      <span>移動</span><span>${escapeHtml(data.moveTime)}</span>
      <span>預約</span><span>${escapeHtml(data.booking)}</span>
      <span>備註</span><span>${escapeHtml(data.note)}</span>
      <span>座標</span><span>${escapeHtml(formatCoords(data.coords))}</span>
    </div>
    <div class="drawer-actions">
      <button class="primary-button compact" type="button" data-action="edit-selected">修改此行程</button>
      ${custom ? `<button class="danger-button compact" type="button" data-action="delete-selected">刪除景點</button>` : ""}
      ${hasEdits ? `<button class="secondary-button compact" type="button" data-action="reset-selected">重設修改</button>` : ""}
    </div>`;

  els.drawer.querySelector('[data-action="edit-selected"]').addEventListener("click", () => openSpotForm("edit", item));
  els.drawer.querySelector('[data-action="delete-selected"]')?.addEventListener("click", () => deleteCustomItem(item.id));
  els.drawer.querySelector('[data-action="reset-selected"]')?.addEventListener("click", () => {
    delete state.edits[item.id];
    saveJson(STORAGE_KEYS.edits, state.edits);
    render();
  });
}

function renderMetrics() {
  const allItems = tripDays.flatMap((day) => getDayItems(day));
  const validIds = new Set(allItems.map((item) => item.id));
  const done = Object.keys(state.completed).filter((id) => validIds.has(id)).length;
  els.metricSpots.textContent = `${allItems.length} 個景點`;
  els.metricStatus.textContent = `${done} 個已完成`;
}

function openSpotForm(mode, item = null) {
  const day = getCurrentDay();
  const selected = getSelectedItem();
  const selectedData = selected ? withEdits(selected) : null;
  const fallbackCoords = selectedData?.coords || day.center;
  const data =
    item && mode === "edit"
      ? withEdits(item)
      : {
          id: "",
          time: "",
          zh: "",
          en: "",
          coords: fallbackCoords,
          transport: "步行",
          moveTime: "",
          booking: "",
          note: "",
          tags: ["transport"],
        };

  els.spotModal.dataset.mode = mode;
  els.spotModalMode.textContent = mode === "edit" ? "修改行程" : "新增景點";
  els.spotModalTitle.textContent = mode === "edit" ? data.zh : `${day.label} 新增景點`;
  els.spotFormHint.textContent =
    mode === "edit" && item && !isCustomItem(item.id)
      ? "原始景點會保留，修改內容儲存在這台裝置。"
      : "內容會儲存在這台裝置的瀏覽器。";

  els.spotId.value = item?.id || "";
  els.spotTime.value = data.time || "";
  els.spotZh.value = data.zh || "";
  els.spotEn.value = data.en || "";
  els.spotTransport.value = data.transport || "";
  els.spotMoveTime.value = data.moveTime || "";
  els.spotBooking.value = data.booking || "";
  els.spotLat.value = isValidCoords(data.coords) ? String(data.coords[0]) : "";
  els.spotLon.value = isValidCoords(data.coords) ? String(data.coords[1]) : "";
  els.spotNote.value = data.note || "";
  setTagChecks(data.tags || []);

  const canDelete = mode === "edit" && item && isCustomItem(item.id);
  els.spotDelete.hidden = !canDelete;
  els.spotDelete.disabled = !canDelete;
  els.spotModal.hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => els.spotTime.focus(), 50);
}

function closeSpotForm() {
  els.spotModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function saveSpotForm(event) {
  event.preventDefault();
  const mode = els.spotModal.dataset.mode;
  const existingId = els.spotId.value;
  const payload = collectSpotPayload(existingId);

  if (mode === "add") {
    const day = getCurrentDay();
    const nextItem = { ...payload, id: `custom-${Date.now()}`, custom: true };
    state.customItems[day.id] = [...getCustomItems(day.id), nextItem];
    saveCustomItems();
    state.selectedId = nextItem.id;
  } else if (existingId && isCustomItem(existingId)) {
    const itemDay = findItemDay(existingId) || getCurrentDay();
    state.customItems[itemDay.id] = getCustomItems(itemDay.id).map((item) =>
      item.id === existingId ? { ...payload, id: existingId, custom: true } : item,
    );
    delete state.edits[existingId];
    saveCustomItems();
    saveJson(STORAGE_KEYS.edits, state.edits);
    state.currentDay = itemDay.id;
    state.selectedId = existingId;
  } else if (existingId) {
    const original = findRawItem(existingId);
    if (original) {
      const diff = diffFromOriginal(original, payload);
      if (Object.keys(diff).length) {
        state.edits[existingId] = diff;
      } else {
        delete state.edits[existingId];
      }
      saveJson(STORAGE_KEYS.edits, state.edits);
      state.selectedId = existingId;
    }
  }

  closeSpotForm();
  render();
  fitCurrentRoute(false);
}

function collectSpotPayload(existingId) {
  const original = existingId ? withEdits(findRawItem(existingId)) : null;
  const selected = getSelectedItem();
  const fallbackCoords = original?.coords || (selected ? withEdits(selected).coords : getCurrentDay().center);
  const lat = Number.parseFloat(els.spotLat.value);
  const lon = Number.parseFloat(els.spotLon.value);
  const coords = Number.isFinite(lat) && Number.isFinite(lon) ? [lat, lon] : fallbackCoords;
  const tags = Array.from(els.spotForm.querySelectorAll('input[name="tag"]:checked')).map((input) => input.value);

  return {
    id: existingId,
    time: els.spotTime.value.trim() || "未排時間",
    zh: els.spotZh.value.trim() || "未命名景點",
    en: els.spotEn.value.trim(),
    coords,
    transport: els.spotTransport.value.trim() || "待確認",
    moveTime: els.spotMoveTime.value.trim() || "待確認",
    booking: els.spotBooking.value.trim() || "無",
    note: els.spotNote.value.trim(),
    tags,
  };
}

function deleteCustomItem(id) {
  if (!id || !isCustomItem(id)) return;
  const itemDay = findItemDay(id) || getCurrentDay();
  const data = withEdits(findRawItem(id));
  const confirmed = window.confirm(`刪除「${data.zh}」？`);
  if (!confirmed) return;

  state.customItems[itemDay.id] = getCustomItems(itemDay.id).filter((item) => item.id !== id);
  delete state.completed[id];
  delete state.edits[id];
  saveCustomItems();
  saveJson(STORAGE_KEYS.completed, state.completed);
  saveJson(STORAGE_KEYS.edits, state.edits);

  state.currentDay = itemDay.id;
  state.selectedId = getDayItems(itemDay)[0]?.id || "";
  closeSpotForm();
  render();
}

function updateEdit(id, field, value) {
  const original = findRawItem(id);
  if (!original) return;

  if (isCustomItem(id)) {
    original[field] = value;
    saveCustomItems();
    renderDrawer(getSelectedItem());
    return;
  }

  if (!state.edits[id]) state.edits[id] = {};
  if (value === original[field] || value === "") {
    delete state.edits[id][field];
  } else {
    state.edits[id][field] = value;
  }
  if (Object.keys(state.edits[id]).length === 0) delete state.edits[id];
  saveJson(STORAGE_KEYS.edits, state.edits);
  renderDrawer(getSelectedItem());
}

function diffFromOriginal(original, payload) {
  const fields = ["time", "zh", "en", "transport", "moveTime", "booking", "note"];
  const diff = {};
  fields.forEach((field) => {
    if ((payload[field] || "") !== (original[field] || "")) diff[field] = payload[field];
  });
  if (!sameCoords(payload.coords, original.coords)) diff.coords = payload.coords;
  if (!sameStringArray(payload.tags, original.tags)) diff.tags = payload.tags;
  return diff;
}

function setTagChecks(tags) {
  const tagSet = new Set(tags || []);
  els.spotForm.querySelectorAll('input[name="tag"]').forEach((input) => {
    input.checked = tagSet.has(input.value);
  });
}

function getCurrentDay() {
  return tripDays.find((day) => day.id === state.currentDay) || tripDays[0];
}

function getDayItems(day = getCurrentDay()) {
  return [...day.items, ...getCustomItems(day.id)].sort((a, b) => timeRank(a) - timeRank(b) || a.id.localeCompare(b.id));
}

function getCustomItems(dayId) {
  return Array.isArray(state.customItems[dayId]) ? state.customItems[dayId] : [];
}

function getSelectedItem() {
  const items = getDayItems();
  return items.find((item) => item.id === state.selectedId) || items[0];
}

function findRawItem(id) {
  const base = tripDays.flatMap((day) => day.items).find((item) => item.id === id);
  if (base) return base;
  return Object.values(state.customItems)
    .flat()
    .find((item) => item.id === id);
}

function findItemDay(id) {
  return tripDays.find((day) => day.items.some((item) => item.id === id) || getCustomItems(day.id).some((item) => item.id === id));
}

function isCustomItem(id) {
  return Boolean(
    Object.values(state.customItems)
      .flat()
      .find((item) => item.id === id),
  );
}

function withEdits(item) {
  if (!item) return null;
  const edited = { ...item, ...(state.edits[item.id] || {}) };
  edited.tags = safeTags(edited);
  return edited;
}

function safeTags(item) {
  return Array.isArray(item?.tags) ? item.tags : [];
}

function saveCustomItems() {
  saveJson(STORAGE_KEYS.customItems, state.customItems);
}

function applyDataMigrations() {
  try {
    if (localStorage.getItem(STORAGE_KEYS.dataVersion) === DATA_VERSION) return;

    delete state.edits["d1-09"];
    delete state.edits["d1-10"];
    delete state.edits["d1-02"];
    delete state.edits["d1-04"];
    delete state.edits["d1-08"];
    delete state.edits["d1-vrtba"];
    delete state.edits["d2-01"];
    delete state.edits["d2-07"];
    delete state.edits["d2-stnicholas"];
    delete state.edits["d1-01a"];
    delete state.edits["d4-00"];
    delete state.edits["d4-01"];
    delete state.edits["d4-agnes"];
    delete state.edits["d4-02"];
    delete state.edits["d4-lunch-mistral"];
    delete state.edits["d4-lunch-gruzie"];
    delete state.edits["d4-lunch-b-mistral"];
    delete state.edits["d4-lunch-c-gruzie"];
    delete state.edits["d4-03"];
    delete state.edits["d4-04"];
    delete state.edits["d4-045"];
    delete state.edits["d4-05"];
    delete state.edits["d4-06"];
    delete state.completed["d1-10"];
    delete state.completed["d1-vrtba"];
    delete state.completed["d2-stnicholas"];
    delete state.completed["d4-01"];
    delete state.completed["d4-02"];
    delete state.completed["d1-dinner-louvre"];
    delete state.completed["d1-dinner-vytopna"];
    delete state.completed["d1-dinner-kantyna"];
    saveJson(STORAGE_KEYS.edits, state.edits);
    saveJson(STORAGE_KEYS.completed, state.completed);
    localStorage.setItem(STORAGE_KEYS.dataVersion, DATA_VERSION);
  } catch {
    // If localStorage is unavailable, the base itinerary still renders.
  }
}

function timeRank(item) {
  const time = withEdits(item)?.time || "";
  const match = String(time).match(/(\d{1,2})\s*[:：]\s*(\d{2})/);
  if (!match) return 9999;
  return Number(match[1]) * 60 + Number(match[2]);
}

function isValidCoords(coords) {
  return (
    Array.isArray(coords) &&
    coords.length === 2 &&
    Number.isFinite(Number(coords[0])) &&
    Number.isFinite(Number(coords[1]))
  );
}

function sameCoords(a, b) {
  if (!isValidCoords(a) || !isValidCoords(b)) return false;
  return Math.abs(Number(a[0]) - Number(b[0])) < 0.000001 && Math.abs(Number(a[1]) - Number(b[1])) < 0.000001;
}

function sameStringArray(a, b) {
  const left = [...(a || [])].sort();
  const right = [...(b || [])].sort();
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function formatCoords(coords) {
  if (!isValidCoords(coords)) return "待確認";
  return `${Number(coords[0]).toFixed(5)}, ${Number(coords[1]).toFixed(5)}`;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
