import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./../page/Home')

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
export default router
