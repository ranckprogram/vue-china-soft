<template>
  <div class="course-exam">
    <header style="padding: 10px 0 24px">
      <el-input placeholder="请输入试题标题" style="width: 290px;margin-right: 10px" />
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </header>
    <el-card>
      <el-table :data="data" style="width: 100%">
        <el-table-column prop="stem" label="题干"></el-table-column>
        <el-table-column prop="course" label="课程"></el-table-column>
        <el-table-column prop="chapter" label="章"></el-table-column>
        <el-table-column prop="subsection" label="节"></el-table-column>
        <el-table-column prop="difficulty" label="难度"></el-table-column>
        <el-table-column prop="time" label="试卷引用次数"></el-table-column>
        <el-table-column prop="accuracy" label="答对率"></el-table-column>
        <el-table-column width="160">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="small">查看</el-button>
            <el-button type="primary" plain size="small">编辑</el-button>
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
export default {
  data() {
    return {
      data: [
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        }
      ]
    };
  },
  methods: {
    handleClick() {},
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="stylus">
.course-exam {
  .page {
    padding: 40px 0;
    text-align: right;
  }
}
</style>