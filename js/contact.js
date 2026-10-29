//Mail link

export function loadContact() {
    const mailLink = document.querySelector(".contact-mail-link");
    const form = document.getElementById("contact-form");

    if (mailLink) {
        const recipient = mailLink.getAttribute("href").replace("mailto:", "");
        const subject = mailLink.dataset.mailSubject;

        mailLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
    }

    if (!form) {
        return;
    }

    form.addEventListener("submit", async event => {
        event.preventDefault();

        const email = document.getElementById("contact-email").value;
        const message = document.getElementById("contact-message").value;

        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, message })
            });

            if (!response.ok) {
                throw new Error("Contact request failed");
            }

            alert("Nachricht wurde gesendet.");
            form.reset();
        } catch {
            alert("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
        }
    });
}
