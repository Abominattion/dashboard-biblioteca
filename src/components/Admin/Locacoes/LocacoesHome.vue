<template>
    <section class="livros">
        <div class="section-header">
            <div class="breadcrumb">
                <h1><i class='bx bxs-share-alt'></i>Locações</h1>
                <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
            </div>

            <div class="search">
                <input type="text" class="form-control" placeholder="Pesquisar uma locação" v-model="busca">

                <select class="form-select bg-primary text-white" v-model="filtro">
                    <option class="bg-white text-dark p-5" value="Filtro" selected disabled>Filtro</option>
                    <option class="bg-white text-dark" value="Aluno">Aluno</option>
                    <option class="bg-white text-dark" value="Livro">Livro</option>
                    <option class="bg-white text-dark" value="Data">Data</option>
                </select>
            </div>
        </div>

        <div class="main locacao-content">
            <div class="d-flex justify-content-end mb-3">
                <router-link to="/locacoes/nova-locacao" class="btn btn-primary">Nova locação</router-link>
            </div>
            <div class="d-flex justify-content-end mb-3">
                <router-link to="/locacoes/historico-de-locacoes" class="btn btn-primary">Ver histórico de Locações
                </router-link>
            </div>

            <div class="locacao">
                <TabelaLocacoes :dadosBusca="busca" :filtros="filtro" />
            </div>
        </div>
    </section>
</template>

<script>
    import TabelaLocacoes from '@/components/Admin/Locacoes/Tabelas/TabelaLocacoes.vue';
    export default {
        components: {
            TabelaLocacoes
        },
        data() {
            return {
                busca: '',
                filtro: 'Filtro',
            }
        }
    }
</script>

<style scoped>
    .form-select {
        max-width: 100px !important;
    }
</style>