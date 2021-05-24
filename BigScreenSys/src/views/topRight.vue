<template>
    <div id="topRight">
        <div >
            <div class="d-flex pt-2 pl-2">
                <span style="color:#5cd9e8">
                     <icon name="chart-pie"></icon>
                </span>
                <div class="d-flex">
                    <span class="fs-xl text mx-2">生产总体数据</span>
                    <!-- <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" /> -->
                </div>   
            </div>
            <div class="d-flex topright">
                <topRightDevice/>  
                 <topRightPictorial/>
                
                           
              
                            
            </div>
            
           
        </div>
        
    </div>
</template>
<script>
import topRightDevice from "./../components/echart/topRight/topRightDevice";
import topRightPictorial from "./../components/echart/topRight/topRightPictorial";

export default {

   
     data () {
        return {
        //    pictonial1:'pictonial1',          
        //    pictonialname1:'金工（晾衣架）生产执行情况',
        //     Senddata1:1,
        //    Completedata1:'Completedata1',

        //    pictonial2:'pictonial2',          
        //    pictonialname2:'喷漆（晾衣架）生产执行情况',
        //    Senddata2:'Senddata2',
        //   Completedata2:'Completedata2',

        //    pictonial3:'pictonial3',          
        //    pictonialname3:'装配（晾衣架）生产执行情况',
        //    Senddata3:'Senddata3',
        //     Completedata3:'Completedata3',

        //    pictonial4:'pictonial4',          
        //    pictonialname4:'包装（晾衣架）生产执行情况',
        //   Senddata4:'Senddata4',
        //    Completedata4:'Completedata4',
          
        };
    },
     components: {
         topRightDevice,
         topRightPictorial,
       
    },
    //  created() {
    //   this.getData();
    // },
    // methods: {  
    //     getData() {
    //         const toprightdata= productList().then((res) =>{
    //             this.tableData=res.data.map(item=>{
    //                  return item.SendNumber
    //                });
    //             console.log(this.tableData) 
    //         })
    //     },
    // } 
}
</script>
<style lang="scss" scoped>
#topRight {
  padding: 0.1rem 0.2rem;
  min-width: 6.75rem;
//   border-radius: 0.0625rem;
//   background: red;
height: 3.25rem;
}
.workshop{flex:1;}
.topright{
     display: grid;
     grid-template-columns: 3fr 12fr;
}

</style>