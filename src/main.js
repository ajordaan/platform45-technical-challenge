import Vue from "vue";
import App from "./App.vue";
import "./assets/main.scss";
import VueSmoothScroll from "vue2-smooth-scroll";

Vue.use(VueSmoothScroll, { duration: 800 });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
