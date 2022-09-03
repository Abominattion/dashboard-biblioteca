<template>
    <div class="editar-usuario-form">
        <form @submit.prevent="editarUsuario()">
            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" placeholder="Nome" v-model="usuario.nome" required>
                </div>
                <div class="form-group">
                    <label for="nome">Email</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="usuario.email" required>
                </div>
            </div>

            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Senha</label>
                    <input type="password" class="form-control" placeholder="********" v-model="userNewPassword">
                </div>

            </div>
            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-primary">Atualizar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                usuario: [],
                userNewPassword: ''
            }
        },
        mounted() {
            this.getUsuarioByID(this.$route.params.id);
        },
        methods: {
            editarUsuario() {

                if (this.userNewPassword.length !== 0) {
                    this.usuario.password = this.userNewPassword;
                }

                const options = {
                    method: 'PUT',
                    url: this.getAPIUrl() + "/api/v1/editar-usuario/" + this.usuario.id,
                    params: this.usuario,
                    headers: {
                        Authorization: 'Bearer  ' + this.getToken(),
                    },
                };

                axios.request(options).then((resposta) => {
                        this.successAlert(resposta.data)
                        this.getUsuario(this.$route.params.id);
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