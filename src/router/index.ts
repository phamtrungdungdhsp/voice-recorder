import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import SecurityCheck from "pages/SecurityCheck/index.vue";
import EventPage from "pages/EventPage.vue";
import EventInformation from "pages/EventInformation.vue";
import EventImage from "pages/EventImage.vue";
import EventPublishing from "pages/EventPublishing.vue";
import EventDetail from "pages/EventDetail.vue";
import UserPage from "pages/UserPage.vue";
import VideoPage from "pages/VideoPage.vue";
import ConfirmEmail from "pages/ConfirmEmail.vue";
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
  },
  {
    path: "/user",
    name: "UserPage",
    component: UserPage
  },
  {
    path: "/video",
    name: "VideoPage",
    component: VideoPage
  },
  {
    path: "/email",
    name: "ConfirmEmail",
    component: ConfirmEmail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
