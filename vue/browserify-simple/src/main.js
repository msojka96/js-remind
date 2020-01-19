import Vue from "vue";
import App from "./App.vue";
import VueMyDirective from "./VueMyDirective.js";

Vue.use(VueMyDirective);

new Vue({
  el: "#app",
  render: h => h(App)
});
