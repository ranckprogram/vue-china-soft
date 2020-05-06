<template>
  <div class>
    <el-card>
      <div id="chart" style="width: 100%;height: 400px;"></div>
    </el-card>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      activeName: "first"
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPie("chart");
    });
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#999", // 颜色
              width: 2 // 粗细
            }
          },
          data: [
            "2020-01-02",
            "2020-01-03",
            "2020-01-04",
            "2020-01-05",
            "2020-01-06",
            "2020-01-07",
            "2020-01-08"
          ]
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false }
        },

        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            itemStyle: {
              normal: {
                color: "#409EFF",
                lineStyle: {
                  color: "#409EFF"
                },
                areaStyle: {
                  type: "default",
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#409EFF" // color at 0% position
                      },
                      {
                        offset: 1,
                        color: "#fff" // color at 100% position
                      }
                    ],
                    global: false // false by default
                  }
                }
              }
            }
          }
        ]
      });
    },
    handleClick() {}
  }
};
</script>

<style lang="stylus"></style>