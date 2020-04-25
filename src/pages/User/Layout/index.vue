<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header class="layout-header">
      <img src="@/assets/images/logo.png" alt />
    </el-header>
    <el-container>
      <el-aside width="240px">
        <el-menu>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">活动管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
  

<script>
export default {};
</script>

<style lang="stylus" scoped>
.layout-header {
  background: $primaryColor;
}
</style>