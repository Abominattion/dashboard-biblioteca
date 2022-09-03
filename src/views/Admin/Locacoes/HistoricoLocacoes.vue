<template>
    <div class="locacoes">
        <Sidebar />
         <HistoricoHome />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import HistoricoHome from '@/components/Admin/Locacoes/HistoricoLocacoes.vue'
export default {
    components: {
        Sidebar, HistoricoHome
    }
}
</script>