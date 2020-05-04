<template>
  <div class="search-bar">
    <div class="search-deal">
      <el-input placeholder="请输入课程标题"/>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button icon="el-icon-search" @click="drawer =true">高级</el-button>
    </div>
    <el-button type="primary">新增课程</el-button>
    <el-drawer title="高级搜索" :visible.sync="drawer" size="670px">
      <el-form
        :model="searchParams"
        ref="form"
        status-icon
        label-width="100px"
        style="width: 500px"
      >
        <el-form-item label="题目难度">
          <el-input type="difficulty" v-model="searchParams.difficulty" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目难度">
          <el-input type="difficulty" v-model="searchParams.difficulty" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目难度">
          <el-input type="difficulty" v-model="searchParams.difficulty" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目难度">
          <el-input type="difficulty" v-model="searchParams.difficulty" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目难度">
          <el-input type="difficulty" v-model="searchParams.difficulty" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="drawer-footer">
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      searchParams: {
        difficulty: ""
      }
    };
  },
  methods: {
    resetForm() {},
    submitForm() {}
    // handleClose() {}
  }
};
</script>

<style lang="stylus">
.search-bar {
  padding: 10px 0;
  overflow: hidden;

  .search-deal {
    float: right;

    .el-input {
      width: 290px;
      margin-right: 10px;
    }
  }
}

.drawer-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 20px;
  padding-right: 20px;
  text-align: right;
  border-top: #eee 1px solid;
}
</style>