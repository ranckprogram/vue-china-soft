<template>
  <div class="view-exam-process">
    <el-card>
      <ul class="base-info">
        <li>
          <label>参加人数</label>
          <strong>56</strong>
          <span>人</span>
        </li>
        <li>
          <label>开考时间</label>
          <strong>13:30</strong>
        </li>
        <li>
          <label>结束时间</label>
          <strong>15:30</strong>
        </li>
        <li>
          <label>完成人数</label>
          <strong>56</strong>
          <span>人</span>
        </li>
        <li>
          <label>完成比例</label>
          <strong>56%</strong>
        </li>
        <li>
          <label>准确率</label>
          <strong>68%</strong>
        </li>
        <li>
          <label>答题最快用户</label>
          <strong>56</strong>
          <span>分钟</span>
        </li>
        <li>
          <label>答题最慢用户</label>
          <strong>56</strong>
          <span>分钟</span>
        </li>
      </ul>

      <div class="table-head">参加考试人员</div>
      <div class="table-conent">
        <el-table :data="data" style="width: 100">
          <el-table-column prop="number" label="编号"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          number: 1,
          name: "ranck"
        },
        {
          number: 2,
          name: "ranck"
        },
        {
          number: 3,
          name: "ranck"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.view-exam-process {
  .base-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #EBEEF5;
    margin-bottom: 16px;

    li {
      width: 25%;
      border-right: 1px solid #EBEEF5;
      margin: 25px 0;
      padding: 20px 60px;

      &:last-child, &:nth-child(4) {
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