import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import SecurityCheck from "pages/SecurityCheck/index.vue";
import EventPage from "pages/EventPage.vue";
import EventInformation from "pages/EventInformation.vue";
import EventImage from "pages/EventImage.vue";
import EventPublishing from "pages/EventPublishing.vue";
import EventDetail from "pages/EventDetail.vue";
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "SecurityCheck",
  //   component: SecurityCheck,
  // }
  {
    path: "/",
    name: "EvenPage",
    component: EventPage
  },
  {
    path: "/information",
    name: "EventInformation",
    component: EventInformation
  },
  {
    path: "/image",
    name: "EventImage",
    component: EventImage
  },
  {
    path: "/publish",
    name: "EventPublishing",
    component: EventPublishing
  },
  {
    path: "/detail",
    name: "EventDetail",
    component: EventDetail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
