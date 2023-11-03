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
    path: "/Three",
    name: "Three",
    component: () => import("../views/ThreeView.vue"),
    children: [
      {
        path: "/three/Peson",
        name: "Peson",
        component: () => import("../views/PesonView.vue"),
        children: [
          {
            path: "/three/Peson/Boos",
            name: "Boos",
            component: () => import("../views/BoosView.vue"),
            children: [
              {
                path: "/three/Peson/Boos/Blik",
                name: "Blik",
                component: () => import("@/components/BlikView.vue"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/Router",
    name: "Router",
    component: () => import("../views/RouterView.vue"),
    redirect: "/Router/HomePage",
    children: [
      {
        path: "/Router/HomePage",
        name: "HomePage",
        component: () => import("@/components/HomePage.vue"),
      },
      {
        path: "/Router/List",
        name: "List",
        component: () => import("@/components/ListView.vue"),
        redirect: "/Router/List/Dongzuo",
        children: [
          {
            path: "/Router/List/Dongzuo",
            name: "DongZuo",
            component: () => import("@/components/DongzuoView.vue"),
          },
          {
            path: "/Router/List/Tencent",
            name: "Tencent",
            component: () => import("@/components/TencentView.vue"),
          },
          {
            path: "/Router/List/JiuYou",
            name: "JiuYou",
            component: () => import("@/components/JiuYouView.vue"),
          },
          {
            path: "/Router/List/AnFeng",
            name: "AnFeng",
            component: () => import("@/components/AnFengView.vue"),
          },
          {
            path: "/Router/List/NetEase",
            name: "NetEase",
            component: () => import("@/components/NetEaseView.vue"),
          },
        ],
      },
      {
        path: "/Router/Onlinegames",
        name: "Onlinegames",
        component: () => import("@/components/OnlinegamesView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
