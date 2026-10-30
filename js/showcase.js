
const showcaseCards = [
    {
        title: "BORN CRIMINAL",
        image: "assets/images/showcase/Cover - Born criminal - LQ.jpg",
        audio: "assets/audio/born criminal - full LQ.mp3",
    },
    {
        title: "MONDE TRISTE",
        image: "assets/images/showcase/placeholder6.jpg",
        audio: "assets/audio/monde triste - raw LQ.mp3",
    },
    {
        title: "REMORSE",
        image: "assets/images/showcase/placeholder5.jpg",
        audio: "assets/audio/remorse - raw LQ.mp3",
    },
    {
        title: "HAIKU",
        image: "assets/images/showcase/placeholder7.jpg",
        audio: "assets/audio/haiku - raw LQ.mp3",
    }
];

const showcase = document.querySelector("#showcase");
const template = document.querySelector("#beatcard-template");

// Audioplayer-Elemente
const audioplayerContainer = document.querySelector("#audioplayer-container");
const playtoggle = document.querySelector("#playtoggle");
const playIcon = document.querySelector("#audio-play-icon");
const pauseIcon = document.querySelector("#audio-pause-icon");

const skipBack = document.querySelector("#audio-skip-back");
const skipForward = document.querySelector("#audio-skip-forward");

const timeCurrent = document.querySelector("#audio-time-current");
const timeFull = document.querySelector("#audio-time-full");

const progressBar = document.querySelector("#audio-progress-bar");
const progress = document.querySelector("#audio-progress");

// Aktueller Player
let currentAudio = null;
let currentCard = null;
let currentIndex = -1;

// Alle generierten Tracks
const tracks = [];


let isDragging = false;
let startX = 0;
let startScrollLeft = 0;
let activePointerId = null;
let suppressCardClick = false;

showcase.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    activePointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = showcase.scrollLeft;
    isDragging = false;
});

document.addEventListener("pointermove", (event) => {
    if (event.pointerId !== activePointerId) return;

    const distance = event.clientX - startX;

    if (Math.abs(distance) > 5) {
        isDragging = true;
        showcase.classList.add("dragging");
        event.preventDefault();
    }

    if (isDragging) {
        showcase.scrollLeft = startScrollLeft - distance;
    }
});

document.addEventListener("pointerup", (event) => {
    if (event.pointerId !== activePointerId) return;

    if (isDragging) {
        suppressCardClick = true;
    }

    activePointerId = null;
    isDragging = false;
    showcase.classList.remove("dragging");
});

document.addEventListener("pointercancel", () => {
    activePointerId = null;
    isDragging = false;
    showcase.classList.remove("dragging");
});

// Prevent a drag from accidentally triggering a card click
showcase.addEventListener("click", (event) => {
    if (!suppressCardClick) return;

    event.preventDefault();
    event.stopPropagation();
    suppressCardClick = false;
}, true);

function centerCard(card) {
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const showcaseRect = showcase.getBoundingClientRect();

    const cardCenter =
        cardRect.left - showcaseRect.left +
        showcase.scrollLeft +
        cardRect.width / 2;

    const targetScroll =
        cardCenter - showcase.clientWidth / 2;

    showcase.scrollTo({
        left: targetScroll,
        behavior: "smooth"
    });
}

let scrollTimer;

function updateFocusedCard() {
    const showcaseRect = showcase.getBoundingClientRect();
    const showcaseCenter = showcaseRect.left + showcaseRect.width / 2;

    let closestCard = null;
    let closestDistance = Infinity;

    const cards = showcase.querySelectorAll(".beatcard");

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(showcaseCenter - cardCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
        }
    });

    cards.forEach(card => {
        card.classList.toggle("card-focus", card === closestCard);
    });
}

function syncFocusedTrack() {
    if (currentIndex === -1) return;

    const focusedCard = showcase.querySelector(".beatcard.card-focus");

    if (!focusedCard || focusedCard === currentCard) return;

    const index = tracks.findIndex(track => track.card === focusedCard);

    if (index === -1) return;

    const wasPlaying = !currentAudio.paused;

    playTrack(index, wasPlaying);
}

showcase.addEventListener("scroll", () => {
    updateFocusedCard();

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
        syncFocusedTrack();
    }, 100);
});

showcase.addEventListener("scroll", updateFocusedCard);

let carouselHintShown = false;

function showCarouselHint() {
    if (carouselHintShown || window.innerWidth >= 600) return;

    carouselHintShown = true;

    const cards = showcase.querySelectorAll(".beatcard");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("hint");

            card.addEventListener("animationend", () => {
                card.classList.remove("hint");
            }, { once: true });

        }, index * 80);
    });
}

function setPlayerVisibility(visible) {
    audioplayerContainer.classList.toggle("visible", visible);
}


