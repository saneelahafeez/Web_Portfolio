export class aboutMe {
    constructor(title, para1, para2, btn1, btn2, img) {
        this.title = title;
        this.para1 = para1;
        this.para2 = para2;
        this.btn1 = btn1;
        this.btn2 = btn2;
        this.img = img;
    }

    getAbout() {
        return `
          <section class="about-me">

        <div class="info-aboutme">
            <h1>${this.title}</h1>
            <p>${this.para1}</p>

            <p>${this.para2}</p>
            <div>
            <a href="#projekter">${this.btn1}</a></a>
            <a href="contact.html">${this.btn2}</a>
            </div>

        </div>


        <div class="about-img">
            <img src="${this.img}" alt="my picture">
        </div>

    </section>    
        `;
    }
}