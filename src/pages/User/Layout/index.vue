<template>
  <el-container style="height: 100%; border: 1px solid #eee" class="user">
    <el-header class="layout-header">
      <img src="@/assets/images/logo.png" alt class="logo" />

      <el-menu
        class="line-menu"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelectLineMenu"
      >
        <el-menu-item index="1">安全学习</el-menu-item>
        <el-menu-item index="2">我的工作台</el-menu-item>
        <el-menu-item index="3">安全检查</el-menu-item>
        <el-menu-item index="4">安全检查</el-menu-item>
        <el-menu-item index="5">处理中心</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="240px" class="layout-menu">
        <el-menu @select="handleSelectMenu" :default-active="activeMenu">
          <el-menu-item index="/user/course">
            <i class="el-icon-s-management"></i> 我的课程
          </el-menu-item>
          <el-menu-item index="/user/exam">
            <i class="el-icon-s-claim"></i> 我的考试
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <el-breadcrumb separator="/" class="bread">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">活动管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>我的课程</el-breadcrumb-item>
          <el-breadcrumb-item>我的考试</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="user-content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
  

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeMenu: "/user/course"
    };
  },
  methods: {
    handleSelectLineMenu(e) {
      console.log(e);
      this.activeIndex = e;
    },
    handleSelectMenu(e) {
      this.activeMenu = e;
      this.$router.push({ path: e });
    }
  }
};
</script>

<style lang="stylus">
.layout-header {
  background: $primaryColor;

  .logo {
    display: inline-block;
    height: 36px;
    margin: 12px 20px 12px -30px;
  }

  .line-menu {
    display: inline-block;
  }
}

.layout-menu {
  .el-menu {
    height: 100%;
  }
}

.bread {
  margin-top: -20px;
  margin-left: -20px;
  line-height: 20px;
  padding: 20px;
  border-bottom: 1px solid #E4E7ED;
  margin-bottom: 10px;
}

.user-content {
  background-color: #FDFDFF;
}
</style>