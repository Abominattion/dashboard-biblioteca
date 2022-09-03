<template>
    <section class="editar-aluno">
        <div class="section-header">
            <div class="breadcrumb">
                <h1 v-if="!$route.params.id"><i class='bx bxs-share-alt'></i>Nova Locação</h1>
                <h1 v-else><i class='bx bxs-share-alt'></i>Encerrar Locação</h1>
                <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
            </div>
        </div>

        <div class="main locacao-form">
            <!-- ==== NOVA LOCAÇÃO ==== -->
            <div class="nova-locacao" v-if="!$route.params.id">
                <NovaLocacaoForm />
            </div>

            <!-- ==== ENCERRAR LOCAÇÃO ==== -->
             <div class="encerrar-locacao">
                <EncerrarLocacaoForm />  
            </div>               

        </div>
    </section>
</template>

<script>
    import NovaLocacaoForm from '@/components/Admin/Locacoes/Forms/NovaLocacao.vue'
    import EncerrarLocacaoForm from '@/components/Admin/Locacoes/Forms/EncerrarLocacao.vue'
    export default {
        components:{NovaLocacaoForm, EncerrarLocacaoForm},
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