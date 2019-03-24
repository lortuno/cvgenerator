window.onload = function () {
    const vue = new Vue({
        el: '#vue',
        data: {
            appTitle: 'Formulario',
            appName: 'Mi aplicación',
            questions: [
                { number: 1, title: 'Nombre y apellidos' },
                { number: 2, title: 'Profesión' },
                { number: 3, title: 'Aptitudes' }
            ],
        },
        methods: {
            goNext:function(event) {
                alert('next' + event);
            }
        }
    });
};
