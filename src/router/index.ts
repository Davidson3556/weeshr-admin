import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Errorpage404 from '../views/Errorpage.vue'
import configuration from '../views/configuration.vue'
import user from '../views/user.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/errorpage',
    name: 'error',
    component: Errorpage404
  },

  {
    path: '/configuration',
    name: 'configuration',
    component: configuration
  },

  {
    path: '/user',
    name: 'user',
    component: user
  },

  // Added the wildcard route for handling 404 errors here
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: Errorpage404
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
