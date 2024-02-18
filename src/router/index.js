import { createRouter, createWebHashHistory } from 'vue-router'
// import LoginView from '../views/admin/LoginView.vue';
// import ProductList from '../views/admin/ProductListView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { // 前台
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        { // 首頁
          path: 'home',
          name: 'home',
          component: () => import('../views/front/HomeView.vue'),
        },
        { // 產品列表頁
          path: 'products',
          name: 'products',
          component: () => import('../views/front/ProductsView.vue'),
        },
        { // 購物車頁
          path: 'cart',
          name: 'cart',
          component: () => import('../views/front/CartView.vue'),
        },
      ],
    },
    { // 後台
      path: '/admin',
      component: () => import('../views/admin/DashboardView.vue'),
      children: [
        { // 後台登入頁
          path: 'login',
          name: 'login',
          component: () => import('../views/admin/LoginView.vue'),
        },
        { // 產品列表頁
          path: 'productlist',
          name: 'productlist',
          component: () => import('../views/admin/ProductListView.vue'),
        },
      ],
    },
  ]
})

export default router
