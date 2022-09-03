<template>
    <div class="livros">
        <Sidebar />
         <LivroForm />
    </div>  
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar/Sidebar.vue'
import LivroForm from '@/components/Admin/Livros/LivroForm.vue'
export default {
    components: {
        Sidebar, LivroForm
    }
}
</script>