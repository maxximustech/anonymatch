import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Particles from "particles.vue"
import VueMeta from 'vue-meta'
import VueOtp2 from 'vue-otp-2';
import Flicking from "@egjs/vue-flicking";
import Sticky from 'vue-sticky-directive'

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(VueMeta);
Vue.use(Particles);
Vue.use(VueOtp2);
Vue.use(Flicking);
Vue.use(Sticky)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
