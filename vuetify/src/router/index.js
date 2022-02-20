import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/auth/login.vue";
import Main from "@/views/drawer/main.vue";

import Administradores from "@/views/administradores/index.vue";

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: "/admin",
    component: Main,
    redirect: "/admin/administradores",
    name: "admin",
    children: [
      {
        path: "administradores",
        name: "administradores",
        component: Administradores
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;