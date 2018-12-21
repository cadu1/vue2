new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta: function() {
            alert('Alerta!');
        },
        exibeValor: function(event) {
            this.valor = event.target.value;
        }
    }
})