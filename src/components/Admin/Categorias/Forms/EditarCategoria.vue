<template>
    <div class="editar-categoria-form">
        <form @submit.prevent="editarCategoria()">
            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Título</label>
                    <b-skeleton type="input" class="form-control mt-2" v-if="categoria == ''"></b-skeleton>
                    <input type="text" class="form-control" placeholder="Título" v-model="categoria.titulo" v-else required>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-primary">Atualizar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                categoria: [],
                token: this.getToken(),
                url: this.getAPIUrl()
            }
        },
        mounted() {
            this.getCategoriaByID(this.$route.params.id);
        },
        methods: {
            editarCategoria() {
                const Swal = require('sweetalert2');
                const options = {
                    method: 'PUT',
                    url: this.url + "/api/v1/editar-categoria/" + this.$route.params.id,
                    data: this.categoria,
                    headers: {
                        Authorization: 'Bearer  ' + this.token,
                    },
                };
                
                axios.request(options).then(resposta => {
                    Swal.fire(resposta.data);
                    this.$router.push('/categorias');
                }).catch(error => {
                    Swal.fire(error.response.data);
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