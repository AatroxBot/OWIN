<template>
    <div style="width:100%">
          <!-- <dv-charts :option="option" /> -->
          <Echart
            :options="options"
            id="topLeftBottomBar"
            height="1.65rem"
          
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
            text: "工单数量对比",
            textStyle: {
              color: '#d3d6dd',
              fontSize: 12,
            },
            top:"0"
          },
          tooltip: {
            trigger: "axis",//坐标轴触发
            backgroundColor: "rgba(7,10,23,0.7)",//鼠标放上去之后背景颜色
            axisPointer: {
              type: "shadow",//阴影指示器
              label: {
                show: true,//x轴是否显示文本标签
                backgroundColor: "#7B7DDC",//x轴文本标签背景颜色
              }
            }
          },
          legend: {
            data: ["本月","上月"],
            textStyle: {
              color: "#B4B4B4"
            },
            top: "1%",
            right:"0",
            itemWidth:8,
            itemHeight:8,
          },
          grid: {
            left: "22%",
            width: "78%",
            top:'28%',
            height:"53%",
            right:"0%"
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
            },
          },
          yAxis: [
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
             {
              name: "本月",
              type: "bar",
              // barGap: "50%",
              barWidth: 3,//柱条的宽度，不设时自适应。
              itemStyle: {
                normal: {
                  barBorderRadius: 3,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(46,158,255,1)" },
                    // { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                    // { offset: 1, color: "rgba(156,107,211,0.2)" }
                  ])
                }
              },
              
              data: newData.lineData
            },
            {
              name: "上月",
              type: "bar",
              barWidth: 3,
              itemStyle: {
                normal: {
                  barBorderRadius: 3,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#f9bc45" },
                    // { offset: 1, color: "#3EACE5" }
                  ])
                }
              },
              data: newData.barData
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