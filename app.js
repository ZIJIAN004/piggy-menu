// ===== 状态 =====
let state = {
  mode: null,           // 1, 2, 3
  selectedIngredients: [],
  selectedRegion: "全部",
  currentRecipe: null,
};

// ===== 工具函数 =====
function $(id) { return document.getElementById(id); }
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// ===== 首屏：模式选择 =====
function selectMode(mode) {
  state.mode = mode;
  state.selectedIngredients = [];
  state.selectedRegion = "全部";

  if (mode === 1) {
    $("input-title").textContent = "🛒 小猪买了什么菜？";
    $("ingredient-section").style.display = "block";
    $("region-section-input").style.display = "block";
    $("region-section-label").textContent = "🗺 可选：小猪偏好哪个地区的口味？";
    renderIngredientSuggestions();
    renderRegionPills("region-pills-input", true);
    showScreen("screen-input");
  } else if (mode === 2) {
    $("input-title").textContent = "😋 小猪想吃哪里的菜？";
    $("ingredient-section").style.display = "none";
    $("region-section-input").style.display = "block";
    $("region-section-label").textContent = "🗺 选一个地区，帮小猪决定去买什么";
    renderRegionPills("region-pills-input", false);
    showScreen("screen-input");
  } else if (mode === 3) {
    $("input-title").textContent = "🎯 小猪的双重要求！";
    $("ingredient-section").style.display = "block";
    $("region-section-input").style.display = "block";
    $("region-section-label").textContent = "🗺 小猪还想吃哪个地区的风格？";
    renderIngredientSuggestions();
    renderRegionPills("region-pills-input", false);
    showScreen("screen-input");
  }
}

// ===== 地区 Pills =====
function renderRegionPills(containerId, allowAll) {
  const container = $(containerId);
  const regions = allowAll ? REGIONS : REGIONS.filter(r => r !== "全部");
  container.innerHTML = regions.map(r => `
    <button class="pill region-${r} ${r === state.selectedRegion ? "active" : ""}"
      onclick="selectRegion('${r}', '${containerId}')">${r}</button>
  `).join("");

  // 如果不允许"全部"但当前是"全部"，自动重置
  if (!allowAll && state.selectedRegion === "全部") {
    state.selectedRegion = "全部";
  }
}
function selectRegion(region, containerId) {
  state.selectedRegion = region;
  renderRegionPills(containerId, containerId === "region-pills-input" && state.mode === 1);
}

// ===== 食材输入 =====
function renderIngredientSuggestions() {
  const existing = new Set(state.selectedIngredients);
  const common = ["鸡蛋", "西红柿", "土豆", "猪肉", "豆腐", "白菜", "青椒", "大蒜", "葱", "姜", "鸡胸肉", "五花肉", "牛肉", "虾", "鱼", "茄子", "胡萝卜", "排骨", "鸡翅", "木耳"];
  const suggestions = common.filter(i => !existing.has(i)).slice(0, 12);
  $("suggestions").innerHTML = suggestions.map(s =>
    `<button class="suggestion-pill" onclick="addIngredient('${s}')">${s}</button>`
  ).join("");
}
function addIngredient(name) {
  name = name.trim();
  if (!name || state.selectedIngredients.includes(name)) return;
  state.selectedIngredients.push(name);
  renderTags();
  renderIngredientSuggestions();
  $("ingredient-input").value = "";
  $("ingredient-input").focus();
}
function removeIngredient(name) {
  state.selectedIngredients = state.selectedIngredients.filter(i => i !== name);
  renderTags();
  renderIngredientSuggestions();
}
function renderTags() {
  $("tags-container").innerHTML = state.selectedIngredients.map(i => `
    <span class="tag">${i}<span class="tag-remove" onclick="removeIngredient('${i}')">✕</span></span>
  `).join("");
}
function handleIngredientInput(e) {
  if (e.key === "Enter" || e.key === "，" || e.key === ",") {
    e.preventDefault();
    addIngredient(e.target.value);
  }
}

// ===== 搜索 =====
function doSearch() {
  // 模式2：必须选地区
  if (state.mode === 2 && state.selectedRegion === "全部") {
    toast("🐷 小猪还没选地区呢～先选一个嘛～");
    return;
  }

  // 模式3：食材和地区至少选一个
  if (state.mode === 3) {
    if (state.selectedIngredients.length === 0 && state.selectedRegion === "全部") {
      toast("🐷 小猪，至少选点食材或挑个地区嘛～");
      return;
    }
  }

  // 清空菜名搜索框
  const nameInput = $("name-search-input");
  if (nameInput) nameInput.value = "";

  let results = [...RECIPES];

  // 地区筛选
  if (state.selectedRegion !== "全部") {
    results = results.filter(r => r.region === state.selectedRegion);
  }

  // 食材匹配（模式1、3）
  if ((state.mode === 1 || state.mode === 3) && state.selectedIngredients.length > 0) {
    results = results
      .map(r => {
        const matched = state.selectedIngredients.filter(i =>
          r.ingredients.some(ri => ri.includes(i) || i.includes(ri))
        );
        return { ...r, matchCount: matched.length, matchedIngredients: matched };
      })
      .filter(r => r.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);
  } else {
    results = results.map(r => ({ ...r, matchCount: 0, matchedIngredients: [] }));
  }

  renderResults(results);
  showScreen("screen-results");
}

