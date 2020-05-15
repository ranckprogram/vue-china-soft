<template>
  <div class="approval">
    <header style="padding: 10px 0 24px">
      <search-bar :hasCreate="false" @on-search="handleSearch" />
    </header>
    <el-card>
      <el-table :data="data" style="width: 100%">
        <el-table-column prop="name" label="考试名称"></el-table-column>
        <el-table-column prop="course" label="课程"></el-table-column>
        <el-table-column prop="chapter" label="章"></el-table-column>
        <el-table-column prop="subsection" label="节"></el-table-column>
        <el-table-column prop="difficulty" label="难度"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <span style="color: #E6A23C" v-if="scope.row.status === 'wait'">待评审</span>
            <span style="color: #67c23a" v-else>已评审</span>
          </template>
        </el-table-column>
        <el-table-column width="80">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              size="small"
              v-if="scope.row.status !== 'wait'"
            >查看</el-button>
            <el-button type="primary" plain size="small" v-else>评分</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import SearchBar from "./modules/SearchBar";

export default {
  components: {
    "search-bar": SearchBar
  },
  data() {
    return {
      data: [
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "wait"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "wait"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "wait"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "wait"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "wait"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "wait"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "success"
        }
      ]
    };
  },
  methods: {
    handleSearch(params) {
      console.log(params);
    },
    handleClick() {
      this.$router.push({ name: "ApprovalInfo" });
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="stylus">
.approval {
  .page {
    padding: 40px 0;
    text-align: right;
  }
}
</style>