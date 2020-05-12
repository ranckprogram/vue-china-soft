<template>
  <div class="admin-course">
    <search-bar />

    <ul class="admin-course-list">
      <li v-for="item in dataList" :key="item.id">
        <card-course v-bind="item" @on-click-btn="(type) => handleClickCard(type, item)" />
      </li>
    </ul>

    <modal-appoint :show.sync="visible" />
  </div>
</template>

<script>
import SearchBar from "./modules/SearchBar";
import CardCourse from "./modules/CardCourse";
import ModalAppoint from "./modules/ModalAppoint";
export default {
  components: {
    "search-bar": SearchBar,
    "card-course": CardCourse,
    "modal-appoint": ModalAppoint
  },
  data() {
    return {
      visible: false,
      dataList: [
        {
          id: 1,
          mainPicture: require("@/assets/images/1.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          isStudy: true,
          isShelves: false
        },
        {
          id: 2,
          mainPicture: require("@/assets/images/1.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          isStudy: false,
          isShelves: true
        },
        {
          id: 3,
          mainPicture: require("@/assets/images/1.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          isStudy: true,
          isShelves: false
        },
        {
          id: 4,
          mainPicture: require("@/assets/images/1.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          isStudy: false,
          isShelves: false
        },
        {
          id: 5,
          mainPicture: require("@/assets/images/1.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          isStudy: true,
          isShelves: false
        },
        {
          id: 6,
          mainPicture: require("@/assets/images/1.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          isStudy: true,
          isShelves: false
        },
        {
          id: 7,
          mainPicture: require("@/assets/images/1.png"),
          title: "个人职业规划与社会实践概论",
          info:
            "生涯规划课程，是让一个人从全面的了解自己，全方位的分析，用最科学的脑AT潜能测试测出个人的兴...",
          studyCount: 5000,
          examCount: 50,
          difficulty: "25%"
        },
        {
          id: 8,
          mainPicture: require("@/assets/images/1.png"),
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
    handleClickCard(type, item) {
      console.log(type, item);

      switch (type) {
        case "appoint":
          this.visible = true;
          break;
        case "shelves":
          if (item.isShelves) {
            this.$confirm("课程上架之后，学员才可以进行学习！", "确认上架", {
              confirmButtonText: "确定",
              cancelButtonText: "取消上架",
              type: "warning"
            })
              .then(() => {
                this.$message({
                  type: "success",
                  message: "上架成功!"
                });
              })
              .catch(() => {
                this.$message({
                  type: "info",
                  message: "已取消"
                });
              });
          } else {
            const h = this.$createElement;

            this.$msgbox({
              title: "确认下架",
              message: h("p", null, [
                h("span", { style: "color: #E6A23C" }, "46人正在学习中"),
                h("span", null, "课程下架之后，学员不能够继续学习！")
              ]),
              confirmButtonText: "确定",
              confirmButtonClass: "el-button--danger",
              showCancelButton: true,
              cancelButtonText: "取消下架",
              type: "warning"
            })
              .then(() => {
                this.$message({
                  type: "warning",
                  message: "下架成功!"
                });
              })
              .catch(() => {
                this.$message({
                  type: "info",
                  message: "已取消"
                });
              });
          }

          break;
        case "edit":
          break;
        case "view":
          this.$router.push({
            name: "AdminCoursePaperView",
            params: { id: 1 }
          });
          break;
        case "statis":
          this.$router.push({ name: "AdminCourseLine" });
          break;
        case "paper":
          this.$router.push({ name: "AdminCoursePaper" });
          break;
        case "exam":
          this.$router.push({ name: "AdminCourseExam" });
          break;
      }
    }
  }
};
</script>

<style lang="stylus">
.admin-course {
  .admin-course-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 0;

    li {
      width: 25%;
      margin-bottom: 30px;
    }
  }
}
</style>