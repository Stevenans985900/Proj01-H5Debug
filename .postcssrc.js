// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'plugins': {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    'autoprefixer': {},
    // 'postcss-pxtorem': { // 1.px2rem
    //   rootValue: 75, // 结果为：比如元素宽750px,最终换算成10rem,rootValue
    //   unitPrecision: 3, // 小数位数
    //   minPixelValue: 1, // 小于或等于`1px`时不转换
    //   propList: ['*']
    // },
    // 'postcss-px-to-viewport': { // 2.px2vw
    //   unitToConvert: 'px', // 默认值`px`，需要转换的单位
    //   viewportWidth: 750, // 视窗的宽度,对应设计稿宽度
    //   viewportHeight: 667, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
    //   unitPrecision: 2, // 指定`px`转换为视窗单位值的小数位数
    //   propList: ['*'], // 转化为vw的属性列表
    //   viewportUnit: 'vw', // 指定需要转换成视窗单位
    //   fontViewportUnit: 'vw', // 字体使用的视窗单位
    //   selectorBlaskList: ['.ignore-'], // 指定不需要转换为视窗单位的类
    //   mediaQuery: false, // 允许在媒体查询中转换`px`
    //   minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
    //   replace: true, // 是否直接更换属性值而不添加备用属性
    //   exclude: [], // 忽略某些文件夹下的文件或特定文件
    //   landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
    //   landscapeUnit: 'vw', // 横屏时使用的单位
    //   landscapeWidth: 1920 // 横屏时使用的视窗宽度
    // },
    // 'postcss-viewport-units': {} // 2.px2vw,给vw、vh、vmin和vmax做适配的操作,这是实现vw布局必不可少的一个插件
  }
}
