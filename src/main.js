import { createApp } from "vue";
import App from "./App.vue";

import AlertModal from "@/components/common/AlertModal.vue";
const app = createApp(App);
app.component("AlertModal", AlertModal);
app.mount("#app");
