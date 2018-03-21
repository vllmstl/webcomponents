const template = document.createElement('template');
template.innerHTML = `
    <div>Hello world</div>
`;
class Spinner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectCallback() {

    }
    disconnectedCallback() {

    }
    attributeChangedCallback(name, oldVal, newVal) {

    }
}

window.customElements.define('my-spinner', Spinner);
