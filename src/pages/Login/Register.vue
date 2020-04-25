<template>
  <div class="register">
    <layout>
      <h1>注册账号</h1>
      <el-form :model="form" status-icon :rules="rules" ref="ruleForm" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入手机号码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入验证码" v-model="form.code">
            <template slot="append">获取验证码</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('ruleForm')" class="btn-login">快速注册</el-button>
        </el-form-item>
      </el-form>
      <p class="agree">
        点击「快速注册」即代表同意
        <el-link @click="dialogTableVisible=true">《用户服务协议》</el-link>
      </p>
      <el-button class="btn-gologin" type="text" @click="$router.push({path: 'login'})">已有账号？直接登录</el-button>
    </layout>
    <el-dialog title="《用户服务协议》" :visible.sync="dialogTableVisible">
      <div style="max-height: 500px;overflow: auto">
        用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议
        用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议
        用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议用户服务协议
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Layout from "./Layout";
export default {
  components: {
    layout: Layout
  },
  data() {
    return {
      dialogTableVisible: false,
      form: {
        phone: "",
        code: "",
        passwor: ""
      },
      rules: {}
    };
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({ name: "login" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus">
.agree {
  font-size: 14px;
  color: #999;

  a {
    vertical-align: bottom;
  }
}

.btn-gologin {
  display: block;
  margin: 20px auto;
}
</style>