import Vue from "vue"
import axios from 'axios';

Vue.mixin({
    methods: {
        // Lista todos os Alunos | Paginação
        getAlunos(currentPage = null) {
            this.carregar = true;

            // Tratando a url
            let url =  this.getAPIUrl() + "/api/v1/alunos";
            if(currentPage != null) {
                url += "?page=" + currentPage;
            }

            const options = {
                method: 'GET',
                url: url,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };
            
            axios.request(options).then((response) => {
                this.alunos = response.data;
                this.total = response.data.total;
                this.carregar = false;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Filtra um aluno pelo ID
        getAlunoByID() {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/aluno/" + this.$route.params.id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((response) => {
                this.aluno = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        // Filtra um aluno pelo ID
        getAlunoByIDParams(id) {
            const options = {
                method: 'GET',
                url: this.getAPIUrl() + "/api/v1/aluno/" + id,
                headers: {
                    Authorization: 'Bearer  ' + this.getToken(),
                },
            };

            axios.request(options).then((response) => {
                this.aluno = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
    },
});