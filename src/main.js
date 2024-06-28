import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

import "./index.css";
import router from "./router/index";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    availableLocales: ["en", "de"],
    messages: messages,
});

const globalOptions = {
    mode: "auto",
};

const app = createApp(App);

app.component("VueTelInput", VueTelInput);
app.use(i18n);
app.use(router);
app.mount("#app");
