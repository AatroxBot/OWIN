<template>
    <div>
        <div class="container">
              <p class="pstyle">客服单条数据</p>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
               
            >
                <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
                <el-table-column prop="WorkNumber" label="工单总数" >
                    <template slot-scope="scope">{{scope.row.WorkNumber}}</template>
                </el-table-column>
                <el-table-column prop="CustoNumber" label="客户总数">
                     <template slot-scope="scope">{{scope.row.CustoNumber}}</template>
                </el-table-column>
                 <el-table-column prop="NewAddNumber" label="本月新增">
                     <template slot-scope="scope">{{scope.row.NewAddNumber}}</template>
                </el-table-column>
                 <el-table-column prop="BuyNumber" label="今日已购">
                     <template slot-scope="scope">{{scope.row.BuyNumber}}</template>
                </el-table-column>
                 <el-table-column prop="ServiceNumber" label="服务商">
                     <template slot-scope="scope">{{scope.row.ServiceNumber}}</template>
                </el-table-column>
                 <el-table-column prop="FinishNumber" label="本月完工">
                     <template slot-scope="scope">{{scope.row.FinishNumber}}</template>
                </el-table-column>
                 <el-table-column prop="TodayNumber" label="今日工单">
                     <template slot-scope="scope">{{scope.row.TodayNumber}}</template>
                </el-table-column>
                 <el-table-column prop="CallNumber" label="今日呼入">
                     <template slot-scope="scope">{{scope.row.CallNumber}}</template>
                </el-table-column>
                 <el-table-column prop="OutNumber" label="今日呼出">
                     <template slot-scope="scope">{{scope.row.OutNumber}}</template>
                </el-table-column>
                 <el-table-column prop="ProjectNumber" label="工程师">
                     <template slot-scope="scope">{{scope.row.ProjectNumber}}</template>
                </el-table-column>
                <el-table-column label="操作" width="" align="center">
                    <template slot-scope="scope">
                        <el-button  type="text"  @click="handleEdit(scope.$index,scope.row)">编辑</el-button> 
                        <!-- <el-button type="text" icon="el-icon-delete" class="red"
                         @click="handleDelete(scope.$index, scope.row)" >删除</el-button> -->
                        
                    </template>
                </el-table-column>
            </el-table>
            
        </div>
        <el-dialog :title="title" :visible.sync="editVisible" width="40%">
            <el-form ref="form" :model="form" label-width="80px" :disabled="disabled">
                <el-form-item label="工单数量">
                    <el-input v-model="form.WorkNumber" ></el-input>
                </el-form-item>
                <el-form-item label="客户总数">
                    <el-input v-model="form.CustoNumber" ></el-input>
                </el-form-item>
                 <el-form-item label="本月新增">
                    <el-input v-model="form.NewAddNumber" ></el-input>
                </el-form-item>
                <el-form-item label="今日已约">
                    <el-input v-model="form.BuyNumber" ></el-input>
                </el-form-item>
                <el-form-item label="服务商">
                    <el-input v-model="form.ServiceNumber" ></el-input>
                </el-form-item>
                <el-form-item label="本月完工">
                    <el-input v-model="form.FinishNumber" ></el-input>
                </el-form-item>
                <el-form-item label="今日工单">
                    <el-input v-model="form.TodayNumber" ></el-input>
                </el-form-item>
                <el-form-item label="今日呼入">
                    <el-input v-model="form.CallNumber" ></el-input>
                </el-form-item>
                <el-form-item label="今日呼出">
                    <el-input v-model="form.OutNumber" ></el-input>
                </el-form-item>
                 <el-form-item label="工程师">
                    <el-input v-model="form.ProjectNumber" ></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible=false">取 消</el-button>
                <el-button type="primary" @click="saveEdit" >确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
// import MarketNumber from "./MarketNumber";
import { GetBotData,SetBotData} from '../../api/index';

export default {
    // name: 'marketlist',
    data() {
        return {
            query: {
                WorkNumber: '',
                CustoNumber: '',                
                NewAddNumber: '',
                BuyNumber: '',  
                 ServiceNumber: '',
                FinishNumber: '', 
                 TodayNumber: '',  
                 CallNumber: '',
                OutNumber: '',
                ProjectNumber: '',   
            },
            tableData: [],
           
            editVisible: false,
            // dialogFormVisible: false,
            form: {},
            idx: -1,
            id: -1,
            title:'',
            disabled:false,
            visible:false,
        };
    },   
    created() {    
        this.getData();
    },
    methods: {
        getData() {         
           GetBotData().then((res)=>{               
                this.tableData.push(res);              
            })           
        },
        //编辑
        handleEdit(index,row){ 
            this.editVisible=true;
            this.idx=index;
            this.form=row;
            this.title="编辑";
        },
        //保存
        saveEdit(){
            this.editVisible=false;       
             SetBotData(this.form).then((res) => {                 
                    this.$message.success('更新成功');                   
                    this.$set(this.tableData, this.idx, this.form);
                    
                });
        },
      
    }
};
</script>