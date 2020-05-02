<template>
  <div class="paper">
    <header>
      <h1>网络安全技术基础（卷1）</h1>
    </header>

    <main>
      <section class="wrapper">
        <el-card class="question-type">
          <div slot="header" class="type-title">
            <em>第一部分 单选题</em>
            <span>（本部分共{{singleSelectList.length}}道题）</span>
            <b class="total-score">+22分</b>
          </div>

          <section>
            <ul class="question-list">
              <li v-for="(item,index) in singleSelectList" :key="item.id" class="question-item">
                <mark
                  v-if="item.isCorrect !== undefined"
                  class="mark"
                  :class="item.isCorrect ? 'success':'error'"
                >{{item.isCorrect ? '正确':'错误'}}</mark>
                <dl>
                  <dt>
                    <span class="index">0{{index+1}}</span>
                    <h3>{{item.questionStem}}</h3>
                    <span class="score">({{item.score}}分)</span>
                  </dt>
                  <dd v-for="option in item.optionList" :key="option.id">
                    <span class="checkbox">
                      <el-radio :label="option.id" v-model="item.value">{{option.content}}</el-radio>
                    </span>
                  </dd>
                </dl>
                <div class="answer" v-if="item.rightAnswerKey">
                  <ul>
                    <li>
                      <label>正确答案：</label>
                      <span>{{item.rightAnswerKey}}</span>
                    </li>
                    <li>
                      <label>答案解析：</label>
                      <span>{{item.answerAnalysis}}</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </el-card>

        <el-card class="question-type">
          <div slot="header" class="type-title">
            <em>第二部分 多选题</em>
            <span>（本部分共{{multipleSelect.length}}道题）</span>
          </div>

          <section>
            <ul class="question-list">
              <li v-for="item in multipleSelect" :key="item.id" class="question-item">
                <mark
                  v-if="item.isCorrect !== undefined"
                  class="mark"
                  :class="item.isCorrect ? 'success':'error'"
                >{{item.isCorrect ? '正确':'错误'}}</mark>
                <dl>
                  <dt>
                    <span class="index">01</span>
                    <h3>{{item.questionStem}}</h3>
                    <span class="score">({{item.score}}分)</span>
                  </dt>
                  <el-checkbox-group v-model="item.value">
                    <dd v-for="option in item.optionList" :key="option.id">
                      <span class="checkbox">
                        <el-checkbox :label="option.content" :key="option.id" :value="option.id"></el-checkbox>
                      </span>
                    </dd>
                  </el-checkbox-group>
                </dl>
                <div class="answer" v-if="item.rightAnswerKey">
                  <ul>
                    <li>
                      <label>正确答案：</label>
                      <span>{{item.rightAnswerKey}}</span>
                    </li>
                    <li>
                      <label>答案解析：</label>
                      <span>{{item.answerAnalysis}}</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </el-card>

        <el-card class="question-type">
          <div slot="header" class="type-title">
            <em>第三部分 填空题</em>
            <span>（本部分共{{fillBlanks.length}}道题）</span>
          </div>

          <section>
            <ul class="question-list">
              <li v-for="item in fillBlanks" :key="item.id" class="question-item">
                <mark
                  v-if="item.isCorrect !== undefined"
                  class="mark"
                  :class="item.isCorrect ? 'success':'error'"
                >{{item.isCorrect ? '正确':'错误'}}</mark>
                <dl>
                  <dt>
                    <span class="index">01</span>
                    <h3>{{item.questionStem}}</h3>
                    <span class="score">({{item.score}}分)</span>
                  </dt>
                  <el-input v-model="item.value" />
                </dl>
                <div class="answer" v-if="item.rightAnswerKey">
                  <ul>
                    <li>
                      <label>正确答案：</label>
                      <span>{{item.rightAnswerKey}}</span>
                    </li>
                    <li>
                      <label>答案解析：</label>
                      <span>{{item.answerAnalysis}}</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </el-card>
        <el-card class="question-type">
          <div slot="header" class="type-title">
            <em>第四部分 判断题</em>
            <span>（本部分共{{judgeQuestionList.length}}道题）</span>
          </div>

          <section>
            <ul class="question-list">
              <li v-for="item in judgeQuestionList" :key="item.id" class="question-item">
                <mark
                  v-if="item.isCorrect !== undefined"
                  class="mark"
                  :class="item.isCorrect ? 'success':'error'"
                >{{item.isCorrect ? '正确':'错误'}}</mark>
                <dl>
                  <dt>
                    <span class="index">01</span>
                    <h3>{{item.questionStem}}</h3>
                    <span class="score">({{item.score}}分)</span>
                  </dt>

                  <el-radio
                    v-model="item.value"
                    :label="option.id"
                    border
                    size="medium"
                    v-for="option in item.optionList"
                    :key="option.id"
                  >{{option.content}}</el-radio>
                </dl>
                <div class="answer" v-if="item.rightAnswerKey">
                  <ul>
                    <li>
                      <label>正确答案：</label>
                      <span>{{item.rightAnswerKey}}</span>
                    </li>
                    <li>
                      <label>答案解析：</label>
                      <span>{{item.answerAnalysis}}</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </el-card>
        <el-card class="question-type">
          <div slot="header" class="type-title">
            <em>第五部分 问答题</em>
            <span>（本部分共{{qaList.length}}道题）</span>
          </div>

          <section>
            <ul class="question-list">
              <li v-for="item in qaList" :key="item.id" class="question-item">
                <mark
                  v-if="item.isEvaluate !== undefined"
                  class="mark"
                  :class="item.isEvaluate ? 'evaluate':'noEvaluate'"
                >{{item.isEvaluate ? '已评':'待评'}}</mark>
                <dl>
                  <dt>
                    <span class="index">01</span>
                    <h3>{{item.questionStem}}</h3>
                    <span class="score">({{item.score}}分)</span>
                  </dt>

                  <el-input type="textarea" :rows="4" placeholder="请输入答案" v-model="item.value" />
                </dl>
                <div class="answer" v-if="item.rightAnswerKey">
                  <ul>
                    <li>
                      <label>正确答案：</label>
                      <span>{{item.rightAnswerKey}}</span>
                    </li>
                    <li>
                      <label>答案解析：</label>
                      <span>{{item.answerAnalysis}}</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </el-card>
        <div class="btn-box">
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </section>
      <aside></aside>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    const singleSelectList = [
      {
        value: "",
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ],
        isCorrect: true,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      },
      {
        value: "",
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ],
        isCorrect: false,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      },
      {
        value: "",
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ]
      },
      {
        value: "",
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ],
        isCorrect: true,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      },
      {
        value: "",
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ],
        isCorrect: true,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      }
    ];
    const multipleSelect = [
      {
        value: [],
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ],
        isCorrect: true,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      },
      {
        value: [],
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ],
        isCorrect: false,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      },
      {
        value: [],
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ]
      },
      {
        value: [],
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ],
        isCorrect: true,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      },
      {
        value: [],
        questionStem:
          "在222生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、在工具栏中点击workflow标签"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、在工具栏中点击workflow标签"
          },
          {
            id: 3,
            orderLetter: "A",
            content: "C、在工具栏中点击workflow标签"
          },
          {
            id: 4,
            orderLetter: "A",
            content: "D、在工具栏中点击workflow标签"
          }
        ],
        isCorrect: true,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      }
    ];
    const fillBlanks = [
      {
        value: "",
        questionStem:
          "请在下面方框填入空缺的词：金黄的头发（黄山）刀山火海 赞美人生（ ）卫国战争",
        score: "2",

        isCorrect: true,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      }
    ];

    const judgeQuestionList = [
      {
        value: "",
        questionStem: "黑客最常用的攻击手法是XSS攻击？",
        score: "2",
        optionList: [
          {
            id: 1,
            orderLetter: "A",
            content: "A、正确"
          },
          {
            id: 2,
            orderLetter: "A",
            content: "B、错误"
          }
        ],
        isCorrect: true,
        rightAnswerKey: "A",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      }
    ];

    const qaList = [
      {
        value: "",
        questionStem: "黑客最常用的攻击手法是XSS攻击？",
        score: "2",
        isEvaluate: true,
        rightAnswerKey:
          "正常情况下，完成设计之后需要去掉各个模块的后门，不过有时由于疏忽或者其疏忽或者其他原于疏忽或者其他原因如将其他原于疏忽或者其他原因如将其留在程序中，便于日后访问、测试或维护后门没有去掉",
        answerAnalysis:
          "本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。"
      },
      {
        value: "",
        questionStem: "黑客最常用的攻击手法是XSS攻击？",
        score: "2"
      }
    ];
    return {
      singleSelectList,
      multipleSelect,
      fillBlanks,
      judgeQuestionList,
      qaList
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      this.$confirm("恭喜您已完成考试", "提示", {
        confirmButtonText: "我的考试",
        cancelButtonText: "查看考试结果",
        type: "warning"
      })
        .then(() => {
          this.$router.push({
            name: "UserExam"
          });
        })
        .catch(() => {});
    }
  },
  watch: {
    singleSelectList: {
      deep: true,
      handler(value) {
        console.log(value);
      }
    },
    multipleSelect: {
      deep: true,
      handler(value) {
        console.log(value);
      }
    },
    fillBlanks: {
      deep: true,
      handler(value) {
        console.log(value);
      }
    }
  }
};
</script>

