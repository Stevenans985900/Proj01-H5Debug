<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.例子'">
      <div class="bd-ts1">
        <select name="pets"
                @change="onChange01">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>
    </zz-border-box>
  </div>
</template>

<script>
/**
 * html/select
 * --- 选择
 *
 * ---常见场景
 * ---1.
 * ---
 *
 * ref:
 * --- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select
 *
 * issue
 * #1.
 * ---
 *
 * Router
 * --- http://localhost:8800/#/html/label/select
 */

export default {
  name: 'SelectTs',
  data () {
    return {
      data1: 10
    }
  },
  methods: {
    onChange01 (ev) {
      console.log(ev.target.value)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
