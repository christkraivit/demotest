import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mixins";

import vueHeadful from "vue-headful";
import VueProgressBar from "vue-progressbar";
import AOS from "aos"
import "aos/dist/aos.css"
AOS.init();

Vue.config.devtools = true;
Vue.config.performance = true;
Vue.config.productionTip = false;

Vue.component("vue-headful", vueHeadful);


// Vue Progress Bar
const options = {
  color: "#34e028",
  failedColor: "#e51616",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "top",
  inverse: false
};
Vue.use(VueProgressBar, options);
Vue.prototype.$line = "@GCC789";
Vue.prototype.$phone = "093-2906286";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
