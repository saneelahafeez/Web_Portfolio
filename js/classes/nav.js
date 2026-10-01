export class nav {
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
                    <li><a href="#">${this.forsiden}</a></li>
                    <li><a href="#projekter">${this.projects}</a></li>
                 <li><a href="#skills">${this.ommig}</a></li>
                    <li><a href="./contact.html">${this.contact}</a></li>
                    <li>
                        <button id="theme-toggle">
                            <i class="fa-regular fa-moon"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>`;
    }
}