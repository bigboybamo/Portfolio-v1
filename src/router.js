import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Landing",
      component: () => import("./components/Lander"),
    },
    {
      path: "/thank-you",
      name: "Thank You",
      component: () => import("./components/thank-you"),
    },
  ],
});
export default router;
