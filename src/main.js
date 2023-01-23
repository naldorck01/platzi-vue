import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import { Icon } from "@iconify/vue"

import store from "@/store/vuex"

import "@/assets/css/reset.css"
import "@/assets/main.css"

const app = createApp(App)

app.use(router)
app.use(store)
app.component("Icon", Icon)

app.mount("#app")
