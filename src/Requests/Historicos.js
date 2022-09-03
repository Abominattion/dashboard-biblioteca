import Vue from "vue"
import axios from 'axios';

Vue.mixin({
    methods: {
        // Lista todos os Livros
        getHistoricoAluno() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/historico-aluno/" + this.$route.params.id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.historico = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Filtra uma locação pelo ID
        getHistoricoLivro() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/historico-livro/" + this.$route.params.id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.historico = resposta.data;
            }).catch((e) => {
                console.log(e);
            })
        },
    },
});