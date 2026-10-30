
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

let currentAudio = null;
let currentCard = null;

showcaseCards.forEach(card => {
    const clone = template.content.cloneNode(true);

    const beatcard = clone.querySelector(".beatcard");
    const image = clone.querySelector("img");
    const title = clone.querySelector(".title");

    image.src = card.image;
    image.alt = card.title;
    title.textContent = card.title;

    // Create audio only if a source exists
    const audio = card.audio ? new Audio(card.audio) : null;

    beatcard.addEventListener("click", () => {
        // Do nothing if this card has no audio
        if (!audio) return;

        // Pause the current beat
        if (currentAudio === audio && !audio.paused) {
            audio.pause();
            beatcard.classList.remove("playing");
            return;
        }

        // Stop the previous beat
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;

            currentCard.classList.remove("playing");
        }

        // Play or resume the selected beat
        currentAudio = audio;
        currentCard = beatcard;

        audio.play()
            .then(() => {
                beatcard.classList.add("playing");
            })
            .catch(error => {
                console.error("Playback failed:", error);

                beatcard.classList.remove("playing");

                if (currentAudio === audio) {
                    currentAudio = null;
                    currentCard = null;
                }
            });
    });

    // Reset the card when playback ends
    if (audio) {
        audio.addEventListener("ended", () => {
            beatcard.classList.remove("playing");

            if (currentAudio === audio) {
                currentAudio = null;
                currentCard = null;
            }
        });
    }

    showcase.appendChild(clone);
});
