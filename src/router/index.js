import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../pages/HomeView.vue';
import AboutView from '../pages/AboutView.vue';


const routes = [
  { path: '/', component: HomeView, meta: { title: 'Situs Jual Beli Online' } },
  { path: '/about', component: AboutView, meta: { title: 'About' } },
 
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
