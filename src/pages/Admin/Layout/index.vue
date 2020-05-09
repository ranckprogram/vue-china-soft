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
      <div class="user-admin">
        <el-badge :value="12" class="item">
          <el-button
            plain
            round
            size="small"
            icon="el-icon-message-solid"
            @click="$router.push({name: 'UserMessage'})"
          >消息</el-button>
        </el-badge>
        <el-dropdown style="margin-left: 20px" @command="handleClickAccountMenu">
          <span class="el-dropdown-link">
            <el-button plain round size="small" icon="el-icon-s-custom">账户</el-button>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in accountMenu" :key="item.id" :command="item.command">
              <div style="min-width: 155px">{{item.title}}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="240px" class="layout-menu">
        <el-menu @select="handleSelectMenu" :default-active="activeMenu">
          <el-menu-item index="/admin/course">
            <i class="el-icon-s-management"></i> 课程管理
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-order"></i> 试题管理
            </template>
            <el-menu-item index="/admin/test">试题库</el-menu-item>
            <el-menu-item index="/admin/test/create">新建试题</el-menu-item>
          </el-submenu>
            <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-claim"></i> 考试管理
            </template>
            <el-menu-item index="2-1">试卷库</el-menu-item>
            <el-menu-item index="2-1">新增试卷</el-menu-item>
            <el-menu-item index="2-1">考试</el-menu-item>
            <el-menu-item index="2-2">新建考试</el-menu-item>
          </el-submenu>
            <el-menu-item index="/admin/statis">
            <i class="el-icon-s-data"></i> 统计分析
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
    this.accountMenu = [
      {
        id: 0,
        title: "我的课程",
        url: "javascript:;",
        command: "course"
      },
      {
        id: 1,
        title: "我的考试",
        url: "javascript:;",
        command: "exam"
      },
      {
        id: 2,
        title: "修改个人信息",
        url: "javascript:;",
        command: "changeInfo"
      },
      {
        id: 3,
        title: "切换管理后台",
        url: "javascript:;",
        command: "changeAdmin"
      },
      {
        id: 4,
        title: "退出当前账号",
        url: "javascript:;",
        command: "logout"
      }
    ];
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
    },
    handleClickAccountMenu(menu) {
      console.log(menu);
      if (menu === "changeInfo") {
        this.$router.push({ name: "UserInfo" });
      }
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

  .user-admin {
    float: right;
    padding: 12px 0;
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