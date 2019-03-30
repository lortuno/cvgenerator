import $ from 'jquery';

export class BaseElement {
    constructor() {
        this.element = null; // Jquery object
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        // this.enableJS();
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'Please override getelementstring in base element'
    }

    enableJS() {
        componentHandler.upgradeElement(this.element[0]);
    }
}
