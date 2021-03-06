import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';
import Vuelidate from 'vuelidate';
import Meta from 'vue-meta';
import svg4everybody from 'svg4everybody';
import { VLazyImagePlugin } from 'v-lazy-image';
import vClickOutside from 'v-click-outside';
import Ripple from 'vue-ripple-directive';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/filters';

import 'normalize.css/normalize.css'; //  reset CSS
import '@/styles/layout.sass'; // global CSS

import { isIE11 } from './utils/device';

require('intersection-observer'); // for svg

if (isIE11) { // ie11 support
  require('es6-shim'); // eslint-disable-line
  require('element-closest-polyfill'); // eslint-disable-line
}

Vue.config.productionTip = false;

Vue.use(VueScrollReveal);
Vue.use(Vuelidate);
Vue.use(Meta);
svg4everybody();
Vue.use(VLazyImagePlugin);
Vue.use(vClickOutside);
Ripple.color = 'rgba(0, 0, 0, 0.07)';
Vue.directive('ripple', Ripple);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
