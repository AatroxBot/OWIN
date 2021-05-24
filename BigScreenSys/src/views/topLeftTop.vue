<template>
    <div id="topLeftTop">
        <div>
            <div class="d-flex pt-2 pl-2">
                <span style="color:#5cd9e8">
                     <icon name="chart-line"></icon>
                </span>
                <div class="d-flex">
                    <span class="text mx-2">销售动态</span>
                    <!-- <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" /> -->
                </div>
                
            </div>
            <div class="d-flex">
                 <topLeftTopChat  :linedatabot="linedatabot"/>
                 <!-- <bottomCenterLine :id='tab2'/> -->
                 <div class="top-data">
                     <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
                        <p class="colorBlue fw-b">{{item.title}}</p>
                        <div>
                        <dv-digital-flop :config="item.number" style="min-width:1.25rem;height:.625rem;" />
                        </div>
                    </div>
                 </div>
                
            </div>
            <div class="d-flex">
                <div class="top-achievement">
                     <dv-capsule-chart :config="config" style="width: 100%;" />
                     <!-- <dv-scroll-ranking-board :config="config" style="width: 100%;" /> -->
                </div>
            </div>
            <div class="d-flex" >
                <topLeftTopDevice/>               
            </div>
        </div>
        
    </div>
</template>
<script>
 import topLeftTopChat from "./../components/echart/topLeftTop/topLeftTopChat";
// import bottomCenterLine from "./../components/echart/bottomCenter/bottomCenterLine";
import topLeftTopDevice from "./../components/echart/topLeftTop/topLeftTopDevice";
import { topsaleList,topSaleNumber } from './../api/index.js';
export default {
    data(){
        return{
            //折线图配置属性改动
           // tab2:'tab2',
             //数据
            tableData:[],
            tableDataNumber:[],
            linedatabot:{
                data:[],
                lineData: [    
                ],
            },
            config:{
                
            },
             titleItem: [
                // {
                // title: "销售收入",
                // number: {
                //     number: [12000],
                //     toFixed: 0,
                //     content: "{nt}",
                //     style: {
                //       fontSize: 18,
                //     }
                // },
                // },
                // {
                // title: "销售数量",
                // number: {
                //     number: [1800],
                //     toFixed: 0,
                //     content: "{nt}",
                //     style: {
                //     fontSize: 18,
                //     }
                // }
                // },
                // {
                // title: "生产成本",
                // number: {
                //     number: [20000],
                //     toFixed: 0,
                //     content: "{nt}",
                //     style: {
                //     fontSize:18,
                //     }
                // }
                // },
                // {
                // title: "公司费用",
                // number: {
                //     number: [14000],
                //     toFixed: 0,
                //     content: "{nt}",
                //     style: {
                //          fontSize:18,
                //     }
                // }
                // },
                //  {
                // title: "公司利润",
                // number: {
                //     number: [1400000],
                //     toFixed: 0,
                //     content: "{nt}",
                //     style: {
                //         fontSize: 18,
                //     },
                // }
                // },
                
            ],
            
        }
    },
    components: {
        topLeftTopChat,
        // bottomCenterLine,
        topLeftTopDevice,      
    },
    created () {
         this.getData();
    },
    methods:{       
         getData() {

            //  topsaleList().then((res)=>{
            //  //  this.tableData=res.data
            //    this.tableData = res.data
            //    console.log(this.tableData)
            //  });
           const dataSource= topsaleList().then((res)=>{
             //  this.tableData=res.data
               this.tableData = res.map(item=>{
                     return item.Number
                   });
               this.tableDataTime = res.map(item=>{
                     return item.Time
                   });
               // console.log(this.tableData)
                this.linedatabot={
                       data:this.tableDataTime,
                       lineData:this.tableData
                   }   
             });
          const dataNumber= topSaleNumber().then((res)=>{
              // this.tableDataNumber=res  
                this.tableDataNumber = res
               // console.log(this.tableDataNumber) 
                this.titleItem=[
                    {
                    title: "销售收入",
                    number: {
                        number: [this.tableDataNumber.SaleRevenue],
                        toFixed: 0,
                        content: "{nt}",
                        style: {
                        fontSize: 18,
                        }
                    },
                    },
                    {
                        title: "销售数量",
                        number: {
                            number: [ this.tableDataNumber.SaleNumber],
                            toFixed: 0,
                            content: "{nt}",
                            style: {
                            fontSize: 18,
                            }
                        }
                     },
                     {
                        title: "生产成本",
                        number: {
                            number: [ this.tableDataNumber.ProductCost],
                            toFixed: 0,
                            content: "{nt}",
                            style: {
                            fontSize:18,
                            }
                        }
                   },
                    {
                        title: "公司费用",
                        number: {
                            number: [this.tableDataNumber.CompanyExpenses],
                            toFixed: 0,
                            content: "{nt}",
                            style: {
                                fontSize:18,
                            }
                        }
                    },
                     {
                        title: "公司利润",
                        number: {
                            number: [this.tableDataNumber.CompanyProfit],
                            toFixed: 0,
                            content: "{nt}",
                            style: {
                                fontSize: 18,
                            },
                        }
                    },
                ] ,
                this.config={
                      data:[
                {
                    name: "营销业绩完成进度",
                    value: this.tableDataNumber.PercentComplet,
                },                                
                ],
                showValue: true,
                }
                                        
             })           
        },
    }
}
</script>
<style lang="scss" scoped>
#topLeftTop {
 padding: 0.1rem 0.2rem ;
//  height: 3.75rem;
  min-width: 3.75rem;
//   background: red;
}
.top-data {
    flex: 1;
    flex-wrap: wrap;
    justify-content:flex-start;
    display: flex;
    margin:0 0.1rem;
    }
 .item {
      border-radius: 0.0625rem;
      padding-top: 0.05rem;
      margin:0 0.125rem;   
      height: 0.75rem;
      width: 40%;
      text-align: center;
      flex:1;
    }
 .bg-color-black {
      border-radius: 0.0625rem;
    }
 .top-achievement{width: 100%;}
</style>