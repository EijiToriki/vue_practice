import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../lesson13/views/HomeView.vue'
import AboutView from '../lesson13/views/AboutView.vue'
import BlogView from '@/lesson13/views/BlogView.vue'
import NotFound from '@/lesson13/views/NotFound.vue'

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
      alias: ['/me', '/toriki'],
      component: AboutView
    },
    {
      path: '/blog/:blog_id(\\d+)',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notFound',
      // redirect: '/',
      props:true,
      component: NotFound
    },
  ]
})

export default router
