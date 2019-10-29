class Rating extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    style.textContent = `
    .circle { 
        display: inline-block;
        width: 0.75em;
        height: 0.75em;
        border: black 2px solid;
        border-radius: 100%;
        vertical-align: text-bottom;
        margin-left: 0.25em;
    }
    .filled {
        background: black;
    }`;

    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    const rate = this.rate;

    const [actual, total] = evalRate(rate);

    const circle = document.createElement("span");

    for (let i = 0; i < actual; i++) {
      let clone = circle.cloneNode(true);
      clone.className = "filled circle";
      this.shadowRoot.appendChild(clone);
    }

    for (let i = 0; i < total - actual; i++) {
      let clone = circle.cloneNode(true);
      clone.className = "circle";
      this.shadowRoot.appendChild(clone);
    }
  }

  get rate() {
    return this.getAttribute("rate") || "";
  }
}

function evalRate(rate) {
  const rateParts = rate.split("/");
  return [Number(rateParts[0]), Number(rateParts[1])];
}

customElements.define("my-rating", Rating);
