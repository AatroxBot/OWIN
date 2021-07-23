<template>
    <div>
        
        <div class="container">
              <p class="pstyle">服务类型</p>
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
                <el-table-column prop="ProductName" label="服务类型" >
                    <template slot-scope="scope">{{scope.row.ProductName}}</template>
                </el-table-column>
                <el-table-column prop="ProductNumber" label="服务数量">
                     <template slot-scope="scope">{{scope.row.ProductNumber}}</template>
                </el-table-column>
               
                <el-table-column label="操作" width="" align="center">
                    <template slot-scope="scope">
                          <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                           @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                       
                    </template>
                </el-table-column>
            </el-table>
            
        </div>
        
        <!-- 编辑弹出框 -->
        <el-dialog :title="title" :visible.sync="editVisible" width="40%">
            <el-form ref="form" :model="form" label-width="80px" :disabled="disabled">
                <el-form-item label="服务类型" >
                    <el-input v-model="form.ProductName"   :disabled="timeEdit" ></el-input>
                </el-form-item>
                <el-form-item label="服务数量">
                    <el-input v-model="form.ProductNumber" ></el-input>
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
import { QueryProductPercent ,DeleteProductPercent,AddProductPercent,UpdateProductPercent} from '../../api/index';
export default {
    name: 'domainlist',
    data() {
        return {
            query: {
                ProductName: '',
                ProductNumber: '',
            },
            tableData: [],         
            editVisible: false,
              timeEdit:true,
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
            QueryProductPercent().then((res)=>{
               this.tableData=res
            })
           
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
                AddProductPercent(this.form).then((res) => { 
                    this.$message.success("添加成功");
                    this.tableData.push(this.form)
                })
            }else{
                console.log(this.form);
                UpdateProductPercent(this.form).then((res) => {                 
                this.$message.warning(`修改成功`);        
                 this.getData();
                    
                });
              
            };
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
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    DeleteProductPercent(row).then((res) => {          
                         this.$message.success('删除成功');
                         this.tableData.splice(index, 1);
                     }); 
                })
                .catch(() => {});
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
</style>
