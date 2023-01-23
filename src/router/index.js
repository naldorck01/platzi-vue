import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import routeList from "@/router/routeList.js"

const router = createRouter({
  history: createWebHistory(),
  //history: createWebHashHistory(),
  routes: routeList
})

router.beforeEach((to, from) => {
  if(to.meta.isPrivate) {
    console.log("Private route")
    //return { name: "login"}
  } else {
    console.log("Public route")
  }

  return true
})
export default router