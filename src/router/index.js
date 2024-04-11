import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/obra/:id',
      name: 'obra',
      component: () => import('../views/ObraView.vue')
    }

  ]
})

export default router
