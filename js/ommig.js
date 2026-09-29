class Nav {
    constructor(logo, forsiden, projects, ommig, contact) {
        this.logo = logo;
        this.forsiden = forsiden;
        this.projects = projects;
        this.ommig = ommig;
        this.contact = contact;
    }

    getNav() {
        return `
        <header>
            <nav class="nav-container">
                <a href="index.html" class="logo">
                    <img src="${this.logo}" alt="logo">
                </a>
                <ul>
                    <li><a href="index.html">${this.forsiden}</a></li>
                    <li><a href="index.html#projekter">${this.projects}</a></li>
                    <li><a href="ommig.html">${this.ommig}</a></li>
                    <li><a href="contact.html">${this.contact}</a></li>
                    <li><button><i class="fa-regular fa-moon"></i></button></li>
                </ul>
            </nav>
        </header>`;
    }
}

const navg = new Nav("img/LOGO.png", "Forsiden", "Projekter", "Om mig", "Kontakt");

