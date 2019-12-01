// https://www.cnblogs.com/wisewrong/p/9642264.html
/* eslint-disable */
/**
 * 数组去重01
 * ---for...of + Object
 */
const delRepeatArr01 = (arr) => {
  let resArr = []
  let obj = {}
  for (let item of arr) {
    // !resArr.includes(item) && resArr.push(item) // 14996/14933
    // !resArr.indexOf(item) && resArr.push(item) // 13/24/22/24
    if (!obj[item]) { // 36/46/34
      resArr.push(item)
      obj[item] = 1
    }
  }
  return resArr
}

/**
 * 数组去重02
 * ---for...of + includes()
 */
const delRepeatArr02 = (arr) => {
  let resArr = []
  // let resArr = new Array(10000)
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    // !resArr.includes(item) && resArr.push(item) // 14359/14352
    !resArr.indexOf(item) && resArr.push(item) // 5/4/6
    // !resArr.indexOf(item) && (resArr[i] = item) // 1612/1615
    // if (!obj[item]) { // 16/16/17
    //   resArr.push(item)
    //   obj[item] = 1
    // }
  }
  return resArr
}

/**
 * 数组去重03
 * ---for...each
 */
const delRepeatArr03 = (arr) => {
  let resArr = []
  let obj = {}
  arr.forEach(item => {
    // !resArr.includes(item) && resArr.push(item) // 14518/14670
    // !resArr.indexOf(item) && resArr.push(item) // 6/7/6
    if (!obj[item]) { // 17/18/20
      resArr.push(item)
      obj[item] = 1
    }
  })
  return resArr
}

/**
 * 数组去重04
 * ---Array.sort()先排序，再去重
 */
const delRepeatArr04 = (arr) => {
  arr = arr.sort()
  let resArr = [arr[0]]
  for (let i = 1, len = arr.length; i < len; i++) { // 28/31/38
    arr[i] !== arr[i - 1] && resArr.push(arr[i])
  }
  return resArr
}

/**
 * 数组去重05
 * ---for...for
 */
const delRepeatArr05 = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++) { // 25572/26325
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        len-- // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
        j--
      }
    }
  }
  return arr
}

/**
 * 数组去重06
 * ---new Set() Set 的成员具有唯一性
 */
const delRepeatArr06 = (arr) => {
  return Array.from(new Set([...arr])) // 124/132/132
}

/**
 * 数组去重07
 * ---Array.filter() + indexOf
 */
const delRepeatArr07 = (arr) => {
  return arr.filter((item, index) => { // 14707/14363
    return arr.indexOf(item) === index
  })
}

export {
  delRepeatArr01,
  delRepeatArr02,
  delRepeatArr03,
  delRepeatArr04,
  delRepeatArr05,
  delRepeatArr06,
  delRepeatArr07
}
