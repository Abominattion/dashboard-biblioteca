<template>
  <section class="tipo-categorias">
    <div class="section-header">
      <div class="breadcrumb">
        <h1><i class='bx bxs-category'></i>Categorias</h1>
        <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
      </div>

      <div class="search">
        <input type="text" class="form-control" placeholder="Pesquisar categoria" v-model="busca">
      </div>
    </div>

    <div class="main categorias-content">
      <div class="d-flex justify-content-end mb-3">
        <router-link to="/categorias/cadastrar-categoria" class="btn btn-primary">Cadastrar categoria</router-link>
      </div>

      <div class="tabela-categorias-home">
        <TabelaCategorias :dadosBusca="busca" />
      </div>
    </div>
  </section>
</template>

<script>
  import TabelaCategorias from '@/components/Admin/Categorias/Tabelas/TabelaCategorias.vue';

  export default {
    components: {
      TabelaCategorias
    },
    data() {
      return {
        busca: '',
        filtro: 'Filtro',
      }
    }
  }
</script>