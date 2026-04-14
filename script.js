const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
// Aggiungiamo questa riga per selezionare tutti i link dentro la tendina
const links = document.querySelectorAll(".nav-links a");

// Apre o chiude il menù quando clicchi sull'hamburger
menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

// NUOVO: Chiude il menù automaticamente quando clicchi su un link
links.forEach((link) => {
  link.onclick = () => {
    navLinks.classList.remove("active");
  };
});

// Cambia l'header quando scorri la pagina
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled-nav");
  } else {
    header.classList.remove("scrolled-nav");
  }
});
