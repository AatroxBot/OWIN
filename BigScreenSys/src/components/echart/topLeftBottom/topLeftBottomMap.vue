<template>
    <div class="box">
        <div id="chart"></div>
    </div>
</template>
<script>
import china from './china'
var data =[
    {name:"北京",value:300},
    {name:"天津",value:100},
    {name:"河北",value:300},
    {name:"山西",value:150},
    {name:"内蒙古",value:250},
    {name:"辽宁",value:600},
    {name:"吉林",value:100},
    {name:"黑龙江",value:300},
    {name:"上海",value:300},
    {name:"江苏",value:120},
    {name:"浙江",value:230},
    {name:"安徽",value:110},
    {name:"福建",value:200},
    {name:"江西",value:500},
    {name:"山东",value:300},
    {name:"河南",value:10},
    {name:"湖北",value:230},
    {name:"湖南",value:330},
    {name:"广东",value:120},
    {name:"广西",value:100},
    {name:"海南",value:200},
    {name:"重庆",value:300},
    {name:"四川",value:100},
    {name:"贵州",value:100},
    {name:"云南",value:100},
    {name:"西藏",value:200},
    {name:"陕西",value:300},
    {name:"甘肃",value:200},
    {name:"青海",value:200},
    {name:"宁夏",value:400},
    {name:"新疆",value:600},
];
 
function randomData() {
    return Math.round(Math.random()*500);
}
// var geoCoordMap=[
//     {name:'北京', geoCoord:[104.07, 30.67],value:10000},
// ],
var geoCoordMap={
    '北京':[116.46,39.92],
    '天津':[117.2,39.13],
    '河北':[114.48,38.03],
    '山西':[112.53,37.87],
    '内蒙古':[111.65,40.82],
    '辽宁':[123.38,41.8],
    '吉林':[126.57,43.87],
    '黑龙江':[126.63,45.75],
    '上海':[121.48,31.22],
    '江苏':[120.62,31.32],
    '浙江':[120.19,30.26],
    '安徽':[117.27,31.86],
    '福建':[119.3,26.08],
    '江西':[115.89,28.68],
    '山东':[117,36.65],
    '河南':[113.65,34.76],
    '湖北':[114.31,30.52],
    '湖南':[113,28.21],
    '广东':[113.23,23.16],
    '广西':[108.33,22.84],
    '海南':[110.35,20.02],
    '重庆':[106.54,29.59],
    '四川':[104.06,30.67],
    '贵州':[106.71,26.57],
    '云南':[102.73,25.04],
    '西藏':[91.11,29.97],
    '陕西':[108.95,34.27],
    '甘肃':[103.73,36.03],
    '青海':[101.74,36.56],
    '宁夏':[106.27,38.47],
    '新疆':[87.68,43.77],
}
var convertData = function(data){
    var res = [];
    for(var i = 0;i < data.length;i ++){
        var geoCoord = geoCoordMap[data[i].name];
        if(geoCoord){
            res.push({
                name:data[i].name,
                value: geoCoord.concat(Number(data[i].value))
            });            
        }
        
    }
    return res;
}

