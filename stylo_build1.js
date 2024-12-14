class galleryBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.imgURL = this.getAttribute("imgURL");
    this.title = this.getAttribute("title");
    this.content = this.getAttribute("content");
    this.c1 = this.getAttribute("colorMain");
    this.c2 = this.getAttribute("colorTheme");
    this.c3 = this.getAttribute("colorText");
    this.titleSize = this.getAttribute("titleSize");
    this.curve = this.getAttribute("curve");
    this.font = this.getAttribute("fontFamily");

    this.shadowRoot.innerHTML = `
          <style>
            * {
              color: ${this.c3};
              font-family: ${this.font};
            }
            div {
              background-color: ${this.c2};
              padding: 5px 0px;
              max-width: 400px;
              border-radius: 0px;
              border-radius: ${this.curve};
            img {
              width: 100%;
              height: auto;
              display: block;
              margin: 0 auto;
            }
  
            h1 {
              background-color: ${this.c1}; 
              text-align: center;
              padding: 0px 5px;
              margin: 10px 0px 0px 0px;
              font-size: 30px;
              font-size: ${this.titleSize};
            }
  
            h3 {
              text-align: center;
              margin: 5px 10px;
              padding: 0px 5px;
              color: ${this.c3}
              font-size: 10px
              font-size: ${this.contentSize}

            }
          </style>
          <div>
            <img src="${this.imgURL}" />
            <h1 class="gallery-box_title">${this.title}</h1>
            <h3 class="gallery-box_content">${this.content}</h3>
          </div>
        `;
  }
}

customElements.define("gallery-box", galleryBox);

class alertBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.title = this.getAttribute("title");
    this.content = this.getAttribute("content");
    this.c1 = this.getAttribute("colorMain");
    this.c2 = this.getAttribute("colorWall");
    this.c3 = this.getAttribute("colorText");
    this.curve = this.getAttribute("curve");
    this.font = this.getAttribute("fontFamily");

    this.shadowRoot.innerHTML = `
      <style>
        * {
          color: ${this.c3};
          font-family: ${this.font};
        }
        #main {
          background-color: ${this.c1};
          padding-left: 20px;
          padding-right: 10px;
          margin: 5px 10px;
          position:fixed;
          left: 80%; 
          right: 0%;
          top: 0%;
          border-left:  ${this.c2} solid 15px;
          border-radius: ${this.curve};

        }

        h3 {
          font-weight: bold;
        }
        h5 {
          font-weight: 400;
        }
        h6 {
          font-weight: 100;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 20px;
          cursor: pointer;
          font-size: 20px;
          fill=${this.c3}
        }
    </style>
    <body>
      <div id="main" onclick="this.parentNode.removeChild(this)">
        <h3>${this.title}</h3>
        <h5>${this.content}</h5>
        <span class="close-button">&times;</span>

        </div>
    <body>

    `;
  }
}
customElements.define("alert-box", alertBox);

class badge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.weight = this.getAttribute("fontWeight");
    this.size = this.getAttribute("fontSize");
    this.content = this.getAttribute("content");
    this.c1 = this.getAttribute("colorMain");
    this.c2 = this.getAttribute("colorText");
    this.curve = this.getAttribute("curve");
    this.font = this.getAttribute("fontFamily");

    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: ${this.c1};
          color: ${this.c2};
          font-family: ${this.font};
          padding: 5px 10px;
          border-radius: ${this.curve};
          font-weight: ${this.weight};
          font-size: ${this.size};
          display: inline-block;
        }
      </style>
      <div>${this.content}</div>
    `;
  }
}

customElements.define("badge-marker", badge);
