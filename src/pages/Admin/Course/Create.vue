<template>
  <div class="create-course">
    <el-card class="card">
      <section class="create-course-inner">
        <el-form ref="form" :model="form" label-width="80px" class="create-course-form">
          <el-form-item label="课程名称">
            <el-input v-model="form.name" placeholder="请输入课程标题" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="课程简介">
            <el-input type="textarea" rows="5" v-model="form.desc" placeholder="请输入答案"></el-input>
          </el-form-item>
          <el-form-item label="课程封面">
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

        <create-chapter
          v-bind="chapter"
          @on-click-chapter="handleClickChapter"
          @on-click-subsection="handleClickSubsection"
          v-for="chapter in chapterList"
          :key="chapter.id"
        />
        <modal-upload :show.sync="show" />
      </section>
    </el-card>
  </div>
</template>

<script>
import CreateChapter from "./modules/CreateChapter";
import ModalUpload from "./modules/ModalUpload";
export default {
  components: {
    "create-chapter": CreateChapter,
    "modal-upload": ModalUpload
  },
  data() {
    return {
      show: false,
      imageUrl: "",
      form: {},
      chapterList: [
        {
          id: 1,
          title: "导论",
          children: [
            {
              id: 1,
              name: "第一节伸展运动",
              hasVideo: false
            },
            {
              id: 2,
              name: "第一节伸展运动",
              hasVideo: true
            },
            {
              id: 3,
              name: "第一节伸展运动",
              hasVideo: false
            }
          ]
        },
        {
          id: 2,
          title: "热力学三大定律",
          children: [
            {
              id: 1,
              name: "第一节伸展运动",
              hasVideo: false
            },
            {
              id: 2,
              name: "第一节伸展运动",
              hasVideo: true
            },
            {
              id: 3,
              name: "第一节伸展运动",
              hasVideo: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    beforeAvatarUpload() {},
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleClickChapter(type, id) {
      console.log(type, id);
    },
    handleClickSubsection(type, row, id) {
      console.log(type, row, id);
      switch (type) {
        case "upload":
          this.show = true;
          break;
      }
    }
  }
};
</script>

<style lang="stylus">
.create-course {
  .create-course-inner {
    width: 1200px;
  }

  .card {
    padding: 26px;
  }

  .create-course-form {
    padding: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

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
}
</style>