import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'info',
    component: () => import('@/views/InfoPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
