import App from "./App.vue";
import Toast from "vue-toastification";
import { createApp } from "vue";
import "vue-toastification/dist/index.css";
import { registerPlugins } from "@/plugins";
import i18n from "./plugins/i18n";
const app = createApp(App);

registerPlugins(app);
app.use(Toast);
app.use(i18n);
app.mount("#app");
