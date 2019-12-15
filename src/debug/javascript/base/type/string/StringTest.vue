<template>
  <div class="zz-page">
    <!-- 1.字符串模板 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.String</div>
      <div class="st-str-sty1">
        String
      </div>
    </ZZBorderBox>
    <!-- 2.字符串模板 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">2.字符串模板</div>
      <div class="st-str-sty1">
        {{strTempInfo}}
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
import ZZBorderBox from '../../../../../components/zui/box/ZZBorderBox'

/**
 * H5工程@js/type/string
 * ---String 全局对象是一个用于字符串或一个字符序列的构造函数
 *
 * ref
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
 * ---优质博客
 * ---框架
 *
 * 场景归类
 * s01.基本属性方法
 * u01.字符串模板
 * i01.js字符串中英文字节长度
 * i02.字符串比较相等
 *
 * issue
 * #1.NG
 *
 * Router
 * ---http://localhost:8800/#/js/base/type/string/base
 */
export default {
  name: 'StringTest',
  components: {ZZBorderBox},
  data: () => {
    return {
      defText: 'string template',
      strTempInfo: ''
    }
  },
  created () {
    this.tsScene01()
    // this.useScene01()
    // this.ivScene02()
  },
  methods: {
    /**
     * 1.基本属性方法
     * ---字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法(没有通过 new 生成字符串对象实例)的字符串都是基本字符串
     */
    tsScene01 () {
      console.warn('tsScene01')
      // ---------------------------------------->构造方法
      // 创建对象
      // let defText = String('字符串模板')
      // let defText = new String('字符串模板')
      let defText = ' A字符串模板.jpg'

      // ---------------------------------------->基础属性
      // 返回了字符串的长度
      console.log('length', defText.length)

      // ---------------------------------------->单个字符
      // 返回特定位置的字符
      console.log('charAt', defText.charAt(1))
      // 返回表示给定索引的字符的Unicode的值
      console.log('charCodeAt', defText.charCodeAt(1))
      // 返回使用UTF-16编码的给定位置的值的非负整数
      console.log('codePointAt', defText.codePointAt(1))

      // ---------------------------------------->字符串搜索
      // 从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1
      console.log('indexOf', defText.indexOf('g'))
      // 从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1
      console.log('lastIndexOf', defText.lastIndexOf('g'))
      // 判断一个字符串里是否包含其他字符串
      console.log('includes', defText.includes('模板'))
      // 判断一个字符串的是否以给定字符串结尾，结果返回布尔值
      console.log('endsWith', defText.endsWith('jpg'))
      // 判断字符串的起始位置是否匹配其他字符串中的字符
      console.log('startsWith', defText.startsWith(' 字符'))
      // 按正则搜索
      // String.search(正则)
      // 使用正则表达式与字符串相比较
      // String.prototype.match()

      // ---------------------------------------->字符串编辑
      // 连接两个字符串文本，并返回一个新的字符串
      console.log('concat', defText.concat(' ABC'))
      // 返回指定拷贝次数的字符串
      console.log('repeat', defText.repeat(5))
      // 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串
      // 仅替换第一个
      console.log('replace', defText.replace('jpg', 'png'))
      // 通过指定字符数返回在指定位置开始的字符串中的字符
      console.log('substr', defText.substr(3, 6))
      // 返回在字符串中指定两个下标之间的字符
      console.log('substring', defText.substring(3, 6))
      // 摘取一个字符串区域，返回一个新的字符串
      console.log('slice', defText.slice(2, 5))
      // 通过分离字符串成字串，将字符串对象分割成字符串数组
      console.log('split', defText.split('.'))

      // ---------------------------------------->String工具
      // 从字符串的开始和结尾去除空格
      console.log('trim', defText.trim())
      // 将字符串转换成小写并返回
      console.log('toLowerCase', defText.toLowerCase())
      // 将字符串转换成大写并返回
      console.log('toUpperCase', defText.toUpperCase())

      // ---------------------------------------->其他
      console.log('str[]', defText[1])
      console.log('typeof', typeof defText)
    },

    /**
     * u1.字符串模板
     * --- 模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符
     * ref
     * --- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings
     */
    useScene01 () {
      let defText = '字符串模板'
      this.strTempInfo = `XXX ${defText} ,YYY ${this.defText}`
    },

    /**
     * i02.字符串比较相等
     * ---使用new String()创建的对象是object类型
     * ---使用""/String()创建的对象类型是string
     * ---两个新创建的object类型，值相同时也不相等；基本类型才相等
     * ref
     * --- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
     */
    ivScene02 () {
      /* eslint-disable */
      let zhText = '字符串模板'
      let enText = new String('字符串模板')
      let en1Text = new String('字符串模板')
      console.log('\'\' and String()', typeof zhText) // string
      console.log('new String()', typeof enText) // object

      console.log('\'\' == new String()', zhText == enText) // true
      console.log('\'\' === new String()', zhText === enText) // false
      console.log('new String() === new String()', enText === en1Text) // false
      console.log('new String() == new String()', enText == en1Text) // false

      console.log('new String().toString() === new String().toString()', enText.toString() === en1Text.toString()) // true
    },
    /**
     * i01.js字符串中英文字节长度
     * ---返回字符串中字符编码单元的数量，(UTF-16)
     * ref
     * --- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length
     */
    ivScene01 () {
      let zhText = '字符串模板'
      let enText = 'AAaaB'
      console.log(zhText, zhText.length)
      console.log(enText, enText.length)
    }
  }
}
</script>

<style scoped>
  .st-str-sty1 {
  }
  .st-str-sty2 {
  }
</style>
