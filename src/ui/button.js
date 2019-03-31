import {BaseElement} from "/src/ui/base-element.js";

export class Button extends BaseElement {
    constructor (title, classNames = 'btn-danger') {
        super();
        this.title = title;
        this.class = classNames;
    }

    getElementString() {
        return `
            <button class="btn ${this.class}" type="button"> ${this.title}</button>
        `;
    }
}
