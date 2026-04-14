const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  // Seleziona il tuo header
  let header = document.querySelector("header");

  // Aggiunge la classe 'scrolled-nav' se scendi più di 50 pixel
  if (window.scrollY > 50) {
    header.classList.add("scrolled-nav");
  } else {
    header.classList.remove("scrolled-nav");
  }
});
