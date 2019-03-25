window.onload = function () {
    const vue = new Vue({
        el: '#vue',
        data: {
            appTitle: 'Formulario',
            appName: 'Mi aplicación',
            questions: [
                {
                    number: 1,
                    title: 'Nombre y apellidos',
                },
                {
                    number: 2,
                    title: 'Profesión',
                },
                {
                    number: 3,
                    title: 'Aptitudes',
                }
            ],
        },
        methods: {
            isFirstQuestion: function(id) {
                return  (id === 1) ? '' : 'hide';
            },
            changeQuestion: function (id, list, type = 'more') {
                let nextNumber = false;
                let questionNumber = false;

                if (type === 'more') {
                    nextNumber = id + 1;
                    questionNumber = ( nextNumber <= list.length) ? nextNumber : false;
                } else {
                    nextNumber = id - 1;
                    questionNumber = ( nextNumber >= 1) ? nextNumber : false;
                }
                console.log(nextNumber);

                if (questionNumber) {
                    let nextId = 'r-form-' + questionNumber;
                    let currentId = 'r-form-' + id;
                    showElementById(nextId);
                    hideElementById(currentId);

                     return true;
                }
                else {
                    alert('Ya no hay más preguntas');
                }
            },
        }
    });
};
