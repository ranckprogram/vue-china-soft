<template>
  <el-card class="create-exam">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="考试名称">
        <el-input v-model="form.name" placeholder="请输入考试标题" style="width: 420px;"></el-input>
      </el-form-item>
      <el-form-item label="考试描述">
        <el-input type="textarea" :rows="5" placeholder="请输入" v-model="form.descrip"></el-input>
      </el-form-item>
      <el-form-item label="考试试卷">
        <el-select v-model="form.paper" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考试时间">
        <el-input-number v-model="form.minute" :min="1" :max="1000" label="描述文字"></el-input-number>
        <span class="minute">分钟</span>
      </el-form-item>
      <el-form-item label="封面图片">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span class="upload-tips">建议尺寸宽772px 高516px，jpg或png格式，大小2M以内</span>
      </el-form-item>
    </el-form>
    <div class="create-exam-footer">
      <el-button>取消</el-button>
      <el-button type="primary">确定</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        minute: 120
      },
      imageUrl: ""
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    beforeAvatarUpload() {},
    handleAvatarSuccess() {}
  }
};
</script>

<style lang="stylus">
.create-exam {
  position: relative;
  padding: 20px 0 200px;
  margin-top: 20px;

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 148px;
    height: 148px;
    line-height: 148px;
    text-align: center;
  }

  .avatar {
    width: 148px;
    height: 148px;
    display: block;
  }

  .upload-tips {
    font-size: 14px;
    color: #C0C4CC;
    float: left;
    margin-top: -110px;
    margin-left: 170px;
  }

  .minute {
    font-size: 14px;
    color: #666;
    padding-left: 15px;
  }

  .create-exam-footer {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 35px 25px;
    border-top: 1px solid #EBEEF5;
    text-align: right;
  }
}
</style>