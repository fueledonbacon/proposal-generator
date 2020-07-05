import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueCroppie from 'vue-croppie';
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import 'croppie/croppie.css'; // import the croppie css manually
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use(CKEditor);
Vue.use(VueCroppie);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
