import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import ProductsIndex from '../views/ProductsIndex.vue';
import ProductNew from '../views/ProductNew.vue';
import ProductsShow from '../views/ProductsShow.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products-index',
    component: ProductsIndex
  },
  {
    path: "/products/new",
    name: 'product-new',
    component: ProductNew
  },
  {
    path: "/products/:id",
    name: 'product-show',
    component: ProductsShow
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
