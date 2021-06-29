<template>
    <div style="width:100%;position: relative">
        <span style="position: absolute; top:0.25rem;right:0rem">单位（台）</span>
          <!-- <dv-charts :option="option" /> -->
          <Echart
            :options="options"
            id="topLeftBottomBar"
            height="4rem"
          
            ></Echart>
          
    </div>
</template>
<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          title: {
            text: "订单总量分布图",
            textStyle: {
              color: '#d3d6dd',
              fontSize: 12,
            },
            top:"5%"
          },
          tooltip: {
            trigger: "axis",//坐标轴触发
            backgroundColor: "rgba(255,255,255,0.1)",//鼠标放上去之后背景颜色
            axisPointer: {
              type: "shadow",//阴影指示器
              label: {
                show: true,//x轴是否显示文本标签
                backgroundColor: "#7B7DDC"//x轴文本标签背景颜色
              }
            }
          },
          // legend: {
          //   data: ["发货数量","数量"],
          //   textStyle: {
          //     color: "#B4B4B4"
          //   },
          //   top: "5%",
          //   right:"5%",
          //   itemWidth:8,
          //   itemHeight:8,
          // },
          grid: {
            x: "0%",
            width: "92%",
            y: "20%",
            bottom:'5%',
            containLabel:true,
          },
          xAxis: {
            data: newData.category,
             inverse:true,
            axisLine: {
              lineStyle: {
                color: "#0f2f5a"
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis:[
            {
              splitLine: { 
                show: true,
                lineStyle:{
                    color:"#0f2f5a",
                    opacity:'0.5'
                  }
               },
              axisLine: {
                lineStyle: {
                  color: "#0f2f5a"
                }
              },

              axisLabel: {
                formatter: "{value} "
              },
              
            },
            {
              splitLine: {
                 show: true,
                 lineStyle:{
                   color:"#0f2f5a"
                 }
               },
              axisLine: {
               show: false,
              },
              axisLabel: {
                formatter: " "
              }
            }
          ],
          series: [
            // {
            //   name: "贯通率",
            //   type: "line",
            //   smooth: true,
            //   showAllSymbol: true,
            //   symbol: "emptyCircle",
            //   symbolSize: 8,
            //   yAxisIndex: 1,
            //   itemStyle: {
            //     normal: {
            //       color: "#F02FC2"
            //     }
            //   },
            //   data: newData.rateData
            // },
            // {
            //   name: "已贯通",
            //   type: "bar",
            //   barWidth: 10,
            //   itemStyle: {
            //     normal: {
            //       barBorderRadius: 5,
            //       color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //         { offset: 0, color: "#956FD4" },
            //         { offset: 1, color: "#3EACE5" }
            //       ])
            //     }
            //   },
            //   data: newData.barData
            // },
            {
              name: "发货数量",
              type: "bar",
              // barGap: "-100%",
              barWidth: 10,//柱条的宽度，不设时自适应。
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(46,158,255,1)" },
                    // { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                    // { offset: 1, color: "rgba(156,107,211,0.2)" }
                  ])
                }
              },
              // z: -12,//疑问
              data: newData.lineData
            },
            {
              name: "数量",
              type: "line",
              smooth: true,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: "#f9bc45"
                }
              },
              data: newData.lineData
            },
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>