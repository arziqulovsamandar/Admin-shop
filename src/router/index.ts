import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layouts/Admin.vue";
import AdminPage from "../views/Admin.vue";
import OrderVue from "@/views/admin/Order.vue";
import CategorisVue from "@/views/admin/Categoris.vue";
import BlogVue from "@/views/admin/Blog.vue";
import ProductVue from "@/views/admin/Product.vue";
import Login from "@/views/Login.vue";
import Socket from "@/views/Socket.vue";
import nProgress from "nprogress";
import {
  MT_NOT_FOUND,
  RT_ADMIN,
  RT_NOT_FOUND,
  RT_LOGIN,
  RT_BLOG,
  RT_CATEGORIES,
  RT_Order,
  RT_PRODUCT,
} from "@/constants/admin";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: AdminLayout,
      children: [{ path: "/admin", component: AdminPage, name: RT_ADMIN }],
    },
    {
      path: "/products",
      component: AdminLayout,
      children: [
        { path: "/products", component: ProductVue, name: RT_PRODUCT },
      ],
    },
    {
      path: "/order",
      component: AdminLayout,
      children: [{ path: "/order", component: OrderVue, name: RT_Order }],
    },
    {
      path: "/categories",
      component: AdminLayout,
      children: [
        { path: "/categories", component: CategorisVue, name: RT_CATEGORIES },
      ],
    },
    {
      path: "/blog",
      component: AdminLayout,
      children: [{ path: "/blog", component: BlogVue, name: RT_BLOG }],
    },
    {
      path: "/:pathMatch(.*)*",
      name: MT_NOT_FOUND,
      component: () => import("@/views/NotFound.vue"),
    },
    {
      path: "/",
      children: [{ path: "/", component: Login, name: RT_LOGIN }],
    },
  ],
});

router.beforeResolve((to, from, next) => {
  nProgress.start();
  next();
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  const name = to.name === "login";

  if (!token && !name) {
    return next({ name: "login" });
  } else {
    next();
  }
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
