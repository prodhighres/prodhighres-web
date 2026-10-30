const lyricsTitle = document.querySelector(".lyrics-title");
const lyricsText = document.querySelector(".lyrics-text");
const lyricsButton = document.querySelector(".lyrics-panel button");

function autoResize(textarea) {
    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}

// Title input
lyricsTitle.addEventListener("input", () => {
    autoResize(lyricsTitle);
    lyricsTitle.setCustomValidity("");
});

// Text input
lyricsText.addEventListener("input", () => {
    autoResize(lyricsText);
    lyricsText.setCustomValidity("");
});

// Initial resize
autoResize(lyricsTitle);
autoResize(lyricsText);

// Copy button
lyricsButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const title = lyricsTitle.value.trim();
    const text = lyricsText.value.trim();

    // Validation
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
        }, 2300);

    } catch (error) {
        console.error("Clipboard error:", error);
    }
});
