import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import Api from './api/axios.js';
Vue.prototype.$api = Api;
import './plugins/element.js'
import './assets/common.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