// ===== 结果列表 =====
function renderResults(results) {
  $("results-count").textContent = `帮小猪找到 ${results.length} 道菜 🍽️`;

  if (results.length === 0) {
    $("recipe-grid").innerHTML = `
      <div class="empty-state">
        <div class="empty-emoji">🐷</div>
        <div class="empty-title">哎呀，这个组合实在想不出来…</div>
        <div class="empty-sub">小猪换个食材或地区试试？</div>
      </div>`;
    return;
  }

  $("recipe-grid").innerHTML = results.map(r => {
    const spicyStr = r.spicy > 0 ? "🌶️".repeat(r.spicy) : "";
    const matchText = r.matchedIngredients && r.matchedIngredients.length > 0
      ? `匹配食材：<strong>${r.matchedIngredients.join("、")}</strong>`
      : "";
    return `
      <div class="recipe-card" onclick="showDetail(${r.id})">
        <div class="recipe-emoji-wrap">${r.emoji}</div>
        <div class="recipe-info">
          <div class="recipe-name">${r.name}</div>
          <div class="recipe-badges">
            <span class="badge badge-region">${r.region}</span>
            <span class="badge badge-time">⏱ ${r.time}</span>
            <span class="badge badge-diff-${r.difficulty}">${r.difficulty}</span>
            ${spicyStr ? `<span class="badge badge-spicy">${spicyStr}</span>` : ""}
          </div>
          ${matchText ? `<div class="recipe-match">${matchText}</div>` : ""}
        </div>
        <div class="recipe-arrow">›</div>
      </div>`;
  }).join("");
}

// ===== 菜谱详情 =====
function showDetail(id) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return;
  state.currentRecipe = recipe;

  const spicyStr = recipe.spicy > 0 ? "🌶️".repeat(recipe.spicy) : "";

  // Hero
  $("detail-hero").innerHTML = `
    <span class="detail-emoji">${recipe.emoji}</span>
    <div class="detail-name">${recipe.name}</div>
    <div class="detail-badges">
      <span class="badge badge-region">${recipe.region}</span>
      <span class="badge badge-time">⏱ ${recipe.time}</span>
      <span class="badge badge-diff-${recipe.difficulty}">${recipe.difficulty}</span>
      ${spicyStr ? `<span class="badge badge-spicy">${spicyStr}</span>` : ""}
    </div>`;

  // 小猪点评
  $("pig-comment").innerHTML = `
    <div class="pig-comment-icon">🐷</div>
    <div class="pig-comment-text">${recipe.pigComment}</div>`;

  // 食材
  const myIngredients = new Set(state.selectedIngredients);
  $("detail-ingredients").innerHTML = recipe.ingredients.map(i => {
    const has = [...myIngredients].some(mi => i.includes(mi) || mi.includes(i));
    return `<span class="ingredient-item ${has ? "has" : ""}">${i}${has ? " ✓" : ""}</span>`;
  }).join("");

  // 步骤
  $("detail-steps").innerHTML = recipe.steps.map((s, i) => `
    <li class="step-item">
      <div class="step-num">${i + 1}</div>
      <div class="step-text">${s}</div>
    </li>`).join("");

  // AI 生成配图
  generateImage(recipe.imagePrompt);

  showScreen("screen-detail");
}

// ===== AI 图片生成（Pollinations.ai，免费无需 Key）=====
function generateImage(prompt) {
  const wrap = $("ai-image-wrap");
  const img = $("ai-image");
  const loading = $("ai-image-loading");
  const errorDiv = $("ai-image-error");

  // 重置状态
  img.style.display = "none";
  errorDiv.style.display = "none";
  loading.style.display = "flex";

  const encoded = encodeURIComponent(prompt);
  // 加随机seed避免缓存同一张
  const seed = Math.floor(Math.random() * 100000);
  img.src = `https://image.pollinations.ai/prompt/${encoded}?width=512&height=512&model=flux&nologo=true&seed=${seed}`;
}

function onImageLoad() {
  $("ai-image-loading").style.display = "none";
  $("ai-image").style.display = "block";
}

function onImageError() {
  $("ai-image-loading").style.display = "none";
  $("ai-image-error").style.display = "block";
}

// ===== 结果页地区筛选 =====
function initResultsRegionPills() {
  renderRegionPills("region-pills-results", true);
}
function filterResults() {
  const nameQuery = ($("name-search-input") || {}).value?.trim() || "";
  let results = [...RECIPES];
  if (state.selectedRegion !== "全部") {
    results = results.filter(r => r.region === state.selectedRegion);
  }
  if ((state.mode === 1 || state.mode === 3) && state.selectedIngredients.length > 0) {
    results = results
      .map(r => {
        const matched = state.selectedIngredients.filter(i =>
          r.ingredients.some(ri => ri.includes(i) || i.includes(ri))
        );
        return { ...r, matchCount: matched.length, matchedIngredients: matched };
      })
      .filter(r => r.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);
  } else {
    results = results.map(r => ({ ...r, matchCount: 0, matchedIngredients: [] }));
  }
  // 菜名过滤
  if (nameQuery) {
    results = results.filter(r => r.name.includes(nameQuery));
  }
  renderResults(results);
}
function selectRegionInResults(region) {
  state.selectedRegion = region;
  renderRegionPills("region-pills-results", true);
  filterResults();
}

// ===== 随机推荐 =====
function randomRecipe() {
  let pool = [...RECIPES];
  if (state.selectedRegion !== "全部") {
    pool = pool.filter(r => r.region === state.selectedRegion);
  }
  if (pool.length === 0) pool = RECIPES;
  const r = pool[Math.floor(Math.random() * pool.length)];
  showDetail(r.id);
}
