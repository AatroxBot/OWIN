<template>
    <div id="botCenter">
        <div>
            <div class="d-flex pt-2 pl-2">
                <span style="color:#5cd9e8">
                     <icon name="chart-line"></icon>
                </span>
                <div class="d-flex">
                    <span class="text mx-2">发货与库存分析</span>
                    <!-- <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" /> -->
                </div>
              
            </div>
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
import { botlineList,botpieList } from './../api/index.js';
// botlineList
export default {
     data () {
        return {
             tableData:[],
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
        getData() {
        //    const dataline= botlineList().then((res)=>{
        //         // this.tableData=res.data
        //         //  console.log(this.tableData)
        //          this.tableData = res.data.map(item=>{
        //              return item.Number
        //            });
        //            this.tableDataBillTime = res.data.map(item=>{
        //              return item.BillTime
        //            });
        //         //    console.log(this.tableDataBillTime)
        //            this.linedatabot={
        //                xlinedata:this.tableDataBillTime,
        //                lineData:this.tableData
        //            }      
        //     });

        const dataline= botlineList().then((res)=>{
                // this.tableData=res.data
                //  console.log(this.tableData)
                 this.tableData = res.map(item=>{
                     return item.Number
                   });
                   this.tableDataBillTime = res.map(item=>{
                     return item.BillTime
                   });
                //    console.log(this.tableDataBillTime)
                   this.linedatabot={
                       xlinedata:this.tableDataBillTime,
                       lineData:this.tableData
                   }      
            });

            const datapie=botpieList().then((res)=>{
                this.tableData=res.data.map(item=>{
                    const datapieobj={};
                    datapieobj.value=item.ProductNumber;
                    datapieobj.name=item.ProductName;
                    return datapieobj
                });
                this.pcdata={
                   seriesData:this.tableData
                }
                this.tableDatabar=res.data.map(item=>{                    
                   return item.ProductNumber                
                });
                this.tableDatabarname=res.data.map(item=>{                    
                   return item.ProductName                
                });
                this.cdata={
                    category:this.tableDatabarname,
                    lineData:this.tableDatabar
                };
            })
        },
    }
}
</script>

<style lang="scss" scoped>
#botCenter {
 padding: 0.1rem 0.2rem;
 height: 3.25rem;
  min-width: 3.75rem;
//   background: red;
}
</style>