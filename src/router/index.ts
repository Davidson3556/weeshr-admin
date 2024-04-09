import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuperAdminLogin from '../views/SuperAdminLogin.vue'
import configuration from '../views/UserConfiguration.vue'
import user from '../views/UserHub.vue'
import appuser from '../views/CreateUser.vue'
import { useSuperAdminStore } from '@/stores/super-admin/super-admin'
import ErrorPage from '@/views/ErrorPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'superAdmin-login',
    component: SuperAdminLogin,
    meta: { hideSidebar: true }
  },

  {
    path: '/error',
    name: 'error',
    component: ErrorPage,
    meta: { hideSidebar: true }
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
    component: ()=> import('../views/UserHub.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user/appuser',
    name: 'appuser',
    component: ()=> import('../views/AppUsers.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user/vendors',
    name: 'vendors',
    component: ()=> import('../views/Vendors.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user/admin',
    name: 'admin',
    component: ()=> import('../views/Admin.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/create-user',
    name: 'create-user',
    component: appuser,
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)', // Wildcard route to catch all unmatched paths
    redirect: { name: 'error' } // Redirect to error page
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = useSuperAdminStore().token !== ''
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'superAdmin-login' }) // Redirect to login if not authenticated
  } else {
    next() // Continue navigation
  }
})

export default router
