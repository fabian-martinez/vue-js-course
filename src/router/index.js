import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "counter" */ '../views/CounterView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "user" */ '../views/UsersView.vue')
  },
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
    component: () => import(/* webpackChunkName: "search-pokemon" */ '../views/SearchPokemonView.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/PokemonView.vue')
  },
  {
    path: '/todolist',
    name: 'todo-list',
    component: () => import(/* webpackChunkName: "todo-list" */ '../views/TodoListView.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import(/* webpackChunkName: "slots" */ '../views/CustomSlotsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
