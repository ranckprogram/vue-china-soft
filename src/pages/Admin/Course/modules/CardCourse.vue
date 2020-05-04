<template>
  <el-card class="card-course" @click.native="$emit('on-click')">
    <div class="imgage">
      <img :src="mainPicture" alt />
    </div>
    <div class="info">
      <h3>{{title}}</h3>
      <p>{{info}}</p>
    </div>

    <div class="footer">
      <div class="one-line">
        <el-button
          :type="isStudy ? '' : 'danger'"
          plain
          size="small"
          @click="$emit('on-click-btn', 'appoint')"
        >{{isStudy ? '指定学习' : '取消学习'}}</el-button>
        <el-button
          :type="isShelves ? 'success' : 'danger'"
          plain
          size="small "
          @click="$emit('on-click-btn', 'shelves')"
        >{{isShelves ? '上架' : '下架'}}</el-button>
        <el-button type="primary" plain size="small" @click="$emit('on-click-btn', 'edit')">编辑</el-button>
        <el-button plain size="small" @click="$emit('on-click-btn', 'view')">查看</el-button>
        <el-button plain size="small" @click="$emit('on-click-btn', 'paper')">试题</el-button>
      </div>
      <el-button plain size="small" @click="$emit('on-click-btn', 'statis')">统计分析</el-button>
      <el-button plain size="small" @click="$emit('on-click-btn', 'exam')">考试</el-button>
    </div>
  </el-card>
</template>
  
<script>
export default {
  props: {
    mainPicture: {
      type: String,
      default: require("@/assets/images/1.png")
    },
    title: {
      type: String,
      default: ""
    },
    info: {
      type: String,
      default: ""
    },
    isStudy: {
      type: Boolean,
      default: true
    },
    isShelves: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.card-course {
  position: relative;
  width: 380px;
  height: 470px;
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  cursor: pointer;

  .content {
    padding: 16px;
  }

  .imgage {
    margin-bottom: 20px;
    overflow: hidden;

    img {
      transition: all 0.6s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  img {
    display: block;
    height: 230px;
  }

  .info {
    h3 {
      font-size: 16px;
      color: #333;
      margin-bottom: 14px;
    }

    p {
      font-size: 14px;
      color: #999;
      height: 48px;
      line-height: 24px;
      overflow: hidden;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    padding: 16px;
    border-top: 1px solid #EBEEF5;

    .one-line {
      margin-bottom: 10px;
      overflow: hidden;
    }

    .el-button {
      float: left;
    }
  }
}
</style>