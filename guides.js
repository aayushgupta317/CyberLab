(() => {
  const grid = document.getElementById("guide-grid");
  if (!grid || !window.GUIDES) return;
  const search = document.getElementById("guide-search");
  const count = document.getElementById("guide-count");
  const empty = document.getElementById("guide-empty");
  let filter = "all";
  const card = (guide) => `<a class="guide-card" href="guide.html?id=${encodeURIComponent(guide.id)}"><div class="guide-card-top"><span class="guide-icon">${guide.icon}</span><span class="guide-read">${guide.read} read</span></div><span class="guide-category">${guide.categoryLabel}</span><h2>${guide.title}</h2><p>${guide.short}</p><span class="guide-card-bottom"><span>Open field guide</span><b>↗</b></span></a>`;
  const render = () => {
    const term = search.value.trim().toLowerCase();
    const matches = GUIDES.filter((guide) => (filter === "all" || guide.category === filter) && `${guide.title} ${guide.short} ${guide.categoryLabel}`.toLowerCase().includes(term));
    grid.innerHTML = matches.map(card).join("");
    count.textContent = `${matches.length} ${matches.length === 1 ? "guide" : "guides"}`;
    empty.hidden = matches.length > 0;
    grid.hidden = matches.length === 0;
  };
  search.addEventListener("input", render);
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    render();
  }));
  document.getElementById("clear-filters")?.addEventListener("click", () => {
    search.value = "";
    filter = "all";
    document.querySelectorAll("[data-filter]").forEach((chip) => {
      const active = chip.dataset.filter === "all";
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    render(); search.focus();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault(); search.focus();
    }
  });
  render();
})();
