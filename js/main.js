// ============================================
// IMPORTS – hent klasser og data fra andre filer
// ============================================
import { nav } from "./classes/nav.js";
import { aboutMe } from "./classes/aboutMe.js";
import { processsection } from "./classes/processSection.js";
import { Services } from "./data/Services.js";
import { Projects } from "./classes/Projects.js";
import { Footer } from "./classes/Footer.js";
import { projectsData } from "./data/projects.js";

// ============================================
// OPRET INSTANSER – byg siderne op
// ============================================

const navg = new nav("img/LOGO.png", "Forsiden", "Projekter", "Om mig", "Kontakt");

const aboutme = new aboutMe(
    "Teknologi og kreativitet i samspil",
    "Jeg tror på, at teknologi og kreativitet går hånd i hånd. Derfor kombinerer jeg over 20 års erfaring med projektledelse og kommunikation med en passion for digitalt design, content creation og AI-understøttede workflows.",
    "Jeg omsætte komplekse idéer til klart og engagerende indhold – uanset om det er en <strong>brand identity</strong>, en <strong>digital kampagne</strong> eller en <strong>optimeret arbejdsproces</strong>. Jeg bruger teknologien som et værktøj til at skabe rum for det, der virkelig betyder noget: Kreativitet, strategi og menneskelig kontakt. Jeg designer løsninger, der ikke bare ser godt ud, men også gør arbejdsdagen og budskabet bedre.",
    "Se projekter",
    "Kontakt mig",
    "img/profilimg_tech.png"
);

const process = new processsection(
    "Research",
    "Hard og soft skills",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam expedita id ratione tenetur sed optio, voluptatum dignissimos non obcaecati dolorum ullam? Voluptate mollitia quae pariatur qui reprehenderit vel quam?",
    "Hej med dig",
    "img/my-picture.png"
);

const services = new Services("Hvad jeg kan", "Fra proces til løsning", [
    {
        icon: "fa-solid fa-magnifying-glass",
        title: "Research",
        text: "Indledende analyse af opgave, målgruppe og formål sikrer et solidt fundament og en løsning, der rammer rigtigt fra start."
    },
    {
        icon: "fa-solid fa-chess",
        title: "Strategi",
        text: "Indsigter omsættes til en klar plan og struktur, der skaber retning, overblik og sammenhæng gennem hele forløbet."
    },
    {
        icon: "fa-solid fa-pen-ruler",
        title: "Design",
        text: "Løsningen udformes med fokus på kvalitet og brugervenlighed – uanset om det gælder visuelt design, content eller workflows."
    },
    {
        icon: "fa-solid fa-chart-line",
        title: "Optimering",
        text: "Løbende test, justering og forbedring sikrer, at resultatet ikke blot fungerer, men også skaber værdi over tid."
    }
]);

const projects = new Projects(
    "Udvalgte cases",
    "Projekter",
    "Et udpluk af projekter, hvor jeg har arbejdet med brand identitet, UI/UX og workflows.",
    projectsData
);

const footer = new Footer("© 2026 Saneela Hafeez", "Kontakt mig");

// ============================================
// INDSÆT I HTML'EN
// ============================================

document.body.innerHTML =
    navg.getNav() +
    "<main>" +
    aboutme.getAbout() +
    process.getProcess() +
    services.getServices() +
    projects.getProjects() +
    "</main>" +
    footer.getFooter();

// ============================================
// PROJEKT SLIDER
// ============================================

const projectContainer = document.querySelector("#project-container");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const dots = document.querySelectorAll(".dot");

