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
// 1. Inizializzazione: incolla qui la tua PUBLIC KEY (quella che trovi in Account -> API Keys)
emailjs.init("Q8rHl4UA6uTYZFfAr");

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Cambia il testo del bottone per dare un feedback all'utente
    submitBtn.innerText = "Invio in corso...";

    // 2. I tuoi ID personali
    const serviceID = "service_7uxfbv5"; // Questo lo abbiamo già
    const templateID = "template_x2l30rw"; // Incolla qui quello che hai appena trovato

    // Invia il modulo
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        submitBtn.innerText = "Messaggio Inviato!";
        contactForm.reset(); // Svuota i campi del form

        setTimeout(() => {
          submitBtn.innerText = "Invia Messaggio";
        }, 3000);
      },
      (err) => {
        submitBtn.innerText = "Errore!";
        alert("Si è verificato un errore: " + JSON.stringify(err));
      },
    );
  });
}
