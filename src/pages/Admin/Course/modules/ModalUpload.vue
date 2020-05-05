<template>
  <el-dialog
    :visible.sync="visible"
    width="730px"
    title="上传视频"
    :show-close="false"
    @close="$emit('update:show', false)"
  >
    <section>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="上传方式">
          <el-radio v-model="form.way" label="local">本地上传</el-radio>
          <el-radio v-model="form.way" label="link">外链地址</el-radio>
        </el-form-item>
        <el-form-item label="选择上传" v-if="form.way === 'local'">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="form.fileList"
          >
            <el-button type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传rmvb/mp4文件，且不超过500MB</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="外链地址" v-if="form.way === 'link'">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
    </section>

    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="visible = false">确 定</el-button>
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
      form: {
        way: "local",
        fileList: []
      }
    };
  },
  methods: {
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {}
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