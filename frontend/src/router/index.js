import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AppPage from "../views/AppPage.vue"; // Vérifie que ce fichier existe

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/AppPage", name: "AppPage", component: AppPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
