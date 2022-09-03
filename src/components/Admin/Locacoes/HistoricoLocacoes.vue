<template>
    <section class="livros">
        <div class="container">
            <div class="section-header">
                <div class="breadcrumb">
                <h1><i class='bx bxs-share-alt'></i>Histórico de locações</h1>
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
                    <router-link to="/locacoes" class="btn btn-primary">Voltar</router-link>
                </div>

                <div class="locacao" >
                     <TabelaHistoricoLocacoes :dadosBusca="busca" :filtros="filtro" />                   
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TabelaHistoricoLocacoes from '@/components/Admin/Locacoes/Tabelas/TabelaHistoricoLocacoes.vue';
    export default {
        components: {
            TabelaHistoricoLocacoes
        },
        data() {
            return {
                busca: '',
                filtro: 'Filtro',
                historicoLocacoes: '/locacoes/historico-de-locacoes/'
            }
        }
    }
</script>

<style scoped>
    .form-select {
        max-width: 100px !important;
    }
</style>