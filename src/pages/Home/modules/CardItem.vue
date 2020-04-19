<template>
  <el-card class="card-item" @click.native="$emit('on-click')">
    <div class="imgage">
      <img :src="mainPicture" alt />
    </div>
    <div class="info">
      <h3>{{title}}</h3>
      <p>{{info}}</p>
    </div>

    <div class="footer">
      <ul>
        <li>
          学习人数
          <span>{{studyCount}}</span>
        </li>
        <li>
          考试人数
          <span>{{examCount}}</span>
        </li>
        <li>
          难度
          <span>{{difficulty}}</span>
        </li>
      </ul>
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
    studyCount: {
      type: Number,
      default: 0
    },
    examCount: {
      type: Number,
      default: 0
    },
    difficulty: {
      type: String,
      default: "0%"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.card-item {
  position: relative;
  width: 380px;
  height: 410px;
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
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #EBEEF5;

    ul {
      display: flex;
      font-size: 14px;
      color: #999;
      padding: 0 20px;

      li {
        &:nth-child(2n) {
          flex: 1;
          text-align: center;
        }

        &:last-child {
          text-align: right;
        }
      }
    }
  }
}
</style>