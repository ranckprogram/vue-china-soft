<template>
  <el-table :data="children" style="width: 100%" class="create-chapter-table">
    <el-table-column>
      <template slot="header" slot-scope="scope">
        <span class="title">章节一</span>
        <el-input v-model="title" size="mini" placeholder="请输入章节名称" style="width: 260px" />
      </template>
      <template slot-scope="scope">
        <el-input v-model="scope.row.name" placeholder="请输入小节名称" style="width: 320px" />
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-button
          type="primary"
          size="medium"
          plain
          @click="$emit('on-click-chapter', 'addSubsection', id)"
        >添加小节</el-button>
        <el-button size="medium" @click="$emit('on-click-chapter', 'moveUp', id)">上移</el-button>
        <el-button size="medium" @click="$emit('on-click-chapter', 'moveDown', id)">下移</el-button>
        <el-button
          type="danger"
          size="medium"
          plain
          @click="$emit('on-click-chapter', 'deleteSubsection', id)"
        >删除章节</el-button>
      </template>
      <template slot-scope="scope">
        <span v-if="scope.row.hasVideo" style="color: #67C23A">视频设置成功</span>
        <span v-else style="color: #999">请上传视频</span>
        <el-button
          size="mini"
          icon="el-icon-upload"
          @click="$emit('on-click-subsection', 'upload', scope.row,id)"
          style="margin-left: 10px"
        ></el-button>
        <el-button
          size="mini"
          icon="el-icon-arrow-up"
          @click="$emit('on-click-subsection', 'moveUp', scope.row,id)"
        ></el-button>
        <el-button
          size="mini"
          icon="el-icon-arrow-down"
          @click="$emit('on-click-subsection', 'moveDown', scope.row,id)"
        ></el-button>
        <el-button
          size="mini"
          icon="el-icon-delete"
          @click="$emit('on-click-subsection', 'delete', scope.row,id)"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    id: {
      type: String | Number,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    children: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus">
.create-chapter-table {
  margin-top: 20px;
  border: 1px solid #EBEEF5;

  th {
    background-color: #EBEEF5;
  }

  tr {
    text-indent: 10px;
  }

  .title {
    font-size: 16px;
    color: #303030;
    padding-right: 20px;
  }
}
</style>