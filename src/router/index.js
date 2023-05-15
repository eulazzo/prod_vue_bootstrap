import { createRouter, createWebHistory } from "vue-router";

import PageHome from "../views/PageHome.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
    meta: { hasAuth: true },
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductDetails,
    meta: { hasAuth: true },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
