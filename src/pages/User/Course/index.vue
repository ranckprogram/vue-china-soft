<template>
  <div class="user-course">
    <el-tabs v-model="activeName" @tab-click="handleClickTab" class="user-course-status">
      <el-tab-pane label="将要学习" name="beigin"></el-tab-pane>
      <el-tab-pane label="正在学习" name="continue"></el-tab-pane>
      <el-tab-pane label="已经完成" name="restart"></el-tab-pane>
    </el-tabs>
    <course-card v-for="item in courseList" v-bind="item" :key="item.id" @on-enter="handleGoStudy"/>
  </div>
</template>

<script>
import CourseCard from "./module/CourseCard";
export default {
  components: {
    "course-card": CourseCard
  },
  data() {
    return {
      activeName: "beigin",
      courseList: [
        {
          id: 1,
          startTime: "2020-03-12 24:00:00",
          endTime: "2020-03-12 24:00:00",
          status: "begin",
          courseImage: require("@/assets/images/1.png"),
          courseTitle: "《个人职业规划与社会实践概论》",
          courseInfo:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴趣，潜能，人格，然后进行规划，用选校原理规划技术来规划的课程，面对的人群是学生，毕业生和一切迷茫的人。职业生涯规划课程是主要针对要上班的人，从一个方面来进行规划，也能解决一部分问题，但是不是从自己擅长的地方作为依据的。",
          studytTime: 60,
          testScores: 98,
          accumulateScores: 12
        },
        {
          id: 2,
          startTime: "2020-03-12 24:00:00",
          endTime: "2020-03-12 24:00:00",
          status: "continue",
          courseImage: require("@/assets/images/2.png"),
          courseTitle: "《个人职业规划与社会实践概论》",
          courseInfo:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴趣，潜能，人格，然后进行规划，用选校原理规划技术来规划的课程，面对的人群是学生，毕业生和一切迷茫的人。职业生涯规划课程是主要针对要上班的人，从一个方面来进行规划，也能解决一部分问题，但是不是从自己擅长的地方作为依据的。",
          studytTime: 60,
          testScores: 98,
          accumulateScores: 12
        },
        {
          id: 4,
          startTime: "2020-03-12 24:00:00",
          endTime: "2020-03-12 24:00:00",
          status: "restart",
          courseImage: require("@/assets/images/3.png"),
          courseTitle: "《个人职业规划与社会实践概论》",
          courseInfo:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴趣，潜能，人格，然后进行规划，用选校原理规划技术来规划的课程，面对的人群是学生，毕业生和一切迷茫的人。职业生涯规划课程是主要针对要上班的人，从一个方面来进行规划，也能解决一部分问题，但是不是从自己擅长的地方作为依据的。",
          studytTime: 60,
          testScores: 98,
          accumulateScores: 12
        }
      ]
    };
  },
  methods: {
    handleClickTab() {
      
    },

    handleGoStudy () {
      this.$router.push({name: "UserCourseDetail"})
    }
  }
};
</script>

<style lang="stylus">
.user-course-status {
  margin-bottom: 5px;
}
</style>