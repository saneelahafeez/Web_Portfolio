class nav {
    constructor(logo, forsiden,projects,ommig,contact){
        this.logo = logo;   
        this.forsiden=forsiden;
        this.projects=projects;
        this.ommig=ommig;
        this.contact=contact;

    }

    getNav(){
        return`

          <header>
            <nav class="nav-container">
        
           
                <a href="index.html" class="logo">
                        <img src="${this.logo}" alt="logo">
                </a>
                
                <ul>

                    <li><a href="#" >${this.forsiden}</a></li>
                    <li><a href="#projekter">${this.projects}</a></li>
                    <li><a href="#" >${this.ommig}</a></li>
                    <li><a href="contact.html" >${this.contact}</a></li>
                    <li><button><i class="fa-regular fa-moon"></i></button></li>
                </ul>
                
            </nav>
        </header>
         `
    }  
}


class aboutMe {
        constructor(title, para1,para2, btn1,btn2, img){
        this.title=title;
        this.para1=para1;
        this.para2=para2;
        this.btn1=btn1;
        this.btn2=btn2;
        this.img=img;
    }

    getAbout(){
        return `
          <section class="about-me">

        <div class="info-aboutme">
            <h1>${this.title}</h1>
            <p>${this.para1}<p>

            <p>${this.para2}</p>
            <div>
            <a href="#" id="se-projekter">${this.btn1}</a>
            <a href="contact.html">${this.btn2}</a>
            </div>

        </div>


        
            <img src="${this.img}" alt="my picture">


    </section>    
        `
    }

}

class processsection {
    constructor(title, title1, parag, image){
        this.title=title;
        this.title1=title1;
        this.parag=parag;
        this.image=image;

    }

    getProcess(){
        return `
          <section class="myprocess">

        <div class="info-myprocess">
            <h1>${this.title}</h1>
            <p>${this.title1}<p>

            <p>${this.parag}</p>

            <img src="${this.image}" alt="my picture">

        </div>

    </section>    
        `
    }
}

class Services {
    constructor(subheading, title, cards) {
        this.subheading = subheading;
        this.title = title;
        this.cards = cards; // array af {title, text}
    }

