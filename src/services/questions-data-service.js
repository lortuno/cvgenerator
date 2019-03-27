import {Question} from "/src/classes/question.js";
import {DataError} from "/src/services/data-error.js";

export class QuestionsDataService {
    constructor() {
        this.question = [];
        this.errors = [];
    }

    loadData(questions) {
        for (let data of questions) {
            let q = this.loadQuestion(data);
            this.question.push(q);
        }
    }

    loadQuestion(question) {
        try {
	        let q = new Question(question.title, question.number);
	        return q;
        } catch (e) {
            this.errors.push(new DataError('Error loading Question', question))
        }

        return null;
    }
}
