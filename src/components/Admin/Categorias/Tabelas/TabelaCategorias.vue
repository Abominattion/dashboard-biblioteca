<template>
    <div class="categoria-tabela">
        <div class="categorias-vazio" v-if="categorias.message">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <span><i class='bx bxs-info-circle'></i></span>
                    {{ categorias.message }}
                </div>
            </div>
        </div>

        <div v-else-if="categorias == ''">
            <b-skeleton-table :rows="5" :columns="4" :table-props="{ bordered: true, striped: true }">
            </b-skeleton-table>
        </div>

        <div class="tabela">
            <b-table id="userTable" striped hover :items="filtroCategorias" :fields="fields" :per-page="perPage"
                :current-page="currentPage">
                <template v-slot:cell(acoes)="{ item }">
                    <span>
                        <router-link :to="editCategoria + item.id" class="btn btn-secondary">Editar</router-link>
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
                categorias: [],
                fields: [{
                        key: 'titulo',
                        label: 'Nome',
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
                editCategoria: "/categorias/editar-categoria/"
            }
        },
        mounted() {
            this.getCategorias()
        },
        props: {
            dadosBusca: String
        },
        computed: {
            filtroCategorias() {
                let valores = [];
                valores = this.categorias.filter(item => {
                    return item.titulo.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                });
                return valores
            },
            rows() {
                return this.categorias.length
            }
        }
    }
</script>