<style lang="stylus">
.paper {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  left: 0;
  top: 0;
  z-index: 100;
  background: #fff;

  header {
    // position: sticky;
    top: 0;
    height: 110px;
    text-align: center;
    padding: 35px 0;
    border-bottom: 1px solid #E9E9E9;
    background: #fff;
    z-index: 10;
    margin-bottom: 30px;

    h1 {
      font-size: 30px;
      line-height: 40px;
      color: #303030;
    }
  }

  .question-type {
    margin-bottom: 20px;

    .type-title {
      em {
        font-size: 16px;
        color: #303030;
        padding-right: 20px;
      }

      span {
        font-size: 14px;
        color: #999;
      }

      .total-score {
        float: right;
        font-size: 14px;
        font-weight: normal;
        color: #409EFF;
        margin-right: 20px;
      }
    }

    .question-list {
      padding: 30px 20px;

      .question-item {
        position: relative;

        .mark {
          position: absolute;
          left: -40px;
          top: -2px;
          display: block;
          width: 40px;
          height: 28px;
          font-size: 12px;
          line-height: 16px;
          padding: 6px;
          color: #fff;
          border-radius: 0px 14px 14px 0px;

          &.error {
            background: #F56C6C;
          }

          &.success {
            background: #67C23A;
          }

          &.evaluate {
            background: #F0F9EB;
            color: #67C23A;
          }

          &.noEvaluate {
            background: #FDF6EC;
            color: #E6A23C;
          }
        }
      }

      dl {
        padding-bottom: 16px;
      }

      dt {
        margin-bottom: 25px;
        padding: 0 10px;
      }

      .index {
        font-weight: bold;
      }

      h3 {
        display: inline-block;
        font-size: 16px;
        font-weight: normal;
        color: #333;
      }

      .score {
        font-size: 16px;
        color: #999;
      }

      dd {
        height: 36px;
        font-size: 14px;
        color: #666;
        line-height: 16px;
        padding: 10px 20px;

        &:hover {
          background-color: #F5F7FA;
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
  }

  .btn-box {
    text-align: center;
    padding: 0 0 30px;

    .el-button {
      width: 300px;
    }
  }
}
</style>