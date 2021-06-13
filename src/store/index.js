import { createStore } from 'vuex'
import auth from './moduls/auth.module'
import request from './moduls/request.module'

export default createStore({
  state() {
    return {
      message: null
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
    clearMessage(state) {
      state.message = null;
    }
  },
  actions: {
    setMessage({ commit }, message) {
      commit('setMessage', message);
      setTimeout(() => {
        commit('clearMessage');
      }, 4000);
    }
  },
  getters: {
    message(state) {
      return state.message;
    }
  },
  modules: {
    auth,
    request
  }
})
