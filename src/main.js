import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { getToken } from "./services/auth";
import Url from './Helpers/config'
import { store } from "./store"
import axios from 'axios'
import {
  userIsLogged
} from '@/services/auth'


import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

// Requests
import '@/Requests/Alunos';
import '@/Requests/Livros';
import '@/Requests/Historicos';
import '@/Requests/Categorias';
import '@/Requests/Usuarios';
import '@/Requests/Locacoes';
import '@/Requests/Dados';

// Filters
import '@/Helpers/Filters';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// VueSax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)

// Sweet Alert
import '@/plugins/SweetAlert'

// Sidebar Mobile
import '@/Helpers/MobileSidebar'

Vue.config.productionTip = false

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      localStorage.clear();
      router.push("/");
    } else {
      throw error;
    }
  }
)

// Mixins
Vue.mixin({
  methods:{
    getToken(){
      return getToken()
    },
    getAPIUrl(){
      return Url.apiUrl();
    },
    userIsLogged() {
      return userIsLogged();
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
