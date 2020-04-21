<template>
  <div class="login-layout">
    <div class="login-content">
      <header>
        <img src="../../assets/images/logo.png" alt class="logo" />
      </header>
      <el-card class="box-card">
        <slot></slot>
      </el-card>
    </div>

    <footer class="footer">成都高新科技提供技术服务支持</footer>
  </div>
</template>

<script>
export default {};
</script>


<style lang="stylus">
.login-layout {
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

  .box-card {
    padding: 0 10px;
  }

  .login-content {
    width: 400px;
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