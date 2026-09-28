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
                    <li><a href="index.html">${this.ommig}</a></li>
                    <li><a href="contact.html">${this.contact}</a></li>
                    <li><button><i class="fa-regular fa-moon"></i></button></li>
                </ul>
            </nav>
        </header>`;
    }
}

const navg = new Nav("img/LOGO.png", "Forsiden", "Projekter", "Om mig", "Kontakt");



class ContactForm {
    constructor() {
        this.form = null;
        this.feedback = null;
    }

  
    render() {
        return `
        <section class="contact-section">
            <p class="subheading">Lad os tale sammen</p>
            <h2>Kontakt</h2>

            <p class="contact-intro">
                Har du en proces, der trænger til et eftersyn, eller vil du bare høre mere om,
                hvordan AI kan bruges i praksis? Skriv til mig via formularen, så vender jeg
                tilbage hurtigst muligt.
            </p>

            <p class="contact-alt">
                Se også
                <a href="https://linkedin.com" target="_blank" rel="noopener" class="linkedin-btn">
                    LinkedIn
                </a>
            </p>

            <form id="contact-form" novalidate>
                <label for="navn">Navn</label>
                <input type="text" id="navn" name="navn" required>

                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" required>

                <label for="besked">Besked</label>
                <textarea id="besked" name="besked" rows="6" placeholder="Skriv din besked her ..."></textarea>

                <button type="submit" class="btn">Send besked</button>
            </form>

            <p id="form-message" class="form-message" hidden></p>
        </section>`;
    }


    init() {
        this.form = document.querySelector('#contact-form');
        this.feedback = document.querySelector('#form-message');

        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(eventSubmit) {
        eventSubmit.preventDefault();

        // Ryd tidligere fejlmarkeringer
        this.clearFieldErrors();

        // Hent felter
        const navnField   = document.querySelector('#navn');
        const emailField  = document.querySelector('#email');
        const beskedField = document.querySelector('#besked');

        const navn   = navnField.value.trim();
        const email  = emailField.value.trim();
        const besked = beskedField.value.trim();

        // Validér navn
        if (!navn) {
            this.showFeedback('Udfyld venligst dit navn.', 'error', 'navn');
            navnField.focus();
            return;
        }

        // Validér e-mail — brug browserens indbyggede validering
        if (!emailField.validity.valid) {
            this.showFeedback('Udfyld venligst en gyldig e-mail.', 'error', 'email');
            emailField.focus();
            return;
        }

        // Validér besked
        if (!besked) {
            this.showFeedback('Udfyld venligst en besked.', 'error', 'besked');
            beskedField.focus();
            return;
        }

        // Alt er gyldigt
        this.showFeedback(
            'Tak! Din besked er sendt. Vi vender tilbage inden for 2 hverdage.',
            'success'
        );
        this.form.reset();
    }


    // Fjerner fejlmarkering fra alle felter
    clearFieldErrors() {
        this.form.querySelectorAll('input, textarea').forEach((field) => {
            field.removeAttribute('aria-invalid');
            field.removeAttribute('aria-describedby');
        });
    }

    // Markerer ét felt som ugyldigt
    markFieldError(inputId) {
        const field = document.getElementById(inputId);
        if (!field) return;

        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', 'form-message');
    }

    // Viser feedback til både seende og skærmlæserbrugere
    showFeedback(msg, type, inputId = null) {
        if (!this.feedback) return;

        if (inputId) this.markFieldError(inputId);

        // Skift ARIA-rolle og live-region afhængigt af type
        if (type === 'error') {
            this.feedback.setAttribute('role', 'alert');
            this.feedback.setAttribute('aria-live', 'assertive');
            this.feedback.className = 'form-message form-message--error';
        } else {
            this.feedback.setAttribute('role', 'status');
            this.feedback.setAttribute('aria-live', 'polite');
            this.feedback.className = 'form-message form-message--success';
        }

        this.feedback.textContent = msg;
        this.feedback.removeAttribute('hidden');
    }
}

const contactForm = new ContactForm();

document.body.innerHTML =
    navg.getNav() +
    "<main>" +
        contactForm.render() +
    "</main>";

// Aktivér formularen EFTER den er indsat i DOM'en
contactForm.init();