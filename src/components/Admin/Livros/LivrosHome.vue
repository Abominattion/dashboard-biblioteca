<template>
    <section class="livros">
        <div class="section-header">
            <div class="breadcrumb">
                <h1><i class='bx bxs-book-alt'></i>Livros</h1>
                <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
            </div>

            <div class="search">
                <input type="text" class="form-control" placeholder="Pesquisar por livro" v-model="busca">

                <select class="form-select bg-primary text-white" v-model="filtro">
                    <option class="bg-white text-dark p-5" value="Filtro" selected disabled>Filtro</option>
                    <option class="bg-white text-dark" value="Titulo">Titulo</option>
                    <option class="bg-white text-dark" value="Autor">Autor</option>
                    <option class="bg-white text-dark" value="Editora">Editora</option>
                </select>
            </div>
        </div>


        <div class="main livros-content">
            <div class="d-flex justify-content-end mb-3">
                <router-link to="/livros/cadastrar-livro" class="btn btn-primary">Cadastrar Livro</router-link>
            </div>

            <div class="tabela-livros-home">
                <LivrosTabela :dadosBusca="busca" :filtros="filtro" />
            </div>
        </div>
    </section>
</template>

<script>
    import LivrosTabela from '@/components/Admin/Livros/Tabelas/LivroTabela.vue';
    export default {
        components: {
            LivrosTabela
        },
        data() {
            return {
                livros: [],
                busca: '',
                filtro: 'Filtro'
            }
        },
    }
</script>

<style scoped>
    .form-select {
        max-width: 100px !important;
    }
</style>