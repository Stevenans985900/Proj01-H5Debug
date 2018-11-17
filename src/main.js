// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/single/store'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import './../static/css/common.css'
import './../static/css/page-animation.css'

Vue.config.productionTip = false

// Bus center
window.bus = new Vue()

Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})

// new Vue({
//   // el: '#app',
//   router
// }).$mount('#app')
