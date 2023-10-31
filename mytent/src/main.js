import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UserName from "./components/UserName.vue";
import ElementUI from "element-ui";
Vue.config.productionTip = false;
Vue.component("UserName", UserName);

import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
