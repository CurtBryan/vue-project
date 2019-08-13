import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import GenOne from "./GenOne.vue";
import GenTwo from "./GenTwo.vue";
import store from "./store";

Vue.use(VueRouter);

const routes = [
  { path: "/gentwo", component: GenTwo },
  { path: "/", component: GenOne }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
