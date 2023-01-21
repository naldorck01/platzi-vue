import { createRouter, createWebHistory } from "vue-router"
import routeList from "@/router/routeList.js"

const router = createRouter({
  history: createWebHistory(),
  routes: routeList
})

export default router