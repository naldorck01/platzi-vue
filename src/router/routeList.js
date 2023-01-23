import LoginView from "@/views/public/LoginView.vue"

const routeList = [
  {
    path: "/",
    component: LoginView,
    name: "login",
    meta: {
      isPrivate: false,
    },
  },
  {
    path: "/app",
    // alias: ["/dashboard", "/home"],
    name: "app",
    component: () => {
      const url = "private"
      return import(/* @vite-ignore */ `../views/${url}/DashboardView.vue`)
    },
    meta: {
      isPrivate: true,
    },
    children: [
      { path: "/user", name: "user", component: () => import(/* @vite-ignore */ "@/views/private/UserView.vue") },
      {
        path: "/order",
        name: "order",
        component: () => import(/* @vite-ignore */ "@/views/private/OrderListView.vue"),
      },
      {
        path: "/order/:id",
        name: "order_id",
        component: () => import(/* @vite-ignore */ "@/views/private/OrderDetailView.vue"),
        props: true,
      },
      {
        path: "/shippinggroups",
        name: "shippinggroups",
        component: () => import(/* @vite-ignore */ "@/views/private/SGListView.vue"),
      },
      {
        path: "/shippinggroups/:id",
        name: "shippinggroups_id",
        component: () => import(/* @vite-ignore */ "@/views/private/SGDetailView.vue"),
      },
    ],
  },

  /*TODO: 404 */
]

export default routeList
