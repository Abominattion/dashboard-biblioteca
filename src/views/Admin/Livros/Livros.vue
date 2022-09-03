<template>
    <div class="livros">
        <Sidebar />
         <LivrosHome />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import LivrosHome from '@/components/Admin/Livros/LivrosHome.vue'
export default {
    components: {
        Sidebar, LivrosHome
    }
}
</script>