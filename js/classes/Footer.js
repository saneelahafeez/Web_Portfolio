export class Footer {
    constructor(copy, contact, socials) {
        this.copy = copy;
        this.contact = contact;
        this.socials = socials;
    }

    getFooter() {
        const socialsHTML = this.socials.map(s => `
            <a href="${s.link}" target="_blank" aria-label="${s.label}">
                <i class="${s.icon}"></i>
            </a>
        `).join("");

        return `
        <footer>
            <div class="footer-content">
                <p>${this.copy}</p>
                <a href="contact.html" class="footer-contact">${this.contact}</a>
                <div class="footer-socials">
                    ${socialsHTML}
                </div>
            </div>
        </footer>`;
    }
}