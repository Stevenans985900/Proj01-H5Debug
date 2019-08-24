import Vue from 'vue'
import Router from 'vue-router'

// -home
const Home = () => import('./../page/Home')
const ZIndex = () => import('../page/ZIndex')
const ZDemo = () => import('../page/Zdemo/ZDemo')
const IssuePage = () => import('../components/demo/issue/PageIssue')
const PageIndex = () => import('../components/demo/single/PageIndex')
const H5DevTools = () => import('../page/dev-tools/H5DevTools')
// -web stack content
const H5Super = () => import('./../debug/0/H5Super')
// --css
const CssSuper = () => import('./../debug/css/0/CssSuper')
const StyleIndex = () => import('./../debug/css/style/StyleIndex')
const AnimIndex = () => import('./../debug/css/style/animate/AnimIndex')
const CSSAnimate = () => import('./../debug/css/style/animate/CSSAnimate')
const LayoutIndex = () => import('./../debug/css/style/layout/LayoutIndex')
const TextIndex = () => import('./../debug/css/style/text/TextIndex')
const ScreenIndex = () => import('./../debug/css/solution/screen/ScreenIndex')
// --html
const HtmlSuper = () => import('./../debug/html/0/HtmlSuper')
const LabelIndex = () => import('./../debug/html/label/LabelIndex')
const DivIndex = () => import('./../debug/html/label/div/DivIndex')
const DivElementProps = () => import('./../debug/html/label/div/DivElementProps')
const DivTest = () => import('./../debug/html/label/div/DivTest')
const i01DivSpan = () => import('./../debug/html/label/div/issue/i01DivSpan')
const LabelUIIndex = () => import('./../components/label-demo/LabelUIIndex')
const IframeBoxDemo = () => import('./../components/label-demo/IframeBoxDemo')
const ImageBoxDemo = () => import('./../components/label-demo/ImageBoxDemo')
// --javascript
const JsSuper = () => import('./../debug/javascript/0/JsSuper')
const JavaScript = () => import('./../debug/javascript/base/0/JavaScript')
const BaseIndex = () => import('./../debug/javascript/base/BaseIndex')
const ForBasic = () => import('./../debug/javascript/base/statement/for/ForBasic')
const TypeIndex = () => import('./../debug/javascript/base/type/TypeIndex')
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
      path: '/z',
      name: 'ZIndex',
      component: ZIndex
    }, {
      path: '/index/demo',
      name: 'ZDemo',
      component: ZDemo
    }, {
      path: '/issue',
      name: 'IssuePage',
      component: IssuePage
    }, {
      path: '/index',
      name: 'PageIndex',
      component: PageIndex
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
      path: '/css/style/anim',
      name: 'AnimIndex',
      component: AnimIndex
    }, {
      path: '/css/style/anim/sty',
      name: 'CSSAnimate',
      component: CSSAnimate
    }, {
      path: '/css/style/layout',
      name: 'LayoutIndex',
      component: LayoutIndex
    }, {
      path: '/css/style/text',
      name: 'TextIndex',
      component: TextIndex
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
    }, {
      path: '/html/label/div',
      name: 'DivIndex',
      component: DivIndex
    }, {
      path: '/html/label/div/props',
      name: 'DivElementProps',
      component: DivElementProps
    }, {
      path: '/html/label/div/test',
      name: 'DivTest',
      component: DivTest
    }, {
      path: '/html/label/div/is01',
      name: 'i01DivSpan',
      component: i01DivSpan
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
      path: '/js/es5',
      name: 'JavaScript',
      component: JavaScript
    }, {
      path: '/H5Super/JsSuper/JavaScript/ForBasic',
      name: 'ForBasic',
      component: ForBasic
    }, {
      path: '/js/base/type',
      name: 'TypeIndex',
      component: TypeIndex
    }, {
      path: '/js/base/type/array',
      name: 'ArrayBasic',
      component: ArrayBasic
    }, {
      path: '/js/es6',
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