// Zeit formatieren
function formatTime(time) {
    const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");

    const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${seconds}`;
}


// Audioplayer aktualisieren
function updatePlayer() {
    if (!currentAudio) return;

    const duration = currentAudio.duration || 0;
    const currentTime = currentAudio.currentTime || 0;

    timeCurrent.textContent = formatTime(currentTime);
    timeFull.textContent = formatTime(duration);

    const percentage = duration
        ? (currentTime / duration) * 100
        : 0;

    progress.style.width = `${percentage}%`;

    const isPlaying = !currentAudio.paused;

    playIcon.style.display = isPlaying ? "none" : "flex";
    pauseIcon.style.display = isPlaying ? "flex" : "none";

    if (currentCard) {
        currentCard.classList.toggle("playing", isPlaying);
    }
}


// Track auswählen und abspielen
function playTrack(index, shouldPlay = true) {
    const track = tracks[index];

    if (!track) return;

    if (currentAudio && currentAudio !== track.audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    if (currentCard && currentCard !== track.card) {
        currentCard.classList.remove("playing");
    }

    currentIndex = index;
    currentAudio = track.audio;
    currentCard = track.card;

    centerCard(currentCard);

    currentAudio.currentTime = 0;

    timeCurrent.textContent = "00:00";
    timeFull.textContent = "00:00";
    progress.style.width = "0%";

    setPlayerVisibility(true);

    if (shouldPlay) {
        currentAudio.play()
            .then(updatePlayer)
            .catch(error => {
                console.error("Playback failed:", error);
            });
    } else {
        updatePlayer();
    }
}


// Beat pausieren
function pauseAudio(hidePlayer = false) {
    if (!currentAudio) return;

    currentAudio.pause();

    if (hidePlayer) {
        setPlayerVisibility(false);
    }

    updatePlayer();
}


// Play/Pause umschalten
function toggleAudio() {
    if (!currentAudio) return;

    centerCard(currentCard);

    if (currentAudio.paused) {
        currentAudio.play()
            .then(updatePlayer)
            .catch(error => {
                console.error("Playback failed:", error);
            });
    } else {
        pauseAudio(false);
    }
}


// Vorherigen Track auswählen
function previousTrack() {
    if (currentIndex === -1) return;

    // Bei mehr als 3 Sekunden an den Anfang springen
    if (currentAudio.currentTime > 3) {
        currentAudio.currentTime = 0;
        centerCard(currentCard);
        updatePlayer();
        return;
    }

    const wasPlaying = !currentAudio.paused;

    const previousIndex =
        (currentIndex - 1 + tracks.length) % tracks.length;

    playTrack(previousIndex, wasPlaying);
}


// Nächsten Track auswählen
function nextTrack() {
    if (currentIndex === -1) return;

    const wasPlaying = !currentAudio.paused;

    const nextIndex =
        (currentIndex + 1) % tracks.length;

    playTrack(nextIndex, wasPlaying);
}


// Fortschrittsbalken verwenden
let isSeeking = false;

function seekAudio(event) {
    if (!currentAudio || !currentAudio.duration) return;

    const rect = progressBar.getBoundingClientRect();
    const percentage = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width)
    );

    currentAudio.currentTime = percentage * currentAudio.duration;
    updatePlayer();
}

progressBar.addEventListener("pointerdown", (event) => {
    isSeeking = true;
    progressBar.setPointerCapture(event.pointerId);
    seekAudio(event);
});

progressBar.addEventListener("pointermove", (event) => {
    if (!isSeeking) return;
    seekAudio(event);
});

progressBar.addEventListener("pointerup", () => {
    isSeeking = false;
});

progressBar.addEventListener("pointercancel", () => {
    isSeeking = false;
});


// Globale Audioplayer-Controls
playtoggle.addEventListener("click", toggleAudio);

skipBack.addEventListener("click", previousTrack);
skipForward.addEventListener("click", nextTrack);

progressBar.addEventListener("click", seekAudio);


// Showcase-Karten erstellen
showcaseCards.forEach((card, index) => {
    const clone = template.content.cloneNode(true);

    const beatcard = clone.querySelector(".beatcard");
    const image = clone.querySelector("img");
    const title = clone.querySelector(".title");

    image.src = card.image;
    image.alt = card.title;

    title.textContent = card.title;

    const audio = card.audio ? new Audio(card.audio) : null;

    if (audio) {
        const track = {
            audio,
            card: beatcard
        };

        tracks.push(track);

        // Audio-Events
        audio.addEventListener("loadedmetadata", () => {
            if (currentAudio === audio) {
                updatePlayer();
            }
        });

        audio.addEventListener("timeupdate", () => {
            if (currentAudio === audio) {
                updatePlayer();
            }
        });

        audio.addEventListener("play", updatePlayer);
        audio.addEventListener("pause", updatePlayer);

        audio.addEventListener("ended", () => {
            if (currentAudio === audio) {
                nextTrack();
            }
        });

        // Karte anklicken
        beatcard.addEventListener("click", () => {

            if (currentAudio === audio && !audio.paused) {
                pauseAudio(true);
                return;
            }

            playTrack(tracks.indexOf(track), true);
            showCarouselHint();
        });
    }

    showcase.appendChild(clone);
});

// Initialize focused card
updateFocusedCard();