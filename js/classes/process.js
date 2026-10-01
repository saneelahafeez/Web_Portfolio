export class process {
    constructor(title, title1, parag, image,Sskill1,Sskill2,Sskill3,Sskill4, title2,parag2,image2,Hskill1,Hskill2,Hskill3,Hskill4) {
        this.title = title;
        this.title1 = title1;
        this.parag = parag;
        this.image = image;
        this.Sskill1 = Sskill1;
        this.Sskill2 = Sskill2;
        this.Sskill3 = Sskill3;
        this.Sskill4 = Sskill4;
        this.title2 = title2;
        this.parag2 = parag2;
        this.image2 = image2;
        this.Hskill1 = Hskill1;
        this.Hskill2 = Hskill2;
        this.Hskill3 = Hskill3;
        this.Hskill4 = Hskill4;
    }

    getProcess() {
        return `
       <section class="myprocess" id="skills">
             <h2>${this.title}</h2>
                <div class="info-myprocess">
                    <div class="text-content">
                        <h3>${this.title1}</h3>
                        <p>${this.parag}</p>
                        <!-- Nøgleordene tilføjet her -->
                        <div class="nøgleord-tags">
                            <span>${this.Sskill1}</span>
                            <span>${this.Sskill2}</span>
                            <span>${this.Sskill3}</span>
                            <span>${this.Sskill4}</span>
                        </div>
                    </div>
                    <img src="${this.image}" alt="my picture">
                </div>

        <!-- ANDEN BLOK: Kompetancer (samme struktur som ovenfor) -->
                <div class="info-myprocess">
                    <div class="text-content">
                        <h3>${this.title2}</h3>
                        <p>${this.parag2}</p>
                        <!-- Nøgleordene tilføjet her -->
                        <div class="nøgleord-tags">
                             <span>${this.Hskill1}</span>
                            <span>${this.Hskill2}</span>
                            <span>${this.Hskill3}</span>
                            <span>${this.Hskill4}</span>
                        </div>
                    </div>
                    <img src="${this.image2}" alt="my picture">
                </div>
        </section>
     `; 
    }
}
