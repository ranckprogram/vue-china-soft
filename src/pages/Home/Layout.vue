<template>
  <div class="home-page">
    <home-header />

    <router-view class="content"></router-view>

    <home-footer />
  </div>
</template>

<script>
import HomeHeader from "./modules/HomeHeader";
import HomeFooter from "./modules/HomeFooter";
export default {
  components: {
    "home-header": HomeHeader,
    "home-footer": HomeFooter
  }
};
</script>

<style lang="stylus">
.home-page {
  display: flex;
  height: 100%;
  flex-flow: column;

  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>