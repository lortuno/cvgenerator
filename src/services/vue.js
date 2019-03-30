import $ from 'jquery';
import {questions} from "/src/data/questions-data.js";
import * as helper from "/src/services/helper.js";
import {QuestionsDataService} from '/src/services/questions-data-service.js';
import {Button} from "/src/ui/button.js";
import {DataTable} from "/src/ui/data-table.js";

let questionsService = new QuestionsDataService();
questionsService.loadData(questions);
let test = questionsService.getQuestionByNumber(3);
let ordered = questionsService.getQuestionsSortedByTitle();
let filtered = questionsService.filterQuestionByTitle('Nombre');
console.log(test);
console.log(ordered);
console.log(filtered);

let headers = "Title Number".split(' ');
let dt = new DataTable(headers, questionsService.question);
dt.appendToElement($('.w-table'));

for (let e of questionsService.errors )
    console.log(e.message);
let b = new Button('hola');
b.appendToElement($('body'));

window.onload = function () {
    const vue = new Vue({
        el: '#vue',
        data: {
            appTitle: 'Formulario',
            appName: 'Mi aplicación',
            questions: questions,
        },
        methods: {
            isFirstQuestion: function (number) {
                return  (number === 1) ? '' : 'hide';
            },
            changeQuestion: function (id, list, type = 'more') {
                let nextNumber = false;
                let questionNumber = false;
                const sectionPrefix = 'r-section-';

                if (type === 'more') {
                    nextNumber = id + 1;
                    questionNumber = ( nextNumber <= list.length) ? nextNumber : false;
                } else {
                    nextNumber = id - 1;
                    questionNumber = ( nextNumber >= 1) ? nextNumber : false;
                }
                console.log(nextNumber);

                if (questionNumber) {
                    let nextId = sectionPrefix + questionNumber;
                    let currentId = sectionPrefix + id;
                    helper.showElementById(nextId);
                    helper.hideElementById(currentId);

                    return true;
                }
                else {
                    alert('Ya no hay más preguntas');
                }
            },
        }
    });
};
