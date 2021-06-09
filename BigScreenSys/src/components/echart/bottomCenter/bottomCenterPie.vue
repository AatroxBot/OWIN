<template>
  <div style="width:52%">
    <Echart
      :options="options"
      :id='this.id'
      height="2.75rem"
      width="3.95rem"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  // props:{
        
  //    },
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    id:{
          type:String, //数据类型
          default:null //无数据时候默认为
      },
     pieName:{
          type:String,
          default:null
      },
    pcdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
   pcdata: {
      handler (newData) {
         


        this.options = {
           title: {
                text: this.pieName,
                textStyle: {
                    fontSize:12,
                    color:'#d3d6dd'
                },
                top:'-3',
                left:'23',
            },
          color: [
            "#37a2da",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#fb7293",
            "#e7bcf3",
            "#8378ea"
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            show: true
          },
          calculable: true,
          legend: {
            orient: "vertical",
            icon: "roundRect",
            bottom: 0,
            //x: "center",
            right:'0',
            top:'bottom',
            itemWidth:8,
            itemHeight:8,
            itemGap:5,
            data: newData.xData,
            textStyle: {
              color: "#d3d6dd",
              fontSize:'11',
            },
            formatter: function(name){
                return name.length>3?name.substr(0,3)+"...":name;
            }
          },
          textStyle:{
                  fontSize:'10'
              },
          series: [
            {
              name: "数量",
              type: "pie",
              radius: [20, 65],
              //roseType: "area",
              avoidLabelOverlap: true,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#070a17',
                borderWidth: 3
              },
              center: ["45%", "58%"],
              labelLine:{
                    length:'5',
                    length2:'5',
                },
              data: newData.seriesData,              
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>