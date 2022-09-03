<template>
    <div class="tabela-historico-aluno">
        <h2>Histórico do aluno</h2>
        <p>Veja os livros que que este aluno alocou:</p>

        <div class="historico-vazio" v-if="historico.message">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <span><i class="bx bxs-info-circle"></i></span>
                    Este aluno ainda não alocou nenhum livro!
                </div>
            </div>
        </div>

        <div v-else-if="historico == ''">
            <b-skeleton-table :rows="5" :columns="4" :table-props="{ bordered: true, striped: true }">
            </b-skeleton-table>
        </div>

        <div class="historico" v-else>
            <b-table id="historicoTable" striped hover :items="historico" :fields="fields" :per-page="perPage"
                :current-page="currentPage">
                <template v-slot:cell(data_locacao)="{ item }">
                    <td>{{ item.data_locacao | formatarData() }}</td>
                </template>
                <template v-slot:cell(data_devolucao)="{ item }">
                    <td>{{ item.data_devolucao | formatarData() }}</td>
                </template>
            </b-table>

            <div class="d-flex justify-content-center">
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                    aria-controls="historicoTable">
                </b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getHistoricoAluno(this.$route.params.id);
        },
        data() {
            return {
                historico: [],
                fields: [
                    {
                        key: "aluno.nome",
                        label: "Aluno",
                    },
                    {
                        key: "livro.titulo",
                        label: "Livro",
                    },
                    {
                        key: "data_locacao",
                        label: "Data da Locação",
                    },
                    {
                        key: "data_devolucao",
                        label: "Data da Devolução",
                    },
                    {
                        key: "situacao_livro",
                        label: "Situação do livro",
                    },
                ],
                perPage: 5,
                currentPage: 1,
                token: this.getToken(),
                url: this.getAPIUrl()
            }
        },
        computed: {
            rows() {
                return this.historico.length;
            },
        },
    };
</script>