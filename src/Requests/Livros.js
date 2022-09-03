import Vue from "vue"
import axios from 'axios';

Vue.mixin({
    methods: {
        // Lista todos os Livros
        getLivros() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/livros",
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.livros = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Filtra um livro pelo ID
        getLivroByID() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/livro/" + this.$route.params.id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.livro = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Filtra um livro pelo ID | Criando Locação
        getLivroByIDParams(id) {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/livro/" + id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.livro = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
    },
});