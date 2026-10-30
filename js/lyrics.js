
const lyricsTitle = document.querySelector(".lyrics-title");
const lyricsText = document.querySelector(".lyrics-text");
const lyricsButton = document.querySelector(".lyrics-copy-button");
const deleteButton = document.querySelector(".lyrics-delete-button");

function autoResize(textarea) {
    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}

// Update delete button visibility
function updateDeleteButton() {
    const hasContent =
        lyricsTitle.value.trim() !== "" ||
        lyricsText.value.trim() !== "";

    deleteButton.classList.toggle("visible", hasContent);
}

// Restore saved lyrics
lyricsTitle.value = localStorage.getItem("lyricsTitle") || "";
lyricsText.value = localStorage.getItem("lyricsText") || "";

// Initial delete button visibility
updateDeleteButton();

// Title input
lyricsTitle.addEventListener("input", () => {
    autoResize(lyricsTitle);
    lyricsTitle.setCustomValidity("");
    localStorage.setItem("lyricsTitle", lyricsTitle.value);
    updateDeleteButton();
});

// Text input
lyricsText.addEventListener("input", () => {
    autoResize(lyricsText);
    lyricsText.setCustomValidity("");
    localStorage.setItem("lyricsText", lyricsText.value);
    updateDeleteButton();
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

    // Hide delete button
    setTimeout(() => {
        deleteText.textContent = "Delete";
        deleteButton.classList.remove("deleted");

        updateDeleteButton();
    }, 2000);

    // Show deletion confirmation
    const deleteText = deleteButton.querySelector("h5");
    deleteText.textContent = "Deleted";

    deleteButton.classList.add("deleted");

    setTimeout(() => {
        deleteText.textContent = "Delete";
        deleteButton.classList.remove("deleted");
    }, 1000);
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
