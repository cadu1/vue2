new Vue({
	el: '#desafio',
	data: {
		addEfeito: "destaque",
		aplicaCss: "encolher",
		perigo: false,
		aplicaStyle: {
			width: '100px',
			height: '100px'
		},
		contador: 0,
		largura: "",
		cor: ""
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.addEfeito = !this.addEfeito;
			}, 1000);
		},
		iniciarProgresso() {
			let thread = setInterval(()=>{
				this.contador++;
				this.largura = this.progresso;
				console.log(this.largura);
				if(this.contador === 10) {
					clearInterval(thread);
				}
			}, 500);
		},
		setPerigo(event) {
			if(event.target.value === "true") {
				this.perigo = true;
			} else if(event.target.value === "false") {
				this.perigo = false;
			}
		}
	},
	computed: {
		progresso() {
			return 'width:' + (this.contador*40) + 'px';
		}
	}
})
