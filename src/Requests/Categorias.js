import Vue from "vue"
import axios from 'axios';

Vue.mixin({
    methods: {
        // Lista todos os categorias
        getCategorias() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/categorias",
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.categorias = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Filtra uma categoria pelo ID
        getCategoriaByID() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/categorias/" + this.$route.params.id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.categoria = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
    },
});