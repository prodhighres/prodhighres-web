const menuToggle = document.querySelector("#menu-toggle");
const navbar = document.querySelector(".navbar");

// Menü öffnen und schliessen
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
    menuToggle.classList.toggle("open");
});

// Menü nach einem Link-Klick schliessen
navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuToggle.classList.remove("open");
    });
});