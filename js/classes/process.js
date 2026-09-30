export class process {
    constructor(title, title1, parag, image, title2,parag2,image2) {
        this.title = title;
        this.title1 = title1;
        this.parag = parag;
        this.image = image;
        this.title2 = title2;
        this.parag2 = parag2;
        this.image2 = image2;
    }

    getProcess() {
        return `
       <section class="myprocess" id="skills">
             <h1>${this.title}</h1>
             <div class="info-myprocess">

                <div>
                    <h2>${this.title1}</h2>
                    <p>${this.parag}</p>
                </div>
                
                <img src="${this.image}" alt="my picture">
            </div>


                <div class="info-myprocess">
                <div>
                <h2>${this.title2}</h2>
                <p>${this.parag2}</p>
             </div>
                <img src="${this.image2}" alt="my picture">
                </div>
        </section>`;
    }
}