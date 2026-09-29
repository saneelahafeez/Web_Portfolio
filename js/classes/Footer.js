export class Footer {
    constructor(copy, contact) {
        this.copy = copy;
        this.contact = contact;
    }

    getFooter() {
        return `
        <footer>
            <p>${this.copy}</p>
            <a href="contact.html">${this.contact}</a>
        </footer>`;
    }
}