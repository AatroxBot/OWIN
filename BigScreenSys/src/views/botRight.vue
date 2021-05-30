<template>
    <div id="botRight">
        <div>
            <div class="d-flex pt-2 pl-2">
                <span style="color:#5cd9e8">
                     <icon name="chart-bar"></icon>
                </span>
                <div class="d-flex">
                    <span class=" text mx-2">客服总体分析</span>
                    <!-- <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" /> -->
                </div>
               
            </div>
            <div class="d-flex">
                   <!-- <dv-border-box-8>
                      <h1>1111</h1> <h1>1111</h1> <h1>1111</h1> <h1>1111</h1>
                    </dv-border-box-8>   -->
                <div class="no">
                    <div class="no-hd">
                        <ul>
                        <li><p>工单总数</p>{{tableData.WorkNumber}}</li>
                        <li><p>客户总数</p>{{tableData.CustoNumber}}</li>
                        </ul>
                    </div>
                    <!-- <div class="no-bd">
                        <ul>
                        <li>前端需求人数</li>
                        <li>市场供应人数</li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <div class="d-flex">
                <topLeftBottomBar :cdata="cdata"/>
                <topLeftBottomBar1 :bdata="bdata"/>
            </div>
            <div class="d-flex">
                <div class="say">
                  <div class="say-circle"><p>本月新增</p><h5>{{this.tableData.NewAddNumber}}</h5></div>
                   <div class="say-circle say-one"><p>今日已购</p><h5>{{this.tableData.BuyNumber}}</h5></div>
                   <div class="say-circle say-two"><p>服务商</p><h5>{{this.tableData.ServiceNumber}}</h5></div>
                   <div class="say-circle say-three"><p>本月完工</p><h5>{{this.tableData.FinishNumber}}</h5></div>
                   <div class="say-circle say-four"><p>今日工单</p><h5>{{this.tableData.TodayNumber}}</h5></div>
                   <div class="say-circle say-five"><p>今日呼入</p><h5>{{this.tableData.CallNumber}}</h5></div>
                   <div class="say-circle say-six"><p>今日呼出</p><h5>{{this.tableData.OutNumber}}</h5></div>
                   <div class="say-circle say-seven"><p>工程师</p><h5>{{this.tableData.ProjectNumber}}</h5></div>
                </div>
                <bottomCenterPie :pcdata="pcdata" :id='pie2' :pieName='piename2'/>
            </div>
        </div>
        
    </div>
</template>
<script>
import topLeftBottomBar from "./../components/echart/bottomRight/topLeftBottomBar";
import topLeftBottomBar1 from "./../components/echart/bottomRight/topLeftBottomBar1";
import bottomCenterPie from './../components/echart/bottomCenter/bottomCenterPie.vue';
import { CustomerNumber, WorkNumberList,EvaluateNumber,botpieNumber} from './../api/index.js';

export default {
    data () {
    return {
      tableData:"",
      tableDatapie:"",
      tableDataNumber:[],
       pie2:'pie2',          
       piename2:'服务类型占比',
      cdata: {
        category: [
       
        ],
        lineData: [
            ],
        barData: [
        ],
      },
      bdata: {
        category: [         
        ],
       
        barData: [ 
        ],
         rateData: [
         ]
      },
       pcdata: {
                xData: [
                  ],
                seriesData: [
                ]
            },
      
    };
  },
     components: {
       topLeftBottomBar,
       bottomCenterPie,
       topLeftBottomBar1
       
  },
  created () {
    this.getData();
  },
  methods: {
    
     getData() {
             CustomerNumber().then((res) =>{             
                  this.tableData = res;    
                  console.log(this.tableData.BuyNumber)
            });
           const worktable= WorkNumberList().then((res) =>{             
                  this.tableDataThisMonth= res.map(item=>{
                     return item.ThisMonth
                   }); 
                   this.tableDataLastMonth= res.map(item=>{
                     return item.LastMonth
                   }); 
                    this.tableDataTime= res.map(item=>{
                     return item.Time
                   }); 

                 // console.log(this.tableDataThisMonth)
                  this.cdata={
                     category:this.tableDataTime,
                     lineData:this.tableDataThisMonth,
                     barData:this.tableDataLastMonth,
                   }     
            });
             const Evaluatetable= EvaluateNumber().then((res) =>{             
                  this.tableDataComplete= res.map(item=>{
                     return item.CompleteNumber
                   }); 
                   this.tableDataEvaluate= res.map(item=>{
                     return item.EvaluateNumber
                   }); 
                    this.tableDataTime= res.map(item=>{
                     return item.Time
                   }); 

                  //console.log(this.tableDataThisMonth)
                  this.bdata={
                     category:this.tableDataTime,
                     barData:this.tableDataComplete,
                     rateData:this.tableDataEvaluate,
                     
                   }     
            });
            const datapie=botpieNumber().then((res)=>{
                this.tableDatapie=res.map(item=>{
                    const datapieobj={};
                    datapieobj.value=item.ProductNumber;
                    datapieobj.name=item.ProductName;
                    return datapieobj
                });
                this.pcdata={
                   seriesData:this.tableDatapie
                }
               
            })
            
        },
  } 
}
</script>
<style lang="scss" scoped>
#botRight {
 padding: 0.1rem 0.2rem;
  height: 3.33333333rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
