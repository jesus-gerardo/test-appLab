import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/auth/login.vue";
import Main from "@/views/drawer/main.vue";
import Swap from "@/views/drawer/swap.vue";

// directives
import Dashboard from "@/views/admin/dashboard/index.vue";

// cataloges
import Materias from "@/views/catalogos/materias/index.vue";
import Horario from "@/views/catalogos/horarios/index.vue";
import Salones from "@/views/catalogos/salones/index.vue";

// expedientes
import Alumnos from "@/views/admin/expedientes/alumnos/index.vue";
import Expedientes from "@/views/admin/expedientes/components/index.vue";

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
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "expedientes",
        component: Swap,
        children:[
          {
            path: "alumnos",
            component: Swap,
            children:[
              {
                path: '/',
                name: 'alumnos',
                component: Alumnos
              },
              {
                path: ':id',
                name: 'expedienteAlumno',
                component: Expedientes
              },
            ]
          },
          {
            path: "maestros",
            component: Swap,
            children:[
              {
                path: '/',
                name: 'maestros',
                component: Alumnos
              },
              {
                path: ':id',
                name: 'expedienteMaestros',
                component: Expedientes
              },
            ]
          },
        ]
      },
      {
        path: "catalogos",
        component: Swap,
        children:[
          {
            path: "salones",
            name: "salones",
            component: Salones
          },
          {
            path: "materias",
            component: Swap,
            children:[
              {
                path: '/',
                name: 'materias',
                component: Materias
              },
              {
                path: ':id',
                name: 'horarioMateria',
                component: Horario
              },
            ]
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;