import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  username: null
};

const mutations = {
  changeName(state, newName) {
    state.username = newName;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
