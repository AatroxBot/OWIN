<template>
    <div class="table-data">
        <div class="table-picker">
            <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
         </div>
         <dv-scroll-board :config="config" style="width:100%;height:2rem;" />
    </div>
</template>
<script>
// import { fetchData } from '../../../api/index.js';
 import { getDomainList } from '../../../api/index.js';
export default {
  data() {
    return {
      tableData: [],
      value1: '',
      config: {
       // header: ["序列号", "订单号", "客户", "产品","发货数量","出库数量","日期"],
        data: [
          
        ],
        // rowNum: 3, //表格行数
        // headerHeight: 35,
        // headerBGC: "#0f1325", //表头
        // oddRowBGC: "#0f1325", //奇数行
        // evenRowBGC: "#171c33", //偶数行
        // // index: true,
        // columnWidth: [50],
        // align: ["center"],
      }
    };
  },
  components: {},
  created() {
      this.getData();
  },
  methods: {  
     getData() {
           // console.log(11);
            const res1=  getDomainList().then((res) => {
                console.log('getDomainList');
                  console.log(res);
                  console.log('getDomainList');
                   this.tableData = res.map(item=>{
                     return [item.SerialNum,item.OrderNo,item.CustomerName,item.OrderNum,item.ShipmemntNum,item.OutStockNum,item.OrderTime]
                   });
                  this.config= { 
                      header: ["序号", "订单号", "客户","订单数量", "拣配量","出库量","日期"],
                      data: this.tableData ,
                      rowNum: 3, //表格行数
                      headerHeight: 35,
                      headerBGC: "#0f1325", //表头
                      oddRowBGC: "#0f1325", //奇数行
                      evenRowBGC: "#171c33", //偶数行
                      // index: true,
                      columnWidth: [50],
                      align: ["center"],
                  } ;
              });
            // console.log(res1);
            // console.log(22);
      },
    } 
};
</script>
<style scoped>
.table-data{position: relative;}
.table-picker{position:absolute; top:-0.4rem;right:-0.2rem;width: 65%; }
.el-date-editor.el-input, .el-date-editor.el-input__inner{height: 30px;}
.el-input__inner{
  background: none;
  border: none;
  height: 30px;
  line-height: 30px;
   padding: 0 15px;
}
.table-data >>> .el-date-editor .el-range-separator{color:#fff}
.table-data >>> .el-date-editor .el-range-input{width: 1.5rem;}
.table-data >>> input{
  border:none;
  background: none;
  color: #fff;
}
</style>