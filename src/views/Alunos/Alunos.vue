<template>
    <div class="categorias">
        <Sidebar />
        <AlunosHome />
    </div>
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import AlunosHome from '@/components/Alunos/AlunosHome.vue'
export default {
    components: {
        Sidebar, AlunosHome
    }
}
</script>