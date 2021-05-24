<template>
    <div style="width:100%">
          <!-- <dv-charts :option="option" /> -->
          <Echart
            :options="options"
            id="topLeftBottomBar"
            height="3rem"         
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
            text: "出库数量",
            textStyle: {
              color: '#d3d6dd',
              fontSize: 12,
            },
            top:"0"
          },
          tooltip: {
            trigger: "axis",//坐标轴触发
            backgroundColor: "rgba(255,255,255,0.7)",//鼠标放上去之后背景颜色
            axisPointer: {
              type: "shadow",//阴影指示器
              label: {
                show: true,//x轴是否显示文本标签
                backgroundColor: "#7B7DDC"//x轴文本标签背景颜色
              }
            }
          },
          // legend: {
          //   data: ["小米","其他","电商"],
          //   textStyle: {
          //     color: "#B4B4B4"
          //   },
          //   top: "5%",
          //   right:"-2%",
          //   itemWidth:8,
          //   itemHeight:8,
          //   orient:'vertical'
          // },
          grid: {
            left: "20%",
            width: "80%",
            top:'15%',
            bottom:"15%"
          },
          // xAxis: {
          //   data: newData.category,
          //   // show:true,
          //   axisLine: {
          //    // show:false,
          //     lineStyle: {
          //       color: "#0f2f5a"
          //     }
          //   },
          //   // axisLine:{     //x轴坐标轴
          //   //   show:false
          //   // },
          //   axisLabel:{
          //     show: false
          //   },
          //   axisTick: {
          //     show: false
          //   }
          // },
           xAxis: {
            data: newData.category,
            axisLine: {
              lineStyle: {
                color: "#0f2f5a"
              }
            },
            axisTick: {
              show: false
            }
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
              }
            },          
          ],
          series: [           
            {
              name: "出库数量",
              type: "bar",
              // barGap: "50%",
              barWidth: 10,//柱条的宽度，不设时自适应。
              // showBackground:true,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  // color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  //   { offset: 0, color: "rgba(46,158,255,1)" },
                  //   // { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                  //   // { offset: 1, color: "rgba(156,107,211,0.2)" }
                  // ])
                  color: function (params){
                        var colorList = ['rgba(46,158,255,1)','rgb(255,204,67,1)','rgb(255,159,127,1)','rgb(159,230,184,1)','rgb(255,219,92,1)','rgb(251,114,147,1)'];
                        return colorList[params.dataIndex];
                    }
                },
                // emphasis: {
                //         shadowBlur: 10,
                //         shadowOffsetX: 0,
                //         shadowColor: 'rgba(255, 255, 255, 1)'
                // }
              },
              
              data: newData.lineData
            },
            //  {
            //   name: "其他",
            //   type: "bar",
            //   // barGap: "-100%",
            //   barWidth: 10,//柱条的宽度，不设时自适应。
            //   itemStyle: {
            //     normal: {
            //       barBorderRadius: 5,
            //       color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //         { offset: 0, color: "rgba(50,197,233,1)" },
            //         // { offset: 0.2, color: "rgba(156,107,211,0.5)" },
            //         // { offset: 1, color: "rgba(156,107,211,0.2)" }
            //       ])
            //     }
            //   },             
            //   data: newData.lineDataq
            // },
            // {
            //   name: "电商",
            //   type: "bar",
            //   // barGap: "-100%",
            //   barWidth: 10,//柱条的宽度，不设时自适应。
            //   itemStyle: {
            //     normal: {
            //       barBorderRadius: 5,
            //       color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //         { offset: 0, color: "rgba(159,230,184,1)" },
            //         // { offset: 0.2, color: "rgba(156,107,211,0.5)" },
            //         // { offset: 1, color: "rgba(156,107,211,0.2)" }
            //       ])
            //     }
            //   },             
            //   data: newData.lineDatad
            // }
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
// series: [
//                     {
//                         type: 'bar',
//                         data: [18203, 23489, 29034, 14970],
//                         itemStyle:{
//                             normal:{
//                                 color:function(params){
//                                     var colorList = ['#D4C880','#D1D1D1','#01A3D4','#8EA9C4']; 
//                                     return colorList[params.dataIndex] ;
//                                 }
//                             }//多个颜色柱子
//                         },
//                         label:{
//                             normal:{
//                                 show:true,
//                                 position:'right'
//                             }
//                         }
                        
//                     },
//                 ]
</script>
