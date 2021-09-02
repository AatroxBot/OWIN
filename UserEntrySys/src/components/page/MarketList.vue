<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i>销售动态
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <p class="pstyle">折线图数据</p>
            <div class="handle-box">
                <el-row :gutter="20">
                    <el-col :span="2">
                          <el-button
                        type="primary"
                        icon="el-icon-lx-add"
                        class="handle-del mr10"
                    @click="addNewUser" 
                    >新增</el-button>
                    </el-col>
                   
                </el-row>
               </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="Number" label="数量" >
                    <template slot-scope="scope">{{scope.row.Number}}</template>
                </el-table-column>
                <el-table-column prop="Time"  label="时间">
                     <template slot-scope="scope">{{scope.row.Time}}</template>
                </el-table-column>
                
                <el-table-column label="操作" width="" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red"
                         @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
                        
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <MarketNumber/>
       
        <div class="container">
            <p>生产总体数据</p>
            <el-form ref="form" :model="form" label-width="280px" :disabled="disabled">
                <el-form-item label="公司整体产能负荷" >
                    <el-input v-model="percentValue" style="width:200px" onkeyup="this.value=this.value.replace(/\D/g,'')" >
                     </el-input>%
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="Submit" >提交</el-button>
                </el-form-item>
            </el-form>
        </div>
          <OrderYear/>


        <!-- 编辑弹出框 -->
        <el-dialog :title="title" :visible.sync="editVisible" width="40%">
            <el-form ref="form" :model="form" label-width="80px" :disabled="disabled">
                <el-form-item label="数量">
                    <el-input v-model="form.Number" ></el-input>
                </el-form-item>
                <el-form-item label="时间">
                    <!-- <el-input v-model="form.Time" >
                        
                    </el-input> -->
                    <el-date-picker
                        v-model="form.Time"
                        type="month"
                        placeholder="选择日期"
                         value-format="yyyy/MM" 
                        :disabled="timeEdit">
                        </el-date-picker>
                </el-form-item>
                 
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible=false">取 消</el-button>
                <el-button type="primary" @click="saveEdit" >确 定</el-button>
            </span>
        </el-dialog>

    
        <el-select @change="userchange"  value-key="id" v-model="testform.id">
           <el-option v-for="a in datauser"  :key="a.id" :label="a.name" :value="a"></el-option>
        </el-select>
        <el-input v-model="testform.email" ></el-input>
        <el-date-picker
      v-model="prepareDateRange"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期" @change="timechange" value-format="yyyyMMdd">
    </el-date-picker>
            <el-date-picker
      v-model="siteDateRange"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期" @change="timechange" value-format="yyyyMMdd">
    </el-date-picker>
            <el-date-picker
      v-model="reportDataRange"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期" @change="timechange" value-format="yyyyMMdd">
    </el-date-picker>
    </div>
</template>

<script>
 import MarketNumber from "./MarketNumber";
  import OrderYear from "./OrderYear";
import { topsaleList,DelSaleStatus,AddSaleStatus,GetPreference,SetPreference,UpdateSaleStatus} from '../../api/index';

