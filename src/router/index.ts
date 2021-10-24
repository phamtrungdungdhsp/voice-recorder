import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RecordingPage from '../pages/RecordingPage/index.vue';
import RecordingInformationPage from '../pages/RecordingInformationPage/index.vue';
import ListRecordPage from '../pages/ListRecordPage/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'RecordingPage',
    component: RecordingPage
  },
  {
    path: '/information/:id',
    name: 'RecordingInformation',
    component: RecordingInformationPage
  },
  {
    path: '/list',
    name: 'List',
    component: ListRecordPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
