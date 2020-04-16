<template>
  <div class="form-login">
    <h1>登录</h1>
    <el-form :model="form" status-icon :rules="rules" ref="ruleForm" class="login-form">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入手机号码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-row class="tip">
        <el-col :span="12">
          <el-button type="text" class="forget">忘记密码</el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="text" class="register">快速注册</el-button>
        </el-col>
      </el-row>
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
          alert("submit!");
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