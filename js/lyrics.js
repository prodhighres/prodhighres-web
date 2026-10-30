
const lyricsTitle = document.querySelector(".lyrics-title");
const lyricsText = document.querySelector(".lyrics-text");
const lyricsButton = document.querySelector(".lyrics-copy-button");
const deleteButton = document.querySelector(".lyrics-delete-button");

function autoResize(textarea) {
    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}

// Update button visibility
function updateButtonVisibility() {
    const hasContent =
        lyricsTitle.value.trim() !== "" ||
        lyricsText.value.trim() !== "";

    deleteButton.classList.toggle("visible", hasContent);
    lyricsButton.classList.toggle("visible", hasContent);
}

// Restore saved lyrics
lyricsTitle.value = localStorage.getItem("lyricsTitle") || "";
lyricsText.value = localStorage.getItem("lyricsText") || "";

// Initial button visibility
updateButtonVisibility();

// Title input
lyricsTitle.addEventListener("input", () => {
    autoResize(lyricsTitle);
    lyricsTitle.setCustomValidity("");
    localStorage.setItem("lyricsTitle", lyricsTitle.value);
    updateButtonVisibility();

    document.querySelector(".typing-cursor").classList.toggle(
        "hidden",
        lyricsTitle.value.length > 0 || document.activeElement === lyricsTitle
    );
});

// Hide cursor when text is selected
lyricsTitle.addEventListener("select", () => {
    document.querySelector(".typing-cursor").classList.add("hidden");
});

// Hide decorative cursor when either textarea is focused
lyricsTitle.addEventListener("focus", () => {
    document.querySelector(".typing-cursor").classList.add("hidden");
});

lyricsText.addEventListener("focus", () => {
    document.querySelector(".typing-cursor").classList.add("hidden");
});

// Show cursor again only when both textareas are empty and unfocused
function updateTypingCursor() {
    const isFocused =
        document.activeElement === lyricsTitle ||
        document.activeElement === lyricsText;

    const hasTitle = lyricsTitle.value.length > 0;

    document.querySelector(".typing-cursor").classList.toggle(
        "hidden",
        isFocused || hasTitle
    );
}

lyricsTitle.addEventListener("blur", updateTypingCursor);
lyricsText.addEventListener("blur", updateTypingCursor);

// Text input
lyricsText.addEventListener("input", () => {
    autoResize(lyricsText);
    lyricsText.setCustomValidity("");
    localStorage.setItem("lyricsText", lyricsText.value);
    updateButtonVisibility();
});

// Initial resize
requestAnimationFrame(() => {
    autoResize(lyricsTitle);
    autoResize(lyricsText);
});

// Delete lyrics
deleteButton.addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to delete your lyrics?");

    if (!confirmed) return;

    // Clear textareas
    lyricsTitle.value = "";
    lyricsText.value = "";

    lyricsTitle.setCustomValidity("");
    lyricsText.setCustomValidity("");

    // Clear saved lyrics
    localStorage.removeItem("lyricsTitle");
    localStorage.removeItem("lyricsText");

    // Reset textarea heights
    autoResize(lyricsTitle);
    autoResize(lyricsText);

    // Show deletion confirmation
    const deleteText = deleteButton.querySelector("h5");
    deleteText.textContent = "Deleted";

    deleteButton.classList.add("deleted");

    setTimeout(() => {
        deleteText.textContent = "Delete";
        deleteButton.classList.remove("deleted");

        // Hide buttons after animation
        updateButtonVisibility();
        // Show Typing cursor after deletion again
        updateTypingCursor();
    }, 2000);
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
