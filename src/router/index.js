import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../pages/HomeView.vue';
import AboutView from '../pages/AboutView.vue';
import ProductsView from '../pages/Products/Show.vue';


const routes = [
  { path: '/', component: HomeView, meta: { title: 'Situs Jual Beli Online' } },
  { path: '/about', component: AboutView, meta: { title: 'About' } },
  { path: '/product/:id', component: ProductsView, meta: { title: 'Products' } },
 
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

// Update document title
router.afterEach((to) => {
  document.title = to.meta.title || "Default Title";
});

export default router;
