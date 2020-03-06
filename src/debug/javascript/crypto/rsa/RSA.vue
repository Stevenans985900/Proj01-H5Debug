<template>
  <div class="zz-page">RSA</div>
</template>

<script>
import './enc/security'

/**
 * http://localhost:8800/#/js/enc/rsa
 */
export default {
  name: 'RSA',
  mounted () {
    console.log('RSA')
    /* eslint-disable */
    const exponent = '010001'
    const modules = '00'
    const getRsaCode = (str) => {
      debugger
      const key = RSAUtils.getKeyPair(exponent, '', modules)
      const rsaCode = RSAUtils.encryptedString(key, str)
      return rsaCode
    }
    // console.log(getRsaCode('123456'))
  }
}
</script>
<style scoped>

</style>
