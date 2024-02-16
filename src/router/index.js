import { createRouter, createWebHashHistory } from 'vue-router'
// import LoginView from '../views/admin/LoginView.vue';
// import ProductList from '../views/admin/ProductListView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/LoginView',
      name: 'LoginView',
      component: () => import('../views/admin/LoginView.vue')
    },
    {
      path: '/ProductList',
      name: 'ProductListView',
      component: () => import('../views/admin/ProductListView.vue')
    },
    {
      path: '/ProductsView',
      name: 'ProductsView',
      component: () => import('../views/front/ProductsView.vue')
    }
  ]
})

export default router
