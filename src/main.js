import Vue from 'vue'
import Vant from 'vant';
import Meta from 'vue-meta'
import Storage from 'vue-ls'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

 
const options = {
  namespace: 'dfrh__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
};
Vue.use(Storage, options);
Vue.use(Meta)
Vue.use(Vant);

import './index.less';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
