<template>
  <div class="message">
    <el-card>
      <el-table :data="tableData">
        <el-table-column prop="content" label="内容"></el-table-column>
        <el-table-column prop="time" label="时间" width="180"></el-table-column>

        <el-table-column width="180" align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleClickView(scope.$index, scope.row)">查看</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="message-page">
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
      currentPage: 1,
      tableData: [
        {
          content:
            "欢迎使用软件系统管理您公司的业务，欢迎使用软件系统管理您公司的",
          time: "2020-04-26",
          status: true
        },
        {
          content:
            "欢迎使用软件系统管理您公司的业务，欢迎使用软件系统管理您公司的",
          time: "2020-04-26",
          status: false
        },
        {
          content:
            "欢迎使用软件系统管理您公司的业务，欢迎使用软件系统管理您公司的",
          time: "2020-04-26",
          status: false
        },
        {
          content:
            "欢迎使用软件系统管理您公司的业务，欢迎使用软件系统管理您公司的",
          time: "2020-04-26",
          status: false
        }
      ]
    };
  },
  methods: {
    handleClickView() {
      this.$router.push({ name: "UserMessageDetail", params: { id: 1 } });
    },
    handleDelete() {
      this.$confirm("此操作将永久删除该消息, 是否继续?", "提示", {
        confirmButtonText: "取消",
        cancelButtonText: "确定",
        type: "warning"
      })
        .then(() => {})
        .catch(() => {});
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="stylus">
.message-page {
  text-align: right;
  padding: 40px 0;
}</style>