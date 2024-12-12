import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../pages/HomeView.vue";
import AboutView from "../pages/AboutView.vue";
import ProductsView from "../components/Products/ProductsDetail.vue";
import LoginView from "../pages/LoginView.vue";

const routes = [
  { path: "/", component: HomeView, meta: { title: "Situs Jual Beli Online" } },
  { path: "/about", component: AboutView, meta: { title: "About" } },
  {
    path: "/product/:id",
    component: ProductsView,
    meta: { title: "Products" },
  },
  {
    path: "/login",
    component: LoginView,
    meta: { title: "Login", layout: "AuthLayout" },
  },
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
