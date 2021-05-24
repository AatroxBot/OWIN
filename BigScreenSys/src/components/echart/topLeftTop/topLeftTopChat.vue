<template>
    <div  class="chart-name">
         <!-- <dv-charts :options="options"  :id="this.id"/> -->
          <Echart
            :options="options"
            :id="this.id"
            height="2.75rem"
            width="3.55rem"
            ></Echart>
    </div>
</template>
<script>
import Echart from '@/common/echart'
export default {   
    data(){
        return {
             options: {},           
         }
    },
     components: {
        Echart,
    },
     props:{
        linedatabot: {
            type: Object,
            default: () => ({})
         },

      id:{
          type:String, //数据类型
          default:'tab1' //无数据时候默认为
      },
      lineName:{
          type:String,
          default:null
      },
      botlinedata:{
         type:Array,
         default:null
      }
    //   linegrid1:{
    //       type:{},
    //       default:null
    //   }
    },
    watch: {
        linedatabot: {
          handler (newData) {
               this.options={
                 tooltip: {              //设置tip提示
                        trigger: 'axis'
                    },
                      legend: {
                           right: "0",
                            textStyle: {
                                color: "#d3d6dd"
                            }
                    },
                     grid: {
                        top: "12%",
                        left: "1%",
                        right: "0%",
                        bottom:'3%',
                        show: true, // 显示边框
                        borderColor: "#012f4a", // 边框颜色
                        containLabel: true // 包含刻度文字在内
                        },
					xAxis: {
                        type: 'category',
                        data: newData.data,
                        axisLabel: {
                            color: "#4c9bfd" // 文本颜色
                        },
                        axisLine: {
                                lineStyle: {
                                color: "#012f4a" // 分割线颜色
                                }
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            color: "#4c9bfd" // 文本颜色
                        },
                        splitLine: {
                            show:true,
                            lineStyle: {
                                color: "#012f4a" // 分割线颜色
                                }
                        },
                        axisLine: {
                                lineStyle: {
                                color: "#012f4a" // 分割线颜色
                                }
                        },
                         min: 0,
                         max: 800,
                    },
                   
                    series: [{
                        data:newData.lineData,
                        type: 'line',
                        smooth: true,
                        name:'收入',
                        lineStyle:{
                            color:'#c23531'
                        },
                        itemStyle:{
                            color:'#c23531'
                        },
                
                    }]
            }
          },
            immediate: true,
            deep: true
        }
    }
}
</script>
<style lang="scss" scoped>
  .chart-name {
     padding: 0.1rem 0.2rem;
    // min-width: 3rem;
   //  width:100%;
   //  min-height: 2.75rem;
     //background: #df0000;
  }
</style>