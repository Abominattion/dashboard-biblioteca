import Vue from "vue";
import axios from "axios";

Vue.mixin({
    methods: {
        getUsuarios() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + '/api/v1/usuarios',
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then(response => {
                this.usuarios = response.data;
            }).catch(error => {
                console.log(error);
            });
        },
        getUsuarioByID() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/usuarios/" + this.$route.params.id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then(response => {
                this.usuario = response.data;
            }).catch(error => {
                console.log(error);
            });
        },
    }
})