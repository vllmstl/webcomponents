const template = document.createElement('template');
template.innerHTML = `
    <div>Hello world</div>
    <div id="percentValue"></div>
`;
class Spinner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    set percent(val) {
        this.setAttribute("percent", val);
    }
    connectCallback() {

    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return ['percent'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        console.log("val changed", name, oldVal, newVal);
        switch (name) {
            case 'percent':
                this.shadowRoot.querySelector('#percentValue').innerHTML = newVal;
                break;
            default:
        }
    }
}

window.customElements.define('my-spinner', Spinner);
