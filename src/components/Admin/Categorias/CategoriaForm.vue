<template>
    <section class="editar-aluno">
        <div class="section-header">
            <div class="breadcrumb">
                <h1 v-if="!$route.params.id"><i class='bx bxs-user'></i>Cadastrar Categoria</h1>
                <h1 v-else><i class='bx bxs-user'></i>Editar Categoria</h1>
                <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
            </div>
        </div>

        <div class="main categoria-form" >
            <!-- ==== CADASTRAR CATEGORIA ==== -->
            <div class="cadastrar-categoria" v-if="!$route.params.id">
                <CadastrarCategoriaForm /> 
            </div> 

            <!-- ==== EDITAR CATEGORIA ==== -->
            <div class="editar-categoria" v-else>
                <EditarCategoriaForm />
            </div>
        </div>

        <div class="main danger-zone" v-if="$route.params.id">
            <DeletarCategoria />
        </div>

    </section>
</template>

<script>
    import CadastrarCategoriaForm from '@/components/Admin/Categorias/Forms/CadastrarCategoria.vue';
    import EditarCategoriaForm from '@/components/Admin/Categorias/Forms/EditarCategoria.vue';
    import DeletarCategoria from '@/components/Admin/Categorias/Forms/DeletarCategoria.vue';
    export default {
        components:{CadastrarCategoriaForm, EditarCategoriaForm, DeletarCategoria},
    }
</script>