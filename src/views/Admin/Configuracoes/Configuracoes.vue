<template>
    <div class="livros">
        <Sidebar />
         <ConfiguracoesHome />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import ConfiguracoesHome from '@/components/Admin/Configuracoes/ConfiguracoesHome.vue'
export default {
    components: {
        Sidebar, ConfiguracoesHome
    }
}
</script>