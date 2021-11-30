import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SecurityCheck from "pages/SecurityCheck/index.vue";
import MainPage from "pages/MainPage.vue";
import CustomizeCV from "pages/CustomizeCV.vue";
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "SecurityCheck",
  //   component: SecurityCheck,
  // }
  {
    path: "/",
    name: "MainPage",
    component: MainPage
  },
  {
    path: "/cv",
    name: "CustomizeCV",
    component: CustomizeCV
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
