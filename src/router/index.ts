import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layouts/Admin.vue";

import AdminPage from "../views/admin/Product.vue";
import OrderVue from "@/views/admin/Order.vue";
import CategorisVue from "@/views/admin/Categoris.vue";
import BlogVue from "@/views/admin/Discount.vue";
import CustomerVue from "@/views/admin/Customer.vue";
import DiscountVue from "@/views/admin/Discount.vue";
import MediaVue from "@/views/admin/Media.vue";
import StoreVue from "@/views/admin/Store.vue";
import CuponCodeVue from "@/views/admin/CuponCode.vue";

import Login from "@/views/Login.vue";
import i18n from "../plugins/i18n";
import Socket from "@/views/Socket.vue";
import nProgress from "nprogress";

import {
  MT_NOT_FOUND,
  RT_ADMIN,
  RT_LOGIN,
  RT_BLOG,
  RT_CATEGORIES,
  RT_Order,
  RT_CUSTOMER,
  RT_Cupon,
  RT_DISCOUNT,
  RT_Media,
  RT_STORE,
} from "@/constants/admin";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/products",
      component: AdminLayout,
      children: [{ path: "/products", component: AdminPage, name: RT_ADMIN }],
    },
    {
      path: "/order",
      component: AdminLayout,
      children: [{ path: "/order", component: OrderVue, name: RT_Order }],
    },
    {
      path: "/store",
      component: AdminLayout,
      children: [{ path: "/store", component: StoreVue, name: RT_STORE }],
    },
    {
      path: "/cupon_code",
      component: AdminLayout,
      children: [
        { path: "/cupon_code", component: CuponCodeVue, name: RT_Cupon },
      ],
    },
    {
      path: "/customer",
      component: AdminLayout,
      children: [
        { path: "/customer", component: CustomerVue, name: RT_CUSTOMER },
      ],
    },
    {
      path: "/discount",
      component: AdminLayout,
      children: [
        { path: "/discount", component: DiscountVue, name: RT_DISCOUNT },
      ],
    },
    {
      path: "/media",
      component: AdminLayout,
      children: [{ path: "/media", component: MediaVue, name: RT_Media }],
    },
    {
      path: "/categories",
      component: AdminLayout,
      children: [
        { path: "/categories", component: CategorisVue, name: RT_CATEGORIES },
      ],
    },
    {
      path: "/discount",
      component: AdminLayout,
      children: [{ path: "/discount", component: BlogVue, name: RT_BLOG }],
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
  if (typeof to.meta?.title === "string") {
    updateMeta(to.meta?.title);
  }
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

function updateMeta(title: string) {
  if (typeof title === "string") {
    document.title = i18n.global.t(title);
  }
}

export { updateMeta };
export default router;
