const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal-close");

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);

        modal.classList.add("modal-active");
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".modal").classList.remove("modal-active");
    });
});

// Close when clicking outside the modal content
modals.forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.classList.remove("modal-active");
        }
    });
});

// Close with Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modals.forEach(modal => modal.classList.remove("modal-active"));
    }
});

// Load HTML content for all modals
async function loadModals() {
    const modals = document.querySelectorAll(".modal");

    for (const modal of modals) {
        const container = modal.querySelector(".modal-text");

        if (!container) continue;

        try {
            const response = await fetch(`html/${modal.id}.html`);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            container.innerHTML = await response.text();

        } catch (error) {
            console.error(`Failed to load ${modal.id}:`, error);
            container.textContent = "Content could not be loaded.";
        }
    }
}

loadModals();