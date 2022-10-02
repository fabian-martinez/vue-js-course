import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { 
        path: '/', 
        component: () => import(/* webpackChunkName: 'List' */ '@/modules/pokemon/pages/ListPage')
    },
    { 
        path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    { 
        path: '/id', 
        component: () => import(/* webpackChunkName: "Pokemon" */ '@/modules/pokemon/pages/PokemonPage')
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NotFound" */ '@/modules/shared/pages/notPageFound')
    },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router