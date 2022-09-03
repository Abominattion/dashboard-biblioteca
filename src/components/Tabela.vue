<template>
    <main>
        <div class="carregar" v-if="carregar">
            <skeleton-tabela />
        </div>

        <div class="alerta" v-else-if="alertaAtivo">
            <alerta-simples :alerta="alerta" />
        </div>

        <div class="tabela" v-else>
            <b-table 
                striped 
                hover
                responsive
                :items="items"
                :per-page="perPage"
                id="defaultTable">

                <template v-slot:cell(ações)="{ item }">
                    <span>
                        <button @click="acaoTabela(item.id)" class="btn btn-secondary">Editar</button>
                    </span>
                </template>
            </b-table>

            <b-pagination 
                align="center"
                v-model="currentPage"
                :total-rows="rows" 
                :per-page="perPage"
                aria-controls="defaultTable">
            </b-pagination>
        </div>
    </main>
</template>

<script>
    import axios from 'axios';
    import SkeletonTabela from '@/components/Admin/Skeleton/SkeletonTabela.vue';
    import AlertaSimples from '@/components/AlertaSimples.vue';
    export default {
        components: {
            SkeletonTabela, AlertaSimples
        },
        props:{
            view: {Type: String, Default: 'default'},
            opcoes: {Type: Array, Default: []},
            dadosBusca: String,
            filtro: String
        },
        data() {
            return {
                items: [],
                perPage: 15,
                currentPage: 1,
                total: 0,
                url: '', 
                urlBusca: '',
                carregar: false,
                alertaAtivo: false,
                alerta:{
                    mensagem: '',
                    tipo: ''
                },
                setTimeout: null
            }
        },
        created() {
            switch (this.view) {
                case 'alunos':
                    this.getAlunos();
                    this.url = this.getAPIUrl() + "/api/v1/alunos?page=";
                    this.urlBusca = this.getAPIUrl() + "/api/v1/buscar-aluno/";
                    break;
            }
        },
        methods: {
            acaoTabela(id) {
                switch (this.view) {
                    case 'alunos':
                        this.$emit('editarAluno', id);
                        break;
                }
            },
            paginacao(currentPage) {
                this.carregar = true;
                const options = {
                    method: 'GET',
                    url: this.url + currentPage,
                    headers: {Authorization: 'Bearer  ' + this.getToken()}
                };

                axios.request(options)
                .then((response) => {
                    this.items = response.data.data;
                    this.carregar = false;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            busca(filtro, busca) {
                this.carregar = true;
                this.alertaAtivo = false;
                clearTimeout(this.setTimeout);
                const options = {
                    method: 'GET',
                    url: this.urlBusca + filtro + "/" + busca,
                    headers: {Authorization: 'Bearer  ' + this.getToken()}
                };

                this.setTimeout = setTimeout(() => {
                    axios.request(options)
                    .then((response) => {
                        if (response.data.data) {
                            this.items = response.data.data;
                            this.total = response.data.total;
                            this.carregar = false;
                        } else {
                            this.carregar = false;
                            this.alertaAtivo = true;
                            this.alerta.mensagem = 'Nenhum aluno encontrado com o filtro informado! Por favor tente novamente.';
                            this.alerta.tipo = 'warning';
                        }
                    })
                }, 1500); 
            }
        },
        computed:{
            rows(){
                return this.total;
            }
        },
        watch: {
            dadosBusca(newValue, oldValue) {
                if (newValue == '') {
                    this.alertaAtivo = false;
                    switch (this.view) {
                        case 'alunos':
                            this.getAlunos();
                            break;
                        }
                    } 
                    
                if (newValue != oldValue) {
                    this.busca(this.filtro, newValue);
                }
            },
            currentPage(newValue, oldValue) {
                if(newValue != oldValue) {
                    this.paginacao(newValue);
                }
            },
            items() {
                this.items.forEach(element => {
                    switch (this.view) {
                        case 'alunos':
                            element.documento = this.$options.filters.formataCPF(element.documento);
                            break;
                    } 

                    element.ações = '';
                });
            }
        }
    }
</script>