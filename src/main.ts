import { createApp } from "vue";
import App from "./App.vue"
import CarouselPlugin from "./CarouselPlugin";

const app = createApp(App)
app.use(CarouselPlugin)
app.mount("#app")