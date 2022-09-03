<template>
    <section class="alunos">
        <section-header 
            TitleView="Alunos"
            :search="true"
            @buscar="buscar"
            @filtrar="filtrar" />

        <div class="main alunos-table">
            <div class="d-flex justify-content-end mb-3">
                <router-link to="/alunos/cadastrar-aluno" class="btn btn-primary">Cadastrar Aluno</router-link>
            </div>

            <div class="tabela-alunos">
                <tabela
                    view="alunos"
                    :dadosBusca="busca" 
                    :filtro="filtro" 
                    @editarAluno="editarAluno" />
            </div>
        </div>
    </section>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';
    import Tabela from '@/components/Tabela.vue';
    export default {
        components: {
            SectionHeader,
            Tabela
        },
        data() {
            return {
                alunos: [],
                total: null,
                busca: '',
                filtro: '',
            }
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
        }
    }
</script>