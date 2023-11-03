import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import animate from "animate.css";
Vue.config.productionTip = false;

Vue.use(animate);
import PersonWorld from "@/components/PersonWorld.vue";
Vue.component("PersonWorld", PersonWorld);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
