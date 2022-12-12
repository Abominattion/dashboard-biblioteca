<template>
    <div class="alunos">
        <section-header 
            TitleView="Alunos"
            :search="true"
            @buscar="buscar"
            @filtrar="filtrar"
        />

        <div class="main alunos-table">
            <div class="d-flex justify-content-end mb-3">
                <router-link to="/alunos/cadastrar-aluno" class="btn btn-primary">Cadastrar Aluno</router-link>
            </div>

            <div class="tabela-alunos">
                <b-pagination 
                    align="center"
                    v-model="currentPage" 
                    :total-rows="alunos.total" 
                    :per-page="alunos.per_page" 
                    aria-controls="userTable"
                />
                <skeleton-tabela v-if="alunos.length === 0 || carregar"/>
                <tabela-aluno v-else
                    :alunos="alunos"
                    :dadosBusca="busca" 
                    :filtro="filtro"
                    @editarAluno="editarAluno"
                    @paginacao="paginacao"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';
    import TabelaAluno from '@/components/Tabelas/TabelaAluno.vue';
    import SkeletonTabela from '@/components/Admin/Skeleton/SkeletonTabela';

    export default {
        components: {
            SectionHeader,
            TabelaAluno,
            SkeletonTabela
        },
        data() {
            return {
                carregar: false,
                alunos: [],
                total: null,
                busca: '',
                filtro: '',
                currentPage: 1
            }
        },
        created() {
            this.getAlunos();
        },
        methods: {
            editarAluno(id) {
                this.$router.push(`/alunos/editar-aluno/${id}`);
            },
            buscar(buscar) {
                this.busca = buscar;
            },
            filtrar(filtro) {
                this.filtro = filtro;
            }
        },
        watch: {
            currentPage(newValue, oldValue) {
                if (newValue !== oldValue) {
                    this.getAlunos(this.currentPage);
                    this.carregar = true;
                }    
            }
        },
    }
</script>