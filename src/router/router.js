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
const ScreenIndex = () => import('./../debug/css/solution/screen/ScreenIndex')
const CssLess = () => import('./../debug/css/frame/less/CssLess.vue')
const CssSass = () => import('./../debug/css/frame/sass/CssSass.vue')
const CssScss = () => import('./../debug/css/frame/scss/CssScss.vue')
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
    },
    { // css@TextIndex
      path: '/css/style/text',
      name: 'TextIndex',
      component: () => import('./../debug/css/style/text/TextIndex')
    },
    { // css@TextGeneral
      path: '/css/style/text/general',
      name: 'TextGeneral',
      component: () => import('./../debug/css/style/text/TextGeneral')
    },
    { // css@TextEllipsis
      path: '/css/style/text/ellipsis',
      name: 'TextEllipsis',
      component: () => import('./../debug/css/style/text/TextEllipsis')
    },
    { // css@TextAlign
      path: '/css/style/text/align',
      name: 'TextEllipsis',
      component: () => import('./../debug/css/style/text/TextAlign')
    },
    {
      path: '/css/screen',
      name: 'ScreenIndex',
      component: ScreenIndex
    },
    {
      path: '/css/frame/less',
      name: 'CssLess',
      component: CssLess
    },
    {
      path: '/css/frame/sass',
      name: 'CssSass',
      component: CssSass
    },
    {
      path: '/css/frame/scss',
      name: 'CssScss',
      component: CssScss
    },
    { // -------------------------------- HTML start --------------------------------
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
    },
    {
      path: '/js/es5',
      name: 'JavaScript',
      component: JavaScript
    },
    { // js@CORSSolution
      path: '/js/solution/cors',
      name: 'CORSSolution',
      component: () => import('./../debug/javascript/solution/CORS/CORSSolution.vue')
    },
    {
      path: '/H5Super/JsSuper/JavaScript/ForBasic',
      name: 'ForBasic',
      component: ForBasic
    },
    { // js@TypeIndex
      path: '/js/base/type',
      name: 'TypeIndex',
      component: () => import('./../debug/javascript/base/type/TypeIndex')
    },
    { // js@ArrayBasic
      path: '/js/base/type/array/base',
      name: 'ArrayBasic',
      component: () => import('./../debug/javascript/base/type/array/ArrayBasic')
    },
    { // js@StringTest
      path: '/js/base/type/string/base',
      name: 'StringTest',
      component: () => import('./../debug/javascript/base/type/string/StringTest')
    },
    { // js@ES6
      path: '/js/es6',
      name: 'ES6',
      component: () => import('./../debug/javascript/es6/0/ES6')
    }, {
      path: '/js/es6/class',
      name: 'ClazzIndex',
      component: () => import('./../debug/javascript/es6/clazz/ClazzIndex')
    }, {
      path: '/js/es6/class/base',
      name: 'ClassTest',
      component: () => import('./../debug/javascript/es6/clazz/ClassTest')
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
