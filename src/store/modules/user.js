import { userIsLogged } from '../../services/auth'
export const user = {
  state: {
    loggedIn: userIsLogged()
  },
  mutations: {
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    }
  },
  getters: {
    loggedIn: state => state.loggedIn
  }
}
