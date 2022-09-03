<template>
    <div class="locacoes">
        <Sidebar />
         <LocacoesHome />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import LocacoesHome from '@/components/Admin/Locacoes/LocacoesHome.vue'
export default {
    components: {
        Sidebar, LocacoesHome
    }
}
</script>