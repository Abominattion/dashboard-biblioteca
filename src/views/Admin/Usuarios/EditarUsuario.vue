<template>
    <div class="livros">
        <Sidebar />
         <UsuarioForm />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import UsuarioForm from '@/components/Admin/Usuarios/UsuarioForm.vue'
export default {
    components: {
        Sidebar, UsuarioForm
    }
}
</script>