<template>
    <div id="chartLineBox" style="height:2.4rem;width:3.25rem;flex:1"></div>
</template>
<script>
import echarts from 'echarts'
import { botlineList } from '../../../api/index.js';
export default {
   data() {
			return {
				charts: '',
                newData:{
                        xlinedata:[],
                        lineData: [],
                      },
			}
		},
    mounted() {			
				//this.drawLine('chartLineBox')		
	},
     created () {
         this.getData();
    },
    methods: {
        
         
         getData() {
               botlineList(this.serviceTimeArgs).then((res)=>{
                // this.tableData=res.data
                // console.log(this.tableData)
                 var tableData = res.map(item=>{
                     return item.Number
                   });
                  var tableDataBillTime = res.map(item=>{
                     return item.BillTime.substring(0,10)
                   });
                    
                   this.newData={
                       xlinedata:tableDataBillTime,
                       lineData:tableData
                   };
                   this.drawLine('chartLineBox');	
                   console.log(tableDataBillTime)      
            });
         },
			drawLine() {
                var vm=this;
				let myChart  = echarts.init(document.getElementById('chartLineBox'));
                myChart.on('click', function (params) {
                 console.log(params); 
                  vm.$emit('handleChange', params.name);
                 });

				myChart.setOption({
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
                        text: "好易点营销中心",
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
                    },
                    
					xAxis: {                     
                        boundaryGap: false,
                         inverse:true,
                         data: this.newData.xlinedata,         
                    //      data: [
                    //     "01", '02', '03', '04', '05', '06',
                    //     '07', '08', '09', '10', 
                    // ],             
                         axisTick: {
                            show: false
                        }, 
                        axisLine: {
                            lineStyle: {
                            color: '#d3d6dd'
                            }
                        },
                    },
                    yAxis: {
                          type: 'value',
                          splitLine: {
                                show: false
                            }, 
                         axisTick: {
                                show: false
                            },
                         axisLine: {
                           lineStyle: {
                            color: '#d3d6dd'
                            }
                        },
                    },
                     grid:{
                        left:'15%',
                        top:'20%',
                        bottom:'25%',
                    },
                   
                    series: [
                        {
                    //     data: [
                    //  99, 30, 40, 99, 50, 10,
                    //  90, 80, 60, 50, 88, ],
                         data:this.newData.lineData,
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
                        lineStyle:{
                            color:'#ffcc43'
                        },
                        itemStyle:{
                                color:'#ffcc43'
                        },
                
                    }
                    ]
				})
                //  window.addEventListener("resize", function() {
                //     myChart.resize();
                // });
			},
      
		},
}
</script>
<style scoped>

</style>