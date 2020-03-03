import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem("token");
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')