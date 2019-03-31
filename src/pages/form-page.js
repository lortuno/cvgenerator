import {Page} from '/src/framework/page.js';
import * as helper from "/src/services/helper.js";
import {questions} from "/src/data/questions-data.js";
import {Button} from "/src/ui/button.js";
import {application} from "/src/framework/index.js";

export class FormPage extends Page {

    constructor() {
        super('Form');
    }

    loadVue() {
        let loadTimes = 0;
        document.addEventListener("DOMNodeInserted", function() {
            let vueNode = document.querySelector("#vue") !== null;

            if (loadTimes === 0 && vueNode){
                loadTimes++;
                const vue = new Vue({
                    el: '#vue',
                    data: {
                        appTitle: 'Formulario',
                        appName: 'Mi aplicación',
                        questions: questions,
                    },
                    methods: {
                        isFirstQuestion: function (number) {
                            return (number === 1) ? '' : 'hide';
                        },
                        changeQuestion: function (id, list, type = 'more') {
                            let nextNumber = false;
                            let questionNumber = false;
                            const sectionPrefix = 'r-section-';

                            if (type === 'more') {
                                nextNumber = id + 1;
                                questionNumber = (nextNumber <= list.length) ? nextNumber : false;
                            } else {
                                nextNumber = id - 1;
                                questionNumber = (nextNumber >= 1) ? nextNumber : false;
                            }
                            console.log(nextNumber);

                            if (questionNumber) {
                                let nextId = sectionPrefix + questionNumber;
                                let currentId = sectionPrefix + id;
                                helper.showElementById(nextId);
                                helper.hideElementById(currentId);

                                return true;
                            } else {
                                alert('Ya no hay más preguntas');
                            }
                        },
                    }
                });
            }
        }, false);
    }

    createElement() {
        super.createElement();
        this.loadVue();
    }

    getElementString() {

        return '\t<article id="vue" class="container-fluid" v-cloak>\n' +
            '\t\t<h1 v-text="appName">{{ appName }}</h1>\n' +
            '\t\t<section id="main">\n' +
            '\t\t\t<h2 v-text="appTitle">\n' +
            '\t\t\t\t{{ appTitle }}\n' +
            '\t\t\t</h2>\n' +
            '\t\t\t<form>\n' +
            '\t\t\t\t<div v-for="question in questions"\n' +
            '\t\t\t\t\t v-bind:class=" isFirstQuestion( question.number ) "\n' +
            '\t\t\t\t\t v-bind:id=" \'r-section-\' + question.number ">\n' +
            '\t\t\t\t\t<div class="form-group">\n' +
            '\t\t\t\t\t\t<label v-bind:for=" \'r-field-\' + question.number ">\n' +
            '\t\t\t\t\t\t\tPregunta <span> {{ question.number }}</span>: {{ question.title}}\n' +
            '\t\t\t\t\t\t</label>\n' +
            '\t\t\t\t\t\t<div>\n' +
            '\t\t\t\t\t\t\t<textarea v-bind:id=" \'r-field-\' + question.number "\n' +
            '\t\t\t\t\t\t\t\t\t  class="form-control" cols="3"></textarea>\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t<div class="row">\n' +
            '\t\t\t\t\t\t<div class="col-sm-6">\n' +
            '\t\t\t\t\t\t\t<button type="button"\n' +
            '\t\t\t\t\t\t\t\t\tclass="btn btn-outline-dark btn-block"\n' +
            '\t\t\t\t\t\t\t\t\tv-on:click="changeQuestion( question.number, questions, \'less\' )">\n' +
            '\t\t\t\t\t\t\t\tAnterior\n' +
            '\t\t\t\t\t\t\t</button>\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t<div class="col-sm-6" v-if=" questions.length !== question.number ">\n' +
            '\t\t\t\t\t\t\t<button type="button"\n' +
            '\t\t\t\t\t\t\t\t\tclass="btn btn-dark btn-block"\n' +
            '\t\t\t\t\t\t\t\t\tv-on:click="changeQuestion( question.number, questions, \'more\' )">\n' +
            '\t\t\t\t\t\t\t\tSiguiente\n' +
            '\t\t\t\t\t\t\t</button>\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t<div class="col-sm-6 w-send-btn" v-else>\n' +
            '\t\t\t\t\t\t\t<button type="button"\n' +
            '\t\t\t\t\t\t\t\t\tclass="btn btn-success btn-block e-send">\n' +
            '\t\t\t\t\t\t\t\tEnviar\n' +
            '\t\t\t\t\t\t\t</button>\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t</div>\n' +
            '\t\t\t</form>\n' +
            '\t\t</section>\n' +
            '\t</article>';
    }
}
