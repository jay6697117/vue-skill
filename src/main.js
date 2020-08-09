import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import loading from './components/Loading';
import toast from './components/Toast';

Vue.config.productionTip = false;

Vue.prototype.$loading = loading;
Vue.prototype.$toast = toast;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
