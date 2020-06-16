import Vue from 'vue'

import App from './App'
import store from './config/store'

import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')