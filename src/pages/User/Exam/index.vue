<template>
  <div class="exam">
    <el-tabs v-model="activeName" @tab-click="handleClickTab" class="user-course-status">
      <el-tab-pane label="将要参加" name="will"></el-tab-pane>
      <el-tab-pane label="正在考试" name="exam"></el-tab-pane>
      <el-tab-pane label="已经完成" name="finish"></el-tab-pane>
      <el-tab-pane label="不及格" name="fail"></el-tab-pane>
    </el-tabs>

    <el-card>
      <el-table :data="tableData">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" label-width="80px" class="exam-table-expand">
              <el-form-item label="课程名称">
                <span>{{ props.row.title }}</span>
              </el-form-item>
              <el-form-item label="所属章">
                <span>{{ props.row.chapter }}</span>
              </el-form-item>
              <el-form-item label="所属节">
                <span>{{ props.row.section }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="名称" width="240"></el-table-column>
        <el-table-column prop="content" label="考查内容"></el-table-column>
        <el-table-column prop="status" label="考试状态" width="180">
          <template slot-scope="scope">
            <el-link type="primary" v-if="scope.row.status === 'wait'">待考</el-link>
            <el-link type="warning" v-if="scope.row.status === 'exam'">正在考试</el-link>
            <el-link type="success" v-if="scope.row.status === 'finish'">已完成</el-link>
            <el-link type="danger" v-if="scope.row.status === 'fail'">不及格</el-link>
          </template>
        </el-table-column>
        <el-table-column width="180" align="right">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              v-if="scope.row.status === 'wait'"
              @click="handleJoin(scope.$index, scope.row)"
            >参加考试</el-button>
            <el-button
              type="warning"
              size="mini"
              v-if="scope.row.status === 'exam'"
              @click="handleJoin(scope.$index, scope.row)"
            >继续考试</el-button>
            <el-button
              size="mini"
              v-if="scope.row.status === 'finish'"
              @click="handleJoin(scope.$index, scope.row)"
            >查看试卷</el-button>
            <el-button
              type="danger"
              size="mini"
              v-if="scope.row.status === 'fail'"
              @click="handleJoin(scope.$index, scope.row)"
            >重新考试</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="exam-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
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
      activeName: "will",
      currentPage: 1,
      tableData: [
        {
          title: "网络安全技术基础一阶段考试 ",
          content: "容TCPIP协议介绍",
          status: "wait",
          chapter: "IP地址分类",
          section: "网络安全技术基础一阶段考试"
        },
        {
          title: "网络安全技术基础一阶段考试 ",
          content: "容TCPIP协议介绍",
          status: "exam",
          chapter: "IP地址分类",
          section: "网络安全技术基础一阶段考试"
        },
        {
          title: "网络安全技术基础一阶段考试 ",
          content: "容TCPIP协议介绍",
          status: "wait",
          chapter: "IP地址分类",
          section: "网络安全技术基础一阶段考试"
        },
        {
          title: "网络安全技术基础一阶段考试 ",
          content: "容TCPIP协议介绍",
          status: "finish",
          chapter: "IP地址分类",
          section: "网络安全技术基础一阶段考试"
        },
        {
          title: "网络安全技术基础一阶段考试 ",
          content: "容TCPIP协议介绍",
          status: "wait",
          chapter: "IP地址分类",
          section: "网络安全技术基础一阶段考试"
        },
        {
          title: "网络安全技术基础一阶段考试 ",
          content: "容TCPIP协议介绍",
          status: "fail",
          chapter: "IP地址分类",
          section: "网络安全技术基础一阶段考试"
        }
      ]
    };
  },
  methods: {
    handleClickTab(tab) {
      console.log(tab.name);
    },
    handleJoin() {
      console.log("join");
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="stylus">
.exam-table-expand {
  padding: 0;
  margin-bottom: -20px;
}

.exam-page {
  text-align: right;
  padding: 40px 0;
}
</style>