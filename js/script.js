// Array of objects used in galleryPage
const galleryImgs = [
    {
        src: "img/oop-inheritance-01.png",
        alt: "Illustration created using ChatGPT"
    },
    {
        src: "img/oop-inheritance-02.png",
        alt: "Illustration created using ChatGPT"
    },
    {
        src: "img/oop-inheritance-03.png",
        alt: "Illustration created using ChatGPT"
    }
];

// Page templates
class Base {
    constructor(title) {
        this.title = title;
    }
    getNavigation() {
        return `
        
        <nav>
            <div class="navbar">
                <!-- Mit navn placeres i venstre side -->
                <a href="#">Saneela Hafeez</a>
                <ul>
                    <li><a href="#">Forside</a></li>
                    <li><a href="#">Projekter</a></li>
                    <li><a href="#">Erfaring</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
                <button type="button" class="theme-toggle" aria-label="Skift til dark mode">Toggle</button>
            </div>
        </nav>
        `;

 }

 

    
    getFooter() {
        return `
            <footer>Footer</footer>
        `
    }
    getContent() {
        return `<p>Page is yet to be created</p>`
    }
    render() {
        return `
            ${this.getNavigation()}
            <main>
                <h1>${this.title}</h1>
                ${this.getContent()}
            </main>
            ${this.getFooter()}
        `
    }  
}  


class Frontpage extends Base {
    constructor(title, h2) {
        super(title);
        this.h2 = h2;
    }
    getContent() {
        return `
            <section>
                <h2>${this.h2}</h2>
                <p>This is the frontpage</p>
            </section>
        `
    }
}

class GalleryPage extends Base {
    constructor(title, h2, imgs = []) {
        super(title)
        this.h2 = h2;
        this.imgs = imgs; // expecting an array of image objects
    }
    getImages() {
        if (this.imgs.length === 0) {
            return `No images available`
        } 
        const imgElements = this.imgs
            .map(img => `<img src="${img.src}" alt="${img.alt}">`).join("");
        return `
            ${imgElements}
        `
    }
    getContent() {
        return `
            <section>
                <h2>${this.h2}</h2>
                <p>Illustrations were created using ChatGPT</p>
                <div class="gallery">
                    ${this.getImages()}
                </gallery>
            </section>
        `
    }
}

// Page instances
const testPage = new Frontpage("Hello World", "Welcome");
const galleryPage = new GalleryPage("My Gallery", "Illustrations", galleryImgs)
document.body.innerHTML = galleryPage.render(); // Change between testPage.render() and galleryPage.render()

// Media templates
class Media {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
    getInfo() {
        return `${this.title} (${this.year})`; // Title (Year)
    }
}

class Book extends Media {
    constructor(title, year, author, publisher) {
        super(title, year);
        this.author = author;
        this.publisher = publisher;
    }
    formatAuthor() {
        const names = this.author.trim().split(/\s+/);
        const lastName = names.pop();
        const initials = names.map(name => `${name[0].toUpperCase()}.`).join(" ");
        return `${lastName}, ${initials}`;
    }
    getReference() {
        return `${this.formatAuthor()} (${this.year}) ${this.title}. ${this.publisher}`
    }
}

// bruger dem ikke endnu
/* // Book instances
const B01 = new Book("Dragon Gets By", 1991, "Dav Pilkey", "Scholastic");
const B02 = new Book("Dragon's Fat Cat", 1992, "Dav Pilkey", "Scholastic");
const B03 = new Book("Silmarillion", 1977, "John Ronald Reuel Tolkien", "George Allen & Unwin");
const B04 = new Book("Den halve konge", 2014, "Joe Abercrombie", "Gyldendal");
const B05 = new Book ("Først når...", 2020, "Oddfríður Marni Rasmussen", "Vild Maskine");
const B06 = new Book ("Ondvinter", "ukendt", "Anders Björkelid", "Ukendt");
const B07 = new Book("The Handmaid's Tale", 1985, "Margaret Atwood", "McClelland and Stewart");
 */

// Toogle ligt/dark mode

// Finder knappen via dens ID fra din HTML
const toggleBtn = document.querySelector('#theme-toggle');

// Funktionen der tænder og slukker for dark-klassen på body
function toggleTheme() {
    document.body.classList.toggle('dark');
}

// Lytter efter klik på knappen
toggleBtn.addEventListener('click', toggleTheme);



// ====================
// Contact Form
// ====================

class ContactForm {
    constructor(formId) {
        this.form = document.querySelector(formId);

        this.name = document.querySelector("#name");
        this.email = document.querySelector("#email");
        this.message = document.querySelector("#message");

        this.response = document.querySelector(".form-response");

        this.form.addEventListener("submit", (event) => {
            this.submit(event);
        });
    }

    submit(event) {
        event.preventDefault();

        if (
            this.name.value === "" ||
            this.email.value === "" ||
            this.message.value === ""
        ) {
            this.response.textContent = "Udfyld venligst alle felter.";
            return;
        }

        this.response.textContent = "Tak for din besked!";
    }
}

const contactForm = new ContactForm("#contactForm");

