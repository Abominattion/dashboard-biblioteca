<template>
    <div class="categorias">
        <Sidebar />
        <AlunoForm />
    </div>
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import AlunoForm from '@/components/Alunos/AlunoForm.vue'
export default {
    components: {
        Sidebar, AlunoForm
    }
}
</script>