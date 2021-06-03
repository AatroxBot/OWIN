<template>
    <div id="botCenter">
        <div style="position:relative"  class="table-data">
            <div class="d-flex pt-2 pl-2">
                <span style="color:#5cd9e8">
                     <icon name="chart-line"></icon>
                </span>
                <div class="d-flex">
                    <span class="text mx-2">发货与库存分析</span>
                    <!-- <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" /> -->
                </div>
              
            </div>
            <div class="table-picker">
                <el-date-picker
                    v-model="times"
                    type="daterange"
                    range-separator="-"
                     @change="dataSearch"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
            </div>
            <div>
               <div class="no"  >
                    <div class="no-hd">
                        <ul>
                            <li>库存总量：{{storageNumber}}</li>
                        </ul>
                    </div>
               </div>
            </div>
            <!-- <div>
                库存总量： <span>1111111</span>
            </div> -->
            <div class="d-flex">
                 <bottomCenterLine :linedatabot="linedatabot" :id='tab1' :lineName='linename1'/>
                  <!-- :botlinedata="botlinedata1" -->
            </div>
            <div class="d-flex">
                <bottomCenterPie :pcdata="pcdata" :id='pie1' :pieName='piename1'/>
                <topLeftBottomBar :cdata="cdata"/>
                
            </div>
        </div>
        
    </div>
</template>
<script>
import bottomCenterLine from "./../components/echart/bottomCenter/bottomCenterLine";
import bottomCenterPie from './../components/echart/bottomCenter/bottomCenterPie.vue';
import topLeftBottomBar from "./../components/echart/bottomCenter/topLeftBottomBar";
import { StorageALLNumber,botlineList,ProductShipped,ProductAllShip } from './../api/index.js';
// botlineList
export default {
     data () {
        return {
             tableData:[],
             storageNumber:0,
             times: [],
            serviceTimeArgs:{'StartTime':'','EndTime':''},
            //折线图配置属性改动
            tab1:'tab1',          
            linename1:'好易点营销中心',
            // botlinedata1:[],
            linedatabot:{
                xlinedata:[],
                lineData: [     
                ],
            },
            pie1:'pie1',          
            piename1:'成品当天出库数',
            // linegrid1:{
            //     left:'10%',
            //     top:'20%',
            //     bottom:'25%'
            // },
            //数据
            pcdata: {
                xData: [
                    "小米", "其他", "电商", "KA", "ODM", "邦先生","线下"
                    ],
                seriesData: [
                { value: 20, name: "小米" },
                { value: 30, name: "其他" },
                { value: 25, name: "电商" },
                { value: 25, name: "KA" },
                { value: 28, name: "ODM" },
                { value: 35, name: "邦先生" },
                { value: 35, name: "线下" }
                ]
            },
            cdata: {
                category: [
                "小米",
                "电商",
                "苹果",
                "其他",
                "华为",
                "OPPO"
                ],
                lineData: [
                100,
                200,
                300,
                400,
                100,
                200,
                ],
            }
        }
    },
    components: {
       bottomCenterLine,
       bottomCenterPie,
       topLeftBottomBar
       
    },
    created () {
         this.getData();
    },
    methods: {
         dataSearch() {
      var startTime=this.times[0].toLocaleDateString();
      var endTime=this.times[1].toLocaleDateString();
     this.serviceTimeArgs.StartTime=startTime;
     this.serviceTimeArgs.EndTime=endTime;
     console.log(this.serviceTimeArgs);
     this.getData();
    },
        getData() {
          //库存总量
          StorageALLNumber().then((res) =>{
             this.storageNumber=res;
            });



        botlineList(this.serviceTimeArgs).then((res)=>{
                // this.tableData=res.data
                 console.log(this.tableData)
                 this.tableData = res.map(item=>{
                     return item.Number
                   });
                   this.tableDataBillTime = res.map(item=>{
                     return item.BillTime.substring(0,10)
                   });
                //    console.log(this.tableDataBillTime)
                   this.linedatabot={
                       xlinedata:this.tableDataBillTime,
                       lineData:this.tableData
                   }      
            });

           ProductShipped(this.serviceTimeArgs).then((res)=>{
                console.log(res);
                this.tableData=res.map(item=>{
                    const datapieobj={};
                    datapieobj.value=item.ProductNum;
                    datapieobj.name=item.ProductName;
                    return datapieobj
                });
                this.pcdata={
                   seriesData:this.tableData
                };
                console.log('ProductShipped');
                console.log(this.tableData);
                console.log('ProductShipped');
            });


           ProductAllShip(this.serviceTimeArgs).then((res)=>{


                //  this.tableData=res.map(item=>{
                //     const datapieobj={};
                //     datapieobj.value=item.ProductNum;
                //     datapieobj.name=item.ProductName;
                //     return datapieobj
                // });






                this.tableDatabar=res.map(item=>{                    
                   return item.ProductNum                
                });
                this.tableDatabarname=res.map(item=>{                    
                   return item.ProductName                
                });
                this.cdata={
                    category:this.tableDatabarname,
                    lineData:this.tableDatabar
                };
                // console.log('ProductShipped');
                // console.log(this.cdata);
                // console.log('ProductShipped');

            });







        },
    }
}
</script>

<style  scoped>
#botCenter {
 padding: 0.1rem 0.2rem;
 height: 3.75rem;
  min-width: 3.75rem;
    /* background: red; */
}
.no {
  /* background: rgba(101, 132, 226, 0.1); */
  padding:0.075rem 0.0875rem;
}
.no .no-hd {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.no .no-hd::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 30px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}
.no .no-hd::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 30px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}
.no .no-hd ul {
  display: flex;
}
.no .no-hd ul li {
  position: relative;
  flex: 1;
  /* line-height: 0.65rem; */
  font-size: 0.3rem;
  color: #ffeb7b;
  text-align: center;
  font-family: "electronicFont";
  padding:  0.1rem 0 0.1rem;
}
.table-data{position: relative;}
.table-picker{position:absolute; top:0rem;right:0rem;width: 60%; }
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