<template>
  <div class="wechat-login">
    <h1>微信登录</h1>
    <img src="../../assets/images/qcode.png" alt />
    <p>请使用微信扫描二维码登录</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.wechat-login {
  text-align: center;

  img {
    width: 213px;
    height: 213px;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
}
</style>