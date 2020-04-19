<template>
  <section class="category">
    <div class="wrapper">
      <header>
        <el-row>
          <el-col :span="20">
            <h3>{{title}}</h3>
          </el-col>
          <el-col :span="4" style="text-align: right">
            <el-link :href="url">
              查看更多
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </el-col>
        </el-row>
      </header>
      <div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "安全学习"
    },
    url: {
      type: String,
      default: "javascript:;"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.category {
  padding-top: 30px;
  padding-bottom: 68px;

  header {
    padding: 20px 0 24px;
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
}
</style>