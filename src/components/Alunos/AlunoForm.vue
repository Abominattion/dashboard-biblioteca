<template>
    <section class="editar-aluno">
        <div class="section-header">
            <div class="breadcrumb">
                <h1 v-if="!$route.params.id"><i class='bx bxs-user'></i>Cadastrar Aluno</h1>
                <h1 v-else><i class='bx bxs-user'></i>Editar Aluno</h1>
                <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
            </div>
        </div>

        <div class="main aluno-form">
            <!-- ==== CADASTRAR ALUNO ==== -->
            <div class="cadastrar-aluno" v-if="!$route.params.id">
                <CadastrarALunoForm />
            </div>

            <!-- ==== EDITAR ALUNO ==== -->
            <div class="editar-aluno" v-else>
                <EditarALunoForm />
            </div>
        </div>

        <!-- ==== HISTORICO ALUNO ==== -->
        <div class="main historico-aluno" v-if="$route.params.id">
            <HistoricoAluno />
        </div>

        <!-- ==== DELETAR ALUNO ==== -->
        <div class="main danger-zone" v-if="$route.params.id">
            <DeletarAluno />
        </div>

    </section>
</template>

<script>
    import CadastrarALunoForm from '@/components/Alunos/Forms/CadastrarAluno.vue'
    import EditarALunoForm from '@/components/Alunos/Forms/EditarAluno.vue'
    import DeletarAluno from '@/components/Alunos/Forms/DeletarAluno.vue'
    import HistoricoAluno from '@/components/Alunos/Forms/HistoricoAluno.vue'
    export default {
        components: {
            CadastrarALunoForm,
            EditarALunoForm,
            DeletarAluno,
            HistoricoAluno
        },
    }
</script>

<style scoped>
    span i {
        font-size: 2em;
        padding: 1rem;
        height: 100%;
        vertical-align: middle;
    }

    .alert {
        display: flex;
        align-items: center;
    }
</style>