import { createRouter, createWebHistory } from 'vue-router'
import FoOldal from '../components/FoOldal.vue';
import Filmek from '../components/Filmek.vue';
import Szereplok from '../components/Szereplok.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fooldal',
      component: FoOldal
    },
    {
      path: '/filmek',
      name: 'filmek',
      component: Filmek
    },
    {
      path: '/szereplok',
      name: 'szereplok',
      component: Szereplok
    },
    {
      path: '/csillaghajok',
      name: 'csillaghajok',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/CsillagHajok.vue')
    }
  ]
})

export default router
