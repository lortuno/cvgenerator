import {Question} from "/src/classes/question.js";
import {DataError} from "/src/services/data-error.js";

export class QuestionsDataService {
    constructor() {
        this.question = [];
        this.errors = [];
    }

    loadData(questions) {
	    let i = 0;
        for (let data of questions) {
            if (this.validateQuestionData(data)) {
	            let q = this.loadQuestion(data);
	            this.question.push(q);
            } else {
                let e = new DataError('invalid question data', data);
                this.errors.push(e);
            }
        }
    }
    
    getQuestionByNumber(number) {
        return this.question.find((question) => question.number === number);
    }

    getQuestionsSortedByTitle() {
        return this.question.sort( function (question1, question2) {
            if (question1.title < question2.title ) {
                return -1;
            } else if(question2.title < question1.title) {
                return 1;
            } else {
	            return 0;
            }
        })
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

    validateQuestionData(question) {
        let requiredProperties = 'title number'.split(' ');
        let hasErrors = false;

        for (let field of requiredProperties) {
            if (!question[field]) {
                this.errors.push(new DataError(`invalid field ${field}`),question);
                hasErrors = true;
            }
        }

        if (Number.isNaN((Number.parseFloat(question.number)))) {
	        this.errors.push(new DataError(`invalid number`),question);
	        hasErrors = true;
        }

        return !hasErrors;
    }
}