//   background: red;
}
//工单和客户总数
.no {
 // background: rgba(101, 132, 226, 0.1);
  padding:0.075rem 0.0875rem;
  width:100%;
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
  //line-height: 0.65rem;
  font-size: 0.475rem;
  color: #ffeb7b;
  text-align: center;
  font-family: "electronicFont";
  padding: 0 0 0.25rem;
}
.no .no-hd ul li::after {
  content: "";
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
}
.no .no-hd ul li:nth-child(2)::after{
  display: none;
}
.no .no-hd ul li p{
    font-size: 12px;
     color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding:0.1rem 0 0.15rem;
}
// .no .no-bd ul {
//   display: flex;
// }
// .no .no-bd ul li {
//   flex: 1;
//   text-align: center;
//   color: rgba(255, 255, 255, 0.7);
//   font-size: 0.125rem;
//   height: 0.5rem;
//   line-height: 0.5rem;
//   padding-top: 0.125rem;
// }

//数据云图
.say{width: 50%;position: relative;}
.say-circle{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
  //  border:1px solid #df0000;
    background-image: radial-gradient(circle,rgba(96,84,72,0) 20%, rgba(96,84,72,0.5),rgba(96,84,72, 1));
    position:absolute;
    top:60%;
    left: 50%;
    transform: translate(-50%,-50%);

}
.say-circle p{width: 100%;}
.say-one,.say-two,.say-three,.say-four,.say-five,.say-six,.say-seven{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
}
.say-one{
     background-image: radial-gradient(circle,rgba(87,63,152,0) 20%, rgba(87,63,152,0.5),rgba(87,63,152, 1));
    top:15%;
    left: 0%;
    transform: translate(-5%,-0%);
}
.say-two{
    background-image: radial-gradient(circle,rgba(161,30,121,0) 20%, rgba(161,30,121,0.5),rgba(120, 53,100, 1));
    top:15%;
    left: 27%;
    transform: translate(-5%,-30%);
}
.say-three{
    background-image: radial-gradient(circle,rgba(10,109,176,0) 20%, rgba(10,109,176,0.5),rgba(10,109,176, 1));
    top:17%;
    left:60%;
    transform: translate(-10%,-30%);
}
.say-four{
    background-image: radial-gradient(circle,rgba(107,88,109,0) 20%, rgba(1107,88,109,0.5),rgba(107,88,109, 1));
    top:40%;
    left:80%;
    transform: translate(-30%,-20%);
}
.say-five{
    background-image: radial-gradient(circle,rgba(87,136,101,0) 20%, rgba(87,136,101,0.5),rgba(87,136,101, 1));
    top:60%;
    left:10%;
    transform: translate(-30%,-10%);
}
.say-six{
    background-image: radial-gradient(circle,rgba(136,6,130,0) 20%, rgba(136,6,130,0.5),rgba(136,6,130, 1));
    top:90%;
    left:40%;
    transform: translate(-35%,-20%);
}
.say-seven{
    background-image: radial-gradient(circle,rgba(104,64,120,0) 20%, rgba(104,64,120,0.5),rgba(104,64,120, 1));
     top:80%;
    left:70%;
    transform: translate(-35%,-20%);
}
</style>