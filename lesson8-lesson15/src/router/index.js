import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../lesson13/views/HomeView.vue'
import AboutView from '../lesson13/views/AboutView.vue'
import BlogView from '@/lesson13/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog/:blog_id',
      name: 'blog',
      component: BlogView
    },
  ]
})

export default router
