import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SecurityCheck from "pages/SecurityCheck/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "SecurityCheck",
    component: SecurityCheck,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
