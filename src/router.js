import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import(/* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/promotion",
      name: "promotion",
      component: () => import(/* webpackChunkName: "promotion" */ "./views/Promotion.vue")
    }
  ]
});
