const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            width: 300px;
            height: 150px;
            border: 5px solid #666;
        }
    </style>
    <div>Hello world</div>
    <div id="percentValue"></div>
`;
class Spinner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    get percent() {
        return parseInt(this.getAttribute('percent'));
    }
    set percent(val) {
        this.setAttribute('percent', val);
    }
    connectedCallback() {

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
