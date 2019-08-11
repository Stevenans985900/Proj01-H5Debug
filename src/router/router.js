import Vue from 'vue'
import Router from 'vue-router'

// -home
const Home = () => import('./../page/Home')
const ZIndex = () => import('../page/ZIndex')
const ZDemo = () => import('../page/Zdemo/ZDemo')
const H5DevTools = () => import('../page/dev-tools/H5DevTools')
// -web stack content
const H5Super = () => import('./../debug/0/H5Super')
const CssSuper = () => import('./../debug/css/0/CssSuper')
const StyleIndex = () => import('./../debug/css/style/StyleIndex')
const ScreenIndex = () => import('./../debug/css/solution/screen/ScreenIndex')
// --html
const HtmlSuper = () => import('./../debug/html/0/HtmlSuper')
const LabelIndex = () => import('./../debug/html/label/LabelIndex')
const LabelUIIndex = () => import('./../components/label-demo/LabelUIIndex')
const IframeBoxDemo = () => import('./../components/label-demo/IframeBoxDemo')
const ImageBoxDemo = () => import('./../components/label-demo/ImageBoxDemo')
// --javascript
const JsSuper = () => import('./../debug/javascript/0/JsSuper')
const JavaScript = () => import('./../debug/javascript/base/0/JavaScript')
const BaseIndex = () => import('./../debug/javascript/base/BaseIndex')
const ForBasic = () => import('./../debug/javascript/base/statement/for/ForBasic')
const ArrayBasic = () => import('./../debug/javascript/base/type/array/ArrayBasic')
const ES6 = () => import('./../debug/javascript/es6/0/ES6')
const PromiseBasic = () => import('./../debug/javascript/es6/promise/PromiseBasic')
const AsyncBasic = () => import('./../debug/javascript/es6/async/AsyncBasic')
const ArrowFun = () => import('./../debug/javascript/es6/fun/ArrowFun')
const ThreeIndex = () => import('./../debug/javascript/frame/threejs/ThreeIndex')

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    // 重定向配置
    // {
    //   path: '/',
    //   redirect: '/index'
    // },
    {
      path: '/index',
      name: 'ZIndex',
      component: ZIndex
    }, {
      path: '/index/demo',
      name: 'ZDemo',
      component: ZDemo
    }, {
      path: '/index/dev-tools',
      name: 'H5DevTools',
      component: H5DevTools
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, { // --------------------------------
      path: '/H5Super',
      name: 'H5Super',
      component: H5Super
    }, { // -------------------------------- CSS start --------------------------------
      path: '/css',
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
      path: '/html',
      name: 'HtmlSuper',
      component: HtmlSuper
    }, { // HTML Label index
      path: '/html/label',
      name: 'LabelIndex',
      component: LabelIndex
    }, { // HTML标签组件
      path: '/html/label-ui',
      name: 'LabelUIIndex',
      component: LabelUIIndex
    }, { // lable-ui@iframe
      path: '/html/label-ui/iframe',
      name: 'IframeBoxDemo',
      component: IframeBoxDemo
    }, { // lable-ui@image
      path: '/html/label-ui/image',
      name: 'ImageBoxDemo',
      component: ImageBoxDemo
    }, { // -------------------------------- JavaScript start --------------------------------
      path: '/js',
      name: 'JsSuper',
      component: JsSuper
    }, {
      path: '/js/base',
      name: 'BaseIndex',
      component: BaseIndex
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
    }, {
      path: '/js/frame/three',
      name: 'three',
      component: ThreeIndex
    }
  ]
})
export default router
