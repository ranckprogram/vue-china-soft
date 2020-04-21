<template>
  <div class="reset-success">
    <div class="icon-success">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconxiaoxi-chenggong" />
      </svg>
    </div>

    <h1>重置成功</h1>
    <p>恭喜您密码已找回</p>
    <el-button class="btn-block" @click="$router.push({path: 'login'})">立即登录</el-button>
  </div>
</template>
<script>
export default {};
</script>

<style lang="stylus">
.reset-success {
  padding: 40px 0 36px; 
  text-align: center;

  .icon-success {
    font-size: 52px;
  }

  p {
    margin-bottom: 40px;
  }
}
</style>