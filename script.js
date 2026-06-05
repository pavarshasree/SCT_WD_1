const header = document.querySelector("#site-header");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeMenu();
  }
});

updateHeader();