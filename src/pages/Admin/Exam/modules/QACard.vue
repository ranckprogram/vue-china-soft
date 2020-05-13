<template>
  <el-card class="qa-card">
    <div slot="header" class="qa-card-title">
      <span>考生编号 {{number}}</span>
    </div>
    <h3 class="title">
      {{title}}
      <span>({{score}}分)</span>
    </h3>
    <div class="answer">{{answer}}</div>
    <div class="grade">
      分值
      <el-input-number v-model="grade" size="mini" style="margin-left: 10px"></el-input-number>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    score: {
      type: Number,
      default: 0
    },
    answer: {
      type: String,
      default: ""
    },
    grade: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="stylus">
.qa-card {
  position: relative;

  &+.qa-card {
    margin-top: 15px;
  }

  .qa-card-title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    font-size: 16px;
    color: #303030;
    height: 60px;
    line-height: 20px;
    padding: 20px;
    background-color: #F5F7FA;
  }

  .title {
    font-size: 16px;
    color: #333;
    font-weight: normal;
    margin-top: 20px;

    span {
      color: #999;
    }
  }

  .answer {
    padding: 16px 20px;
    font-size: 14px;
    color: #666;
    line-height: 22px;
    margin-top: 20px;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    margin-bottom: 18px;
  }

  .grade {
    text-align: right;
    font-size: 14px;
    color: #666;

    .input-number {
      margin-left: 10px;
      line-height: 28px;

      .el-input__inner {
        line-height: 28px;
        height: 28px;
      }

      .el-input-number__decrease, .el-input-number__increase {
        height: 25px;
        width: 28px;
      }
    }
  }
}
</style>