import {BaseElement} from "/src/ui/base-element.js";

export class Button extends BaseElement {
    constructor (title) {
        super();
        this.title = title;
    }

    getElementString() {
        return `
            <button class="btn btn-danger" type="button"> ${this.title}</button>
        `;
    }
}
