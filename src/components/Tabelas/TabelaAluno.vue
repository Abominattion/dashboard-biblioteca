<template>
    <div class="tabela-alunos">
        <div class="alunos-vazio" v-if="alunos.message">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <span><i class='bx bxs-info-circle'></i></span>
                    {{ alunos.message }}
                </div>
            </div>
        </div>

        <div class="tabela" v-else>
            <b-table id="userTable" 
                head-variant="dark" 
                striped hover 
                :items="alunos.data" 
                :fields="fields" 
                :per-page="alunos.per_page"
                :current-page="alunos.currentPage"
            >
                <template v-slot:cell(acoes)="{ item }">
                    <span>
                        <button @click="editarAluno(item.id)" class="btn btn-secondary">Editar</button>
                    </span>
                </template>

                <template v-slot:cell(documento)="{ item }">
                    <td>{{item.documento | formataCPF()}}</td>
                </template>
            </b-table>

            <div class="d-flex justify-content-center">
                <!-- <b-pagination 
                    v-model="currentPage" 
                    :total-rows="alunos.total" 
                    :per-page="alunos.per_page" 
                    aria-controls="userTable">
                </b-pagination> -->
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        watch: {
            currentPage(newValue, oldValue) {
                if (newValue !== oldValue) {
                    this.paginacao(this.currentPage);
                }    
            }
        },
        props:{
            alunos: {Type: Array, Default: []},
            dadosBusca: String,
            filtros: String
        },
        data() {
            return {
                fields: [
                    {
                        key: 'nome',
                        label: 'Nome',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'email',
                        label: 'Email',
                        sortable: false,
                        width: '20%'
                    },
                    {
                        key: 'documento',
                        label: 'Documento',
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
                perPage: 1,
                currentPage: 1,
                editAluno: "/alunos/editar-aluno/",
            }
        },
        methods: {
            editarAluno(id) {
                this.$emit('editarAluno', id)
            },
            paginacao(currentPage){
                this.getAlunos(currentPage);
                this.$emit('paginacao');
            }
        },
        computed: {
            filtroAlunos() {
                let valores = [];
                valores = this.alunos.filter(item => {
                    return item.nome.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                });

                if (this.filtros == 'Filtro' && this.filtro == 'Nome') {
                    valores = this.alunos.filter(item => {
                        return item.nome.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                } else if (this.filtros == 'Email') {
                    valores = this.alunos.filter(item => {
                        return item.email.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                } else if (this.filtros == 'Documento') {
                    valores = this.alunos.filter(item => {
                        return item.documento.toLowerCase().indexOf(this.dadosBusca.toLowerCase()) > -1;
                    });
                }

                return valores
            },
            rows() {
                return this.alunos.length
            },
            
        }  
    }
</script>
