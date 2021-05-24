<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 订单总量分布图
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
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
                     <el-col :span="16">
                        <div  class="el-form-item__label"><label> 数量：</label></div>
                        <div class="el-form-item__content" style="margin-left:70px">
                            <el-input v-model="query.Number" placeholder="数量" class="handle-input "></el-input>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                        <el-button type="primary" icon="el-icon-search" @click="handleCancel">重置</el-button>
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
                <!-- <el-table-column prop="id" label="ID" width="55" align="center">
                    <template slot-scope="scope">{{scope.row.SerialNum}}</template>
                </el-table-column> -->
                <el-table-column prop="Number" label="数量">
                     <template slot-scope="scope">{{scope.row.Number}}</template>
                </el-table-column>
                 <el-table-column prop="Time" label="时间">
                     <template slot-scope="scope">{{scope.row.Time}}</template>
                </el-table-column>
               
                <el-table-column label="操作" width="" align="center">
                    <template slot-scope="scope">
                        <el-button  type="text"  @click="handleEdit(scope.index,scope.row)">编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                          @click="handleDelete"
                        >删除</el-button>
                        
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                 
                ></el-pagination>
            </div>
        </div>
        <!-- 编辑弹出框 -->
         <el-dialog :title="title" :visible.sync="editVisible" width="40%">
            <el-form ref="form" :model="form" label-width="80px" :disabled="disabled">
                <el-form-item label="数量">
                    <el-input v-model="form.Number" ></el-input>
                </el-form-item>
                <el-form-item label="时间">
                    <el-input v-model="form.Time" ></el-input>
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
import {barList} from '../../api/index';
export default {
    name: '',
    data() {
        return {
            query: {
                Number:"",
                Time:"",
            },
            tableData: [],
            tableHead:[],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
            title:'',
            disabled:false,
            visible:false,
        };
    },
    
    created() {
      // alert(this.cf(2,2));
        //alert('test'); 
        barList().then((res)=>{
            this.tableData=res.data
            //console.log(this.tableData)
        })
        this.getData();
    },
    methods: {
        getData() {
            this.tableData = [];
            barList().then((res)=>{
                console.log(1)
                if(this.query.Time==null || this.query.Time==""){
                        this.tableData=res.data;                        
                }
                else{
                    for(let i=0;i<res.data.length;i++){
                       if(res.data[i].Number.indexOf(this.query.Number)>=0){
                           this.tableData.push(res.data[i]);
                       }
                      // console.log(this.tableData)
                    }
                    console.log(this.tableData.length)
                }
                 
            })

           
        },
        //编辑
        handleEdit(index,row){ 
            this.editVisible=true;
            this.idx=index;
            this.form=row;
            this.title="编辑";
        },
        //新增
        addNewUser(){
            this.editVisible=true;
            this.idx=-1;
            this.form={};
            this.title="新增";
        },
        //保存
         saveEdit(){
            this.editVisible=false;
            if(this.idx==-1){
                this.$message.success("添加成功");
                this.tableData.push(this.form)
            }else{
                this.$message.success( "成功保存")
                this.$set(this.form,this.idx,this.tableData);
            };
        },
        //搜索
        handleSearch(){
            this.getData();
        },
        //清空
        handleCancel(){
            this.query.Number="";
        },
        // // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
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
