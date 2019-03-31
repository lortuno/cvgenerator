import {Page} from '/src/framework/page.js';
import {Button} from '/src/ui/button.js';
import {application} from '/src/framework/index.js';

export class OutputPage extends Page {

    constructor() {
        super('Output');
    }

    createElement() {
        super.createElement();

        let b = new Button('Self Driving Cars');
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Home'));

        b = new Button('Drones');
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Form'));
    }

    getElementString() {
        return '<div class="text-center"></div>';
    }
}
