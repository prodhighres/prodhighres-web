
const lyricsTitle = document.querySelector(".lyrics-title");
const lyricsText = document.querySelector(".lyrics-text");
const lyricsButton = document.querySelector(".lyrics-panel button");

function autoResize(textarea) {
    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}

// Restore saved lyrics
lyricsTitle.value = localStorage.getItem("lyricsTitle") || "";
lyricsText.value = localStorage.getItem("lyricsText") || "";

// Title input
lyricsTitle.addEventListener("input", () => {
    autoResize(lyricsTitle);
    lyricsTitle.setCustomValidity("");
    localStorage.setItem("lyricsTitle", lyricsTitle.value);
});

// Text input
lyricsText.addEventListener("input", () => {
    autoResize(lyricsText);
    lyricsText.setCustomValidity("");
    localStorage.setItem("lyricsText", lyricsText.value);
});

// Initial resize
requestAnimationFrame(() => {
    autoResize(lyricsTitle);
    autoResize(lyricsText);
});

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
        const capitalizedTitle =
            title.charAt(0).toUpperCase() + title.slice(1);

        await navigator.clipboard.writeText(
            `${capitalizedTitle}\n–\n${text}`
        );

        lyricsButton.classList.add("copied");

        setTimeout(() => {
            lyricsButton.classList.remove("copied");
        }, 2300);

    } catch (error) {
        console.error("Clipboard error:", error);
    }
});
