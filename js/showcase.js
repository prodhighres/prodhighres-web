
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


// Beat abspielen
function playAudio(audio, beatcard) {

    // Vorherigen Beat stoppen
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;

        if (currentCard) {
            currentCard.classList.remove("playing");
        }
    }

    currentAudio = audio;
    currentCard = beatcard;

    setPlayerVisibility(true);

    audio.play()
        .then(() => {
            updatePlayer();
        })
        .catch(error => {
            console.error("Playback failed:", error);
        });
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

    if (currentAudio.paused) {
        playAudio(currentAudio, currentCard);
    } else {
        pauseAudio(false);
    }
}

// Zeit zurück- oder vorspulen
function skipAudio(seconds) {
    if (!currentAudio) return;

    currentAudio.currentTime = Math.max(
        0,
        Math.min(
            currentAudio.duration || Infinity,
            currentAudio.currentTime + seconds
        )
    );

    updatePlayer();
}


// Fortschrittsbalken verwenden
function seekAudio(event) {
    if (!currentAudio || !currentAudio.duration) return;

    const rect = progressBar.getBoundingClientRect();

    const percentage = (event.clientX - rect.left) / rect.width;

    currentAudio.currentTime =
        Math.max(0, Math.min(1, percentage)) * currentAudio.duration;

    updatePlayer();
}


// Globale Audioplayer-Controls
playtoggle.addEventListener("click", toggleAudio);

skipBack.addEventListener("click", () => {
    skipAudio(-10);
});

skipForward.addEventListener("click", () => {
    skipAudio(10);
});

progressBar.addEventListener("click", seekAudio);


// Showcase-Karten erstellen
showcaseCards.forEach(card => {
    const clone = template.content.cloneNode(true);

    const beatcard = clone.querySelector(".beatcard");
    const image = clone.querySelector("img");
    const title = clone.querySelector(".title");

    image.src = card.image;
    image.alt = card.title;

    title.textContent = card.title;

    const audio = card.audio ? new Audio(card.audio) : null;

    if (audio) {

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
            beatcard.classList.remove("playing");

            if (currentAudio === audio) {
                updatePlayer();
            }
        });

        // Karte anklicken
        beatcard.addEventListener("click", () => {

            // Aktuellen Beat pausieren
            if (currentAudio === audio && !audio.paused) {
                pauseAudio(true);
                return;
            }

            // Beat starten oder fortsetzen
            playAudio(audio, beatcard);
        });
    }

    showcase.appendChild(clone);
});