export default {
    mounted(){
        this.mYChart()
    },
    methods:{
        mYChart(){
            var mapChart = this.$echarts.init(document.getElementById('chart'));
            mapChart.setOption({
                // backgroundColor: '#404a59',
                title: {
                    text: '订单分布图',
                   // subtext: '订单分布图',
                    //sublink: 'http://www.pm25.in',
                    left: 'left',
                    textStyle:{
                        color:"#d3d6dd",
                        fontSize:"12",
                    },
                    top:'5%',
                },
                
                //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
                //要显示散点图，必须填写这个配置
                geo:{
                    show:true,
                    roam: true, //是否允许鼠标滚动放大，缩小
                    map:'china',
                    label: {  //图形上的文本标签，可用于说明图形的一些数据信息
                        show:false,  //是否显示文本
                        color:'#CCC',  //文本颜色地图上城市名称显示
                    },
                    itemStyle: { //地图区域的多边形 图形样式。 默认样试。
                        areaColor: '#0d1c3a', //地图区域的颜色。
                        borderColor: '#133a7d', //边框线
                    },
                    emphasis:{ //高亮状态下的多边形和标签样式。
                        label:{ //文本
                            color: '#ADA',
                        },
                        itemStyle:{ //区域
                            areaColor: '#1a52a9'
                        }
                    },
                    // data:[
                    //     {name: '北京',value: Math.round(Math.random()*500)},
                    //     {name: '天津',value: Math.round(Math.random()*500)},
                    //     {name: '上海',value: Math.round(Math.random()*500)},
                    //     {name: '重庆',value: Math.round(Math.random()*500)},
                    //     {name: '河北',value: Math.round(Math.random()*500)},
                    //     {name: '河南',value: Math.round(Math.random()*500)},
                    //     {name: '云南',value: Math.round(Math.random()*500)},
                    //     {name: '辽宁',value: Math.round(Math.random()*500)},
                    //     {name: '黑龙江',value: Math.round(Math.random()*500)},
                    //     {name: '湖南',value: Math.round(Math.random()*500)},
                    //     {name: '安徽',value: Math.round(Math.random()*500)},
                    //     {name: '山东',value: Math.round(Math.random()*500)},
                    //     {name: '新疆',value: Math.round(Math.random()*500)},
                    //     {name: '江苏',value: Math.round(Math.random()*500)},
                    //     {name: '浙江',value: Math.round(Math.random()*500)},
                    //     {name: '江西',value: Math.round(Math.random()*500)},
                    //     {name: '湖北',value: Math.round(Math.random()*500)},
                    //     {name: '广西',value: Math.round(Math.random()*500)},
                    //     {name: '甘肃',value: Math.round(Math.random()*500)},
                    //     {name: '山西',value: Math.round(Math.random()*500)},
                    //     {name: '内蒙古',value: Math.round(Math.random()*500)},
                    //     {name: '陕西',value: Math.round(Math.random()*500)},
                    //     {name: '吉林',value: Math.round(Math.random()*500)},
                    //     {name: '福建',value: Math.round(Math.random()*500)},
                    //     {name: '贵州',value: Math.round(Math.random()*500)},
                    //     {name: '广东',value: Math.round(Math.random()*500)},
                    //     {name: '青海',value: Math.round(Math.random()*500)},
                    //     {name: '西藏',value: Math.round(Math.random()*500)},
                    //     {name: '四川',value: Math.round(Math.random()*500)},
                    //     {name: '宁夏',value: Math.round(Math.random()*500)},
                    //     {name: '海南',value: Math.round(Math.random()*500)},
                    //     {name: '台湾',value: Math.round(Math.random()*500)},
                    //     {name: '香港',value: Math.round(Math.random()*500)},
                    //     {name: '澳门',value: Math.round(Math.random()*500)},
                    //     {name: '南海诸岛',value: Math.round(Math.random()*500)}
                    // ],
                },
                
                tooltip:{
                    show:true,
                    trigger: 'item',
                    formatter: function(param) {  
                        var value = param.value; 
                        var name = param.name;  
                        return '<div style="font-size: 12px;"> '+name+':' + value[2]  +  
                            '</div>';  
                    }  
                },
                //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
                // visualMap: {
                //     min: 0, //最小值
                //     max: 600, //最大值
                //     calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
                //     inRange: {
                //         color: ['#e83e5e','#fb2a08', '#d6f628'] //颜色
                //     },
                //     textStyle: {
                //         color: '#fff'
                //     },
                // },//左侧拖动数据
                series:[
                    {
                        type:'effectScatter', //样试
                       // type: 'map',  //地图种类
                        map: 'china', //地图类型。
                        coordinateSystem:'geo', //该系列使用的坐标系
                        data: convertData(data),//[ //数据
                            // {name: '宜昌', value: [111.3,30.7,330]},
                            // {name: '信阳', value: [114.089435,32.167686,440]},
                            // {name: '北京', value: [116.422586,39.921549,560]},
                            // {name:'新疆', value: [86.61 , 40.79,330]},
                            // {name:'西藏', value:[89.13 , 30.66,230]},
                            // {name:'黑龙江', value:[128.34 , 47.05,330]},
                            // {name:'吉林', value:[126.32 , 43.38,330]},                         
                            // {name:'北京', value:[116.40 , 40.40 ,150]},
                            // {name:'宁夏', value:[106.27 , 36.76,530]},
                            // {name:'山西', value:[111.95,37.65,330]},
                            // {name:'辽宁', value:[123.42 , 41.29,430]},
                            // {name:'内蒙古', value:[112.17 , 42.81,130]},
                            // {name:'河北', value:[115.21 , 38.44]},
                            // {name:'天津', value:[117.04 , 39.52]},
                            // {name:'青海', value:[97.07 , 35.62]},
                            // {name:'甘肃', value:[103.82 , 36.05]},
                            // {name:'山东', value:[118.01 , 36.37]},
                            // {name:'陕西', value:[108.94 , 34.46]},
                            // {name:'河南', value:[113.46 , 34.25]},
                            // {name:'安徽', value:[117.28 , 31.86]},
                            // {name:'江苏', value:[120.26 , 32.54]},
                            // {name:'上海', value:[121.46 , 31.28]},
                            // {name:'四川', value:[103.36 , 30.65]},
                            // {name:'湖北', value:[112.29 , 30.98]},
                            // {name:'浙江', value:[120.15 , 29.28]},
                            // {name:'重庆', value:[107.51 , 29.63]},
                            // {name:'湖南', value:[112.08 , 27.79]},
                            // {name:'江西', value:[115.89 , 27.97]},
                            // {name:'贵州', value:[106.91 , 26.67]},
                            // {name:'福建', value:[118.31 , 26.07]},
                            // {name:'云南', value:[101.71 , 24.84]},
                            // {name:'台湾', value:[121.01 , 23.54]},
                            // {name:'广西', value:[108.67 , 23.68]},
                            // {name:'广东', value:[113.98 , 22.82]},
                            // {name:'海南', value:[110.03 , 19.33]},
                            // {name:'澳门', value:[113.54 , 22.19]},
                            // {name:'香港', value:[114.17 , 22.32]},

                        //],
                        
                        itemStyle: { //样试。
                            normal:{ //默认样试
                                color: '#d6f628'//圆圈颜色
                            }
                        },
                        label: {                           
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                // show: true,
                            }
                        },
                        //标记的大小,可以设置数组或者函数返回值的形式
                        symbolSize: function (val) {
                            return val[2] / 50;
                        },
                        rippleEffect: { //涟漪特效相关配置。
                            brushType: 'stroke' //波纹的绘制方式
                        },
                        hoverAnimation: true, //鼠标移入放大圆
                    }
                ]
            }),
            mapChart.on('click',function(data){
                console.log(data)
            })
        }
    }   
}
</script>
 
<style scoped>
.box{
    margin-top:0px;
}
#chart{
    width: 3.75rem;
    height:3.75rem;
}
</style>