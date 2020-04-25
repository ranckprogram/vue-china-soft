<template>
  <div class="home">
    <banner />
    <category-section title="安全学习" url>
      <el-row :gutter="30">
        <el-col :span="8" v-for="item in data" :key="item.id">
          <card-item v-bind="item" @on-click="handleClickCard(item.id, item)" />
        </el-col>
      </el-row>
    </category-section>
    <category-section title="制造培训">
      <el-row :gutter="30">
        <el-col :span="8" v-for="item in data" :key="item.id">
          <card-item v-bind="item" @on-click="handleClickCard(item.id, item)" />
        </el-col>
      </el-row>
    </category-section>
    <category-section title="素质提升">
      <el-row :gutter="30">
        <el-col :span="8" v-for="item in data" :key="item.id">
          <card-item v-bind="item" @on-click="handleClickCard(item.id, item)" />
        </el-col>
      </el-row>
    </category-section>
    <category-section title="安全检查">
      <el-row :gutter="30">
        <el-col :span="8" v-for="item in data" :key="item.id">
          <card-item v-bind="item" @on-click="handleClickCard(item.id, item)" />
        </el-col>
      </el-row>
    </category-section>
  </div>
</template>
<script>
import Banner from "./modules/Banner";
import CategorySection from "./modules/CategorySection";
import CardItem from "./modules/CardItem";

export default {
  components: {
    banner: Banner,
    "category-section": CategorySection,
    "card-item": CardItem,
  },
  data() {
    return {
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
        }
      ]
    };
  },
  methods: {
    handleClickCard(id, card) {
      console.log(id, card);
      this.$router.push({name: "HomeInfo"})
    }
  }
};
</script>

<style lang="stylus">
.home {
  .category {
    &:nth-child(even) {
      box-shadow: 0px 0px 8px 0px #E9E9E9;
    }

    &:nth-child(odd) {
      background-color: #F8FAFC;
    }
  }
}
</style>