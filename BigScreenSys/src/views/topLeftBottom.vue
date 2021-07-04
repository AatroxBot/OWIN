<template>
    <div id="topLeftBottom">
        <div>
            <div class="d-flex pt-2 pl-2"  style="position: relative;">
                <span style="color:#5cd9e8">
                    <icon name="chart-bar"></icon>
                </span>
                <div class="d-flex">
                    <span class="text mx-2">销售订单统计动态列表</span>
                    <!-- <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" /> -->
                </div>
                 <!-- <span style="position: absolute; top:0.2rem;right:-0.15rem">单位（台）</span> -->
            </div>
            <div class="d-flex ">
                    <!-- <dv-scroll-board :config="config" style="width:3.375rem;height:4.28rem" /> -->
                    <div class="top-table">
                         <topLeftBottomTable/>
                    </div>                  
            </div>
            <div class="d-flex">
                <topLeftBottomMap/>
                <topLeftBottomBar :cdata="cdata"/>
            </div>
        </div>
        
    </div>
</template>
<script>
import topLeftBottomTable from "./../components/echart/topLeftBottom/topLeftBottomTable";
import topLeftBottomMap from "./../components/echart/topLeftBottom/topLeftBottomMap";
import topLeftBottomBar from "./../components/echart/topLeftBottom/topLeftBottomBar";
import { barList } from './../api/index.js';

export default {
  data () {
    return {
      tableData: [],
      cdata: {
        category: [
          // "1月",
          // "2月",
          // "3月",
          // "4月",
          // "5月",        
        ],
         lineData: [
          // 100,
          // 300,
          // 200,
          // 300,
          // 200,        
        ],
      }
    };
  },
  components: {
      topLeftBottomTable,
       topLeftBottomMap,
       topLeftBottomBar
  },
  created () {
    this.getData();
    // newdataList: function() {
    //   return this.sortKey(this.dataList, "addtime");
    // }
  },
  methods: {
    
     getData() {
           // console.log(11);
            const batdata= barList().then((res) =>{
              // this.tableData=res;
                this.tableData=res.sort((a,b)=>{
                  return new Date(a.Time) -new Date(b.Time)
                });
                this.tableData.reverse();
                  this.tableDataNumber = this.tableData.map(item=>{
                     return item.Number
                   });
                   this.tableDataTime = this.tableData.map(item=>{
                     return item.Time
                   });                
                   this.cdata={
                     category:this.tableDataTime,
                     lineData:this.tableDataNumber,
                   }
            })
           // console.log(bardata);
            // barList().then((res) => {
            //     this.tableData = res.barList;
            //   //   this.bardata=res.list;
            //     console.log(res)
            // });
        },
  }
}
</script>
<style lang="scss" scoped>
#topLeftBottom {
 padding: 0.1rem 0.2rem;
 min-width: 3.75rem;
}
.top-table{
    width: 100%;
}
</style>