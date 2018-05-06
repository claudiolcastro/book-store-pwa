import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';

import Vue from 'vue';
import App from './App';
import router from './router';

import './helpers/floatActionButton';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
