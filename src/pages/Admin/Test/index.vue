<template>
  <div class="test">
    <header style="padding: 10px 0 24px">
      <search-bar @on-search="handleSearch" />
    </header>
    <el-card>
      <el-table :data="data" style="width: 100%">
        <el-table-column prop="stem" label="题干"></el-table-column>
        <el-table-column prop="course" label="课程"></el-table-column>
        <el-table-column prop="chapter" label="章"></el-table-column>
        <el-table-column prop="subsection" label="节"></el-table-column>
        <el-table-column prop="difficulty" label="难度"></el-table-column>
        <el-table-column prop="type" label="题型"></el-table-column>
        <el-table-column prop="time" label="试卷引用次数"></el-table-column>
        <el-table-column prop="accuracy" label="答对率"></el-table-column>
        <el-table-column width="220">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="small">查看</el-button>
            <el-button type="primary" plain size="small">编辑</el-button>
            <el-button type="danger" plain size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
    <el-dialog title="查看试题" :visible.sync="dialogVisible" width="900px">
      <dl class="current-view">
        <dt>
          <strong>单选题：</strong>
          <h3>在生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？</h3>
        </dt>
        <dd v-for="option in current.optionList" :key="option.id">
          <span class="checkbox">
            <el-radio :label="option.id" v-model="item.value">{{option.content}}</el-radio>
          </span>
        </dd>
        <dd>
          <span class="checkbox">
            <el-radio :label="1" v-model="current.value">A、在工具栏中点击workflow标签</el-radio>
          </span>
        </dd>
        <dd>
          <span class="checkbox">
            <el-radio :label="2" v-model="current.value">B、在缺陷单界面中点击推进流程按钮</el-radio>
          </span>
        </dd>
        <dd>
          <span class="checkbox">
            <el-radio :label="3" v-model="current.value">C、在缺陷单界面中点击提交按钮</el-radio>
          </span>
        </dd>
        <dd>
          <span class="checkbox">
            <el-radio :label="4" v-model="current.value">D、后台启动流程推进</el-radio>
          </span>
        </dd>
      </dl>
      <div class="answer">
        <ul>
          <li>
            <label>正确答案：</label>
            <span>{{current.rightAnswerKey}}A</span>
          </li>
          <li>
            <label>答案解析：</label>
            <span>{{current.answerAnalysis}} 本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。</span>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SearchBar from "./modules/SearchBar";
export default {
  components: {
    "search-bar": SearchBar
  },
  data() {
    return {
      dialogVisible: false,
      current: {},
      data: [
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          type: "选择题",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        },
        {
          stem: "你是小米吗",
          course: "网络安全技术基础",
          chapter: "TCPIP协议介绍",
          subsection: "IP地址分类",
          difficulty: "难",
          time: 5,
          accuracy: "100%"
        }
      ]
    };
  },
  methods: {
    handleSearch(query) {
      console.log(query);
    },
    handleClick(row) {
      this.dialogVisible = true;
      this.current = row;
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="stylus">
.test {
  .page {
    padding: 40px 0;
    text-align: right;
  }

  .current-view {
    padding-bottom: 16px;

    dt {
      margin-bottom: 25px;
      padding: 0 10px;
    }

    h3 {
      display: inline-block;
      font-size: 16px;
      font-weight: normal;
      color: #333;
    }

    strong {
      font-size: 16px;
      color: #409EFF;
    }

    dd {
      display: block;
      height: 36px;
      font-size: 14px;
      color: #666;
      line-height: 16px;
      padding: 10px 20px;

      &:hover {
        background-color: #F5F7FA;
      }
    }
  }

  .answer {
    padding: 16px 30px;
    background-color: #F5F7FA;
    color: #666;
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 42px;
  }
}
</style>