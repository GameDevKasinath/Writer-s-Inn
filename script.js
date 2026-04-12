const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.7)";
    nav.style.backdropFilter = "blur(10px)";
  } else {
    nav.style.background = "transparent";
  }
});
