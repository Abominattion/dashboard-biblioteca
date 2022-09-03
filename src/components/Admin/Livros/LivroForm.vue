<template>
    <section class="editar-aluno">
        <div class="section-header">
            <div class="breadcrumb">
                <h1 v-if="!$route.params.id"><i class='bx bxs-user'></i>Cadastrar Livro</h1>
                <h1 v-else><i class='bx bxs-user'></i>Editar Livro</h1>
                <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
            </div>
        </div>

        <div class="main aluno-form">
            <!-- ==== CADASTRAR LIVRO ==== -->
            <div class="cadastrar-livro" v-if="!$route.params.id">
                <CadastrarLivroForm />
            </div>

            <!-- ==== EDITAR LIVRO ==== -->
            <div class="editar-livro" v-else>
                <EditarLivroForm />
            </div>

        </div>

        <!-- ==== HISTORICO LIVRO ==== -->
        <div class="main historico-do-livro" v-if="$route.params.id">
            <HistoricoLivro />
        </div>

        <!-- ==== DELETAR LIVRO ==== -->
        <div class="main danger-zone" v-if="$route.params.id">
            <DeletarLivroForm />
        </div>

    </section>
</template>

<script>
    import CadastrarLivroForm from '@/components/Admin/Livros/Forms/CadastrarLivro.vue'
    import EditarLivroForm from '@/components/Admin/Livros/Forms/EditarLivro.vue'
    import HistoricoLivro from '@/components/Admin/Livros/Forms/HistoricoLivro.vue'
    import DeletarLivroForm from '@/components/Admin/Livros/Forms/DeletarLivro.vue'
    export default {
        components: {
            CadastrarLivroForm,
            EditarLivroForm,
            HistoricoLivro,
            DeletarLivroForm
        },
        mounted() {
            this.getCategorias();
        },
    }
</script>

<style scoped>
    .form-group {
        flex-basis: calc(50% - 10px);
    }

    input,
    select {
        margin: 10px 0;
    }
</style>