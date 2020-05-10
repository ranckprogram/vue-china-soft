<template>
  <div class="test-search-bar">
    <el-button type="primary" style="height: 40px">新建试题</el-button>

    <el-form :inline="true" :model="search" class="test-search-form">
      <el-form-item label="题型">
        <el-input v-model="search.type" placeholder="请选择"></el-input>
      </el-form-item>
      <el-form-item label="难度">
        <el-select v-model="search.difficulty" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属">
        <el-select v-model="search.chapter" placeholder="请选择课/章/节">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-input v-model="search.title" placeholder="请输入试题标题" />
      <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: {}
    };
  },
  methods: {
    onSubmit() {
      this.$emit("on-search", this.search);
    }
  }
};
</script>

<style lang="stylus">
.test-search-bar {
  display: flex;
}

.test-search-form {
  text-align: right;
  margin-left: auto;

  .el-form-item__conten, .el-input {
    width: 180px;
  }
}
</style>