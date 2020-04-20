<template>
  <div class="info">
    <section class="bread">
      <div class="wrapper">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/home/list">制造培训</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>课程详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </section>
    <section class="wrapper">
      <el-row :gutter="16">
        <el-col :span="16">
          <el-card class="card-img">
            <img src="@/assets/images/bg-info.png" alt />
          </el-card>

          <el-card class="info-course">
            <div slot="header" class="clearfix">
              <strong>课程目录</strong>
              <span class="sub">（本课程共3章16节）</span>
            </div>
            <course-list :data="data" />
            <course-list :data="data" />
            <course-list :data="data" />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="enter">
            <div slot="header" class="header">
              <h1>个人职业规划与社会实践概论标题</h1>
              <p>本课程共3章16节</p>
            </div>
            <div>
              <div class="enter-count">
                <ul>
                  <li>
                    <em>5000</em>
                    <span>学习人数</span>
                  </li>
                  <li>
                    <em>5000</em>
                    <span>学习人数</span>
                  </li>
                  <li>
                    <em>5000</em>
                    <span>学习人数</span>
                  </li>
                </ul>
              </div>
              <el-button type="primary" class="btn-enter">我要学习</el-button>
            </div>
          </el-card>
          <el-card>
            <div slot="header" class="clearfix">
              <strong>课程介绍</strong>
            </div>
            <div
              class="introduce"
            >生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴授课讲师教程程度软件版本所需基础适合人群课程光盘。 授课讲师教程程度软件版本所需基础适合人群课程光盘授课讲师教程程度软件版本所需基础适合人群课程光盘授课讲师教程程度软件版本所需基础适合人群课程光盘授课讲师教程程度软件版本所需基础适合人群课程光盘讲师教程程度软件版本所需基础适合人群课程光盘讲师教程程度软件版本所需基础适合人群课程光盘</div>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
  
<script>
import CourseList from "./modules/CourseList";

export default {
  components: {
    "course-list": CourseList
  },
  data() {
    return {
      data: [
        {
          title: "1-1 课程名称",
          studyCount: "200",
          examCount: "500",
          difficulty: "200"
        },
        {
          title: "1-1 课程名称",
          studyCount: "200",
          examCount: "500",
          difficulty: "200"
        },
        {
          title: "1-1 课程名称",
          studyCount: "200",
          examCount: "500",
          difficulty: "200"
        },
        {
          title: "1-1 课程名称",
          studyCount: "200",
          examCount: "500",
          difficulty: "200"
        },
        {
          title: "1-1 课程名称",
          studyCount: "200",
          examCount: "500",
          difficulty: "200"
        },
        {
          title: "1-1 课程名称",
          studyCount: "200",
          examCount: "500",
          difficulty: "200"
        },
        {
          title: "1-1 课程名称",
          studyCount: "200",
          examCount: "500",
          difficulty: "200"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.info {
  .bread {
    padding: 18px 0;
    margin-bottom: 30px;
    box-shadow: 0px 0px 8px 0px #E9E9E9;
  }

  .card-img {
    padding: 10px;
    margin-bottom: 15px;

    img {
      width: 100%;
    }
  }

  .info-course {
    margin-bottom: 60px;
  }

  strong {
    font-size: 16px;
    color: #303030;
  }

  .sub {
    font-size: 14px;
    color: #999;
  }

  .enter {
    margin-bottom: 20px;

    .header {
      padding: 10px;
    }

    h1 {
      font-size: 24px;
      color: #303030;
      line-height: 36px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      color: #999;
    }

    .enter-count {
      ul {
        display: flex;
        margin-bottom: 30px;
      }

      li {
        flex: 1;
        text-align: center;

        &+li {
          border-left: 1px solid #EEEEEE;
        }

        em {
          display: block;
          font-size: 16px;
          font-style: normal;
          color: #409EFF;
          margin-bottom: 10px;
        }

        span {
          font-size: 14px;
          color: #999;
        }
      }
    }

    .btn-enter {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
  }

  .introduce {
    font-size: 14px;
    color: #666;
    line-height: 24px;
  }
}
</style>