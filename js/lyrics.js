
const lyricsTitle = document.querySelector(".lyrics-title");
const lyricsText = document.querySelector(".lyrics-text");
const lyricsButton = document.querySelector(".lyrics-panel button");

// Validierungsmeldungen beim Ändern zurücksetzen
lyricsTitle.addEventListener("input", () => {
    lyricsTitle.setCustomValidity("");
});

lyricsText.addEventListener("input", () => {
    lyricsText.setCustomValidity("");
});

lyricsButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const title = lyricsTitle.value.trim();
    const text = lyricsText.value.trim();

    // Validierung
    if (!title) {
        lyricsTitle.setCustomValidity("Please enter a title.");
        lyricsTitle.reportValidity();
        return;
    }

    if (!text) {
        lyricsText.setCustomValidity("Please enter some text.");
        lyricsText.reportValidity();
        return;
    }

    // Clipboard
    try {
        await navigator.clipboard.writeText(`${title}\n\n${text}`);

        lyricsButton.classList.add("copied");

        setTimeout(() => {
            lyricsButton.classList.remove("copied");
        }, 2000);

    } catch (error) {
        console.error("Clipboard error:", error);
    }
});
