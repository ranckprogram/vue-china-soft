<template>
  <div class="approval-info">
    <el-card class="student-list">
      <qa-card v-for="item in data" :key="item.number" v-bind="item" />
    </el-card>
    <el-card class="overview">
      <h3>评审概览</h3>
      <ul>
        <li>
          <label>考试人数： 28</label>
        </li>
        <li>
          <label>提交试卷：28</label>
        </li>
        <li>
          <label>评分题型：简答题</label>
        </li>
        <li>
          <label>题目总数：28</label>
        </li>
      </ul>
      <div class="operate">
        <el-button>保存评分进度</el-button>
        <el-button type="primary">评分完毕</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import QACard from "./modules/QACard";

export default {
  components: {
    "qa-card": QACard
  },
  data() {
    return {
      data: [
        {
          number: "6688128",
          title: "黑客最常用的攻击手法有哪些？",
          score: 20,
          answer:
            "由于程序员设计一些功能复杂的程序时，一般采用模块化的程序设计思想，将整个项目分割为多个功能模块，分别进行设计、调试，这时的后门就是一个模块的秘密入口。 在程序开发阶段，后门便于测试、更改和增强模块功能。正常情况下，完成设计之后需要去掉各个模块的后门，不过有时由于疏忽或者其他原因（如将其留在程序中，便于 日后访问、测试或维护）后门没有去掉，一些别有用心的人会利用穷举搜索法发现并利用这些后门，然后进入系统并发动攻击。",
          grade: 10
        },
        {
          number: "66881828",
          title: "黑客最常用的攻击手法有哪些？",
          score: 20,
          answer:
            "由于程序员设计一些功能复杂的程序时，一般采用模块化的程序设计思想，将整个项目分割为多个功能模块，分别进行设计、调试，这时的后门就是一个模块的秘密入口。 在程序开发阶段，后门便于测试、更改和增强模块功能。正常情况下，完成设计之后需要去掉各个模块的后门，不过有时由于疏忽或者其他原因（如将其留在程序中，便于 日后访问、测试或维护）后门没有去掉，一些别有用心的人会利用穷举搜索法发现并利用这些后门，然后进入系统并发动攻击。",
          grade: 10
        },
        {
          number: "66881218",
          title: "黑客最常用的攻击手法有哪些？",
          score: 20,
          answer:
            "由于程序员设计一些功能复杂的程序时，一般采用模块化的程序设计思想，将整个项目分割为多个功能模块，分别进行设计、调试，这时的后门就是一个模块的秘密入口。 在程序开发阶段，后门便于测试、更改和增强模块功能。正常情况下，完成设计之后需要去掉各个模块的后门，不过有时由于疏忽或者其他原因（如将其留在程序中，便于 日后访问、测试或维护）后门没有去掉，一些别有用心的人会利用穷举搜索法发现并利用这些后门，然后进入系统并发动攻击。",
          grade: 10
        },
        {
          number: "6688124",
          title: "黑客最常用的攻击手法有哪些？",
          score: 20,
          answer:
            "由于程序员设计一些功能复杂的程序时，一般采用模块化的程序设计思想，将整个项目分割为多个功能模块，分别进行设计、调试，这时的后门就是一个模块的秘密入口。 在程序开发阶段，后门便于测试、更改和增强模块功能。正常情况下，完成设计之后需要去掉各个模块的后门，不过有时由于疏忽或者其他原因（如将其留在程序中，便于 日后访问、测试或维护）后门没有去掉，一些别有用心的人会利用穷举搜索法发现并利用这些后门，然后进入系统并发动攻击。",
          grade: 10
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="stylus">
.approval-info {
  display: flex;

  .student-list {
    flex: 1;
    padding: 25px 30px;
  }

  .overview {
    padding: 15px 10px;
    width: 260px;
    height: fit-content;
    margin-left: 15px;
    margin-right: 90px;

    h3 {
      font-size: 16px;
      color: #333;
      line-height: 22px;
      margin-bottom: 20px;
    }

    li {
      line-height: 30px;
      font-size: 14px;
      color: #666;
    }

    .operate {
      .el-button {
        width: 100%;
        margin: 0;
        margin-top: 10px;
      }
    }
  }
}
</style>