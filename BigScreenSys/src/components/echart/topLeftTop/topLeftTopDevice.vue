<template>
    <div class="device d-flex"> 
        <dv-charts :option="option0" />
        <dv-charts :option="option1" />
        <dv-charts :option="option2" />
        <!-- <dv-charts :option="option3" /> -->
    </div>
</template>
<script>
 import { topSaleNumber } from '../../../api/index.js';
export default {
    data() {
			return {
                option:{
                    title: {
                        
                    },
                    series: [
                    
                    ]
                },

             option0:{
                 title: {
                        text: '好易点营销中心',
                        style: {
                            fill: '#d3d6dd',
                            fontSize:12,

                        },
                        offset:[0,80]
                       // show: false
                    },
                     series: [
                        {
                        type: 'gauge',
                        data: [ {value:35} ],
                        arcLineWidth:'5',//圆弧宽度
                       // splitNum:'3',//刻度显示数量
                        radius:'80%',
                        center: ['50', '50'],
                        axisLabel: {
                            formatter: '{value}',
                            style: {
                            fill: '#d3d6dd'
                            },
                            show:false
                            // data:['0','100']
                        },
                        details: {
                            show: true,
                            offset: [0, 15],
                            formatter: '{value}%',
                            style:{
                                fontSize:14,
                                fontWeight: 'bold',
                            }
                           
                        },
                        axisTick: {
                            style: {
                              stroke: '#d3d6dd',
                            },
                             tickLength:'2'
                        },
                        pointer:{
                            style:{
                                scale: [0.375,0.375],
                                fill: '#fb7293'
                            }
                        },
                        animationCurve: 'easeOutBack'
                        }
                    ]
             },

                 option1:{
                    title: {
                        text: '战略发展中心',
                        style: {
                            fill: '#d3d6dd',
                            fontSize:12,
                        },
                         offset:[0,80]
                        //show: false
                    },
                    series: [
                        {
                        type: 'gauge',
                        data: [ {name:'itemB',  value: 85 ,gradient: ['#f9bc45', '#f9bc45', '#f9bc45']} ],
                        arcLineWidth:'5',//圆弧宽度
                       // splitNum:'3',//刻度显示数量
                        radius:'80%',
                        center: ['50', '50'],
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
                              stroke: '#d3d6dd',
                            },
                             tickLength:'2'
                        },
                        pointer:{
                            style:{
                                scale: [0.375,0.375],
                                fill: '#fb7293'
                            }
                        },
                        animationCurve: 'easeOutBack'
                        }
                    ]
                },
                option2:{
                    title: {
                        text: '邦先生营销中心',
                        style: {
                            fill: '#d3d6dd',
                            fontSize:12,
                        },
                         offset:[0,80]
                       // show: false
                    },
                    series: [
                        {
                        type: 'gauge',
                        data: [ {name:'itemC',  value: 35 ,gradient: ['#03c2fd', '#1ed3e5', '#2fded6']} ],
                        arcLineWidth:'5',//圆弧宽度
                       // splitNum:'3',//刻度显示数量
                        radius:'80%',
                        center: ['50', '50'],
                        axisLabel: {
                            formatter: '{value}',
                            style: {
                            fill: '#d3d6dd'
                            },
                             show:false
                        },
                        details: {
                            show: true,
                            offset: [0, 15],
                            formatter: '{value}%',
                            style:{
                                fontSize:14,
                                fontWeight: 'bold',
                            }
                           
                        },
                        axisTick: {
                            style: {
                              stroke: '#d3d6dd',
                            },
                             tickLength:'2'
                        },
                        pointer:{
                            style:{
                                scale: [0.375,0.375],
                                fill: '#fb7293'
                            }
                        },
                        animationCurve: 'easeOutBack'
                        }
                    ]
                }
                
				
			}
		},
    created () {
        this.getData();
    },
    methods:{
        getData() {
    
       topSaleNumber().then((res)=>{
              
               this.option0.series[0].data[0].value=res.PercentFirst;
            this.option1.series[0].data[0].value=res.PercentSecond;
            this.option2.series[0].data[0].value=res.PercentThree;



             });
             
            
        }
     }
}
</script>
<style scoped>
.device{
    width: 100%;
    height: 1.95rem;
}
</style>