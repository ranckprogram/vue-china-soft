<template>
  <el-dialog
    :visible.sync="visible"
    width="900px"
    :show-close="false"
    @close="$emit('update:show', false)"
  >
    <div slot="title" class="modal-header">
      <div class="modal-search">
        <el-input placeholder="请输入企业名称" />
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <h1>选择企业</h1>
    </div>
    <section>
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="企业名称" prop="company"></el-table-column>
        <el-table-column label="企业负责人" width="120" prop="name" align="center"></el-table-column>
        <el-table-column label="课程数量" width="120" prop="count" align="center"></el-table-column>
      </el-table>
      <footer class="modal-table-page">
        <el-pagination
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </footer>
    </section>
    <section class="modal-select-time">
      <el-form>
        <el-form-item label="设定时间">
          <el-time-picker
            is-range
            v-model="timeRange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          ></el-time-picker>
        </el-form-item>
      </el-form>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      tableData: [
        {
          id: 0,
          company: "成都柒点云创科技有限公司 ",
          name: "杨小虎",
          count: 55
        },
        {
          id: 1,
          company: "成都柒点云创科技有限公司 ",
          name: "杨小虎",
          count: 55
        },
        {
          id: 2,
          company: "成都柒点云创科技有限公司 ",
          name: "杨小虎",
          count: 55
        },
        {
          id: 3,
          company: "成都柒点云创科技有限公司 ",
          name: "杨小虎",
          count: 55
        },
        {
          id: 4,
          company: "成都柒点云创科技有限公司 ",
          name: "杨小虎",
          count: 55
        },
        {
          id: 5,
          company: "成都柒点云创科技有限公司 ",
          name: "杨小虎",
          count: 55
        }
      ],
      timeRange: []
    };
  },
  methods: {
    handleSelectionChange() {}
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        this.visible = this.show;
      }
    }
  }
};
</script>

<style lang="stylus">
.modal-header {
  padding: 10px 0;

  h1 {
    font-size: 18px;
    color: #333;
    font-weight: normal;
  }
}

.modal-search {
  float: right;

  .el-input {
    width: 226px;
    margin-right: 10px;
  }
}

.modal-table-page {
  text-align: right;
  padding: 14px 0 30px;
}

.modal-select-time {
  border-top: 2px solid #ddd;
  padding-top: 36px;
}
</style>