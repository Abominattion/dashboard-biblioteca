<template>
    <div class="tabelas-usuarios">

        <div v-if="usuarios == ''">
            <b-skeleton-table :rows="5" :columns="4" :table-props="{ bordered: true, striped: true }">
            </b-skeleton-table>
        </div>

        <div class="tabela" v-else>
            <b-table id="userTable" striped hover :items="filtroUsuarios" :fields="fields" :per-page="perPage"
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
                usuarios: [],
                fields: [
                    {
                        key: 'id',
                        label: 'ID',
                        sortable: false
                    },
                    {
                        key: 'nome',
                        label: 'Nome',
                        sortable: false
                    },
                    {
                        key: 'email',
                        label: 'Email',
                        sortable: false
                    },
                    {
                        key: 'acoes',
                        label: 'Ações',
                        sortable: false
                    }
                ],
                busca: '',
                filtro: 'Filtro',
                perPage: 5,
                currentPage: 1,
                editarLivro: '/usuarios/editar-usuario/',
            }
        },
        props: {
            dadosBusca: String,
            filtros: String,
        },
        mounted() {
            this.getUsuarios();
        },
        computed: {
            filtroUsuarios() {
                let valores = [];

                valores = this.usuarios.filter(item => {
                    return item.nome.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                });

                if (this.filtros == 'Filtro' && this.filtro == 'Nome') {
                    valores = this.usuarios.filter(item => {
                        return item.nome.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                } else if (this.filtros == 'Email') {
                    valores = this.usuarios.filter(item => {
                        return item.email.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                }
                return valores;
            },
            rows() {
                return this.usuarios.length;
            },
        }
    }
</script>