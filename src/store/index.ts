import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    userData: {}
  },
  getters: {
    getToken: state => state.token,
    getUserData: state => state.userData
  },
  mutations: {
  },
  actions: {
    setToken: ({state} , value) => state.token = value,
    setUserData: ({state},value) => state.userData = value
  },
  modules: {
  }
})
