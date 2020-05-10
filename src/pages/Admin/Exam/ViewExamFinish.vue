<template>
  <div class="view-exam-finish">
    <el-card>
      <ul class="base-info">
        <li>
          <label>参加人数</label>
          <strong>56</strong>
          <span>人</span>
        </li>
        <li>
          <label>完成比例</label>
          <strong>98%</strong>
        </li>
        <li>
          <label>平均分</label>
          <strong>80</strong>
        </li>
        <li>
          <label>最高分</label>
          <strong>56</strong>
        </li>
        <li>
          <label>最低分</label>
          <strong>20</strong>
          <span>人</span>
        </li>
      </ul>

      <section class="table-wrapper">
        <div class="table-head">成绩列表</div>
        <div class="table-conent">
          <el-table :data="scoreList" style="width: 100">
            <el-table-column prop="index" label="排序"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="score" label="分数" width="120"></el-table-column>
          </el-table>
        </div>
      </section>

      <section>
        <div class="table-head">知识点</div>
        <div class="table-conent">
          <el-table :data="knowlagePointList" style="width: 100">
            <el-table-column prop="title" label="题目"></el-table-column>
            <el-table-column prop="knowlagePoint" label="知识点"></el-table-column>
            <el-table-column prop="chapter" label="章节" ></el-table-column>
            <el-table-column prop="score" label="分数" width="120"></el-table-column>
          </el-table>
        </div>
      </section>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scoreList: [
        {
          index: 1,
          name: "hehe",
          score: 80
        },
        {
          index: 1,
          name: "hehe",
          score: 80
        },
        {
          index: 1,
          name: "hehe",
          score: 80
        },
        {
          index: 1,
          name: "hehe",
          score: 80
        },
        {
          index: 1,
          name: "hehe",
          score: 80
        },
        {
          index: 1,
          name: "hehe",
          score: 80
        },
        {
          index: 1,
          name: "hehe",
          score: 80
        }
      ],
      knowlagePointList: [
        {
          title: "单选第1题",
          knowlagePoint: "课程名称课程名称",
          chapter: "第一章第二节 ",
          score: 52
        },
        {
          title: "单选第1题",
          knowlagePoint: "课程名称课程名称",
          chapter: "第一章第二节 ",
          score: 52
        },
        {
          title: "单选第1题",
          knowlagePoint: "课程名称课程名称",
          chapter: "第一章第二节 ",
          score: 52
        },
        {
          title: "单选第1题",
          knowlagePoint: "课程名称课程名称",
          chapter: "第一章第二节 ",
          score: 52
        },
        {
          title: "单选第1题",
          knowlagePoint: "课程名称课程名称",
          chapter: "第一章第二节 ",
          score: 52
        },
        {
          title: "单选第1题",
          knowlagePoint: "课程名称课程名称",
          chapter: "第一章第二节 ",
          score: 52
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.view-exam-finish {
  .base-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #EBEEF5;
    margin-bottom: 16px;

    li {
      width: 20%;
      border-right: 1px solid #EBEEF5;
      margin: 25px 0;
      padding: 20px 60px;

      &:last-child {
        border: none;
      }

      label {
        display: block;
        font-size: 16px;
        color: #666;
        margin-bottom: 30px;
      }

      strong {
        font-size: 26px;
        color: #333;
        font-weight: normal;
      }

      span {
        font-size: 14px;
        color: #666;
        padding-left: 10px;
      }
    }
  }

  .table-wrapper {
    border: 1px solid #EBEEF5;
    margin-bottom: 20px;
  }

  .table-head {
    background: #EBEEF5;
    font-size: 16px;
    color: #303030;
    line-height: 20px;
    padding: 20px 30px;
  }

  .table-conent {
    padding: 0 30px;
  }
}
</style>