export default {
    name: 'marketlist',
    data() {

        return {
            datauser:[
                {
                    id:"1",
                    name:"user1",
                    mail:'mail1'
                },
                {
                    id:"2",
                    name:"user2",
                    mail:'mail2'
                },
                {
                    id:"3",
                    name:"user3",
                    mail:'mail3'
                },
            ],
            testform:{
                id:'',
                 name:'',
                email:'',

            },
           

            query: {
                Number: '',
                Time: '',
            },
            tableData: [],
            tableDataNumber:[],
            editVisible: false,
            timeEdit:true,
            form: {  
                key: '',
                value: '',
                },
            idx: -1,
            id: -1,
            title:'',
            value1: '',
            disabled:false,
            visible:false,
            Preference:'',
            percentValue:'',
            timeData:[],
            timeRange:{startTime:'',endTime:''},
            //准备
            prepareDateRange:'',
            //现场
            siteDateRange:'',
            //报告
            reportDataRange:'',
            localPrepare:[],
            localSite:[],
            localReport:[],
        };
    },
     components: {
          MarketNumber,
          OrderYear
     },    
    created() {    
        this.getData();
    },
    methods: {
timechange(value){

    //判断现场时间大于准备时间，报告时间大于现场时间
    console.log(this.siteDateRange[0]);
 if(this.prepareDateRange!=''&&this.siteDateRange!='')
 {
    if(!this.CompareTime(this.prepareDateRange[1],this.siteDateRange[0]))
    {
         this.$message.warning(`siteDateRange错误`); 
         this.prepareDateRange=localPrepare;
         this.siteDateRange=localSite;
         return;
    }
 } 

 if(this.siteDateRange!=''&&this.reportDataRange!='')
 {
    
    if(!this.CompareTime(this.siteDateRange[1],this.reportDataRange[0]))
    {
         this.$message.warning(`reportDataRange错误`); 
           this.reportDataRange='';
           return;
    }
 } 
  if(this.prepareDateRange!=''&&this.reportDataRange!='')
 {
    
    if(!this.CompareTime(this.prepareDateRange[1],this.reportDataRange[0]))
    {
         this.$message.warning(`reportDataRange错误`); 
              this.reportDataRange='';
           return;
    }
 } 



},


        userchange(value){
             var value1=['123@qq.com','456@qq.com','789@qq.com'];
               var allmail='';
               for (let j = 0; j < value1.length; j++) 
               {
                  allmail+=value1[j]+",";
               }       
            alert(allmail.substring(0,allmail.length-1));

           
              this.testform.email=value.mail;
        },
       
CompareTime(date1,date2)
{
 var Date1 = new Date(date1.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3"));
    var Date2 = new Date(date2.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3"));
    console.log(Date1.getTime() );
      console.log(Date2.getTime() );
    if(Date1.getTime() > Date2.getTime()){
      return false;
    } else {
       return true;
    }
},



        CompareTimeRange(data){
              console.log(data);
          var startTimeArr = []
	var endTimeArr = []
	data.map(function(item) {
	  startTimeArr.push(item.startTime ? new Date(item.startTime).getTime() : '')
	  endTimeArr.push(item.endTime ? new Date(item.endTime).getTime() : '')
	})
	var allStartTime = startTimeArr.sort() // 排序
	var allEndTime = endTimeArr.sort()
	var result = 0 // 判断时间是否有重复区间
	for (let k = 0; k < allStartTime.length; k++) {
	  if (k > 0) {
	    if (allStartTime[k] <= allEndTime[k - 1]) {
	      result += 1
	    }
	  }
	}
	return result > 0
        },







        getData() {         
            topsaleList().then((res)=>{
                this.tableData=res;
            }) ;
            GetPreference('OrderCompletePercent').then((res) =>{
                this.percentValue = res;
                console.log(this.percentValue);
             });             
        },
        //提交
        Submit(){
            this.form.key='OrderCompletePercent';
            this.form.value=this.percentValue;           
                if(this.percentValue>100 || this.percentValue<0){
                     this.$message.warning(`修改失败`); 
                     this.percentValue=100;
                }else{
                SetPreference(this.form).then((res) =>{  
                    this.$message.success(`修改成功`);  
                    this.$set(this.form,this.value);
                 });
                }
           
        },
        //新增
        addNewUser(){
            this.timeEdit=false;
            this.editVisible=true;
            this.idx=-1;
            this.form={};
            this.title="新增";
        },
        //保存
        saveEdit(){
            this.editVisible=false;       
            if(this.idx==-1){
                AddSaleStatus(this.form).then((res) => {                 
                    this.$message.success(`添加成功`);                   
                    //this.tableData.push(this.form)
                    this.getData();
                    
                });
            }else{
            UpdateSaleStatus(this.form).then((res) => {                 
                this.$message.warning(`修改成功`);        
                 this.getData();
                    
                });
               
            }
        },
         // 编辑操作
        handleEdit(index, row) {
             this.timeEdit=true;
            this.idx = index;
            this.form = JSON.parse(JSON.stringify(row));
            this.editVisible = true;
            this.title = '编辑';
        
        },
         // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
         // console.log(row);
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
             }).then(()=>{
                    DelSaleStatus(row).then((res) => {          
                         this.$message.success('删除成功');
                         this.tableData.splice(index, 1);
                     }); 

             });     
                   
                                  
        },
      
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped>
.el-col,.el-form-item{padding-left: 0px;padding-right: 0;}
.el-form-item__label{padding: 0;line-height: 32px;}
.el-form-item__content{line-height: 32px;}
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}
.handle-box label{font-size: 14px;display: inline-block;}
.handle-input {
    display: inline-block;
}

.handle-date{width: 100%;}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 20px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.container .pstyle{
    color: #606266;
    height: 30px;
    line-height: 30px;
}
</style>
