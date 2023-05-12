import { createRouter, createWebHistory } from "vue-router";

import PageHome from '../views/PageHome.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
    meta: { hasAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router