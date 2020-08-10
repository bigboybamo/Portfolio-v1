import Vue from "vue";
import VueRouter from "vue-router";
import Lander from "./components/Lander.vue";
import thankyou from "./components/thank-you.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Lander",
    component: Lander,
  },
  {
    path: "/thank-you",
    name: "thankyou",
    component: thankyou,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
