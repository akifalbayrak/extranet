import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

const globalOptions = {
    mode: "auto",
};

const app = createApp(App);

app.component("VueTelInput", VueTelInput);

app.use(router).mount("#app");
