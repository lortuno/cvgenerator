import {BaseElement} from '/src/ui/base-element.js';

export class Page extends BaseElement {

    constructor(pageTitle) {
        super();
        this.pageTitle = pageTitle;
        this.loadTimes = 0;
    }

    resetLoadTimes() {
        this.loadTimes = 0;
        console.log('reset times', this.loadTimes);
    }
}
