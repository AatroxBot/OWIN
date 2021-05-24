<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 销售订单统计动态列表
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
                     <el-col :span="8">
                        <div  class="el-form-item__label"><label> 客户：</label></div>
                        <div class="el-form-item__content" style="margin-left:70px">
                            <el-input v-model="query.CustomerName" placeholder="客户" class="handle-input "></el-input>
                        </div>
                        
                    </el-col>
                    <el-col :span="8" class="el-form-item">
                        <div  class="el-form-item__label"><label> 产品：</label></div>
                        <div class="el-form-item__content" style="margin-left:45px">
                            <el-input v-model="query.ProductName" placeholder="产品" class="handle-input ">
                            </el-input>
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
                <el-table-column prop="id" label="ID" width="55" align="center">
                    <template slot-scope="scope">{{scope.row.SerialNum}}</template>
                </el-table-column>
                <el-table-column prop="OrderNo" label="序号">
                     <template slot-scope="scope">{{scope.row.OrderNo}}</template>
                </el-table-column>
                 <el-table-column prop="CustomerName" label="客户">
                     <template slot-scope="scope">{{scope.row.CustomerName}}</template>
                </el-table-column>
                <el-table-column prop="ProductName" label="产品">
                     <template slot-scope="scope">{{scope.row.ProductName}}</template>
                </el-table-column>
                <el-table-column prop="OrderNum" label="数量">
                     <template slot-scope="scope">{{scope.row.OrderNum}}</template>
                </el-table-column>
                 <el-table-column prop="ShipmemntNum" label="发货数量">
                     <template slot-scope="scope">{{scope.row.ShipmemntNum}}</template>
                </el-table-column>
                 <el-table-column prop="OutStockNum" label="出库数量">
                     <template slot-scope="scope">{{scope.row.OutStockNum}}</template>
                </el-table-column>
                 <el-table-column prop="OrderTime" label="日期">
                     <template slot-scope="scope">{{scope.row.OrderTime}}</template>
                </el-table-column>
                <el-table-column label="操作" width="" align="center">
                    <template slot-scope="scope">
                        <el-button  type="text"  @click="handleEdit(scope.index,scope.row)">编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                          @click="handleDelete()"
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

        <OrderDistribute/>
      

        <!-- 编辑弹出框 -->
        <el-dialog :title="title" :visible.sync="editVisible" width="40%">
            <el-form ref="form" :model="form" label-width="80px" :disabled="disabled">
                <el-form-item label="ID">
                    <el-input v-model="form.SerialNum" ></el-input>
                </el-form-item>
                <el-form-item label="序号">
                    <el-input v-model="form.OrderNo" ></el-input>
                </el-form-item>
                 <el-form-item label="客户">
                    <el-input v-model="form.CustomerName" ></el-input>
                </el-form-item>
                 <el-form-item label="产品">
                    <el-input v-model="form.ProductName"></el-input>
                </el-form-item>
                <el-form-item label="数量">
                    <el-input v-model="form.OrderNum"></el-input>
                </el-form-item>
                <el-form-item label="发货数量">
                    <el-input v-model="form.ShipmemntNum"></el-input>
                </el-form-item>
                <el-form-item label="出库数量">
                    <el-input v-model="form.OutStockNum"></el-input>
                </el-form-item>
                 <el-form-item label="日期">
                    <el-input v-model="form.OrderTime"></el-input>
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
import {  tableList} from '../../api/index';
import OrderDistribute from "./OrderDistribute";
export default {
    name: '',
    data() {
        return {
            query: {
                SerialNum: '',
                OrderNo: '',
                CustomerName: "",
                ProductName: "",
                OrderNum:"",
                ShipmemntNum:"",
                OutStockNum:"",
                OrderTime:"",
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
            // domain:{
            //     'orderby':'id+DESC',
            //     '_app':'emp-adm',
            //     'cond':'status+like+%27%25CR%25%27',
            //     'page':'1'
            // },
            title:'',
            value1: '',
            disabled:false,
            visible:false,
        };
    },
     components: {
         OrderDistribute,
     },
    
    created() {
      // alert(this.cf(2,2));
        //alert('test');  
        tableList().then((res)=>{
                 this.tableData=res.data
                 //console.log(this.tableData)
            });
       
        this.getData();
    },
    methods: {
        getData() {
            this.tableData = [];
            tableList().then((res)=>{
                if(this.query.CustomerName==null || this.query.CustomerName==""){
                        this.tableData=res.data;
                }
                else
                    { for(let i=0;i<res.data.length;i++){
                        if(res.data[i].CustomerName.indexOf(this.query.CustomerName)>=0){
                            this.tableData.push(res.data[i]);
                        
                        }
                    }
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
            this.query.CustomerName="";
        },
       
        // 触发搜索按钮
        // handleSearch() {
        //     this.$set(this.query, 'pageIndex', 1);
        //     this.getData();
        // },
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
       
        // // 多选操作
        // handleSelectionChange(val) {
        //     this.multipleSelection = val;
        // },
        // delAllSelection() {
        //     const length = this.multipleSelection.length;
        //     let str = '';
        //     this.delList = this.delList.concat(this.multipleSelection);
        //     for (let i = 0; i < length; i++) {
        //         str += this.multipleSelection[i].name + ' ';
        //     }
        //     this.$message.error(`删除了${str}`);
        //     this.multipleSelection = [];
        // },
        // // 编辑操作
        // handleEdit(index, row) {
        //     this.idx = index;
        //     this.form = row;
        //     this.editVisible = true;
        // },
        // // 保存编辑
        // saveEdit() {
        //     this.editVisible = false;
        //     this.$message.success(`修改第 ${this.idx + 1} 行成功`);
        //     this.$set(this.tableData, this.idx, this.form);
        // },
        // // 分页导航
        // handlePageChange(val) {
        //     this.$set(this.query, 'pageIndex', val);
        //     this.getData();
        // }
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
