export class process {
    constructor(title, title1, parag, image) {
        this.title = title;
        this.title1 = title1;
        this.parag = parag;
        this.image = image;
    }

    getProcess() {
        return `
        <section class="myprocess">
            <div class="info-myprocess">
                <h1>${this.title}</h1>
                <p>${this.title1}</p>
                <p>${this.parag}</p>
                <img src="${this.image}" alt="my picture">
            </div>
        </section>`;
    }
}