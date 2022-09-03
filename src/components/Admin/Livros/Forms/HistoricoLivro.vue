<template>
    <div class="historico-livro">
        <h2>Histórico do livro</h2>
        <p>Veja quem locou esse livro</p>

        <div class="historico-vazio" v-if="historico.message">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <span><i class="bx bxs-info-circle"></i></span>
                    Este livro ainda não foi alocado!
                </div>
            </div>
        </div>

        <div v-else-if="historico == ''">
            <b-skeleton-table :rows="5" :columns="4" :table-props="{ bordered: true, striped: true }">
            </b-skeleton-table>
        </div>

        <div class="tabela" v-else>
            <b-table id="historicoTable" striped hover :items="historico" :fields="fields" :per-page="perPage"
                :current-page="currentPage">
                <template v-slot:cell(data_locacao)="{ item }">
                    <td>{{ item.data_locacao |  formatarData()}}</td>
                </template>
                <template v-slot:cell(data_devolucao)="{ item }">
                    <td>{{ item.data_devolucao |  formatarData()}}</td>
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
        data() {
            return {
                historico: [],
                fields: [{
                        key: 'aluno.nome',
                        label: 'Aluno'
                    },
                    {
                        key: 'livro.titulo',
                        label: 'Livro'
                    },
                    {
                        key: 'data_locacao',
                        label: 'Data de locação'
                    },
                    {
                        key: 'data_devolucao',
                        label: 'Data de devolução'
                    },
                    {
                        key: 'situacao_livro',
                        label: 'Situação do livro'
                    },
                ],
                perPage: 5,
                currentPage: 1,
            }
        },
        mounted() {
            this.getHistoricoLivro(this.$route.params.id);
        },
        computed: {
            rows() {
                return this.historico.length;
            },
        },
    }
</script>