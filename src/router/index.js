import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ContactView',
      name: 'ContactView',
      component: ContactView
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    }
  ]
})

export default router
