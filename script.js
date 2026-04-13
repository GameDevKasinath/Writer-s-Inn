// SCROLL FADE
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });

  // 🔥 HERO OVERLAY EFFECT
  const overlay = document.getElementById("overlay");
  const scrollY = window.scrollY;

  overlay.style.background = `rgba(0,0,0,${scrollY / 600})`;

});

// MOBILE MENU
function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
