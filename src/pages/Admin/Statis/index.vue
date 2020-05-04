<template>
  <div class="statis">
    <section>
      <h1>课程统计</h1>
      <ul>
        <li @click="$router.push({name: 'AdminStatisLine'})">
          <el-card>
            <figure>
              <div class="box-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconzhuxingtu" />
                </svg>
              </div>
              <figcaption>参加学习总人数</figcaption>
            </figure>
          </el-card>
        </li>
        <li>
          <el-card>
            <figure>
              <div class="box-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icontiaoxingtu" />
                </svg>
              </div>
              <figcaption>参加学习的企业数量</figcaption>
            </figure>
          </el-card>
        </li>
      </ul>
    </section>
    <section>
      <h1>课程统计</h1>
      <ul>
        <li>
          <el-card>
            <figure>
              <div class="box-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconperformance" />
                </svg>
              </div>
              <figcaption>多少人参加考试</figcaption>
            </figure>
          </el-card>
        </li>
        <li>
          <el-card>
            <figure>
              <div class="box-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconmianjitu" />
                </svg>
              </div>
              <figcaption>考试平均成绩</figcaption>
            </figure>
          </el-card>
        </li>

        <li>
          <el-card>
            <figure>
              <div class="box-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconpie-chart" />
                </svg>
              </div>
              <figcaption>企业的平均成绩</figcaption>
            </figure>
          </el-card>
        </li>
        <li>
          <el-card>
            <figure>
              <div class="box-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconscatter" />
                </svg>
              </div>
              <figcaption>企业参加考试的人数</figcaption>
            </figure>
          </el-card>
        </li>
        <li>
          <el-card>
            <figure>
              <div class="box-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconzhuxingtu" />
                </svg>
              </div>
              <figcaption>参加考试的企业的数量</figcaption>
            </figure>
          </el-card>
        </li>
        <li>
          <el-card>
            <figure>
              <div class="box-icon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icontiaoxingtu" />
                </svg>
              </div>
              <figcaption>不及格的人数</figcaption>
            </figure>
          </el-card>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.statis {
  h1 {
    font-size: 16px;
    color: #333;
    padding: 20px 0;
  }

  section {
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 320px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  figure {
    text-align: center;
    font-size: 130px;

    .box-icon {
      width: 280px;
      height: 200px;
      padding: 20px 0;
      background: #EEF8FF;
    }
  }

  figcaption {
    font-size: 16px;
    color: #333;
    padding-top: 16px;
  }
}
</style>