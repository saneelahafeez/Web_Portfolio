export class ContactForm {
    constructor(selector) {
        this.form = document.querySelector(selector);
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Her kan du tilføje logik for at sende formularen
            // fx hente værdier ud og validere dem
            const name = this.form.querySelector("#name")?.value;
            const email = this.form.querySelector("#email")?.value;
            const message = this.form.querySelector("#message")?.value;

            console.log("Formular sendt:", { name, email, message });

            // Vis en bekræftelse til brugeren
            alert("Tak for din besked! Jeg vender tilbage hurtigst muligt.");

            // Nulstil formularen
            this.form.reset();
        });
    }
}