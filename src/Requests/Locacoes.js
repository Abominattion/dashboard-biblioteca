import Vue from "vue"
import axios from 'axios';

Vue.mixin({
    methods: {
        // Lista todos as locações ativas
        getLocacoesAtivas() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + '/api/v1/locacoes-ativas',
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.locacoes = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Lista todos as locações inativas
        getLocacoesInativas() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + '/api/v1/locacoes-inativas',
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.locacoes = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Lista todas os locações	
        getLocacoes() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + '/api/v1/locacoes',
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.locacoes = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Filtra uma locação pelo ID
        getLocacaoID() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/locacao/" + this.$route.params.id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.locacao = resposta.data;
                this.formLocacao.livroID = this.locacao[0].livro.id;
            }).catch((error) => {
                console.log(error);
            })
        },
    },
});