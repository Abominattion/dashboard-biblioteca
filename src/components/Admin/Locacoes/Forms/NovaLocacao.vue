<template>
    <div class="nova-locacao-form">

        <div class="historico-vazio" v-if="alunos.message">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <span><i class='bx bxs-info-circle'></i></span>
                    Cadastre alunos antes de criar locações!
                </div>
            </div>
        </div>

        <div class="historico-vazio" v-if="livros.message">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <span><i class='bx bxs-info-circle'></i></span>
                    Cadastre livros antes de criar locações!
                </div>
            </div>
        </div>

        <form @submit.prevent="novaLocacao()" v-else>
            <div class="form-content">

                <div class="select alunos">
                    <div class="form-group" v-if="locacao.aluno ==''">
                        <label for="nome">Nome do aluno:</label>
                        <div class="input-teste">
                            <input type="text" class="form-control" placeholder="Qual aluno irá alocar?" v-model="busca">
                            <b-spinner variant="primary" small v-if="busca.length > 0"></b-spinner>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="nome" v-if="locacao.aluno">Nome do aluno:</label>

                         <div class="load" v-if="alunos == ''">
                            <b-skeleton class="mt-2" type="input"></b-skeleton>
                        </div>

                        <select class="form-select" aria-label="Default select example" v-model="locacao.aluno" @change="alunoEscolhido(locacao.aluno)" v-else>
                            <option disabled selected value="">{{alunoPlaceholder}}</option>
                            <option v-for="aluno in filtroAlunos" :key="aluno.id" :value="aluno.id">
                                {{aluno.nome}}
                            </option>
                        </select>

                        <div class="load-items" v-if="aluno == '' && locacao.aluno">
                            <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>

                        <div v-else-if="aluno.nome">
                            <li><strong>Nome:</strong> {{aluno.nome}}</li>
                            <li><strong>Email:</strong> {{aluno.email}}</li>
                            <li><strong>CPF:</strong> {{aluno.documento | formataCPF()}}</li>
                        </div>

                        <div class="clean-select d-flex justify-content-end mt-3 gap-3" v-if="locacao.aluno && aluno.nome">
                            <button class="btn btn-danger" @click="limpaBuscaAluno()">Limpar</button>
                        </div>
                    </div>
                </div>

                <div class="select livros">
                    <div class="form-group" v-if="locacao.livro ==''">
                        <label for="nome">Nome do livro:</label>
                        <div class="input-teste">
                            <input type="text" class="form-control" placeholder="Qual aluno irá alocar?" v-model="buscaLivro">
                            <b-spinner variant="primary" small v-if="buscaLivro.length > 0"></b-spinner>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="nome" v-if="locacao.livro">Nome do livro:</label>
                        
                        <div class="load" v-if="livros == ''">
                            <b-skeleton class="mt-2" type="input"></b-skeleton>
                        </div>

                        <select class="form-select" aria-label="Default select example" v-model="locacao.livro" @change="LivroEscolhido(locacao.livro)" v-else> 
                            <option disabled selected value="">{{LivroPlaceholder}}</option>
                            <option v-for="livro in filtroLivros" :key="livro.id" :value="livro.id">
                                {{livro.titulo}}
                            </option>
                        </select>

                        <div class="load-items" v-if="livro == '' && locacao.livro">
                            <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>

                        <div v-else-if="livro.titulo">
                            <li><strong>Nome:</strong> {{livro.titulo}}</li>
                            <li><strong>Autor(a):</strong> {{livro.autor}}</li>
                            <li><strong>Situação do livro:</strong> {{livro.situacao_livro}}</li>
                        </div>

                        <div class="clean-select d-flex justify-content-end mt-3 gap-3" v-if="locacao.livro && livro.titulo">
                            <button class="btn btn-danger" @click="limpaBuscaLivro()">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="input-group justify-content-between">
                <div class="form-group">
                    <label for="nome">Data de locação</label>
                    <input type="date" class="form-control" v-model="locacao.data_locacao">
                </div>

                <div class="form-group">
                    <label for="nome">Data de devolução</label>
                    <input type="date" class="form-control" v-model="locacao.data_devolucao">
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
                alunos: [],
                alunoPlaceholder: '',
                LivroPlaceholder: '',
                livros: [],
                aluno: [],
                livro: [],
                busca: '',
                buscaLivro: '',
                locacao: {
                    aluno: '',
                    livro: '',
                    data_locacao: '',
                    data_devolucao: ''
                },
                token: this.getToken(),
                url: this.getAPIUrl()
            }
        },
        mounted() {
            this.getAlunos();
            this.getLivros();
        },
        computed: {
            filtroAlunos() {
                let valores = [];
                valores = this.alunos.filter(item => {
                    return item.nome.toLowerCase().indexOf(this.busca.toLowerCase()) > -1;
                });
                this.resultadosAlunos(valores);
                return valores
            },
            filtroLivros() {
                let valores = [];
                valores = this.livros.filter(item => {
                    return item.titulo.toLowerCase().indexOf(this.buscaLivro.toLowerCase()) > -1;
                });
                this.resultadosLivros(valores);
                return valores
            },
        },
        methods: {
            alunoEscolhido(id) {
                this.getAlunoByIDParams(id);
            },
            LivroEscolhido(id) {
                this.getLivroByIDParams(id);
            },
            limpaBuscaAluno() {
                this.busca = '';
                this.locacao.aluno = "";
                this.aluno = [];
            },
            limpaBuscaLivro() {
                this.buscaLivro = '';
                this.locacao.livro = "";
            },
            resultadosAlunos(valores) {
                if (valores.length === 1) {
                    this.alunoPlaceholder = `Foi encontrado ${valores.length} resultado`;
                } else {
                    this.alunoPlaceholder = `Foram encontrados ${valores.length} resultados`;
                }
            },
            resultadosLivros(valores) {
                if (valores.length === 1) {
                    this.LivroPlaceholder = `Foi encontrado ${valores.length} resultado`;
                } else {
                    this.LivroPlaceholder = `Foram encontrados ${valores.length} resultados`;
                }
            },
            novaLocacao() {
                const Swal = require('sweetalert2');
                const options = {
                    method: 'POST',
                    url: this.url + "/api/v1/cadastrar-locacao",
                    params: this.locacao,
                    headers: {
                        Authorization: 'Bearer  ' + this.token,
                    },
                };
                axios.request(options).then((resposta) => {
                        Swal.fire(resposta.data);
                        this.$router.push("/locacoes");
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

    .form-content {
        display: flex;
        justify-content: space-between;
    }

    .select {
        flex-basis: calc(50% - 10px);
        position: relative;
        padding: 40px 20px;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    }

    input,
    select {
        margin: 10px 0;
    }

    .input-teste {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .input-teste .spinner-border {
        position: absolute;
        right: 0;
        margin: 0 12px;
    }

    @media screen and (max-width: 1220px) {
       .form-content{
           flex-wrap: wrap;
       }
       .select {
        flex-basis: 100%;
    }
    }
</style>