    getServices() {
        const cardsHTML = this.cards.map(c => `
            <article class="service-card">
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


class Projects {
    constructor(eyebrow, title, intro, project) {
        this.eyebrow = eyebrow;
        this.title = title;
        this.intro = intro;
        this.project = project; // { meta, title, desc, link, tags[] }
    }

    getProjects() {
        const p = this.project;
        const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");

        return `
        <section class="projects" id="projekter">
            <p class="eyebrow">${this.eyebrow}</p>
            <h2>${this.title}</h2>
            <p class="intro">${this.intro}</p>

            <article class="project-card">
                <div class="project-image">
                    <span>${p.title}</span>
                </div>
                <div class="project-info">
                    <p class="meta">${p.meta}</p>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <a href="#" class="read-more">${p.link}</a>
                    <div class="project-tags">${tagsHTML}</div>
                </div>
            </article>

            <div class="project-controls">
                <div class="dots">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="arrows">
                    <button aria-label="Forrige"><i class="fa-solid fa-chevron-left"></i></button>
                    <button aria-label="Næste"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </section>`;
    }
}

class Footer {
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



const navg= new nav ("img/LOGO.png", "Forsiden", "Projkter", "Om mig", "Kontakt");
// document.body.innerHTML= navg.getNav();


const aboutme= new aboutMe ("Saneela Hafeez", 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam expedita id ratione tenetur sed optio, voluptatum dignissimos non obcaecati dolorum ullam? Voluptate mollitia quae pariatur qui reprehenderit vel quam?", 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam expedita id ratione tenetur sed optio, voluptatum dignissimos non obcaecati dolorum ullam? Voluptate mollitia quae pariatur qui reprehenderit vel quam?", 
    "Se projekter" , 
    "Kontakt mig",
    "img/profilimg_tech.png");

const process= new processsection ("Research", "process1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam expedita id ratione tenetur sed optio, voluptatum dignissimos non obcaecati dolorum ullam? Voluptate mollitia quae pariatur qui reprehenderit vel quam?",
    " Hej med dig", "img/.png");

const services = new Services ("Hvad jeg kan","Fra proces til løsning",
    [
        {
            title: "Workflow & Process Design",
            text: "Kortlægger eksisterende arbejdsgange og designer nye, mere effektive processer."
        },
        {
            title: "AI Implementation",
            text: "Identifierer use cases og hjælper teams med at tage AI i brug i praksis."
        },
        {
            title: "Automation",
            text: "Designer automatiserede arbejdsopgaver, der frigiver tid til det, der betyder noget."
        },
        {
            title: "Human + AI",
            text: "Sikrer, at teknologien understøtter mennesker — ikke omvendt."
        }
    ]
);

const projects = new Projects(
    "Udvalgte cases",
    "Projekter",
    "Et udpluk af projekter, hvor jeg har arbejdet med workflow, AI og automation.",
    {
        meta: "AI Adoption · Process Design · 2026",
        title: "AI Workflow Redesign — Kundeservice",
        desc: "Kortlagde en kundeservice-afdelings manuelle arbejdsgang og designede en ny proces, hvor AI overtager de gentagne opgaver.",
        link: "Read more",
        tags: ["Workflow", "AI Adoption", "Process Design"]
    }
);

const footer = new Footer(
    "© 2026 Saneela Hafeez",
    "Kontakt mig"
);



document.body.innerHTML= navg.getNav() +"<main>" + aboutme.getAbout() + process.getProcess() + services.getServices() + projects.getProjects() + "</main>" + footer.getFooter();


/* document.body.innerHTML =
    navg.getNav() +
    "<main>" +
        aboutme.getAbout() +
        services.getServices() +
        projects.getProjects() +
    "</main>" +
    footer.getFooter(); */
/* document.body.innerHTML = `${nav.getNav()}
    <main>
        ${about.getAbout()}
        ${services.getServices()}
        ${projects.getProjects()}
    </main>
    ${footer.getFooter()}
`; */

/* 
// ============================================================
//  PROJECTS / Cases
// ============================================================
class Projects {
    constructor(eyebrow, title, intro, project) {
        this.eyebrow = eyebrow;
        this.title = title;
        this.intro = intro;
        this.project = project; // { meta, title, desc, link, tags[] }
    }

    getProjects() {
        const p = this.project;
        const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");

        return `
        <section class="projects" id="projekter">
            <p class="eyebrow">${this.eyebrow}</p>
            <h2>${this.title}</h2>
            <p class="intro">${this.intro}</p>

            <article class="project-card">
                <div class="project-image">
                    <span>${p.title}</span>
                </div>
                <div class="project-info">
                    <p class="meta">${p.meta}</p>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <a href="#" class="read-more">${p.link}</a>
                    <div class="project-tags">${tagsHTML}</div>
                </div>
            </article>

            <div class="project-controls">
                <div class="dots">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="arrows">
                    <button aria-label="Forrige"><i class="fa-solid fa-chevron-left"></i></button>
                    <button aria-label="Næste"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </section>`;
    }
}

// ============================================================
//  FOOTER
// ============================================================
class Footer {
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

// ============================================================
//  INSTANCER
// ============================================================
const nav = new Nav(
    "Saneela Hafeez",
    "Forside",
    "Projekter",
    "Kontakt"
);

const about = new AboutMe(
    "Saneela Hafeez",
    "AI Workflow & Implementation Specialist",
    "Jeg kombinerer forretningsforståelse, design og AI til at skabe smartere måder at arbejde på — ved at identificere muligheder, designe effektive workflows og omsætte teknologi til løsninger, der skaber reel værdi for mennesker og virksomheder.",
    [
        "AI Implementation",
        "Workflow",
        "Automation",
        "AI Adoption",
        "Use Cases",
        "Process Design",
        "Efficiency",
        "Human + AI",
        "Remote Work"
    ],
    "Jeg ser mig selv i en rolle som special konsulent der kombinerer forretningsforståelse, design og AI til at skabe smartere måder at arbejde på.",
    "Se projekter",
    "Kontakt mig"
);



const projects = new Projects(
    "Udvalgte cases",
    "Projekter",
    "Et udpluk af projekter, hvor jeg har arbejdet med workflow, AI og automation.",
    {
        meta: "AI Adoption · Process Design · 2026",
        title: "AI Workflow Redesign — Kundeservice",
        desc: "Kortlagde en kundeservice-afdelings manuelle arbejdsgang og designede en ny proces, hvor AI overtager de gentagne opgaver.",
        link: "Read more",
        tags: ["Workflow", "AI Adoption", "Process Design"]
    }
);

const footer = new Footer(
    "© 2026 Saneela Hafeez",
    "Kontakt mig"
);

// ============================================================
//  RENDER
// ============================================================
document.body.innerHTML = `${nav.getNav()}
    <main>
        ${about.getAbout()}
        ${services.getServices()}
        ${projects.getProjects()}
    </main>
    ${footer.getFooter()}
`;

 */