const heroLogo = document.querySelector("#hero-logo");
const logoSound = document.querySelector("#logo-sound");

function playSound() {
    logoSound.currentTime = 0;
    logoSound.play();
}

heroLogo.addEventListener("mouseenter", playSound);
heroLogo.addEventListener("click", playSound);