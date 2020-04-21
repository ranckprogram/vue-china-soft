<template>
  <div class="form-login">
    <h1>验证码登录</h1>
    <el-form :model="form" status-icon :rules="rules" ref="ruleForm" class="login-form">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入手机号码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入验证码" v-model="form.code">
          <template slot="append">获取验证码</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin('ruleForm')" class="btn-login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{}],
        password: [{}]
      }
    };
  },
  methods: {
    handleLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({ name: "HomePage" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus"></style>