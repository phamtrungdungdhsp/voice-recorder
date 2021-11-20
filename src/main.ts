import { createApp } from "vue";
import App from "./App.vue";
import 'boxicons';
import "./index.scss";
import router from "./router";

createApp(App).use(router).mount("#app");
