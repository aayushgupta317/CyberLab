(() => {
  const content = document.getElementById("article-content");
  if (!content || !window.GUIDES) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const guide = GUIDES.find((item) => item.id === id);
  const related = document.getElementById("related-grid");
  const card = (item) => `<a class="guide-card" href="guide.html?id=${encodeURIComponent(item.id)}"><div class="guide-card-top"><span class="guide-icon">${item.icon}</span><span class="guide-read">${item.read} read</span></div><span class="guide-category">${item.categoryLabel}</span><h2>${item.title}</h2><p>${item.short}</p><span class="guide-card-bottom"><span>Open field guide</span><b>↗</b></span></a>`;
  if (!guide) {
    document.title = "Guide not found — CyberSafe Lab";
    content.innerHTML = `<div class="not-found"><span>404 / FIELD GUIDE</span><h1>This guide isn't <em>here.</em></h1><p>It may have moved, or the link may be incomplete.</p><a class="button button-primary" href="guides.html">Browse all guides <span>↗</span></a></div>`;
    related.innerHTML = GUIDES.slice(0, 3).map(card).join("");
    return;
  }
  document.title = `${guide.title} — CyberSafe Lab`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", guide.short);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", guide.short);
  const sections = guide.sections.map(([title, text], i) => `<section class="article-section"><span class="article-section-number">${String(i + 1).padStart(2, "0")}</span><div><h2>${title}</h2><p>${text}</p></div></section>`).join("");
  const checks = guide.checklist.map((item) => `<li><span aria-hidden="true">✓</span>${item}</li>`).join("");
  content.innerHTML = `<header class="article-header"><p class="eyebrow">${guide.categoryLabel} <span class="tag">${guide.read} READ</span></p><h1>${guide.title}</h1><p class="article-deck">${guide.short}</p><div class="article-byline"><span>CYBERSAFE LAB FIELD GUIDE</span><span>BEGINNER FRIENDLY</span></div></header><div class="article-body"><p class="article-intro">${guide.intro}</p><aside class="example-box"><span>IN PRACTICE</span><p>${guide.example}</p></aside>${sections}<section class="takeaway"><p class="eyebrow">Quick recap</p><h2>Take this <span>with you.</span></h2><ul>${checks}</ul></section><p class="article-source"><b>Continue learning:</b> <a href="${guide.source[1]}" target="_blank" rel="noopener noreferrer">${guide.source[0]} ↗</a></p><p class="article-note">This guide is general educational information, not a guarantee that any single step prevents every risk. Services and settings can change; check the official help resources for the accounts you use.</p></div>`;
  related.innerHTML = GUIDES.filter((item) => item.id !== guide.id).slice(0, 3).map(card).join("");
})();
