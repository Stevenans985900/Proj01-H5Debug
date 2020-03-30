// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/single/store'
import router from './router/router'
import VLog from './plugins/libs/VLog'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import './../static/css/common.css'
import './../static/css/page-animation.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import ZZBorderBox from './components/zui/box/ZZBorderBox/index'
Vue.config.productionTip = false

// Bus center
window.bus = new Vue()

Vue.use(VLog)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(VueClipboard)
Vue.use(ZZBorderBox)

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
