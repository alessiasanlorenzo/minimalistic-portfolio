const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

// Questa l'avevi già preparata: seleziona tutti i link dentro la tendina
const links = document.querySelectorAll(".nav-links a");

// Apre o chiude il menù quando clicchi sull'hamburger
menuIcon.onclick = () => {
  // 1. Applica l'animazione SOLO in questo momento
  navLinks.style.transition =
    "opacity 0.4s ease, transform 0.4s ease, visibility 0.4s ease";

  // 2. Apre/Chiude il menù
  navLinks.classList.toggle("active");
};

// --- NUOVA AGGIUNTA: Chiude il menù quando clicchi su una voce ---
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Mantiene l'animazione fluida anche in chiusura
    navLinks.style.transition =
      "opacity 0.4s ease, transform 0.4s ease, visibility 0.4s ease";
    // Chiude la tendina
    navLinks.classList.remove("active");
  });
});
// -----------------------------------------------------------------

// Chiude il menù e blocca l'animazione quando allarghi la finestra
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    navLinks.style.transition = "none"; // Uccide l'animazione durante il ridimensionamento
  }
});

// 1. Inizializzazione EmailJS
emailjs.init("Q8rHl4UA6uTYZFfAr");

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Tentativo di invio in corso...");

    // 1. INIZIA L'ANIMAZIONE: Testo e classe "sending"
    if (submitBtn) {
      submitBtn.innerText = "Invio in corso...";
      submitBtn.disabled = true;
      submitBtn.classList.remove("sent"); // Assicura che parta da zero
      submitBtn.classList.add("sending"); // Fa partire la barra fino all'80%
    }

    const serviceID = "service_7uxfbv5";
    const templateID = "template_x2l30rw";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        console.log("Email inviata con successo!");

        // 2. SUCCESSO: Testo e classe "sent" (riempie al 100%)
        if (submitBtn) {
          submitBtn.innerText = "Messaggio Inviato!";
          submitBtn.classList.remove("sending");
          submitBtn.classList.add("sent");
          submitBtn.disabled = false;
        }

        contactForm.reset();

        // 3. DOPO 3 SECONDI: Torna tutto normale
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.innerText = "Send Message";
            submitBtn.classList.remove("sending", "sent"); // Svuota il colore
          }
        }, 3000);
      },
      (err) => {
        console.log("Errore EmailJS:", err);

        // ERRORE: Blocca l'animazione e avvisa
        if (submitBtn) {
          submitBtn.innerText = "Errore!";
          submitBtn.classList.remove("sending"); // Ferma l'animazione
          submitBtn.disabled = false;
        }
        alert("Si è verificato un errore: " + JSON.stringify(err));
      },
    );
  });
} else {
  console.error("Errore: Non ho trovato un form con id='contact-form'");
}
// =========================================
// GESTIONE TEMA (DARK / LIGHT MODE)
// =========================================
const themeToggle = document.getElementById("theme-toggle");

// 1. Controlla se l'utente ha già salvato una preferenza o controlla il sistema
const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Funzione principale per applicare il tema e cambiare l'icona
const applyTheme = (theme) => {
  if (theme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.classList.replace("fa-moon", "fa-sun");
  } else {
    document.body.classList.remove("light-mode");
    themeToggle.classList.replace("fa-sun", "fa-moon");
  }
};

// Applica il tema al caricamento della pagina
if (currentTheme) {
  // Se c'è un salvataggio, usalo
  applyTheme(currentTheme);
} else if (!prefersDarkScheme.matches) {
  // Se non c'è salvataggio e il sistema è su "light", usa light
  applyTheme("light");
}

// 2. Al click del pulsante, cambia il tema e salva la scelta
themeToggle.addEventListener("click", () => {
  let theme = "dark";

  // Se il body NON ha la classe light-mode, significa che stiamo passando a light
  if (!document.body.classList.contains("light-mode")) {
    theme = "light";
  }

  applyTheme(theme);
  // Salva la scelta nel browser
  localStorage.setItem("theme", theme);
});

// Opzionale: Ascolta i cambiamenti di tema del sistema in tempo reale
prefersDarkScheme.addEventListener("change", (e) => {
  // Cambia solo se l'utente non ha impostato una preferenza manuale
  if (!localStorage.getItem("theme")) {
    const newTheme = e.matches ? "dark" : "light";
    applyTheme(newTheme);
  }
});
