import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage/LandingPage.vue'
import Login from '@/views/Auth/Login.vue'
import AboutPage from '@/views/LandingPage/AboutPage.vue'
import FaqPage from '@/views/LandingPage/FaqPage.vue'
import InfografisPage from '@/views/dashboard/InfografisPage.vue'
import JadwalPage from '@/views/dashboard/JadwalPage.vue'
import LaporanPage from '@/views/dashboard/LaporanPage.vue'
import DashboardPage from '@/views/dashboard/DashboardPage.vue'

const routes = [
  // Landing Page
  {
    path: '/',
    component: LandingPage
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
  },
  // End Landing Page

  // Start DashboardPage
  {
    path: '/infografis',
    component: InfografisPage
  },
  {
    path: '/dashboard-eksekutif',
    component: DashboardPage
  },
  {
    path: '/jadwal-penayangan',
    component: JadwalPage
  },
  {
    path: '/laporan',
    component: LaporanPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
