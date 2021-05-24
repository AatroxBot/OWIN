<template>
    <div>
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
                 // console.log(res.list);
                   this.tableData = res.data.map(item=>{
                     return [item.SerialNum,item.OrderNo,item.CustomerName,item.ShipmemntNum,item.OutStockNum,item.OrderTime]
                   });
                  this.config= { 
                      header: ["序号", "订单号", "客户", "发货量","出库量","日期"],
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