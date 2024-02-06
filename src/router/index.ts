import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layouts/Admin.vue";
import AdminPage from "../views/Admin.vue";
import Login from "@/views/Login.vue";
import Socket from '@/views/Socket.vue'
import { MT_NOT_FOUND, RT_ADMIN, RT_NOT_FOUND,RT_LOGIN  } from "@/constants/admin";
const routes = [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "", component: AdminPage, name: RT_ADMIN },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: MT_NOT_FOUND,
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: RT_NOT_FOUND
    }
  },
  {
    path: "/admin",
    children: [
      { path: "/login", component: Login, name: RT_LOGIN }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
