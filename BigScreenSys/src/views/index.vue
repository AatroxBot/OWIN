<template>
  <div id="index">
     <dv-full-screen-container> 
      <div class="bg">
        <dv-loading v-if="loading">Loading...</dv-loading>
        <div v-else class="host-body">
          <div class="d-flex jc-center">
            <dv-decoration-10 style="width:30%;height:.0625rem;" />
            <div class="d-flex jc-center">
              <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2rem;height:.625rem;" />
              <div class="title">
                <span class="title-text">好易点数字化工厂战略指挥中心</span>
              </div>
              <dv-decoration-8
                :reverse="true"
                :color="['#568aea', '#000000']"
                style="width:2rem;height:.625rem;"
              />
            </div>
            <dv-decoration-10 style="width:30%;height:.0625rem; transform: rotateY(180deg);" />
          </div>

          <!-- 第二行 -->
          <div class="d-flex jc-between px-2">
           <!-- <div class="d-flex" style="width: 40%">
              <div
                class="react-right ml-4"
                style="width: 6.25rem; text-align: left;background-color: #0f1325;"
              >
                <span class="react-before"></span>
                <span class="text">数据分析1</span>
              </div>
              <div class="react-right ml-3" style="background-color: #0f1325;">
                <span class="text colorBlue">数据分析2</span>
              </div> 
            </div> -->
            <div  class="d-flex" style="width:100%;position:relative">
              <!-- <div class="react-left bg-color-blue mr-3">
                <span class="text fw-b">vue-big-screen</span>
              </div> -->
              <div
                class="react-left mr-4"
                style=""
              >
                <!-- <span class="react-after"></span> -->
                <span class="text">{{dateYear}} {{dateWeek}} {{dateDay}}</span>
              </div> 
            </div>
          </div>

          <div class="body-box">
            <!-- 第三行数据 -->
            <div class="main-box">
              <div>
                  <div>
                    <!-- 销售动态 -->
                      <dv-border-box-12>
                          <top-left-top />
                      </dv-border-box-12>
                  </div>
                  <div>
                    <!-- 销售订单统计动态列表 -->
                    <dv-border-box-12>
                         <top-left-bottom />
                    </dv-border-box-12>
                  </div>
              </div>
              <!-- <div>
                    <div>
                      生产总体数据 
                      <dv-border-box-12>
                          <top-center-top />
                      </dv-border-box-12>
                  </div>
                  <div>
                    生产质量统计分析 
                      <dv-border-box-12>
                        <top-center-bottom />
                      </dv-border-box-12>
                  </div>
              </div> -->
              <div class="right">
                  <div>
                    <!-- 生产 -->
                      <dv-border-box-12>
                          <top-right />
                      </dv-border-box-12>
                  </div>
                  <div class="bototm-box">
                    <!--<div>
                      销售订单执行情况表 
                      <dv-border-box-12>
                        <bot-left />
                      </dv-border-box-12>
                    </div>-->                   
                      <div>
                        <!-- 发货与库存分析 -->
                        <dv-border-box-12>
                            <bot-center/>
                        </dv-border-box-12>
                      </div>
                      <div>
                        <!-- 客服总体分析 -->
                        <dv-border-box-12>
                            <bot-right />
                        </dv-border-box-12>
                      </div>
                  </div>
              </div>
            </div>
            
          

            <!-- <div class="content-box">
              <div>
                <dv-border-box-12>
                  <centerLeft1 />
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                  <centerLeft2 />
                </dv-border-box-12>
              </div>
               中间 
              <div>
                <center />
              </div>
              中间 
              <div>
                <centerRight2 />
              </div>
              <div>
                <dv-border-box-13>
                  <centerRight1 />
                </dv-border-box-13>
              </div>
            </div> -->

            <!-- 第四行数据 -->
            <!-- <div class="bototm-box">
              <dv-border-box-13>
                <bottomLeft />
              </dv-border-box-13>
              <dv-border-box-12>
                <bottomRight />
              </dv-border-box-12>
            </div> -->
          </div>
        </div>
      </div>
   </dv-full-screen-container> 
  </div>
</template>

<script>
import { formatTime } from '../utils/index.js'
// import centerLeft1 from "./centerLeft1";
// import centerLeft2 from "./centerLeft2";
// import centerRight1 from "./centerRight1";
// import centerRight2 from "./centerRight2";
// import center from "./center";
// import bottomLeft from "./bottomLeft";
// import bottomRight from "./bottomRight";

import topLeftTop from "./topLeftTop";
// import topCenterTop from "./topCenterTop";
import topLeftBottom from "./topLeftBottom";
// import topCenterBottom from "./topCenterBottom";
import topRight from "./topRight";
// import botLeft from "./botLeft";
import botCenter from "./botCenter";
import botRight from "./botRight";


export default {
  data () {
    return {
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {
    // centerLeft1,
    // centerLeft2,
    // centerRight1,
    // centerRight2,
    // center,
    // bottomLeft,
    // bottomRight,

    topLeftTop,
    // topCenterTop,
    topRight,
    topLeftBottom,
    // topCenterBottom,
    //botLeft,
    botCenter,
    botRight,

  },
  mounted () {
    this.timeFn();
    this.cancelLoading();
  },
  methods: {
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000)
    },
    cancelLoading () {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/index.scss';

.react-left{
  position: absolute;
  top:-0.35rem;
  right:1rem
}
</style>