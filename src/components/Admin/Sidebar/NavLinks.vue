<template>
    <div class="nav">
        <ul>
            <li class="active">
                <router-link to="/dashboard">
                    <i class='bx bxs-grid-alt'></i>
                    <span>Dashboard</span>
                </router-link>
            </li>
            <li>
                <router-link to="/locacoes">
                    <i class='bx bxs-share-alt'></i>
                    <span>Locações</span>
                </router-link>
            </li>
            <li>
                <router-link to="/alunos">
                    <i class='bx bxs-user'></i>
                    <span>Alunos</span>
                </router-link>
            </li>
            <li>
                <router-link to="/categorias">
                    <i class='bx bxs-category'></i>
                    <span>Categorias</span>
                </router-link>
            </li>
            <li>
               <router-link to="/livros">
                    <i class='bx bxs-book-alt'></i>
                    <span>Livros</span>
                 </router-link>
            </li>
            <li>
                 <router-link to="/usuarios">
                    <i class='bx bxs-user-circle'></i>
                    <span>Usuários</span>
                </router-link>
            </li>
            <li>
                <a @click="logoff">
                    <i class='bx bx-log-out'></i>
                    <span>Sair</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        logoff(){
            localStorage.clear();
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.nav{
    align-items: center;
}

.nav ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav li{
    width: 100%;
    display: inline-block;
    transition: all .3s ease;
}

.nav li:last-child{
    border-bottom: none;
}


.nav a i{
    font-size: 1.2em;
    margin-right: 10px;
    transition: all .3s ease;
    padding: 10px;
}

.nav a{
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    padding: 10px 0;
}

.router-link-active{
    background: #f5f5f5;
    border-left: 5px solid #0D6EFD;
    font-weight: bold;
    transition: all .3s ease;
}

.router-link-exact-active{
    background: #f5f5f5;
    border-left: 5px solid #0D6EFD;
    font-weight: bold;
    transition: all .3s ease;
}

.nav a:hover i{
    transform: scale(1.5);
}
</style>