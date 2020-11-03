import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/dashboard/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "shop",
        name: "Shop",
        component: () => import("../views/shop/index.vue"),
        redirect: "/shop/list",
        children: [
          {
            path: "list",
            name: "ShopList",
            component: () => import("../views/shop/list/index.vue"),
          },
          {
            path: "add",
            name: "ShopAdd",
            component: () => import("../views/shop/add/index.vue"),
          },
        ],
      },
      {
        path: "user",
        name: "user",
        component: () => import("../views/user/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
