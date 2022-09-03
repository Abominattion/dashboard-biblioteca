<template>
    <div class="cadastar-categoria-form">
        <form @submit.prevent="cadastrarCategoria()">
            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Título</label>
                    <input type="text" class="form-control" placeholder="Título" v-model="categoria.titulo" required>
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
                categoria: {
                    titulo: ""
                },
                token: this.getToken(),
                url: this.getAPIUrl()

            }
        },
        methods: {
            cadastrarCategoria() {
                const options = {
                    method: 'POST',
                    url: this.url + "/api/v1/cadastrar-categoria",
                    data: this.categoria,
                    headers: {
                        Authorization: 'Bearer  ' + this.token,
                    },
                };
                axios.request(options).then(resposta => {
                    this.successAlert(resposta.data)
                    this.$router.push('/categorias');
                }).catch(error => {
                    this.errorAlert(error)
                });
            }
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