import { createRouter, createWebHistory } from "vue-router";
import HomeR from "./views/HomeR.vue";

const routes = [{ path: "/", name: "HomeR", component: HomeR }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