function updateProject() {
    projectContainer.innerHTML = projects.renderProject();

    dots.forEach((dot, index) => {
        if (index === projects.currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

nextBtn.addEventListener("click", () => {
    if (projects.currentIndex < projects.projectsData.length - 1) {
        projects.currentIndex++;
    } else {
        projects.currentIndex = 0;
    }
    updateProject();
});

prevBtn.addEventListener("click", () => {
    if (projects.currentIndex > 0) {
        projects.currentIndex--;
    } else {
        projects.currentIndex = projects.projectsData.length - 1;
    }
    updateProject();
});

// ============================================
// THEME TOGGLE
// ============================================

const toggleBtn = document.querySelector("#theme-toggle");

function toggleTheme() {
    document.body.classList.toggle("dark");
}

toggleBtn.addEventListener("click", toggleTheme);


// class nav {
//     constructor(logo, forsiden,projects,ommig,contact){
//         this.logo = logo;   
//         this.forsiden=forsiden;
//         this.projects=projects;
//         this.ommig=ommig;
//         this.contact=contact;

//     }

//     getNav(){
//         return`

//           <header>
//             <nav class="nav-container">
        
           
//                 <a href="index.html" class="logo">
//                         <img src="${this.logo}" alt="logo">
//                 </a>
                
//                 <ul>

//                     <li><a href="#" >${this.forsiden}</a></li>
//                     <li><a href="#projekter">${this.projects}</a></li>
//                     <li><a href="ommig.html" >${this.ommig}</a></li>
//                     <li><a href="contact.html" >${this.contact}</a></li>
//                     <li>
//                     <button id="theme-toggle">
//                         <i class="fa-regular fa-moon"></i>
//                     </button>
//                 </li>
//                 </ul>
                
//             </nav>
//         </header>
//          `
//     }  
// }


// class aboutMe {
//         constructor(title, para1,para2, btn1,btn2, img){
//         this.title=title;
//         this.para1=para1;
//         this.para2=para2;
//         this.btn1=btn1;
//         this.btn2=btn2;
//         this.img=img;
//     }

//     getAbout(){
//         return `
//           <section class="about-me">

//         <div class="info-aboutme">
//             <h1>${this.title}</h1>
//             <p>${this.para1}<p>

//             <p>${this.para2}</p>
//             <div>
//             <a href="#projekter">${this.btn1}</a></a>
//             <a href="contact.html">${this.btn2}</a>
//             </div>

//         </div>


        
//             <img src="${this.img}" alt="my picture">


//     </section>    
//         `
//     }

// }

// class processsection {
//     constructor(title, title1, parag, image){
//         this.title=title;
//         this.title1=title1;
//         this.parag=parag;
//         this.image=image;

//     }

//     getProcess(){
//         return `
//           <section class="myprocess">

//         <div class="info-myprocess">
//             <h1>${this.title}</h1>
//             <p>${this.title1}</p>

//             <p>${this.parag}</p>

//             <img src="${this.image}" alt="my picture">

//         </div>

//     </section>    
//         `
//     }
// }

// class Services {
//     constructor(subheading, title, cards) {
//         this.subheading = subheading;
//         this.title = title;
//         this.cards = cards; // array af {title, text}
//     }

//     getServices() {
//         const cardsHTML = this.cards.map(c => `
//             <article class="service-card">
//             <i class="${c.icon}"></i>
//                 <h3>${c.title}</h3>
//                 <p>${c.text}</p>
//             </article>
//         `).join("");

//         return `
//         <section class="services">
//             <p class="subheading">${this.subheading}</p>
//             <h2>${this.title}</h2>
//             <div class="service-grid">
//                 ${cardsHTML}
//             </div>
//         </section>`;
//     }
// }

// class Projects {
//     constructor(eyebrow, title, intro, projectsData) {
//         this.eyebrow = eyebrow;
//         this.title = title;
//         this.intro = intro;
//         this.projectsData = projectsData; // Nu et array i stedet for et enkelt objekt
//         this.currentIndex = 0; // Starter på det første projekt
//     }

//     // Ny metode til at generere HTML for det aktive projekt
//     renderProject() {
//         const p = this.projectsData[this.currentIndex];
//         const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");

//         return `
//             <article class="project-card">
//                <div class="project-image" style="background-image: url('${p.image}');">
        
//                 </div>
//                 <div class="project-info">
//                     <p class="meta">${p.meta}</p>
//                     <h3>${p.title}</h3>
//                     <p>${p.desc}</p>
//                     <a href="#" class="read-more">${p.link}</a>
//                     <div class="project-tags">${tagsHTML}</div>
//                 </div>
//             </article>
//         `;
//     }

//     getProjects() {
//         return `
//         <section class="projects" id="projekter">
//             <p class="eyebrow">${this.eyebrow}</p>
//             <h2>${this.title}</h2>
//             <p class="intro">${this.intro}</p>

//             <!-- Container til projektet, så vi nemt kan udskifte det -->
//             <div id="project-container">
//                 ${this.renderProject()}
//             </div>

//             <div class="project-controls">
//                 <div class="dots">
//                     <!-- Dots genereres nu dynamisk baseret på antallet af projekter -->
//                     ${this.projectsData.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join("")}
//                 </div>
//                 <div class="arrows">
//                     <button id="prev-btn" aria-label="Forrige"><i class="fa-solid fa-chevron-left"></i></button>
//                     <button id="next-btn" aria-label="Næste"><i class="fa-solid fa-chevron-right"></i></button>
//                 </div>
//             </div>
//         </section>`;
//     }
// }

// class Footer {
//     constructor(copy, contact) {
//         this.copy = copy;
//         this.contact = contact;
//     }

//     getFooter() {
//         return `
//         <footer>
//             <p>${this.copy}</p>
//             <a href="contact.html">${this.contact}</a>
//         </footer>`;
//     }
// }



// const navg= new nav ("img/LOGO.png", "Forsiden", "Projekter", "Om mig", "Kontakt");
// // document.body.innerHTML= navg.getNav();


// const aboutme= new aboutMe ("Teknologi og kreativitet i samspil", 
//     "Jeg tror på, at teknologi og kreativitet går hånd i hånd. Derfor kombinerer jeg over 20 års erfaring med projektledelse og kommunikation med en passion for digitalt design, content creation og AI-understøttede workflows.", 
//     "Jeg omsætte komplekse idéer til klart og engagerende indhold – uanset om det er en <strong>brand identity</strong>, en <strong>digital kampagne</strong> eller en <strong>optimeret arbejdsproces</strong>. Jeg bruger teknologien som et værktøj til at skabe rum for det, der virkelig betyder noget: Kreativitet, strategi og menneskelig kontakt. Jeg designer løsninger, der ikke bare ser godt ud, men også gør arbejdsdagen og budskabet bedre.", 
//     "Se projekter" , 
//     "Kontakt mig",
//     "img/profilimg_tech.png");

// const process= new processsection ("Research", "Hard og soft skills","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam expedita id ratione tenetur sed optio, voluptatum dignissimos non obcaecati dolorum ullam? Voluptate mollitia quae pariatur qui reprehenderit vel quam?",
//     " Hej med dig","img/my-picture.png");

// const services = new Services ("Hvad jeg kan","Fra proces til løsning",
//     [
//         {
//             icon: "fa-solid fa-magnifying-glass",  
//             title: "Research",
//             text: "Indledende analyse af opgave, målgruppe og formål sikrer et solidt fundament og en løsning, der rammer rigtigt fra start."
//         },
//         {
            
//             icon: "fa-solid fa-chess",    
//             title: "Strategi",
//             text: "Indsigter omsættes til en klar plan og struktur, der skaber retning, overblik og sammenhæng gennem hele forløbet."
//         },
//         {
//             icon: "fa-solid fa-pen-ruler",   
//             title: "Design",
//             text: "Løsningen udformes med fokus på kvalitet og brugervenlighed – uanset om det gælder visuelt design, content eller workflows."
//         },
//         {
//             icon: "fa-solid fa-chart-line", 
//             title: "Optimering",
//             text: "Løbende test, justering og forbedring sikrer, at resultatet ikke blot fungerer, men også skaber værdi over tid."
//         }
//     ]
// );

// const projects = new Projects(
//     "Udvalgte cases",
//     "Projekter",
//     "Et udpluk af projekter, hvor jeg har arbejdet med brand identitet, UI/UX og workflows.",
//     [ // Her starter mit array of projects
//         //projekt 1
//         {
//             meta: "<Strong> Kategori: </strong> Process optimering  |  Workflow & AI  |  2026",
//             title: "At effektivisere rutineopgaver og frigive tid til det, mennesker gør bedST.",
//             desc: "Jeg har udviklet en AI Playbook – ikke en teknisk manual, men en praktisk hverdagsguide, der gør kunstig intelligens til en naturlig kollega i det daglige arbejde.",
//             link: "Read more",
//             tags: ["AI Playbook", "Prompting", "Process Design"],
//             image: "img/projekt1.png"
//         },

//         { // Projekt 2
//             meta: "<Strong> Kategori: </strong> Brand identitet  |  Markedsundersøgelse  |  2025",
//             title: "LadyBalance - At formidle naturlig velvære fordi ægte balance starter indefra.",
//             desc: "Jeg har udviklet et koncept for LadyBalance – ikke bare en hjemmeside, men en visuel platform, der formidler naturlig balance og indre velvære gennem rolig æstetik og klar struktur.",
//             link: "Read more",
//             tags: ["Logo design", "SoMe Kampagne", "Design Manual"],
//             image: "img/2project.png" //
//         },
//         { // Projekt 3
//             meta: "<Strong> Kategori: </strong> Branding  |  Content  |  2024",
//             title: "Digital Kampagne",
//             desc: "En kampagne der skulle øge kendskabet til et nyt brand gennem målrettet indhold.",
//             link: "Read more",
//             tags: ["Branding", "SoMe", "Content"],
//             image: "img/projekt3.png" // Husk at ligge et billede ind her
//         }
//     ]
// );

// const footer = new Footer(
//     "© 2026 Saneela Hafeez",
//     "Kontakt mig"
// );



// document.body.innerHTML= navg.getNav() +"<main>" + aboutme.getAbout() + process.getProcess() + services.getServices() + projects.getProjects() + "</main>" + footer.getFooter();


// // --- PROJEKT SLIDER ---

// // 1. Find de elementer der skal bruges
// const projectContainer = document.querySelector("#project-container");
// const nextBtn = document.querySelector("#next-btn");
// const prevBtn = document.querySelector("#prev-btn");
// const dots = document.querySelectorAll(".dot");

// // 2. Funktion der opdaterer projekt-visningen og prikkerne
// function updateProject() {
//     // Opdater selve HTML'en inde i containeren med det aktive projekt
//     projectContainer.innerHTML = projects.renderProject();

//     // Loop igennem alle prikker og sæt "active" på den rigtige
//     dots.forEach((dot, index) => {
//         if (index === projects.currentIndex) {
//             dot.classList.add("active");
//         } else {
//             dot.classList.remove("active");
//         }
//     });
// } // <-- Læg mærke til at funktionen slutter HER. Alt knap-kode skal udenfor.

// // 3. Næste knap (UDENFOR updateProject)
// nextBtn.addEventListener("click", () => {
//     if (projects.currentIndex < projects.projectsData.length - 1) {
//         projects.currentIndex++;
//     } else {
//         projects.currentIndex = 0;
//     }
//     updateProject(); // Kalder funktionen for at opdatere visningen
// });

// // 4. Forrige knap (UDENFOR updateProject)
// prevBtn.addEventListener("click", () => {
//     if (projects.currentIndex > 0) {
//         projects.currentIndex--;
//     } else {
//         projects.currentIndex = projects.projectsData.length - 1;
//     }
//     updateProject(); // Kalder funktionen for at opdatere visningen
// });

// const toggleBtn = document.querySelector("#theme-toggle");

// function toggleTheme() {
//     document.body.classList.toggle("dark");
// }

// toggleBtn.addEventListener("click", toggleTheme);
