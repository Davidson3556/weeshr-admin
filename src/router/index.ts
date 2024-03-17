import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Errorpage404 from '../views/Errorpage.vue'
import configuration from '../views/UserConfiguration.vue'
import user from '../views/UserHub.vue'
import appuser from '../views/CreateUser.vue'
import { useSuperAdminStore } from '@/stores/super-admin'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true } ,
    
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
        meta: { hideSidebar: true } 
  },

  {
    path: '/errorpage',
    name: 'error',
    component: Errorpage404,
    meta: { hideSidebar: true } ,
  },

  {
    path: '/configuration',
    name: 'configuration',
    component: configuration,
    meta: { requiresAuth: true } 
  },

  {
    path: '/user',
    name: 'user',
    component: user,
    meta: { requiresAuth: true } 
  },

  {
    path: '/create-user',
    name: 'create-user',
    component: appuser,
    meta: { requiresAuth: true } 
  },

  // Added the wildcard route for handling 404 errors here
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: Errorpage404,
    meta: { hideSidebar: true } 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = useSuperAdminStore().token !== '';
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' }); // Redirect to login if not authenticated
  } else {
    next(); // Continue navigation
  }
});


export default router
