import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import daybookRouter from '../modules/daybook/router'
import authRouter from '../modules/auth/router'

import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // se llama al router del componente daybook
    path: '/daybook',
    beforeEnter: [ isAuthenticatedGuard ],
    ...daybookRouter
  },
  {
    // se llama al router del componente daybook
    path: '/auth',
    ...authRouter 
  },
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
