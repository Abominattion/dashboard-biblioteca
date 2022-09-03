<template>
    <div class="sidebar">
        <div class="sidebar-header text-center">
            <img class="avatar" src="https://picsum.photos/500/500?random=1" alt="Admin Avatar">
            <h3>{{user.nome}}</h3>
        </div>
        <NavLinks />
    </div>
</template>

<script>
import NavLinks from './NavLinks.vue'
export default {
    components: {
        NavLinks
    },
    data(){
        return{
            user:{
                nome: localStorage.getItem("nome")
            }
        }
    }
}
</script>

<style scoped>
.sidebar{
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    width: 20%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow-y: auto;
}

.sidebar:hover::-webkit-scrollbar-thumb {
    visibility: visible;
    opacity: 1;
}

.sidebar::-webkit-scrollbar-track {
    border-radius: 10px;
}

.sidebar::-webkit-scrollbar {
    width: 8px;
}

.sidebar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0,0,0,.2) !important;
    visibility: hidden;
    opacity: 0;
}

.sidebar-header{
    padding: 20px;
}

.avatar{
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
}

.sidebar-header h3{
    margin: 10px 0;
    font-size: 1.2em;
    font-weight: bold;
}

@media screen and (max-width: 768px) {
    .sidebar{
        left: -20%;
        transition: all 0.3s ease;
    }

     .active{
        width: 70%;
        left: 0;
    }
}
</style>