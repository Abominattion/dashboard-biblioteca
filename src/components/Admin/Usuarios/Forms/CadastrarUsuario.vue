<template>
    <div class="cadastrar-usuario-form">
        <form @submit.prevent="cadastrarUsuario()">
            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Título</label>
                    <input type="text" class="form-control" placeholder="Nome" v-model="usuario.nome" required>
                </div>
                <div class="form-group">
                    <label for="nome">Autor</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="usuario.email" required>
                </div>
            </div>

            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Senha</label>
                    <input type="password" class="form-control" placeholder="Senha" v-model="usuario.password" required>
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
                usuario: {
                    nome: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            cadastrarUsuario() {
                const options = {
                    method: 'POST',
                    url: this.getAPIUrl() + "/api/v1/cadastrar-usuario",
                    params: this.usuario,
                    headers: {
                        Authorization: 'Bearer  ' + this.getToken(),
                    },
                };

                axios.request(options).then((resposta) => {
                        this.successAlert(resposta.data)
                        this.$router.push("/usuarios");
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