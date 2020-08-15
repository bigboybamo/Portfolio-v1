import Vue from "vue";
import VueRouter from "vue-router";
import Lander from "./components/Lander.vue";
import contact from "./components/contact.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Lander",
    component: Lander,
  },
  {
    path:"/contact",
    name:"contact",
    component:contact
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
