(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
        nav.classList.remove("is-open");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
        nav.classList.remove("is-open");
        toggle.focus();
      }
    });
  }
  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
  const config = window.CYBERSAFE_CONFIG || {};
  document.querySelectorAll("[data-config-link]").forEach((node) => {
    const value = config[node.dataset.configLink];
    if (value && /^https:\/\//i.test(value)) {
      const link = document.createElement("a");
      link.href = value;
      link.className = "configured-link";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = node.dataset.label || value;
      node.replaceWith(link);
    }
  });
  document.querySelectorAll("[data-config-email]").forEach((node) => {
    const email = config.contactEmail;
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const link = document.createElement("a");
      link.href = `mailto:${email}`;
      link.className = "configured-link";
      link.textContent = email;
      node.replaceWith(link);
    }
  });
  document.querySelectorAll("[data-project-link]").forEach((node) => {
    const value = config[node.dataset.projectLink];
    if (value && /^https:\/\//i.test(value)) {
      const link = document.createElement("a");
      link.href = value;
      link.className = "button button-primary";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = node.dataset.label;
      link.insertAdjacentHTML("beforeend", " <span aria-hidden=\"true\">↗</span>");
      node.replaceWith(link);
    }
  });
})();
