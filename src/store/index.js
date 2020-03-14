import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      displayName: 'Alex'
    }
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    settingUser: (state, user) => (state.user = user)
  },
  actions: {
    setUser: ({
      commit
    }, user) => commit("settingUser", user)
  }
});