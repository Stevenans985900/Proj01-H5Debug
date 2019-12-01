<template>
  <div></div>
</template>

<script>
export default {
  name: 'Object',
  mounted () {
    let obj = {
      key1: 1,
      key2: 2,
      key3: 3
    }

    // 1.js获取对象的属性个数
    console.log(Object.getOwnPropertyNames(obj).length)
    console.log(Object.keys(obj).length)
  }
}
</script>

<style scoped>

</style>
