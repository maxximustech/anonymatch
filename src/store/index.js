import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      user: {
        id: '',
        username: '',
      },
      anon: {
        showLogin: false,
        loading: false,
      },
      match: {

      },
    }
  },
  getters: {
    getAnonShowLogin: state => {
      return state.data.anon.showLogin;
    },
    getAnonLoading: state => {
      return state.data.anon.loading;
    }
  },
  mutations: {
    updateAnonShowLogin: (state, val) => {
      state.data.anon.showLogin = val;
    },
    updateAnonLoading: (state, val) => {
      state.data.anon.loading = val;
    }
  },
  actions: {
    updateAnonShowLogin({commit},val){
      commit('updateAnonShowLogin',val);
    }
  },
  modules: {
  }
})
