<template>
    <div class="livros">
        <Sidebar />
         <UsuariosHome />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import UsuariosHome from '@/components/Admin/Usuarios/UsuariosHome.vue'
export default {
    components: {
        Sidebar, UsuariosHome
    }
}
</script>