<template>
  <section class="dashboard">
    <div class="section-header">
      <div class="breadcrumb">
        <h1><i class='bx bxs-grid-alt'></i>Dashboard</h1>
        <button class="btn-menu btn btn-primary" @click="mobileSidebar()"><i class='bx bx-menu'></i></button>
      </div>
    </div>

    <div class="main dashboard-content">
      <div class="d-flex justify-content-end mb-3">
        <router-link to="/locacoes/nova-locacao" class="btn btn-primary">Nova locação</router-link>
      </div>

      <div class="load-items" v-if="data == ''">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="d-flex justify-content-between" v-else>

        <article>
          <h2><i class='bx bxs-user'></i>Alunos</h2>
          <p>Alunos Cadastrados: <b>{{data.alunos}}</b> </p>
          <p>Alunos do sexo feminino: <b>{{data.alunos_masculinos}}</b></p>
          <p>Alunos do sexo masculino: <b>{{data.alunos_femininos}}</b></p>
        </article>

        <article>
          <h2><i class='bx bxs-category'></i>Categorias</h2>
          <p>Categorias Cadastradas: <b>{{data.categorias}}</b></p>
        </article>

        <article>
          <h2><i class='bx bxs-book-alt'></i>Livros</h2>
          <p>Livros Cadastrados: <b>{{data.livros}}</b></p>
          <p>Livros disponíveis: <b>{{data.livros_disponiveis}}</b></p>
          <p>Livros indisponíveis: <b>{{data.livros_locados}}</b></p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        data: [],
        token: this.getToken(),
        url: this.getAPIUrl()
      }
    },
    mounted() {
      this.getDados();
      this.geraNotifications();
      setTimeout(() => {
        this.getNotifications();
      }, 5000);
    },
    methods: {
      geraNotifications() {
        const options = {
          method: 'GET',
          url: this.url + "/api/v1/verificar-notificacoes",
          params: this.aluno,
          headers: {
            Authorization: 'Bearer  ' + this.token,
          },
        };
        axios.request(options)
      },
      getNotifications() {
        const options = {
          method: 'GET',
          url: this.url + "/api/v1/notificacoes",
          params: this.aluno,
          headers: {
            Authorization: 'Bearer  ' + this.token,
          },
        };
        axios.request(options).then((resposta) => {
          console.log(resposta.data);
          this.$vs.notification(resposta.data);
        })
      },
    }
  }
</script>

<style scoped>
  article {
    flex-basis: calc(33.33% - 40px);
    padding: 20px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
  }

  article h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  article i {
    font-size: 1.5em;
    margin-right: 10px;
  }

  article p,
  h2 {
    color: #555555;
  }

  @media screen and (max-width: 998px) {
    .d-flex {
      flex-wrap: wrap;
      gap: 20px;
    }

    article {
      flex-basis: calc(50% - 10px);
    }
  }

  @media screen and (max-width: 662px) {
    article {
      flex-basis: 100%;
    }
  }
</style>