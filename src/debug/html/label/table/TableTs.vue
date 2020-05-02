<template>
  <div class="zz-page">
    <zz-border-box :height="'50vw'"
                   :title="'1.Table例子'">
      <div class="tt-ts1">
        <table class="tableBox">
          <tbody>
          <tr>
            <th>标题1</th>
            <th>标题2</th>
            <th>标题3</th>
            <th>标题4</th>
          </tr>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{index + 1}}</td>
            <td>数据1</td>
            <td>数据2</td>
            <td>数据3数据3数据3数据</td>
          </tr>
          </tbody>
        </table>
      </div>
    </zz-border-box>
  </div>
</template>

<script>
/**
 * H5工程@HTML/label
 * ---
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see bDemo.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see bDemo.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see bDemo.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/html/label/table
 */

export default {
  name: 'TableTs',
  data () {
    return {
      list: [{}, {}, {}, {}, {}]
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style scoped lang="scss">
 @import "table-ts.scss";
</style>
