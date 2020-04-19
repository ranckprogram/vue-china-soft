<template>
  <div class="banner">
    <section class="wrapper">
      <el-carousel trigger="click" height="400px" style="width:100%" class="banner-content">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="@/assets/images/banner.jpg" alt />
        </el-carousel-item>
      </el-carousel>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  z-index: 10;
  height: 450px;
  background-image: url('../../../assets/images/bg-banner.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  padding: 24px 0;
  margin-bottom: -20px;
  box-sizing: border-box;

  .banner-content {
    border-radius: 8px;
  }
}
</style>