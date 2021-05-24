<template>
    <div id="chartLineBox" style="height:3rem;width:3.25rem;flex:1"></div>
</template>
<script>
import echarts from 'echarts'
export default {
   data() {
			return {
				charts: '',
			}
		},
    mounted() {			
				this.drawLine('chartLineBox')		
	},
    methods: {
			drawLine() {
				let myChart  = echarts.init(document.getElementById('chartLineBox'))
				myChart.setOption({
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
                        right: "2%",
                        bottom:'11%',
                        show: true, // 显示边框
                        borderColor: "#012f4a", // 边框颜色
                        containLabel: true // 包含刻度文字在内
                        },
					xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisLabel: {
                            color: "#4c9bfd" // 文本颜色
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            color: "#4c9bfd" // 文本颜色
                        },
                        splitLine: {
                                lineStyle: {
                                color: "#012f4a" // 分割线颜色
                                }
                        },
                         min: 100,
                         max: 500,
                    },
                   
                    series: [{
                        data: [200,300,300,400,200, 300, 200,400, 200,300,300,500],
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
				})
                //  window.addEventListener("resize", function() {
                //     myChart.resize();
                // });
			}
		},
}
</script>
<style scoped>

</style>