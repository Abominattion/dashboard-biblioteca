<template>
    <div class="cadastrar-livro-form">
        <form @submit.prevent="cadastrarLivro()">
            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Título</label>
                    <input type="text" class="form-control" placeholder="Título" v-model="livro.titulo" required>
                </div>
                <div class="form-group">
                    <label for="nome">Autor</label>
                    <input type="text" class="form-control" placeholder="Autor" v-model="livro.autor" required>
                </div>
            </div>

            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">ISBN</label>
                    <input type="text" class="form-control" placeholder="ISBN" v-model="livro.isbn" required>
                </div>

                <div class="form-group">
                    <label for="nome">Ano</label>
                    <input type="text" class="form-control" placeholder="ano" v-model="livro.ano" required>
                </div>
            </div>

            <div class="input-group justify-content-between">
                <div class="form-group">

                    <label for="nome">Categoria</label>
                    <select class="form-select" aria-label="Default select example" v-model="livro.categoria">
                        <option disabled selected value="">Selecione uma categoria</option>
                        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                            {{categoria.titulo}}
                        </option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="nome">Editora</label>
                    <input type="text" class="form-control" placeholder="Editora" v-model="livro.editora" required>
                </div>
            </div>

            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                livro: {
                    titulo: '',
                    autor: '',
                    isbn: '',
                    ano: '',
                    categoria: '',
                    editora: ''
                },
                categorias: [],
                token: this.getToken(),
                url: this.getAPIUrl()
            }
        },
        mounted() {
            this.getCategorias();
        },
        methods: {
            cadastrarLivro() {
                const options = {
                    method: 'POST',
                    url: this.url + "/api/v1/cadastrar-livro",
                    params: this.livro,
                    headers: {
                        Authorization: 'Bearer  ' + this.token,
                    },
                };
                axios.request(options).then((resposta) => {
                        this.successAlert(resposta.data)
                        this.$router.push("/livros");
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