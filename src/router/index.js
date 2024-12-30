import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import HomeView from '../views/HomeView.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import ProductView from '@/views/ProductView.vue';
import CartView from '@/views/CartView.vue';
import NotFoundView from '@/views/NotFoundView.vue';  // Pastikan Anda memiliki komponen ini

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout, // Gunakan layout sebagai pembungkus
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'product',
          name: 'Product',
          component: ProductView,
        },
        {
          path: 'product/:id',
          name: 'ProductDetail',
          component: ProductDetail,
        },
        {
          path: 'cart',
          name: 'cart',
          component: CartView,
        },
      ],
    },
    {
      path: '/:catchAll(.*)', // Menangkap semua rute yang tidak ditemukan
      name: 'not-found',
      component: NotFoundView, // Komponen halaman 404
    },
  ],
});

export default router;
