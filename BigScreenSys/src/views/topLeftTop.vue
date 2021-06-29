<template>
  <div id="topLeftTop">
    <div>
      <div class="d-flex pt-2 pl-2"  style="position: relative;">
        <span style="color: #5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="text mx-2">销售趋势1</span>         
        </div>
        <span style="position: absolute; top:0.1rem;right:0.1rem">单位（台）</span>
      </div>
      <div class="d-flex">
        <topLeftTopChat :linedatabot="linedatabot" />
        <!-- <bottomCenterLine :id='tab2'/> -->
        <div class="top-data">
          <div
            class="bg-color-black item"
            v-for="item in titleItem"
            :key="item.title"
          >
            <p class="colorBlue fw-b">{{ item.title }}</p>
            <div>
              <dv-digital-flop
                :config="item.number"
                style="min-width: 1.25rem; height: 0.625rem"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="top-achievement">
          <!-- <dv-capsule-chart :config="config" style="width: 100%" /> -->
          <div class="d-flex">
            <div class="achievement">营销业绩完成进度</div>
            <div class="bar-main">
              <div class="Bar">
                <div :style="{'width':width+'%'}">
                  <span>{{ this.tableCompletDataNumber.PercentComplet }}%</span>
                </div>
              </div>
              <div class="bar-number">
                <ul class="d-flex">
                  <li>0</li>
                  <li>50</li>
                  <li>100</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- <topLeftTopRate :addGray="inactive" :progressWidth="progressWidth"/> -->
          <!-- <dv-scroll-ranking-board :config="config" style="width: 100%;" /> -->
        </div>
      </div>
      <div class="d-flex">
        <topLeftTopDevice />
      </div>
    </div>
  </div>
</template>
<script>
import topLeftTopChat from "./../components/echart/topLeftTop/topLeftTopChat";
// import bottomCenterLine from "./../components/echart/bottomCenter/bottomCenterLine";
import topLeftTopDevice from "./../components/echart/topLeftTop/topLeftTopDevice";
// import topLeftTopRate from "./../components/echart/topLeftTop/topLeftTopRate";
import { topsaleList, topSaleNumber,orderDateNumber } from "./../api/index.js";
export default {
  data() {
    return {
      //折线图配置属性改动
      // tab2:'tab2',
      //数据
      tableData: [],
      tableDataNumber: [],
      tableCompletDataNumber: [],
      linedatabot: {
        data: [],
        lineData: [],
      },
      width:'',
      config: {},
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
    };
  },
  components: {
    topLeftTopChat,
    // bottomCenterLine,
    topLeftTopDevice,
    // topLeftTopRate
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      //  topsaleList().then((res)=>{
      //  //  this.tableData=res.data
      //    this.tableData = res.data
      //    console.log(this.tableData)
      //  });
    
      const dataSource = topsaleList().then((res) => {
         this.tableData = res.map((item) => {
          return item.Number;
        });
        this.tableDataTime = res.map((item) => {
          return item.Time.substring(0,7);
        });
        
        this.linedatabot = {
          data: this.tableDataTime,
          lineData: this.tableData,
        };
      });
       const Complet = topSaleNumber().then((res) => {
          this.tableCompletDataNumber = res;
         (this.width=this.tableCompletDataNumber.PercentComplet);
       });
      const dataNumber = orderDateNumber().then((res) => {
        // this.tableDataNumber=res
        this.tableDataNumber = res;
        // console.log(this.tableDataNumber)
        // this.width=res.PercentComplet     
        (this.titleItem = [
          {
            title: "本年订单数",
            number: {
              number: [this.tableDataNumber.YearOrderNumber],
              toFixed: 0,
              content: "{nt}",
              style: {
                fontSize: 18,
              },
            },
          },
          {
            title: "本月订单数",
            number: {
              number: [this.tableDataNumber.MouthOrderNumber],
              toFixed: 0,
              content: "{nt}",
              style: {
                fontSize: 18,
              },
            },
          },
          {
            title: "本年发货数",
            number: {
              number: [this.tableDataNumber.YearOutNumber],
              toFixed: 0,
              content: "{nt}",
              style: {
                fontSize: 18,
              },
            },
          },
          {
            title: "本月发货数",
            number: {
              number: [this.tableDataNumber.MouthOutNumber],
              toFixed: 0,
              content: "{nt}",
              style: {
                fontSize: 18,
              },
            },
          },
          {
            title: "待发货数",
            number: {
              number: [this.tableDataNumber.WaitOutNumber],
              toFixed: 0,
              content: "{nt}",
              style: {
                fontSize: 18,
              },
            },
          },
        ])
        // ,
        //   (this.config = {
        //     data: [
        //       {
        //         name: "营销业绩完成进度",
        //         value: this.tableDataNumber.PercentComplet,
        //       },
        //     ],
        //     showValue: true,
        //   });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#topLeftTop {
  padding: 0.1rem 0.2rem 0.2rem;
  //  height: 3.75rem;
  min-width: 3.75rem;
  //   background: red;
}
.top-data {
  flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  display: flex;
  margin: 0 0.1rem;
}
.item {
  border-radius: 0.0625rem;
  padding-top: 0.05rem;
  margin: 0 0.125rem;
  height: 0.75rem;
  width: 40%;
  text-align: center;
  flex: 1;
}
.bg-color-black {
  border-radius: 0.0625rem;
}
.top-achievement {
  width: 100%;
}
.achievement,
.Bar {
  white-space: nowrap;
}
.bar-main{width: 100%; padding-right: 0.1rem;}
.Bar {
  position: relative;
  width: 100%;
  margin-left: 0.1rem;
  /* 宽度 */
  border: 1px solid rgba(0, 198, 255, 0.6);
  padding: 1px;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 0 5px rgba(0, 198, 255, 0.6);
  box-shadow: 0 0 5px rgba(0, 198, 255, 0.6);
}
.Bar div {
  display: block;
  position: relative;
  height: 0.25rem;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 0 5px rgba(0, 198, 255, 0.6);
  box-shadow: 0 0 5px rgba(0, 198, 255, 0.6);
  background-color: rgba(0, 198, 255, 1);
  line-height: 0.25rem;
}
.Bar div span {
  position: absolute;
  width:100%;
  /* 宽度 */
  text-align: center;
  font-weight: bold;
  color: #fff;
}
.bar-number ul li{flex: 1;margin-top: 0.05rem;}
.bar-number ul li:nth-child(2){text-align: center;}
.bar-number ul li:nth-child(3){text-align: right;}
</style>