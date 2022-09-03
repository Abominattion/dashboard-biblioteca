import Vue from "vue"
import axios from 'axios';

Vue.mixin({
    methods: {
        // Pega todos os dados dos sistema
        getDados() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/dash-quantidades",
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((resposta) => {
                this.data = resposta.data;
            }).catch((error) => {
                console.log(error);
            })
        },
    }
});