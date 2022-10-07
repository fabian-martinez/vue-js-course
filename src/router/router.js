import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticated from './auth-guard'

const routes = [
    { 
        path: '/', 
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: 'Pokemon' */ '@/modules/pokemon/layout/PokemonLayout'),
        children: [
            { 
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: 'Pokemon-List' */ '@/modules/pokemon/pages/ListPage')
            },
            { 
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "Pokemon-About" */ '@/modules/pokemon/pages/AboutPage')
            },
            { 
                path: 'pokemonid/:pokemonid', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "Pokemon-ID" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( router ) => {
                    const pokemonid = Number( router.params.pokemonid )
                    return isNaN( pokemonid )?{ pokemonid:1 }:{ pokemonid }
                }
            },
            {
                path: '',
                name: 'pokemon-base',
                redirect: { name:'pokemon-about' }
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [isAuthenticated],
        component: () => import(/* webpackChunkName: 'DBZ' */ '@/modules/dbz/layout/DbzLayout'),
        children: [
            { 
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: 'DBZ-List' */ '@/modules/dbz/pages/Characters')
            },
            { 
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "DBZ-About" */ '@/modules/dbz/pages/About')
            },
            {
                path: '',
                name:'dbz-base',
                redirect: { name:'dbz-characters' }
            }
        ]
    },
    
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NotFound" */ '@/modules/shared/pages/NotPageFound')
    },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// // Guard Global - Sincrono
// router.beforeEach( (to, from, next) => {
//     console.log({ to, from, next });

//     const randomLogin = Math.random() * 100
//     if ( randomLogin > 50) {
//         console.log(randomLogin, 'autenticado')
//         next()
//     } else {
//         console.log(randomLogin, 'Bloqueado por el BeforeEach Guard')
//         next({ name: 'pokemon-home' })
//     }
// }) 

//  // Guard Global - Async
//  const canAccess = () => {
//     return new Promise( (resolve) => {

//         const randomLogin = Math.random() * 100
//         if ( randomLogin > 50) {
//             console.log(randomLogin, 'autenticado')
//             resolve(true)
//         } else {
//             console.log(randomLogin, 'Bloqueado por el BeforeEach Guard')
//             resolve(false)
//         }

//     })
//  }

//  router.beforeEach( async(to, from, next) => {
//     const authorized = await canAccess()

//     authorized
//         ? next()
//         : next({ name: 'pokemon-home' })
//  })
 
export default router