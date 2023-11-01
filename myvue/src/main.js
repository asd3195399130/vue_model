import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.directive("color", (el, binding) => {
  const value = binding.value;
  if (value % 2 != 0) {
    el.style.color = "#7303c0";
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
