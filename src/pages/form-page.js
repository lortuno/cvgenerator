import {Page} from '/src/framework/page.js';
import * as helper from "/src/services/helper.js";
import {questions} from "/src/data/questions-data.js";
import {Button} from "/src/ui/button.js";
import {application} from "/src/framework/index.js";
import $ from "jquery";

export class FormPage extends Page {

    constructor() {
        super('Form');
        this.isVueLoaded = false;
    }

    loadVue() {
        let isVueLoaded = this.isVueLoaded;
        document.addEventListener("DOMNodeInserted", function () {
            let vueNode = document.querySelector("#vue") !== null;
            console.log('is it true', isVueLoaded);
            console.log('vue', vueNode);
            if (isVueLoaded === false && vueNode) {
                console.log('inside', isVueLoaded);
                isVueLoaded = true;
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

                let b = new Button('Enviar', 'btn-success btn-block e-send');
                b.appendToElement($('.w-send-btn'));
                b.element.click(() => application.activateRoute('Output'));
            }
        }, false);
    }

    createElement() {
        super.createElement();
        this.setLoadTimes();
    }

    setLoadTimes() {
        super.setLoadTimes();
        this.isVueLoaded = super.getLoadTimes() === true;
        this.loadVue();
        super.setLoadTimes(1);
    }

    getElementString() {

        return '<article id="vue" class="container-fluid" v-cloak>' +
            '<h1 v-text="appName">{{ appName }}</h1>' +
            '<section id="main">' +
            '<h2 v-text="appTitle">' +
            '{{ appTitle }}' +
            '</h2>' +
            '<form>' +
            '<div v-for="question in questions"' +
            ' v-bind:class=" isFirstQuestion( question.number ) "' +
            ' v-bind:id=" \'r-section-\' + question.number ">' +
            '<div class="form-group">' +
            '<label v-bind:for=" \'r-field-\' + question.number ">' +
            'Pregunta <span> {{ question.number }}</span>: {{ question.title}}' +
            '</label>' +
            '<div>' +
            '<textarea v-bind:id=" \'r-field-\' + question.number "' +
            '  class="form-control" cols="3"></textarea>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-sm-6">' +
            '<button type="button"' +
            'class="btn btn-outline-dark btn-block"' +
            'v-on:click="changeQuestion( question.number, questions, \'less\' )">' +
            'Anterior' +
            '</button>' +
            '</div>' +
            '<div class="col-sm-6" v-if=" questions.length !== question.number ">' +
            '<button type="button"' +
            'class="btn btn-dark btn-block"' +
            'v-on:click="changeQuestion( question.number, questions, \'more\' )">' +
            'Siguiente' +
            '</button>' +
            '</div>' +
            '<div class="col-sm-6 w-send-btn" v-else></div>' +
            '</div>' +
            '</div>' +
            '</form>' +
            '</section>' +
            '</article>';
    }
}
