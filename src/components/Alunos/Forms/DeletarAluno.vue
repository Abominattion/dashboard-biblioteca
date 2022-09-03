<template>
    <div class="deletar-aluno">
        <h2>Zona de Perigo</h2>
        <p>Ação irreversível</p>
        <button class="btn btn-danger" @click="excluirAluno($route.params.id)">Excluir cadastro do aluno</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default ({
        data() {
            return {
                token: this.getToken(),
                url: this.getAPIUrl()
            }
        },
        methods: {
            // Função para excluir um aluno
            excluirAluno(id) {
                const Swal = require('sweetalert2')
                Swal.fire({
                    title: 'Tem certeza?',
                    text: "Você não será capaz de reverter isso!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sim, exclua!',
                    cancelButtonText: 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        const options = {
                            method: 'POST',
                            url: this.url + "/api/v1/excluir-aluno/" + id,
                            headers: {
                                Authorization: 'Bearer  ' + this.token,
                            },
                        };
                        axios.request(options).then((resposta) => {
                                this.successAlert(resposta.data)
                                this.$router.push("/alunos");
                            })
                            .catch((error) => {
                                this.errorAlert(error)
                            })
                    }
                })
            },
        }
    })
</script>