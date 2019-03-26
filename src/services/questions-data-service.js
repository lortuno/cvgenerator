import {Question} from '/src/classes/question.js';
import {questions} from '/src/data/questions-data.js';

export class QuestionsDataService {
    constructor() {
        this.question = [];
    }

    loadData(questions) {
        for (let data of questions) {
            this.question.push(data);
        }
    }
}
