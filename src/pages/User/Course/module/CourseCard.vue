<template>
  <div class="course-card">
    <el-card>
      <div slot="header" class="clearfix">
        <div class="course-time">
          <span>开始时间</span>
          <time>{{startTime}}</time>
          <span>结束时间</span>
          <span>{{endTime}}</span>
        </div>

        <el-button
          style="float: right;margin-top: -8px"
          type="primary"
          size="medium"
          v-if="status === 'begin'"
        >开始学习</el-button>
        <el-button
          style="float: right;margin-top: -8px"
          type="primary"
          size="medium"
          v-if="status === 'continue'"
        >继续学习</el-button>
        <el-button
          style="float: right;margin-top: -8px"
          type="success"
          size="medium"
          v-if="status === 'restart'"
        >重新学习</el-button>
      </div>

      <figure class="course-figure">
        <img :src="courseImage" alt />
        <section class="course-figure-content">
          <h3>{{courseTitle}}</h3>
          <p>{{courseInfo}}</p>
        </section>
      </figure>

      <footer class="course-foot">
        <ul>
          <li>
            <span>
              学习时长
              <em>{{studytTime}}</em>
              小时
            </span>
          </li>
          <li>
            <span>
              考试分数
              <em>{{testScores}}</em>
              小时
            </span>
          </li>
          <li>
            <span>
              积分
              <em>{{accumulateScores}}</em>
            </span>
          </li>
        </ul>
      </footer>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    startTime: {
      type: String,
      default: ""
    },
    endTime: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: "begin"
    },
    courseImage: {
      type: String,
      default: ""
    },
    courseTitle: {
      type: String,
      default: ""
    },
    courseInfo: {
      type: String,
      default: ""
    },
    studytTime: {
      type: Number,
      default: 0
    },
    testScores: {
      type: Number,
      default: 0
    },
    accumulateScores: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="stylus">
.course-card {
  position: relative;

  &+.course-card {
    margin-top: 20px;
  }
}

.course-time {
  display: inline-block;
  font-size: 14px;

  span {
    color: #666;
    padding-right: 10px;
  }

  time {
    color: #333;
    padding-right: 35px;
  }
}

.course-figure {
  margin-bottom: 60px;

  img {
    float: left;
    width: 300px;
    height: 200px;
  }

  .course-figure-content {
    height: 200px;
    margin-left: 330px;

    h3 {
      font-size: 16px;
      color: #333;
      padding: 20px 0;
      line-height: 16px;
      overflow: hidden;
      height: 60px;
      text-overflow: ellipsis;
    }

    p {
      font-size: 14px;
      color: #666;
      line-height: 24px;
      height: 96px;
      overflow: hidden;
    }
  }
}

.course-foot {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  font-size: 14px;
  line-height: 24px;
  padding: 16px;
  color: #666;
  border-top: 1px solid #EBEEF5;

  ul {
    overflow: hidden;
  }

  li {
    float: left;
    margin-right: 45px;
  }

  em {
    padding: 0 10px;
    font-size: 16px;
    color: #409EFF;
    font-weight: bold;
  }
}
</style>