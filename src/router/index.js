import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/UserDashboard.vue'
import LandingPage from '@/views/LandingPage/LandingPage.vue'
import Login from '@/views/Auth/Login.vue'
import AboutPage from '@/views/LandingPage/AboutPage.vue'
import FaqPage from '@/views/LandingPage/FaqPage.vue'

const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FaqPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
