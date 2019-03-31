import {BaseElement} from '/src/ui/base-element.js';

export class Page extends BaseElement {

    constructor(pageTitle) {
        super();
        this.pageTitle = pageTitle;
        this.loadTimes = 0;
    }

    setLoadTimes(times = 0) {
        this.loadTimes = times;
    }

    getLoadTimes() {
        return this.loadTimes;
    }
}
