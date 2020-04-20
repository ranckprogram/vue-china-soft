<template>
  <div class="home-header">
    <header class="wrapper">
      <el-row>
        <el-col :span="6">
          <router-link to="/home">
            <img src="@/assets/images/home-logo.png" alt class="logo" />
          </router-link>
        </el-col>
        <el-col :span="12">
          <el-menu
            :default-active="currentMenu"
            class="home-menu"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="dealCenter">处理中心</el-menu-item>
            <el-submenu index="make">
              <template slot="title">制造培训</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="safeStudy">安全学习</el-menu-item>
            <el-menu-item index="safeCheck">安全检查</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6">
          <div class="btn-box">
            <template v-if="isLogin">
              <el-badge :value="12" class="item">
                <el-button plain round size="small" icon="el-icon-message-solid">消息</el-button>
              </el-badge>
              <el-dropdown style="margin-left: 20px" @command="handleClickAccountMenu">
                <span class="el-dropdown-link">
                  <el-button plain round size="small" icon="el-icon-s-custom">账户</el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in accountMenu" :key="item.id">
                    <div style="min-width: 155px">{{item.title}}</div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
            <template v-else>
              <el-button plain round size="small" class="btn-login">登录</el-button>
              <el-button plain round size="small">快速注册</el-button>
            </template>
          </div>
        </el-col>
      </el-row>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      currentMenu: "dealCenter",
      accountMenu: [
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
      ]
    };
  },
  methods: {
    handleSelect(menu) {
      console.log(menu);
      this.$router.push({ name: "HomeList", query: { menu } });
    },
    handleClickAccountMenu(command) {
      console.log(command);
    }
  }
};
</script>

<style lang="stylus">
.home-header {
  height: 60px;
  background: $primaryColor;

  .logo {
    display: block;
    width: 180px;
    height: 24px;
    margin: 18px 0 1px -20px;
  }

  .el-menu {
    background: $primaryColor;
  }

  .el-menu-item {
    color: #fff;
    opacity: 0.8;

    &.is-active, &:hover {
      color: #fff !important;
      background: inherit !important;
      opacity: 1;
    }
  }

  .el-submenu {
    .el-submenu__title {
      color: #fff !important;

      &.is-active, &:hover {
        background: inherit !important;
      }
    }
  }

  .el-menu--horizontal>.el-menu-item.is-active {
    border-color: #fff;
  }

  .btn-box {
    text-align: right;
    padding: 12px 0;

    .el-button {
      color: $primaryColor;
    }

    .btn-login {
      color: #fff;
      background: inherit;
    }
  }
}
</style>