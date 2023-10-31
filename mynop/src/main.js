import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LeftView from "./components/Left-View.vue";
import ContentView from "./components/Content-View.vue";
import HelpView from "./components/Help-View.vue";
import CopyrightView from "./components/CopyRight-View.vue";

Vue.config.productionTip = false;
Vue.component("LeftView", LeftView);
Vue.component("ContentView", ContentView);
Vue.component("HelpView", HelpView);
Vue.component("CopyrightView", CopyrightView);
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
