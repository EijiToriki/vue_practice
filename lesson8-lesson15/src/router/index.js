import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../lesson13/views/HomeView.vue'
import AboutView from '../lesson13/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      component: AboutView
    }
  ]
})

export default router
