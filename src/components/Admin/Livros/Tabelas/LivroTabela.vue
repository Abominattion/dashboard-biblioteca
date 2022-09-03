<template>
    <div class="tabela-livros">
        <div class="alunos-vazio" v-if="livros.message">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <span><i class='bx bxs-info-circle'></i></span>
                    {{ livros.message }}
                </div>
            </div>
        </div>

        <div v-else-if="livros == ''">
            <b-skeleton-table :rows="5" :columns="4" :table-props="{ bordered: true, striped: true }">
            </b-skeleton-table>
        </div>

        <div class="tabela" v-else>
            <b-table id="userTable" striped hover :items="filtroLivros" :fields="fields" :per-page="perPage"
                :current-page="currentPage">
                <template v-slot:cell(acoes)="{ item }">
                    <span>
                        <router-link :to="editarLivro + item.id" class="btn btn-secondary">Editar</router-link>
                    </span>
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
                livros: [],
                fields: [{
                        key: 'titulo',
                        label: 'Título',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'categoria.titulo',
                        label: 'Categoria',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'autor',
                        label: 'Autor',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'editora',
                        label: 'Editora',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'acoes',
                        label: 'Ações',
                        sortable: false,
                        width: '20%'
                    }
                ],
                perPage: 5,
                currentPage: 1,
                editarLivro: '/livros/editar-livro/',
            }
        },
        mounted() {
            this.getLivros();
        },
        props: {
            dadosBusca: String,
            filtros: String,
        },
        computed: {
            filtroLivros() {
                let valores = [];
                valores = this.livros.filter(item => {
                    return item.titulo.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                });

                if (this.filtros == 'Filtro' && this.filtro == 'Titulo') {
                    valores = this.livros.filter(item => {
                        return item.titulo.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                } else if (this.filtros == 'Autor') {
                    valores = this.livros.filter(item => {
                        return item.autor.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                } else if (this.filtros == 'Editora') {
                    valores = this.livros.filter(item => {
                        return item.editora.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                }
                return valores;
            },
            rows() {
                return this.filtroLivros.length;
            },
        }
    }
</script>