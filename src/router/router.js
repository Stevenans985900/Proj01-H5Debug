import Vue from 'vue'
import Router from 'vue-router'

// -home
const Home = () => import('./../page/Home')
// -web stack content
const H5Super = () => import('./../debug/0/H5Super')
const CssSuper = () => import('./../debug/css/0/CssSuper')
const HtmlSuper = () => import('./../debug/html/0/HtmlSuper')
// --
const JsSuper = () => import('./../debug/javascript/0/JsSuper')
const ES6 = () => import('./../debug/javascript/es6/0/ES6')
const PromiseBasic = () => import('./../debug/javascript/es6/promise/PromiseBasic')
const AsyncBasic = () => import('./../debug/javascript/es6/async/AsyncBasic')

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/H5Super',
      name: 'H5Super',
      component: H5Super
    }, {
      path: '/H5Super/CssSuper',
      name: 'CssSuper',
      component: CssSuper
    }, {
      path: '/H5Super/HtmlSuper',
      name: 'HtmlSuper',
      component: HtmlSuper
    }, {
      path: '/H5Super/JsSuper',
      name: 'JsSuper',
      component: JsSuper
    }, {
      path: '/H5Super/JsSuper/ES6',
      name: 'ES6',
      component: ES6
    }, {
      path: '/H5Super/JsSuper/ES6/PromiseBasic',
      name: 'PromiseBasic',
      component: PromiseBasic
    }, {
      path: '/H5Super/JsSuper/ES6/AsyncBasic',
      name: 'AsyncBasic',
      component: AsyncBasic
    }
  ]
})
export default router
