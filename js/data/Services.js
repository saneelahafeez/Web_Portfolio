export class Services {
    constructor(subheading, title, cards) {
        this.subheading = subheading;
        this.title = title;
        this.cards = cards;
    }

    getServices() {
        const cardsHTML = this.cards.map(c => `
            <article class="service-card">
                <i class="${c.icon}"></i>
                <h3>${c.title}</h3>
                <p>${c.text}</p>
            </article>
        `).join("");

        return `
        <section class="services">
            <p class="subheading">${this.subheading}</p>
            <h2>${this.title}</h2>
            <div class="service-grid">
                ${cardsHTML}
            </div>
        </section>`;
    }
}