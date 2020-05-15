<template>
  <div class="paper-list">
    <header style="padding: 10px 0 24px">
      <search-bar :hasStatus="false" @on-search="handleSearch" />
    </header>
    <el-card>
      <el-table :data="data" style="width: 100%">
        <el-table-column prop="name" label="试卷名称"></el-table-column>
        <el-table-column prop="course" label="课程"></el-table-column>
        <el-table-column prop="chapter" label="章"></el-table-column>
        <el-table-column prop="subsection" label="节"></el-table-column>
        <el-table-column prop="difficulty" label="难度"></el-table-column>
        <el-table-column prop="time" label="使用次数"></el-table-column>
        <el-table-column width="220">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="small">查看</el-button>
            <el-button @click="$router.push({name: 'AdminExamPaperEdit'})" type="primary" plain size="small">编辑</el-button>
            <el-button type="danger" plain size="small">删除</el-button>
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
          accuracy: "100%"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          accuracy: "100%"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          accuracy: "100%"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          accuracy: "100%"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          accuracy: "100%"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          accuracy: "100%"
        },
        {
          name: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          accuracy: "100%"
        }
      ]
    };
  },
  methods: {
    handleSearch(params) {
      console.log(params);
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="stylus">
.paper-list {
  .page {
    padding: 40px 0;
    text-align: right;
  }
}
</style>