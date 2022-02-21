import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/auth/login.vue";
import Main from "@/views/drawer/main.vue";
import Auth from "./../middleware/auth";

import Administradores from "@/views/administradores/index.vue";

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'login',
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
        component: Administradores,
        meta: {
          middleware: Auth
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next)=>{
  if(to.name == 'login'){
    if(localStorage.getItem('token')){
      return next({name: 'admin'});
    }
  }

  if(to.meta.middleware){
    const middle = to.meta.middleware;
    const context = {to, from, next};
    return middle({...context});
  }
  return next();
})

export default router;