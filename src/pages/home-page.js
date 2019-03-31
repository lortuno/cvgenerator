import {Page} from '/src/framework/page.js';
import {DataTable} from '/src/ui/data-table.js';
import {application} from '/src/framework/index.js';

export class HomePage extends Page {

    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();

        let headers = 'Title Number'.split(' ');
        let t = new DataTable(headers, application.dataService.question);
        t.appendToElement(this.element);

    }

    getElementString() {
        return '<div class="margin-top"><h3>Home Title</h3></div>';
    }
}
