import LoginView from "@/views/public/LoginView.vue"

const url_base_private = "../views/private/"

const routeList = [
  { path: "/", component: LoginView },
  {
    path: "/app",
    component: () => import(/* @vite-ignore */ `${url_base_private}DashboardView.vue`),
    children: [
      { path: "/user", component: () => import(/* @vite-ignore */ `${url_base_private}UserView.vue`) },
      { path: "/order", component: () => import(/* @vite-ignore */ `${url_base_private}OrderListView.vue`) },
      {
        path: "/order/:id",
        component: () => import(/* @vite-ignore */ `${url_base_private}OrderDetailView.vue`),
      },
      { path: "/shippinggroups", component: () => import(/* @vite-ignore */ `${url_base_private}SGListView.vue`) },
      {
        path: "/shippinggroups/:id",
        component: () => import(/* @vite-ignore */ `${url_base_private}SGDetailView.vue`),
      },
    ],
  },

  /*TODO: 404 */
]

export default routeList
