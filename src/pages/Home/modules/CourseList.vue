<template>
  <div class="course">
    <header class="course-head">
      <div class="study-count">学习人数 500</div>
      <div class="study-count">考试人数 500</div>
      <div class="study-count">通过考试 5000</div>
      <h3>章节一 免费开店的流程</h3>
    </header>
    <section class="course-table">
      <el-table :data="data" stripe style="width: 100%">
        <el-table-column prop="title">
          <template slot-scope="scope">
            <i class="el-icon-video-play"></i>
            {{scope.row.title}}
          </template>
        </el-table-column>
        <el-table-column prop="studyCount" width="130">
          <template slot-scope="scope">学习人数 {{scope.row.studyCount}}</template>
        </el-table-column>
        <el-table-column prop="examCount" width="130">
          <template slot-scope="scope">考试人数 {{scope.row.examCount}}</template>
        </el-table-column>
        <el-table-column prop="difficulty" width="130">
          <template slot-scope="scope">通过考试 {{scope.row.difficulty}}</template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="stylus">
.course {
  position: relative;
  margin-bottom: 15px;

  .course-head {
    position: absolute;
    width: 100%;
    z-index: 10;
    height: 45px;
    line-height: 24px;
    padding: 10px 20px;
    background: #F5F7FA;

    h3 {
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }

    .study-count {
      float: right;
      width: 130px;
      text-align: right;
      color: #999;
      font-size: 14px;
    }
  }

  .course-table {
  }
}
</style>