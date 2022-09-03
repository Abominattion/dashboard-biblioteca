<template>
    <div class="categorias">
        <Sidebar />
        <CategoriasHome />
    </div>
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import CategoriasHome from '@/components/Admin/Categorias/CategoriasHome.vue'
export default {
    components: {
        Sidebar, CategoriasHome
    }
}
</script>