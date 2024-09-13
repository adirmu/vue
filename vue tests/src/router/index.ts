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
      path: '/ticktack',
      name: 'ticktack',
      component: () => import('../views/TickTackView.vue')
    },
    {
      path: '/numbermatch',
      name: 'numbermatch',
      component: () => import('../views/NumberMatchView.vue')
    },
    {
      path: '/tiranplanner',
      name: 'tiran planner',
      component: () => import('../views/TiranPlanner.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
