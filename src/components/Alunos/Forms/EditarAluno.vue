<template>
    <div class="editar-aluno-form">
        <div class="load-skeleton" v-if="aluno == ''">
            <Skeleton />
        </div>

        <div class="form" v-else>
            <form @submit.prevent="editarAluno()">
                <div class="input-group justify-content-between">
                    <div class="form-group">
                        <label for="nome">Nome:</label>
                        <input type="text" class="form-control" placeholder="Nome do aluno" v-model="aluno.nome"
                            required>
                    </div>

                    <div class="form-group">
                        <label for="nome">Email:</label>
                        <input type="email" class="form-control" placeholder="Email do aluno" v-model="aluno.email"
                            required>
                    </div>
                </div>

                <div class="input-group justify-content-between">

                    <div class="form-group">
                        <label for="nome">Documento:</label>
                        <the-mask type="text" v-model="aluno.documento" class="form-control" :mask="['###.###.###-##']"
                            placeholder="Documento do aluno" required />
                    </div>

                    <div class="form-group">
                        <label for="nome">Sexo:</label>
                        <select class="form-select" v-model="aluno.sexo">
                            <option selected disabled>Qual o sexo do aluno?</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                    </div>
                </div>

                <div class="input-group justify-content-between">
                    <div class="form-group">
                        <label for="nome">Endereço:</label>
                        <input type="text" class="form-control" placeholder="Endereço do aluno" v-model="aluno.endereco"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="nome">Telefone:</label>
                        <the-mask type="text" class="form-control" placeholder="Telefone do aluno"
                            v-model="aluno.telefone" :mask="['(##) ####-####']" />
                    </div>
                </div>

                <div class="d-flex justify-content-end mt-3">
                    <button class="btn btn-primary">Atualizar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Skeleton from '@/components/Skeleton/SkeletonLoad.vue';
    import axios from 'axios';
    export default ({
        components: {
            Skeleton
        },
        data() {
            return {
                aluno: [],
                token: this.getToken(),
                url: this.getAPIUrl()
            }
        },
        mounted() {
            this.getAlunoByID(this.$route.params.id);
        },
        methods: {
            // Função para editar um aluno
            editarAluno() {
                const Swal = require('sweetalert2');
                const options = {
                    method: 'PUT',
                    url: this.url + "/api/v1/editar-aluno/" + this.aluno.id,
                    data: this.aluno,
                    headers: {
                        Authorization: 'Bearer  ' + this.token,
                    },
                };
                axios.request(options)
                    .then((resposta) => {
                        Swal.fire(resposta.data);
                    })
                    .catch((error) => {
                        Swal.fire(error.response.data);
                    })
            },
        }
    })
</script>

<style scoped>
    .form-group {
        flex-basis: calc(50% - 10px);
    }

    label {
        color: #555555;
        font-weight: bold;
    }

    input,
    select {
        margin: 10px 0;
        height: 50px;
    }

    button {
        height: 50px;
    }

    @media screen and (max-width: 1400px) {

        input,
        select {
            height: 40px;
        }

        button {
            height: 40px;
        }
    }
</style>