/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createApp } from "vue";
import DKToast from "vue-dk-toast";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(DKToast, {
  duration: 3000,
  positionY: "top",
  positionX: "center",
  disableClick: true,
  styles: {
    color: "#fff",
    backgroundColor: "#bf0101",
  },
  max: 3,
}).use(store).use(router)
  .mount("#app");
