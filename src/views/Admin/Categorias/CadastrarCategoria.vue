<template>
    <div class="livros">
        <Sidebar />
         <CategoriaForm />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import CategoriaForm from '@/components/Admin/Categorias/CategoriaForm.vue'
export default {
    components: {
        Sidebar, CategoriaForm
    }
}
</script>