<template>
    <div class="cadastrar-aluno-form">
        <form @submit.prevent="cadastrarAluno()">

            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" class="form-control" placeholder="Nome do aluno" v-model="aluno.nome" required>
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
                    <select class="form-select" v-model="aluno.sexo" required>
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
                    <the-mask type="text" class="form-control" placeholder="Telefone do aluno" v-model="aluno.telefone"
                        :mask="['(##) ####-####']" />
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
    export default ({
        data() {
            return {
                aluno: {
                    nome: "",
                    email: "",
                    documento: "",
                    sexo: "Qual o sexo do aluno?",
                    endereco: "",
                    telefone: ""
                },
                token: this.getToken(),
                url: this.getAPIUrl()
            }
        },
        methods: {
            // Função para cadastrar um aluno
            cadastrarAluno() {
                const Swal = require('sweetalert2');
                const options = {
                    method: 'POST',
                    url: this.url + "/api/v1/cadastrar-aluno",
                    params: this.aluno,
                    headers: {
                        Authorization: 'Bearer  ' + this.token,
                    },
                };
                
                switch (this.aluno.sexo) {
                    case "Qual o sexo do aluno?":
                        Swal.fire({
                            title: 'Oops...',
                            text: 'Por favor, selecione o sexo do aluno!',
                            icon: 'info',
                            confirmButtonText: 'Ok'
                        });
                        return false;
                }

                axios.request(options).then((resposta) => {
                    this.successAlert(resposta.data)
                    this.$router.push("/alunos");
                })
                .catch((error) => {
                    this.errorAlert(error)
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