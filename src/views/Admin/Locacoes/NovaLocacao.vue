<template>
    <div class="locacoes">
        <Sidebar />
         <LocacaoForm />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import LocacaoForm from '@/components/Admin/Locacoes/LocacaoForm.vue'
export default {
    components: {
        Sidebar, LocacaoForm
    }
}
</script>