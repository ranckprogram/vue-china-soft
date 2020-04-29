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
            <span>（本部分共3道题）</span>
          </div>

          <section>
            <ul class="question-list">
              <li>
                <dl>
                  <dt>
                    <span class="index">01</span>
                    <h3>在生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？</h3>
                    <span class="score">(2分)</span>
                  </dt>
                  <dd>
                    <span class="checkbox">
                      <el-radio label="1">A、在工具栏中点击workflow标签</el-radio>
                    </span>
                  </dd>
                  <dd>
                    <span class="checkbox">
                      <el-radio label="1">B、在缺陷单界面中点击推进流程按钮</el-radio>
                    </span>
                  </dd>
                  <dd>
                    <span class="checkbox">
                      <el-radio label="1">C、在缺陷单界面中点击提交按钮</el-radio>
                    </span>
                  </dd>
                  <dd>
                    <span class="checkbox">
                      <el-radio label="1">D、后台启动流程推进</el-radio>
                    </span>
                  </dd>
                </dl>
                <div class="answer">
                  <ul>
                    <li>
                      <label>正确答案：A C</label>
                      <span></span>
                    </li>
                    <li>
                      <label>答案解析：</label>
                      <span>本题考察的是考生的综合判断能力，对企业工作中的流程易用性的考察，由题目可知在缺陷单界面重点及推进流程按钮是企业常见的。</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <dl>
                  <dt>
                    <span class="index">01</span>
                    <h3>在生产管理信息系统中，下列操作步骤能正确将工单推进流程的是？</h3>
                    <span class="score">(2分)</span>
                  </dt>
                  <dd>
                    <span class="checkbox">
                      <el-radio label="1">A、在工具栏中点击workflow标签</el-radio>
                    </span>
                  </dd>
                  <dd>
                    <span class="checkbox">
                      <el-radio label="1">B、在缺陷单界面中点击推进流程按钮</el-radio>
                    </span>
                  </dd>
                  <dd>
                    <span class="checkbox">
                      <el-radio label="1">C、在缺陷单界面中点击提交按钮</el-radio>
                    </span>
                  </dd>
                  <dd>
                    <span class="checkbox">
                      <el-radio label="1">D、后台启动流程推进</el-radio>
                    </span>
                  </dd>
                </dl>
              </li>
            </ul>
          </section>
        </el-card>
      </section>
      <aside></aside>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paperList: []
    };
  }
};
</script>

<style lang="stylus">
.paper {
  position: fixed;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  background: #fff;

  header {
    height: 110px;
    text-align: center;
    padding: 35px 0;
    border-bottom: 1px solid #E9E9E9;
    margin-bottom: 30px;

    h1 {
      font-size: 30px;
      line-height: 40px;
      color: #303030;
    }
  }

  .question-type {
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
    }

    .question-list {
      padding: 30px 20px;

      dl {
        padding-bottom: 10px;
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
}
</style>