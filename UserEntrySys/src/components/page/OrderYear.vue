<template>
    <div>
        <div class="container">
            <p class="pstyle">订单总量分布图</p>
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
                <el-table-column prop="Time" label="时间">
                     <template slot-scope="scope">{{scope.row.Time}}</template>
                </el-table-column>
                
                <el-table-column label="操作" width="" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red"  @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
                        
                    </template>
                </el-table-column>
            </el-table>
        </div>

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
                        type="year"
                        placeholder="选择日期"
                         value-format="yyyy" 
                         :disabled="timeEdit" >
                        </el-date-picker>
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
import { QuerySaleYear,DelSaleYear,AddNoSaleYear,UpdateSaleYear} from '../../api/index';

export default {
    name: '',
    data() {
        return {
            query: {
                Number: '',
                Time: '',
            },
            tableData: [],
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
        };
    },   
    created() {    
        this.getData();
    },
    methods: {
        getData() {         
            QuerySaleYear().then((res)=>{
                this.tableData=res;
            }) ;
                      
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
                AddNoSaleYear(this.form).then((res) => {                 
                    this.$message.success(`添加成功`);                   
                    this.tableData.push(this.form)
                });
            }else{
              UpdateSaleYear(this.form).then((res) => {                 
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
                    DelSaleYear(row).then((res) => {          
                         this.$message.success('删除成功');
                         this.tableData.splice(index, 1);
                     }); 

             });     
                   
                                  
        },       
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
.container .pstyle{
    color: #606266;
    height: 30px;
    line-height: 30px;
}
</style>
