<template>
  <div class="list-page">
    <div class="head">
      <h3 class="wrapper">
        安全学习
        <span>共248门课程</span>
      </h3>
    </div>
    <div class="wrapper">
      <section class="content">
        <el-row :gutter="30">
          <el-col :span="8" v-for="item in data" :key="item.id">
            <card-item v-bind="item" @on-click="handleClickCard(item.id, item)" />
          </el-col>
        </el-row>
      </section>
      <footer>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </footer>
    </div>
  </div>
</template>

<script>
import CardItem from "./modules/CardItem";

export default {
  components: {
    "card-item": CardItem
  },
  data() {
    return {
      currentPage: 1,
      data: [
        {
          id: 2,
          mainPicture: require("@/assets/images/1.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          studyCount: 5000,
          examCount: 50,
          difficulty: "25%"
        },
        {
          id: 3,
          mainPicture: require("@/assets/images/2.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          studyCount: 5000,
          examCount: 50,
          difficulty: "25%"
        },
        {
          id: 4,
          mainPicture: require("@/assets/images/3.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          studyCount: 5000,
          examCount: 50,
          difficulty: "25%"
        },
        {
          id: 5,
          mainPicture: require("@/assets/images/3.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          studyCount: 5000,
          examCount: 50,
          difficulty: "25%"
        },
        {
          id: 6,
          mainPicture: require("@/assets/images/3.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          studyCount: 5000,
          examCount: 50,
          difficulty: "25%"
        },
        {
          id: 7,
          mainPicture: require("@/assets/images/3.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          studyCount: 5000,
          examCount: 50,
          difficulty: "25%"
        }
      ]
    };
  },
  methods: {
    handleClickCard(id, card) {
      console.log(id, card);
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="stylus" scoped>
.list-page {
  .head {
    height: 90px;
    box-shadow: 0px 0px 8px 0px #E9E9E9;
    padding: 32px 0 24px;

    h3 {
      font-size: 24px;
      color: #333;
      font-weight: bold;

      span {
        font-size: 18px;
        color: #999;
        padding-left: 20px;
      }
    }
  }

  .content {
    padding-top: 40px;

    .el-col {
      margin-bottom: 20px;
    }
  }

  footer {
    float: right;
    padding: 50px 0;
  }
}
</style>