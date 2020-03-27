<template>

</template>

<script>
/**
 * html/verify
 * --- AA
 *
 *
 * Router
 * --- http://localhost:8801/#/html/verify
 *
 * issue
 * #1.
 * ---
 */

/**
 * ---手机号/身份证/银行卡格式化
 * --- 四位一组
 * --- https://blog.csdn.net/web2007/article/details/22796501
 value.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ") //四位数字一组，以空格分割
 *
 */

/**
 * ---金额格式化
 * --- https://www.jb51.net/article/166566.htm
 * --- https://www.jb51.net/article/61585.htm
 *
 */

/**
 * ---手机号/身份证/银行卡隐私省略
 * --- 使用正则
 * --- https://blog.csdn.net/weixin_44306005/article/details/104291919
 //js隐藏手机号
 console.log('18337193650'.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));
 //js隐藏身份证号
 console.log('350424870506202'.replace(/(\d{3})\d{4}((\d{4})||(\d{3}\w{1))/, '$1****$2'));
 console.log('41142519980602458X'.replace(/(\d{6})\d{8}((\d{4})||(\d{3}\w{1))/, '$1********$2'));
 console.log('411425199806024581'.replace(/(\d{6})\d{8}((\d{4})||(\d{3}\w{1))/, '$1********$2'));
 *
 * 使用for操作
 * --- https://www.cnblogs.com/lr393993507/p/5841655.html
 */

/**
 * ---手机号验证/身份证验证有效
 * --- http://caibaojian.com/regexp-example.html
 手机：^1(3|4|5|7|8)\d{9}$或者^1[34578]\d{9}$
 提取信息中的网络链接:(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?
 提取信息中的邮件地址:\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*
 提取信息中的图片链接:(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?
 提取信息中的IP地址:(\d+)\.(\d+)\.(\d+)\.(\d+)
 提取信息中的中国电话号码（包括移动和固定电话）:(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}
 提取信息中的中国邮政编码:[1-9]{1}(\d+){5}
 提取信息中的中国身份证号码:\d{18}|\d{15}
 提取信息中的整数：\d+
 提取信息中的浮点数（即小数）：(-?\d*)\.?\d+
 提取信息中的任何数字 ：(-?\d*)(\.\d+)?
 提取信息中的中文字符串：[\u4e00-\u9fa5]*
 提取信息中的双字节字符串 (汉字)：[^\x00-\xff]*
 */

export default {
  name: 'VerifyTs'
}
</script>

<style scoped>

</style>
