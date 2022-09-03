<template>
    <div class="tabela-locacoes">
        <div class="historico-vazio" v-if="locacoes.message">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <span><i class='bx bxs-info-circle'></i></span>
                    Não existem locações ativas no momento!
                </div>
            </div>
        </div>

        <div v-else-if="locacoes == ''">
            <b-skeleton-table :rows="5" :columns="4" :table-props="{ bordered: true, striped: true }">
            </b-skeleton-table>
        </div>

        <div class="tabela" v-else>
            <h2 v-if="!$route.params.id">Locações ativas</h2>
            <h2 v-else>Locações inativas</h2>

            <b-table id="userTable" striped hover :items="filtroLocacoes" :fields="fields" :per-page="perPage"
                :current-page="currentPage">
                <template v-slot:cell(data_locacao)="{ item }">
                    <td>{{ item.data_locacao |  formatarData()}}</td>
                </template>

                <template v-slot:cell(data_devolucao)="{ item }">
                    <td>{{ item.data_devolucao |  formatarData()}}</td>
                </template>

                <template v-slot:cell(status)="{ item }">
                    <td v-if="item.devolucao_atradasa > item.data_devolucao">
                        <span class="badge bg-danger">Atrasada</span>
                    </td>
                    <td v-else>
                        <span class="badge bg-success">Em dia</span>
                    </td>
                </template>
            </b-table>

            <div class="d-flex justify-content-center">
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                    aria-controls="categoriasTable">
                </b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                locacoes: [],
                fields: [{
                        key: 'aluno.nome',
                        label: 'Nome',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'livro.titulo',
                        label: 'Livro',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'data_locacao',
                        label: 'Data da locação',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'data_devolucao',
                        label: 'Data de devolução',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'situacao_livro',
                        label: 'Condição do Livro',
                    },
                    {
                        key: 'status',
                        label: 'Devolução',
                    },
                ],
                dataAtual: '',
                busca: '',
                filtro: 'Filtro',
                perPage: 5,
                currentPage: 1,
            }
        },
        props: {
            dadosBusca: String,
            filtros: String,
        },
        created() {
            this.getLocacoesInativas();
        },
        computed: {
            filtroLocacoes() {
                function formatarData(date) {
                    let format = date.slice(0, 19).replace("T", " ");
                    format = format.substr(0, 10).split("-").reverse().join("/");
                    return format;
                }
                let valores = [];

                valores = this.locacoes.filter(item => {
                    return item.aluno.nome.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                });

                if (this.filtros == 'Filtro' && this.filtro == 'Aluno') {
                    valores = this.locacoes.filter(item => {
                        return item.aluno.nome.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                } else if (this.filtros == 'Livro') {
                    valores = this.locacoes.filter(item => {
                        return item.livro.titulo.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                } else if (this.filtros == 'Data') {
                    valores = this.locacoes.filter(item => {
                        let data = formatarData(item.data_locacao);
                        return data.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                }
                return valores;
            },
            rows() {
                return this.locacoes.length;
            },
        },
    }
</script>