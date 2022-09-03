<template>
    <section class="livros">
        <div class="section-header">
            <div class="breadcrumb">
                <h1><i class='bx bxs-user-circle'></i>Usuários</h1>
                <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
            </div>

            <div class="search">
                <input type="text" class="form-control" placeholder="Pesquisar um usuário" v-model="busca">

                <select class="form-select bg-primary text-white" v-model="filtro">
                    <option class="bg-white text-dark p-5" value="Filtro" selected disabled>Filtro</option>
                    <option class="bg-white text-dark" value="Nome">Nome</option>
                    <option class="bg-white text-dark" value="Email">Email</option>
                </select>
            </div>
        </div>

        <div class="load-items" v-if="usuarios == ''">
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div class="main usuarios-content" v-else>
            <div class="d-flex justify-content-end mb-3">
                <router-link to="/usuarios/cadastrar-usuario" class="btn btn-primary">Cadastrar Usuário</router-link>
            </div>

            <TabelaUsuarios :dadosBusca="busca" :filtros="filtro" />
        </div>
    </section>
</template>

<script>
    import TabelaUsuarios from '../../../components/Admin/Usuarios/Tabelas/TabelaUsuarios.vue'
    export default {
        components: {
            TabelaUsuarios
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