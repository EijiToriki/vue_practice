import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../lesson13/views/HomeView.vue'
import AboutView from '../lesson13/views/AboutView.vue'
import BlogView from '@/lesson13/views/BlogView.vue'
import NotFound from '@/lesson13/views/NotFound.vue'
import ProfileView from '@/lesson13/views/ProfileView.vue'
import LikeView from '@/lesson13/views/LikeView.vue'
import PostsView from '@/lesson13/views/PostsView.vue'
import NewsView from '@/lesson13/views/NewsView.vue'
import HomeFooter from '@/lesson13/views/HomeFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Sidebar: NewsView,
        Footer: HomeFooter
      }
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
    {
      path: '/:id',
      name: 'profile',
      component: ProfileView,
      children:[
        {
          path: 'posts',
          component: PostsView
        },
        {
          path: 'like',
          component: LikeView
        }
      ]
    },
  ]
})

export default router
