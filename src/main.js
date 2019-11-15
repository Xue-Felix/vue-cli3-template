import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import FastClick from "fastclick";
import VConsole from "vconsole";

FastClick.attach(document.body);
new VConsole();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
