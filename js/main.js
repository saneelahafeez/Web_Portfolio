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
    "Lad os skabe noget der virker",
    "<strong>Velkommen</strong> - Mit navn er <strong> Saneela Hafeez</strong>, og jeg tør godt sige det højt: <strong>teknologi</strong> og <strong>kreativitet</strong> løfter hinanden.",
    "Med en baggrund som eksportingeniør og flere års erfaring inden for projektledelse og kommunikation kombinerer jeg faglig tyngde med en passion for <strong>digitalt design, content creation og AI-understøttede workflows</strong>. <br> <br> Efter en frugtbar karrierepause har jeg genoptaget den kreative side af mig selv – og jeg er klar til at tage fat. Så tag et kig rundt, og lad os tage en snak, hvis du kan se mulighederne foran os.",
    "Se projekter",
    "Kontakt mig",
    "img/profilimg_tech.png"
);

const mySkills = new process(
    "Om mig",
    "Personlige Kompetancer",
    "Jeg arbejder struktureret og <strong>analytisk</strong> med fokus på kvalitet i opgaveløsningen. Min baggrund inden for eksport, projektkoordinering, kundeservice og digital udvikling giver mig en bred forretningsforståelse og evnen til hurtigt at sætte mig ind i nye komplekse opgaver. Dette afspejler sig i mine stærkeste soft skills:.",
    "img/softskills.png","Problemløsning","Samarbejde","Kommunikationsevner","Kreativitet","Faglige Færdigheder",
    "Jeg arbejder struktureret og analytisk med fokus på problemløsning, koordinering og kvalitet i opgaveløsningen. Min baggrund inden for eksport, projektkoordinering, kundeservice og digital udvikling giver mig en bred forretningsforståelse og evnen til hurtigt at sætte mig ind i nye komplekse opgaver.",
    "img/hardskills_.jpg","UI/UX","Figma","Teams","Indesign"
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
    mySkills.getProcess() + 
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
