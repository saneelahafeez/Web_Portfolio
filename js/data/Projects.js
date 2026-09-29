export class Projects {
    constructor(eyebrow, title, intro, projectsData) {
        this.eyebrow = eyebrow;
        this.title = title;
        this.intro = intro;
        this.projectsData = projectsData;
        this.currentIndex = 0;
    }

    renderProject() {
        const p = this.projectsData[this.currentIndex];
        const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");

        return `
            <article class="project-card">
               <div class="project-image" style="background-image: url('${p.image}');">
        
                </div>
                <div class="project-info">
                    <p class="meta">${p.meta}</p>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <a href="#" class="read-more">${p.link}</a>
                    <div class="project-tags">${tagsHTML}</div>
                </div>
            </article>
        `;
    }

    getProjects() {
        return `
        <section class="projects" id="projekter">
            <p class="eyebrow">${this.eyebrow}</p>
            <h2>${this.title}</h2>
            <p class="intro">${this.intro}</p>

            <!-- Container til projektet, så vi nemt kan udskifte det -->
            <div id="project-container">
                ${this.renderProject()}
            </div>

            <div class="project-controls">
                <div class="dots">
                    <!-- Dots genereres nu dynamisk baseret på antallet af projekter -->
                    ${this.projectsData.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join("")}
                </div>
                <div class="arrows">
                    <button id="prev-btn" aria-label="Forrige"><i class="fa-solid fa-chevron-left"></i></button>
                    <button id="next-btn" aria-label="Næste"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </section>`;
    }
}