import Vue from 'vue'
import VueRouter from 'vue-router'
import jwt_decode from "jwt-decode";
import Login from '../views/Auth/Login.vue'
import Dashboard from '../views/Admin/Dashboard/Dashboard.vue'
import Locacoes from '../views/Admin/Locacoes/Locacoes.vue'
import HistoricoDeLocacoes from '../views/Admin/Locacoes/HistoricoLocacoes.vue'
import NovaLocacao from '../views/Admin/Locacoes/NovaLocacao.vue'
import EditarLocacao from '../views/Admin/Locacoes/EditarLocacao.vue'
import Categorias from '../views/Admin/Categorias/Categorias.vue'
import CadastrarCategoria from '../views/Admin/Categorias/CadastrarCategoria.vue'
import EditarCategoria from '../views/Admin/Categorias/EditarCategoria.vue'
import Alunos from '../views/Alunos/Alunos.vue'
import EditarAluno from '../views/Alunos/EditarAluno.vue'
import CadastrarAluno from '../views/Alunos/EditarAluno.vue'
import Livros from '../views/Admin/Livros/Livros.vue'
import CadastrarLivro from '../views/Admin/Livros/CadastrarLivro.vue'
import EditarLivro from '../views/Admin/Livros/EditarLivro.vue'
import Usuarios from '../views/Admin/Usuarios/Usuarios.vue'
import CadastrarUsuario from '../views/Admin/Usuarios/CadastrarUsuario.vue'
import EditarUsuario from '../views/Admin/Usuarios/EditarUsuario.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/locacoes',
    name: 'Locacoes',
    component: Locacoes,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/locacoes/historico-de-locacoes',
    name: 'HistoricoDeLocacoes',
    component: HistoricoDeLocacoes,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/locacoes/nova-locacao',
    name: 'NovaLocacao',
    component: NovaLocacao,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/locacoes/encerrar-locacao/:id',
    name: 'EditarLocacao',
    component: EditarLocacao,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/categorias/cadastrar-categoria',
    name: 'CadastrarCategoria',
    component: CadastrarCategoria,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/categorias/editar-categoria/:id',
    name: 'EditarCategoria',
    component: EditarCategoria,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/alunos',
    name: 'Alunos',
    component: Alunos,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/alunos/cadastrar-aluno',
    name: 'CadastrarAluno',
    component: CadastrarAluno,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/alunos/editar-aluno/:id',
    name: 'EditarAluno',
    component: EditarAluno,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/livros',
    name: 'Livros',
    component: Livros,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/livros/cadastrar-livro',
    name: 'CadastrarLivro',
    component: CadastrarLivro,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/livros/editar-livro/:id',
    name: 'EditarLivro',
    component: EditarLivro,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/usuarios/cadastrar-usuario',
    name: 'CadastrarUsuario',
    component: CadastrarUsuario,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/usuarios/editar-usuario/:id',
    name: 'EditarUsuario',
    component: EditarUsuario,
    meta: {
      requiresAuth: true,
    },
  },
]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    let decoded = false;
    if (token == null) {
      decoded = false;
    } else {
      decoded = jwt_decode(token);
      decoded = decoded != null ? true : false;
    }
    if (!decoded) {
      next("/");
      return;
    } else {
      next();
    }
  } else {
    next();
  }
});



export default router