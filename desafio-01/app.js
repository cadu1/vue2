new Vue({
    el: '#desafio',
    data: {
        nome: 'Carlos',
        idade: '31',
        imageUrl: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        multiplicaIdade: function() {
            return this.idade * 3;
        },
        numeroAleatorio: function() {
            return Math.round(Math.random() * 1);
        }
    }
});