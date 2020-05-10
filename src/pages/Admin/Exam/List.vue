<template>
  <div class="exam-list">
    <header style="padding: 10px 0 24px">
      <search-bar @on-search="handleSearch" />
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
            <el-link type="success" v-if="scope.row.status === 'finish'">已结束</el-link>
            <el-link type="warning" v-if="scope.row.status === 'ready'">未考</el-link>
            <el-link type="danger" v-if="scope.row.status === 'process'">进行中</el-link>
          </template>
        </el-table-column>
        <el-table-column width="160">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              size="small"
              :disabled="scope.row.status === 'ready'"
            >查看</el-button>
            <el-button plain size="small">考试</el-button>
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
          status: "process"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "ready"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          status: "finish"
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

    handleClick(row) {
      if (row.status === "process") {
        this.$router.push({ name: "AdminExamViewProcess", params: { id: 1 } });
      }
      if (row.status === "finish") {
        this.$router.push({ name: "AdminExamViewFinish", params: { id: 1 } });
      }
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="stylus">
.exam-list {
  .page {
    padding: 40px 0;
    text-align: right;
  }
}
</style>