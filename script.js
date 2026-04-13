const nav = document.getElementById("siteNav");
const heroOverlay = document.getElementById("heroOverlay");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

const revealTargets = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((el) => observer.observe(el));

function setHeroOverlay() {
  const y = window.scrollY || 0;
  const max = 420;
  const opacity = Math.min(0.42, (y / max) * 0.42);

  document.documentElement.style.setProperty("--hero-overlay", opacity.toFixed(3));
  nav.classList.toggle("scrolled", y > 10);
}

setHeroOverlay();
window.addEventListener("scroll", setHeroOverlay, { passive: true });

function closeMobileMenu() {
  mobileMenu.style.display = "none";
  mobileMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const open = mobileMenu.style.display === "flex";
  mobileMenu.style.display = open ? "none" : "flex";
  mobileMenu.setAttribute("aria-hidden", open ? "true" : "false");
  menuToggle.setAttribute("aria-expanded", open ? "false" : "true");
}

menuToggle.addEventListener("click", toggleMenu);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href");
    if (!target || target === "#") return;

    const el = document.querySelector(target);
    if (!el) return;

    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMobileMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMobileMenu();
  }
});
