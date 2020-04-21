<template>
  <div class="register">
    <layout>
      <reset-success v-if="isSuccess" />
      <template v-else>
        <h1>重置密码</h1>
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
            <el-input
              type="password"
              v-model="form.password"
              placeholder="请输入密码"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit('ruleForm')" class="btn-login">提交</el-button>
          </el-form-item>
        </el-form>
        <el-button class="btn-gologin" type="text" @click="$router.push({path: 'login'})">返回登录</el-button>
      </template>
    </layout>
  </div>
</template>

<script>
import Layout from "./Layout";
import ResetSuccess from "./ResetSuccess";

export default {
  components: {
    layout: Layout,
    "reset-success": ResetSuccess
  },
  data() {
    return {
      isSuccess: false,
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
          this.isSuccess = true;
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