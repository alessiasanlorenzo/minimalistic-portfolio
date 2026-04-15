const menuIcon = document.querySelector("#menu-icon");

const navLinks = document.querySelector(".nav-links");

// Aggiungiamo questa riga per selezionare tutti i link dentro la tendina

const links = document.querySelectorAll(".nav-links a");

// Apre o chiude il menù quando clicchi sull'hamburger
menuIcon.onclick = () => {
  // 1. Applica l'animazione SOLO in questo momento
  navLinks.style.transition =
    "opacity 0.4s ease, transform 0.4s ease, visibility 0.4s ease";

  // 2. Apre/Chiude il menù
  navLinks.classList.toggle("active");
};

// Chiude il menù e blocca l'animazione quando allarghi la finestra
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    navLinks.style.transition = "none"; // Uccide l'animazione durante il ridimensionamento
  }
});
