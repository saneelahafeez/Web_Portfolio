//hent klasser
import { nav } from "./classes/nav.js";
import { aboutMe } from "./classes/aboutMe.js";
import { process } from "./classes/process.js";
import { Services } from "./classes/Services.js";
import { Projects } from "./classes/Projects.js";
import { Footer } from "./classes/Footer.js";
import { projectsData } from "./data/projects.js"; 

//byg siderne op

const navg = new nav("img/LOGO.png", "Forsiden", "Projekter", "Om mig", "Kontakt");

const aboutme = new aboutMe(
    "Teknologi og kreativitet i samspil",
    "Jeg tror på, at teknologi og kreativitet går hånd i hånd. Derfor kombinerer jeg over 20 års erfaring med projektledelse og kommunikation med en passion for digitalt design, content creation og AI-understøttede workflows.",
    "Jeg omsætte komplekse idéer til klart og engagerende indhold – uanset om det er en <strong>brand identity</strong>, en <strong>digital kampagne</strong> eller en <strong>optimeret arbejdsproces</strong>. Jeg bruger teknologien som et værktøj til at skabe rum for det, der virkelig betyder noget: Kreativitet, strategi og menneskelig kontakt. Jeg designer løsninger, der ikke bare ser godt ud, men også gør arbejdsdagen og budskabet bedre.",
    "Se projekter",
    "Kontakt mig",
    "img/profilimg_tech.png"
);

const myProcess = new process(
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


const footer = new Footer(
    "© 2026 Saneela Hafeez",
    "Kontakt mig",
    [
        {
            icon: "fa-brands fa-linkedin",
            link: "https://linkedin.com/in/dit-navn",
            label: "LinkedIn"
        },
        {
            icon: "fa-brands fa-github",
            link: "https://github.com/dit-navn",
            label: "GitHub"
        },
        {
            icon: "fa-brands fa-instagram",
            link: "https://instagram.com/dit-navn",
            label: "Instagram"
        }
    ]
);

// indsæt i html

document.body.innerHTML =
    navg.getNav() +
    "<main>" +
    aboutme.getAbout() +
    myProcess.getProcess() + 
    services.getServices() +
    projects.getProjects() +
    "</main>" +
    footer.getFooter();

//projekt slider kort

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
