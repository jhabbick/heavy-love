const pages = [
  {
    href: "/",
    title: "Home",
    text: "Heavy Love John 15:9 First Bible Study Small Group Started Missional Community Started Group leadership shared Partnership with Revival Ministry 6 Teachers Multipled into 2 MCs"
  },
  {
    href: "/the-group/",
    title: "Missional Community",
    text: "Welcome missional community COVID separation today upward inward outward who we are Thursday Bible study"
  },
  {
    href: "/churches/",
    title: "Our Churches",
    text: "Big C Church little c churches Crossings East Lake Midtown NewSpring Sandhills"
  },
  {
    href: "/where-we-serve/",
    title: "Where We Serve",
    text: "Revival Ministry Rosemarie Clarke Citywide Sandhills prayer walks cookouts"
  },
  {
    href: "/big-ideas/",
    title: "Big Ideas",
    text: "Missional Communities Baby Drop Box Daniels Law Equity Building Rental Management Non-profit Software Development Church Historian"
  },
  {
    href: "/resources/",
    title: "Resources",
    text: "Commentaries Free Bible Commentary Enduring Word Study Bibles Blue Letter Bible Logos NET Bible Soma Tacoma Spiritual Formation"
  }
];

const searchToggle = document.querySelector("[data-search-toggle]");
const searchPanel = document.querySelector("[data-search-panel]");
const searchForm = document.querySelector("[data-search-form]");
const searchInput = document.querySelector("[data-search-input]");
const searchResults = document.querySelector("[data-search-results]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navBar = document.querySelector("[data-nav]");
const scrollTop = document.querySelector("[data-scroll-top]");

function setSearchOpen(open) {
  if (!searchPanel || !searchToggle) return;
  searchPanel.hidden = !open;
  searchToggle.setAttribute("aria-expanded", String(open));
  if (open) searchInput.focus();
}

searchToggle?.addEventListener("click", () => {
  setSearchOpen(searchPanel.hidden);
});

document.addEventListener("click", (event) => {
  if (!searchPanel || searchPanel.hidden) return;
  if (event.target.closest(".search-wrap")) return;
  setSearchOpen(false);
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";
  if (!query) {
    searchResults.innerHTML = "<p>Type a word to search the site.</p>";
    return;
  }
  const matches = pages.filter((page) =>
    `${page.title} ${page.text}`.toLowerCase().includes(query)
  );
  if (!matches.length) {
    searchResults.innerHTML = "<p>No matching pages.</p>";
    return;
  }
  matches.forEach((page) => {
    const link = document.createElement("a");
    link.href = page.href;
    link.innerHTML = `<strong>${page.title}</strong>`;
    searchResults.appendChild(link);
  });
});

menuToggle?.addEventListener("click", () => {
  const open = navBar.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-sub-toggle]").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (window.matchMedia("(min-width: 783px)").matches) return;
    event.preventDefault();
    event.stopPropagation();
    const item = button.closest(".has-sub");
    const open = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
});

function updateScrollTop() {
  if (!scrollTop) return;
  scrollTop.classList.toggle("is-visible", window.scrollY > 320);
}

window.addEventListener("scroll", updateScrollTop, { passive: true });
updateScrollTop();

scrollTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
