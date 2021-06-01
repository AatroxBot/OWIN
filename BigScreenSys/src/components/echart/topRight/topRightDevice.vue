<template>
    <div class="device"> 
        <dv-charts :option="option" />
        <dv-charts :option="option1" />
    </div>
</template>
<script>
import { OverallCapacity,ProductForecast,GetPreference } from '../../../api/index.js';

export default {
    data() {
			return {
                 option:{
                    title: {
                        text: '公司整体产能负荷',
                        style: {
                            fill: '#d3d6dd',
                            fontSize:14,
                        },
                         offset:[0,-30]
                        //show: false
                    },
                    series: [
                        {
                        type: 'gauge',
                        data: [ {name:'itemB',  value: 95 ,gradient: ['#f9bc45', '#f9bc45', '#f9bc45']} ],
                        arcLineWidth:'5',//圆弧宽度
                       // splitNum:'3',//刻度显示数量
                        radius:'70%',
                        center: ['50', '60'],
                        axisLabel: {
                            formatter: '{value}',
                            style: {
                            fill: '#d3d6dd'
                            },
                            show:false
                        },
                        details: {
                            show: true,
                            offset: [0,15],
                            formatter: '{value}%',
                            style:{
                                fontSize:14,
                                fontWeight: 'bold',
                            }
                           
                        },
                        axisTick: {
                            style: {
                              stroke: '#fff',
                            },
                             tickLength:'2'
                        },
                        pointer:{
                            style:{
                                scale: [1,1],
                                fill: '#fb7293'
                            }
                        },
                        animationCurve: 'easeOutBack'
                        }
                    ]
                },
               
                option1:{
                    title: {
                        text: '销售订单生产完成情况',
                        style: {
                            fill: '#fff',
                            fontSize:14,
                        },
                         offset:[0,-30]
                       // show: false
                    },
                    series: [
                        {
                        type: 'gauge',
                        data: [ {name:'itemD',  value: 85 ,gradient: ['#f9bc45', '#f9bc45', '#f9bc45']} ],
                        arcLineWidth:'5',//圆弧宽度
                       // splitNum:'3',//刻度显示数量
                        radius:'70%',
                        center: ['50', '60'],
                        axisLabel: {
                            formatter: '{value}',
                            style: {
                            fill: '#fff'
                            },
                             show:false
                        },
                        details: {
                            show: true,
                            offset: [0,15],
                            formatter: '{value}%',
                            style:{
                                fontSize:14,
                                fontWeight: 'bold',
                            }
                           
                        },
                        axisTick: {
                            style: {
                              stroke: '#fff',
                            },
                             tickLength:'2'
                        },
                        pointer:{
                            style:{
                                scale: [1,1],
                                fill: '#fb7293'
                            }
                        },
                        animationCurve: 'easeOutBack'
                        }
                    ]
                },
				
			}
		},
created () {
    this.getData();
  },
   methods: {
    
     getData() {
         
          OverallCapacity().then((res) =>{
             console.log(res);
             this.option.series[0].data[0].value=res*100;
            });
           
        //   ProductForecast().then((res) =>{
        //      this.option1.series[0].data[0].value=res*100;
        //     });



            GetPreference('OrderCompletePercent').then((res) =>{
                console.log(res);
              this.option1.series[0].data[0].value=res;
             });

        },
  }
}
</script>
<style scoped>
.device{
   flex:1;
   height: 2.75rem;
   flex-direction: row-reverse;
}
</style>