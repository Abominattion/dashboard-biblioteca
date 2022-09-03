<template>
    <section class="editar-aluno">
        <div class="section-header">
            <div class="breadcrumb">
                <h1 v-if="!$route.params.id"><i class='bx bxs-user-circle'></i>Cadastrar Usuário</h1>
                <h1 v-else><i class='bx bxs-user-circle'></i>Editar Usuário</h1>
                <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
            </div>
        </div>

        <div class="load-items" v-if="usuario == ''">
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div class="aluno-form" v-else>
            <!-- ==== CADASTRAR USUARIO ==== -->
            <div class="main cadastrar-usuario" v-if="!$route.params.id">
                <CadastrarUsuarioForm />
            </div>

            <!-- ==== EDITAR USUARIO ==== -->
            <div class="main editar-usuario" v-else>
                <EditarUsuarioForm />
            </div>
        </div>

        <!-- ==== DELETAR USUARIO ==== -->
        <div class="main danger-zone" v-if="$route.params.id">
            <DeletarUsuarioForm />
        </div>

    </section>
</template>

<script>
    import CadastrarUsuarioForm from '@/components/Admin/Usuarios/Forms/CadastrarUsuario.vue'
    import EditarUsuarioForm from '@/components/Admin/Usuarios/Forms/EditarUsuario.vue'
    import DeletarUsuarioForm from '@/components/Admin/Usuarios/Forms/DeletarUsuario.vue'
    export default {
        components: {
            CadastrarUsuarioForm,
            EditarUsuarioForm,
            DeletarUsuarioForm
        },
    }
</script>