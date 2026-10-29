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

    const email = document
        .getElementById("contact-email").value.trim();

    const message = document
        .getElementById("contact-message").value.trim();

    const submitButton = form.querySelector('[type="submit"]');

    submitButton.disabled = true;

    try {
        const response = await fetch(
            "https://rtywkbbhkmqremnshjjn.supabase.co",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": "sb_publishable_DmM092YdhKsLEMd8roMWpA_U3r5oOm2"
                },
                body: JSON.stringify({ email, message })
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Contact request failed");
        }

        alert("Nachricht wurde gesendet.");
        form.reset();
    } catch (error) {
        console.error("Contact form error:", error);
        alert("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
    } finally {
        submitButton.disabled = false;
    }
});

}