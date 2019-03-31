import $ from 'jquery';
import {questions} from "/src/data/questions-data.js";
import {QuestionsDataService} from '/src/services/questions-data-service.js';
import {ApplicationBase} from '/src/framework/application-base.js';
import {HomePage} from '/src/pages/home-page.js';
import {OutputPage} from '/src/pages/output-page.js';
import {FormPage} from "/src/pages/form-page.js";

export class App extends ApplicationBase {

    constructor() {
        super('CV Generator');
        this.dataService = new QuestionsDataService();
        this.dataService.loadData(questions);

        this.addRoute('Home', new HomePage());
        this.addRoute('Form', new FormPage(), true);
        this.addRoute('Output', new OutputPage());
    }
}

export let application = new App();
application.show($('body'));
