<template>
    <div class="encerrar-locacao-form">
        <form @submit.prevent="encerrarLocacao()">

            <div class="input-group justify-content-between">

                <div class="form-group">
                    <label for="nome">Nome do aluno</label>
                    <input type="text" class="form-control" :value="locacao[0].aluno.nome" readonly>
                </div>

                <div class="form-group">
                    <label for="nome">Livro</label>
                    <input type="text" class="form-control" :value="locacao[0].livro.titulo" readonly>
                </div>
            </div>

            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Data de locação</label>
                    <input type="text" class="form-control" :value="locacao[0].data_locacao | formatarData()" readonly>
                </div>

                <div class="form-group">
                    <label for="nome">Data de devolução</label>
                    <input type="text" class="form-control" :value="locacao[0].data_devolucao | formatarData()"
                        readonly>
                </div>
            </div>

            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Estado do livro</label>
                    <select class="form-select" aria-label="Default select example" v-model="formLocacao.status">
                        <option disabled selected>Qual o estado do livro na devolução?</option>
                        <option value="Ok">Ok</option>
                        <option value="Deteriorado">Deteriorado</option>
                        <option value="Destruído">Destruído</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="nome">Devolução com atraso</label>
                    <input type="date" class="form-control" v-model="formLocacao.devolucao_atradasa">
                </div>
            </div>

            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-primary">Encerrar Locação</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                alunos: [],
                livros: [],
                locacao: [],
                formLocacao: {
                    livroID: '',
                    data_devolucao: '',
                    status: "Qual o estado do livro na devolução?",
                    devolucao_atradasa: ''
                },
                token: this.getToken(),
                url: this.getAPIUrl()
            }
        },
        mounted() {
            this.getLocacaoID();
        },
        methods: {
            encerrarLocacao() {
                const options = {
                    method: 'PUT',
                    url: this.url + "/api/v1/editar-locacao/" + this.$route.params.id,
                    params: this.formLocacao,
                    headers: {
                        Authorization: 'Bearer  ' + this.token,
                    },
                };
                axios.request(options).then((resposta) => {
                        this.successAlert(resposta.data)
                        this.$router.push("/locacoes");
                    })
                    .catch((error) => {
                        this.errorAlert(error)
                    })
            },
        }
    }
</script>

<style scoped>
    .form-group {
        flex-basis: calc(50% - 10px);
    }

    input,
    select {
        margin: 10px 0;
    }
</style>