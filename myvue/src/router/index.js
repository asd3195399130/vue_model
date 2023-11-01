import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Table",
    name: "Table",
    component: () => import("../views/TableViem.vue"),
  },
  {
    path: "/Fatch",
    name: "Fatch",
    component: () => import("../views/FatchView.vue"),
  },
  {
    path: "/LifeCycle",
    name: "LifeCycle",
    component: () => import("../views/LifeCycle.vue"),
  },
  {
    path: "/DateView",
    name: "DateView",
    component: () => import("../views/DateView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
