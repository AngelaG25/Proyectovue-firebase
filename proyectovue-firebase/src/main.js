import Vue from "vue";
//import App from "./App.vue";
import router from "./router";
import store from "./store";
import test_vue from "./components/test_vue.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(test_vue)
}).$mount("#test_vue");
