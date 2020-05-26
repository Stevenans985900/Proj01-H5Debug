<template>
  <div class="zz-page nav-site">
    <el-container>
      <el-header>导航页面</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <el-row>
            <el-col :span="24">
              <el-link :href="`http://${HOST}:30001/`" target="_blank">Google</el-link>
              <el-link :href="`http://${HOST}:30002/`" target="_blank" type="primary">Bing</el-link>
              <el-link :href="`http://${HOST}:30003/`" target="_blank" type="success">Github</el-link>
              <el-link :href="`http://${HOST}:30005/`" target="_blank" type="warning">StackOverflow</el-link>
              <el-link type="danger">危险链接</el-link>
              <el-link type="info">信息链接</el-link>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
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
 * --- http://localhost:8800/#/nav
 */

export default {
  name: 'NavSite',
  data () {
    return {
      // window.btoa('123')
      HOST: window.atob('NDUuNzYuMTA1LjIyMA==')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "nav-site.scss";
</style>
