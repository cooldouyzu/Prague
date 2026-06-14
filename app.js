const STORAGE_KEYS = {
  completed: "prague-completed",
  edits: "prague-edits",
  customItems: "prague-custom-items",
};

const tripDays = [
  {
    id: "day1",
    label: "第 1 天",
    short: "Old Town",
    title: "老城區與小城區",
    status: "抵達與經典老城",
    accent: "#d86b2a",
    center: [50.0856, 14.4152],
    zoom: 14,
    note:
      "06:55 抵達後搭乘機場接駁車前往 W Prague 放行李，再從瓦茨拉夫廣場銜接老城區行程。09:00 開始稍緊，入境與車程需預留彈性。",
    items: [
      makeItem(
        "d1-01",
        "06:55-09:00",
        "機場接駁車到 W Prague 放行李",
        "Václav Havel Airport Prague -> W Prague",
        [50.0824, 14.4261],
        "機場接駁車",
        "45-70 分鐘",
        "確認接駁車集合點與飯店可寄放行李",
        "W Prague 位在瓦茨拉夫廣場，放完行李後可步行或搭地鐵/電車前往老城廣場。若入境或接駁延誤，老城廣場與天文鐘時間需後移。",
        ["transport", "booking", "warning"],
      ),
      makeItem(
        "d1-02",
        "09:00-10:30",
        "老城廣場 / 天文鐘",
        "Old Town Square / Astronomical Clock",
        [50.08704, 14.42125],
        "步行",
        "市區內步行",
        "天文鐘塔樓建議預約",
        "整點看十二門徒木偶秀，若登塔需預留排隊與安檢時間。",
        ["booking", "warning"],
      ),
      makeItem(
        "d1-03",
        "10:30-12:00",
        "克萊門特學院",
        "Clementinum / Klementinum",
        [50.08646, 14.41678],
        "步行",
        "5-8 分鐘",
        "圖書館導覽需提前預約",
        "導覽場次固定，建議以預約時段反推老城廣場停留時間。",
        ["booking"],
      ),
      makeItem(
        "d1-04",
        "12:00-13:30",
        "火藥塔 / 市民會館",
        "Powder Tower / Municipal House",
        [50.08758, 14.42886],
        "步行",
        "10-12 分鐘",
        "火藥塔可現場購票",
        "從克萊門特學院往東走，之後午餐 Café Imperial 也在東側，動線順。",
        [],
      ),
      makeItem(
        "d1-05",
        "13:30-15:00",
        "午餐：帝國咖啡",
        "Café Imperial",
        [50.08994, 14.43096],
        "步行或短程電車",
        "7-12 分鐘",
        "已訂位較佳",
        "餐廳熱門，若預約時間固定，前段行程可略微壓縮。",
        ["booking"],
      ),
      makeItem(
        "d1-06",
        "15:00-16:30",
        "查理大橋",
        "Charles Bridge / Karlův most",
        [50.08648, 14.41143],
        "步行",
        "20-25 分鐘",
        "無",
        "從 Café Imperial 走回河邊距離較長，但沿路可穿過老城街巷。",
        [],
      ),
      makeItem(
        "d1-07",
        "16:30-17:30",
        "伏爾塔瓦河遊船",
        "Vltava River Cruise",
        [50.08701, 14.41462],
        "步行至碼頭",
        "5-15 分鐘",
        "建議預訂船班",
        "船班碼頭位置不同，出發前確認集合點，避免從橋上折返。",
        ["transport", "booking"],
      ),
      makeItem(
        "d1-08",
        "17:30-19:00",
        "佩特任山 / 佩特任瞭望塔",
        "Petřín Hill / Petřín Lookout Tower",
        [50.08352, 14.3951],
        "步行到 Újezd 後搭纜車",
        "15-30 分鐘",
        "纜車可能排隊",
        "傍晚上山拍照漂亮，但若遊船延誤，可只保留瞭望塔或山頂散步。",
        ["transport", "warning"],
      ),
    ],
  },
  {
    id: "day2",
    label: "第 2 天",
    short: "Castle",
    title: "城堡區",
    status: "上山參觀城堡群",
    accent: "#6c5ce7",
    center: [50.0902, 14.4005],
    zoom: 15,
    note:
      "建議搭 22 號電車上山，從 Pražský hrad 或 Pohořelec 進入，減少爬坡。城堡內景點密集，動線整體通順。",
    items: [
      makeItem(
        "d2-01",
        "09:00-11:15",
        "聖維特大教堂",
        "St. Vitus Cathedral / Katedrála svatého Víta",
        [50.0909, 14.40052],
        "22 號電車到 Pražský hrad",
        "8-15 分鐘步行入場",
        "城堡套票 / 教堂入場",
        "重點看慕夏彩繪玻璃與聖約翰之墓，旺季安檢需預留時間。",
        ["transport", "booking", "warning"],
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
        "d2-08",
        "18:30-20:00",
        "晚餐：BRICK'S",
        "BRICK'S | Hergetova Cihelna",
        [50.08876, 14.40957],
        "步行下山或電車銜接",
        "25-35 分鐘",
        "已訂位較佳",
        "17:00 後留緩衝下山，餐廳可看查理大橋夜景。",
        ["transport", "booking"],
      ),
    ],
  },
  {
    id: "day3",
    label: "第 3 天",
    short: "Tour",
    title: "庫倫洛夫一日團",
    status: "跟團日",
    accent: "#3a8e5a",
    center: [49.455, 14.285],
    zoom: 8,
    note:
      "此日以旅行團集合與回程時間為主，不另外拆細行程。建議前一晚確認集合地點、護照與回程下車點。",
    items: [
      makeItem(
        "d3-01",
        "依團體集合",
        "集合 / 出發",
        "Meet-up / Departure",
        [50.083, 14.423],
        "旅行團巴士",
        "依團體公告",
        "確認集合點",
        "集合點常在市中心或火車站附近，建議提早 15 分鐘抵達。",
        ["transport", "booking"],
      ),
      makeItem(
        "d3-02",
        "白天",
        "庫倫洛夫古城",
        "Český Krumlov Day Tour",
        [48.8127, 14.3175],
        "旅行團巴士",
        "依團體安排",
        "旅行團已含",
        "跟隨導覽即可，古城石板路多，鞋子以好走為優先。",
        ["transport"],
      ),
      makeItem(
        "d3-03",
        "晚間",
        "返回布拉格 / 自由晚餐",
        "Return to Prague / Free dinner",
        [50.083, 14.423],
        "旅行團巴士",
        "依團體公告",
        "晚餐自理",
        "回程時間可能受交通影響，晚餐建議安排彈性餐廳。",
        ["warning"],
      ),
    ],
  },
  {
    id: "day4",
    label: "第 4 天",
    short: "New Town",
    title: "猶太區、高堡與新城精華",
    status: "較悠閒的收尾日",
    accent: "#0f8b8d",
    center: [50.079, 14.421],
    zoom: 13,
    note:
      "已把慕夏博物館排入午餐後。佩特任山建議保留第一天，第四天改走猶太區、慕夏、高堡與新城，跨區更少。",
    items: [
      makeItem(
        "d4-01",
        "09:00-12:00",
        "猶太區",
        "Jewish Quarter / Josefov",
        [50.09018, 14.42004],
        "市區步行或短程電車",
        "區內步行",
        "猶太博物館套票",
        "Josefov 拼法已修正。建議依套票順序參觀梅瑟會堂、西班牙會堂與老猶太公墓。",
        ["booking"],
      ),
      makeItem(
        "d4-02",
        "12:00-13:30",
        "午餐：帝國咖啡",
        "Café Imperial",
        [50.08994, 14.43096],
        "步行或短程電車",
        "10-15 分鐘",
        "建議訂位",
        "如果第一天已吃 Café Imperial，可替換為 Café Louvre 或附近餐廳。",
        ["booking", "warning"],
      ),
      makeItem(
        "d4-03",
        "13:30-14:45",
        "慕夏博物館",
        "Mucha Museum",
        [50.08443, 14.42903],
        "步行",
        "10-15 分鐘",
        "可提前購票",
        "從 Café Imperial 到慕夏博物館順路，適合補進第四天。",
        ["booking"],
      ),
      makeItem(
        "d4-04",
        "14:45-16:45",
        "高堡區",
        "Vyšehrad",
        [50.06478, 14.41707],
        "地鐵 C 線或電車",
        "20-25 分鐘",
        "教堂可現場購票",
        "參觀聖彼得與聖保羅大殿、高堡公墓，這段比再去佩特任山順。",
        ["transport"],
      ),
      makeItem(
        "d4-05",
        "16:45-17:30",
        "跳舞的房子",
        "Dancing House / Tančící dům",
        [50.07545, 14.41419],
        "步行或電車",
        "15-20 分鐘",
        "無",
        "從高堡沿河往北，適合拍照後接新城晚餐或採買。",
        ["transport"],
      ),
      makeItem(
        "d4-06",
        "17:30-19:00",
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
