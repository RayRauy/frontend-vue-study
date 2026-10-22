import "./assets/main.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(vuetify);

app.mount("#app");
