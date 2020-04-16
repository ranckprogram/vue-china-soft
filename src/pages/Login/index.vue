<template>
  <div class="login">
    <div class="login-content">
      <header>
        <img src="../../assets/images/logo.png" alt class="logo" />
      </header>

      <el-card class="box-card">
        <!-- <reset-success /> -->
        <!-- <form-login /> -->
        <component :is="current"></component>
        <el-divider>或</el-divider>

        <div class="other-way">
          <div class="other-item" v-if="showPhoneLoginBtn">
            <el-button type @click="handleLoginWay('form-login')" class="btn-way">验证码登录</el-button>
          </div>
          <div class="other-item" v-if="showFormLoginBtn">
            <el-button type @click="handleLoginWay('form-login')" class="btn-way">密码登录</el-button>
          </div>
          <div class="other-item" v-if="showWachatLoginBtn">
            <el-button type @click="handleLoginWay('wechat-login')" class="btn-way">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconwechat" />
              </svg>微信登录
            </el-button>
          </div>
        </div>
      </el-card>
    </div>
    <footer class="footer">成都高新科技提供技术服务支持</footer>
  </div>
</template>  

<script>
import ResetSuccess from "./ResetSuccess";
import FormLogin from "./FormLogin";
import WeChatLogin from "./WeChatLogin";

export default {
  components: {
    "reset-success": ResetSuccess,
    "form-login": FormLogin,
    "wechat-login": WeChatLogin
  },
  computed: {
    showPhoneLoginBtn() {
      return true;
    },
    showFormLoginBtn() {
      return this.current !== "form-login";
    },
    showWachatLoginBtn() {
      return this.current !== "wechat-login";
    }
  },
  data() {
    return {
      current: "wechat-login"
    };
  },
  methods: {
    handleLoginWay(loginWay) {
      this.current = loginWay;
    }
  }
};
</script>

<style lang="stylus">
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/bg-login.png');
  background-size: 100% 600px;
  background-position: center top;
  background-repeat: no-repeat;

  .logo {
    margin-bottom: 70px;
  }

  h1 {
    text-align: center;
    font-size: 18px;
    color: #333;
    margin: 10px 10px 20px;
  }

  .login-content {
    width: 380px;
    margin: 260px auto 0;

    .tip {
      margin-top: -16px;
      margin-bottom: 20px;

      .forget {
      }

      .register {
        float: right;
      }
    }

    .btn-login {
      display: block;
      width: 100%;
    }

    .other-item {
      margin-bottom: 8px;
    }

    .btn-way {
      width: 100%;

      .icon {
        margin-right: 6px;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 72px;
    width: 100%;
    font-size: 14px;
    color: #999;
    text-align: center;
  }
}
</style>