const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255,255,255,0.9)";
  } else {
    nav.style.background = "rgba(255,255,255,0.6)";
  }
});
