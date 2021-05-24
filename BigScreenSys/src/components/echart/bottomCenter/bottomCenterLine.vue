<template>
    <div  class="chart-name">
         <!-- <dv-charts :options="options"  :id="this.id"/> -->
          <Echart
            :options="options"
            :id="this.id"
            height="2.5rem"
          
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
                    //    show: true,
                       trigger: "axis",
                        //  formatter: "{a}{b}"
                         axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                  },
                 title: {
                        text: this.lineName,
                        textStyle: {
                            color: '#d3d6dd',
                            fontSize:12,

                        },
                        top:"-2%"
                       // show: false
                    },
                legend: {
                    data: ['出库'],
                    textStyle: {
                        color: '#d3d6dd',
                        fontSize:12,
                    },
                    right:'10%',
                    top:'10%',
                    // iconStyle:{
                    //    fill:'#ffcc43' 
                    // }
                },
                xAxis: {
                    data:newData.xlinedata,
                    //  [
                    //     "01", '02', '03', '04', '05', '06',
                    //     '07', '08', '09', '10', 
                        
                    // ],
                    boundaryGap: false,
                    // axisLine: {
                    //     lineStyle: {
                    //     color: '#999'
                    //     }
                    // },
                    // axisLabel: {
                    //     style: {
                    //     color: '#999'
                    //     }
                    // },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    // data: 'value',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    // axisLine: {
                    //     style: {
                    //     stroke: '#999'
                    //     }
                    // },
                    // axisLabel: {
                    //     style: {
                    //     fill: '#999'
                    //     },
                    //     //  formatter: "{value} "
                    //     // formatter ({ value }) {
                    //     //  return value.toFixed(0)
                    //     // }
                    // },
                    axisTick: {
                        show: false
                    },
                    min: 0,
                    max: 600,
                     interval: 200
                },
                // grid: this.linegrid,
                grid:{
                    left:'10%',
                    top:'20%',
                    bottom:'25%'
                },
                series: [
                {
                    data:newData.lineData,
                    // [
                    // 99, 30, 40, 99, 50, 10,
                    // 90, 80, 60, 50, 88, 
                    
                    // ],
                    type: 'line',
                    name: '出库',
                    smooth: true,
                    areaStyle: {
                        show: true,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(255, 204, 67, 0.6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(255, 204, 67, 0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                        // gradient: ['rgba(255, 204, 67, 0.6)', 'rgba(255, 204, 67, 0)']
                    },
                    // linePoint: {
                    //     radius: 3,
                    //     style: {
                    //         fill: '#fff',
                    //         stroke: '#ffcc43',
                    //         lineWidth: 2
                    //     }
                    // },
                    // lineStyle: {
                    //     stroke: '#ffcc43'
                    // },
                     lineStyle:{
                            color:'#ffcc43'
                        },
                     itemStyle:{
                            color:'#ffcc43'
                      },
                
                    
                }
                ]
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
     min-width: 3.75rem;
     width:100%;
     min-height: 2.75rem;
     //background: #df0000;
  }
</style>