import Vue from 'vue'
import Router from 'vue-router'

// -home
const Home = () => import('./../page/Home')
// -web stack content
const H5Super = () => import('./../debug/0/H5Super')
const CssSuper = () => import('./../debug/css/0/CssSuper')
const StyleIndex = () => import('./../debug/css/style/StyleIndex')
const ScreenIndex = () => import('./../debug/css/solution/screen/ScreenIndex')
// --html
const HtmlSuper = () => import('./../debug/html/0/HtmlSuper')
const LabelIndex = () => import('./../debug/html/label/LabelIndex')
// --javascript
const JsSuper = () => import('./../debug/javascript/0/JsSuper')
const JavaScript = () => import('./../debug/javascript/base/0/JavaScript')
const ForBasic = () => import('./../debug/javascript/base/statement/for/ForBasic')
const ArrayBasic = () => import('./../debug/javascript/base/type/array/ArrayBasic')
const ES6 = () => import('./../debug/javascript/es6/0/ES6')
const PromiseBasic = () => import('./../debug/javascript/es6/promise/PromiseBasic')
const AsyncBasic = () => import('./../debug/javascript/es6/async/AsyncBasic')
const ArrowFun = () => import('./../debug/javascript/es6/fun/ArrowFun')

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
    }, { // -------------------------------- CSS start --------------------------------
      path: '/H5Super/CssSuper',
      name: 'CssSuper',
      component: CssSuper
    }, {
      path: '/css/style',
      name: 'StyleIndex',
      component: StyleIndex
    }, {
      path: '/css/screen',
      name: 'ScreenIndex',
      component: ScreenIndex
    }, { // -------------------------------- HTML start --------------------------------
      path: '/H5Super/HtmlSuper',
      name: 'HtmlSuper',
      component: HtmlSuper
    }, { // HTML Label index
      path: '/html/label',
      name: 'LabelIndex',
      component: LabelIndex
    }, { // -------------------------------- JavaScript start --------------------------------
      path: '/H5Super/JsSuper',
      name: 'JsSuper',
      component: JsSuper
    }, {
      path: '/H5Super/JsSuper/JavaScript',
      name: 'JavaScript',
      component: JavaScript
    }, {
      path: '/H5Super/JsSuper/JavaScript/ForBasic',
      name: 'ForBasic',
      component: ForBasic
    }, {
      path: '/H5Super/JsSuper/JavaScript/ArrayBasic',
      name: 'ArrayBasic',
      component: ArrayBasic
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
    }, {
      path: '/H5Super/JsSuper/ES6/ArrowFun',
      name: 'ArrowFun',
      component: ArrowFun
    }
  ]
})
export default router
