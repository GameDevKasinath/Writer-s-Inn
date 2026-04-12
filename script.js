const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255,255,255,0.9)";
    nav.style.backdropFilter = "blur(10px)";
  } else {
    nav.style.background = "transparent";
  }
});
