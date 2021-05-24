<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 域管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <!-- <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    
                >批量删除</el-button> -->
                <el-row :gutter="20">
                    <el-col :span="2">
                          <el-button
                        type="primary"
                        icon="el-icon-lx-add"
                        class="handle-del mr10"
                    @click="addNewUser" 
                    >新增</el-button>
                    </el-col>
                    <el-col :span="5" class="el-form-item">
                        <div  class="el-form-item__label"><label> 域名：</label></div>
                        <div class="el-form-item__content" style="margin-left:45px">
                            <el-input v-model="query.uName" placeholder="域名" class="handle-input ">
                            </el-input>
                        </div> 
                    </el-col>
                    <el-col :span="5">
                        <div  class="el-form-item__label"><label> 公司名称：</label></div>
                        <div class="el-form-item__content" style="margin-left:70px">
                            <el-input v-model="query.cName" placeholder="公司名称" class="handle-input "></el-input>
                        </div>
                        
                    </el-col>
                    <el-col :span="7"> 
                        <div  class="el-form-item__label"> <label> 有效期：</label></div>
                        <div class="el-form-item__content" style="margin-left:60px">
                           <el-date-picker
                            v-model="value1"
                            type="daterange"
                            range-separator="~"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期" class="handle-date">
                            </el-date-picker>
                            
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                        <el-button type="primary" icon="el-icon-search" @click="handleCancel">重置</el-button>
                    </el-col>
                </el-row>
              
                <!-- <el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select> -->
               
               
              
                
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
                    <template slot-scope="scope">{{scope.row.id}}</template>
                </el-table-column>
                <el-table-column prop="uName" label="域名">
                     <template slot-scope="scope">{{scope.row.uName}}</template>
                </el-table-column>
                 <el-table-column prop="cName" label="公司名">
                     <template slot-scope="scope">{{scope.row.cName}}</template>
                </el-table-column>
                <el-table-column prop="cShortName" label="公司缩写">
                     <template slot-scope="scope">{{scope.row.cShortName}}</template>
                </el-table-column>
                <el-table-column prop="usedCap" label="已使用容量">
                     <template slot-scope="scope">{{scope.row.usedCap}}</template>
                </el-table-column>
                <el-table-column label="操作" width="" align="center">
                    <template slot-scope="scope">
                        <el-button  type="text"  @click="handleEdit(scope.index,scope.row)">编辑</el-button>
                        <!-- <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                          
                        >删除</el-button> -->
                         <el-button type="text">扩容</el-button>
                         <el-button type="text" @click="handleTime(scope.index,scope.row)">延长有效期</el-button>
                         <el-popconfirm placement="top" title="是否停用？" >
                            <el-button slot="reference" type="text">停用</el-button>
                         </el-popconfirm>
                         <el-button type="text" @click="handleDetail(scope.index,scope.row)">详情</el-button>
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
                <el-form-item label="ID">
                    <el-input v-model="form.id" ></el-input>
                </el-form-item>
                <el-form-item label="域名">
                    <el-input v-model="form.uName" ></el-input>
                </el-form-item>
                 <el-form-item label="公司名">
                    <el-input v-model="form.cName" ></el-input>
                </el-form-item>
                 <el-form-item label="公司缩写">
                    <el-input v-model="form.cShortName"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible=false">取 消</el-button>
                <el-button type="primary" @click="saveEdit" >确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog :title="title" :visible.sync="dialogFormVisible" width="40%">
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="公司名" >
              <el-input v-model="form.cName"  :disabled="disabled"></el-input>
            </el-form-item>
            <el-form-item label="剩余天数">
              <el-input v-model="form.capacity"  :disabled="disabled"></el-input>
            </el-form-item>
            <el-form-item label="有效期" >
              <el-input v-model="form.expireTm"   :disabled="disabled"></el-input>
            </el-form-item>
            <el-form-item label="延长月数（月）">
              <el-input v-model="form.expireTm"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<script>
import { getDomainList } from '../../api/index';
export default {
    name: 'domainlist',
    data() {
        return {
            query: {
                id: '',
                uName: '',
                cName: "",
                cShortName: "",
                contact:"",
                mail:"",
                phone:"",
                status:"",
                createTm:"",
                capacity:"",
                usedCap:"",
                expireTm:"",
                db:"",
            },
            tableData: [],
            tableHead:[],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            dialogFormVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
            domain:{
                'orderby':'id+DESC',
                '_app':'emp-adm',
                'cond':'status+like+%27%25CR%25%27',
                'page':'1'
            },
            title:'',
            value1: '',
            disabled:false,
            visible:false,
        };
    },
    created() {
      // alert(this.cf(2,2));
        //alert('test');  
        getDomainList(this.domain).then((res)=>{
           // var body=res[1].h;
            //this.tableData=res[1].h;
           console.log(1);
            for(var i=0;i<res[1].d.length;i++){
               var obj1={};
                obj1["id"]=res[1].d[i][0];
                obj1["uName"]=res[1].d[i][1];
                obj1["cName"]=res[1].d[i][2];
                obj1["cShortName"]=res[1].d[i][3];
                obj1["contact"]=res[1].d[i][4];
                obj1["mail"]=res[1].d[i][5];
                obj1["phone"]=res[1].d[i][6];
                obj1["status"]=res[1].d[i][7];
                obj1["createTm"]=res[1].d[i][8];
                obj1["capacity"]=res[1].d[i][9];
                obj1["usedCap"]=res[1].d[i][10];
                obj1["expireTm"]=res[1].d[i][11];
                obj1["db"]=res[1].d[i][12];
                this.tableData.push(obj1);

            }
            // console.log(this.tableData);
        }),
        this.getData();
    },
    methods: {
    //     cf(a,b){
    //         return a*b;
    //     },

        // 获取 easy-mock 的模拟数据
        getData() {
            this.tableData = [];
            // fetchData(this.query).then(res => {
            //     //console.log(res);
            //     this.tableData = res.list;
            //     this.pageTotal = res.pageTotal || 50;
            // });
            getDomainList(this.domain).then((res)=>{
                 for(var i=0;i<res[1].d.length;i++){
                        var obj1={};
                        obj1["id"]=res[1].d[i][0];
                        obj1["uName"]=res[1].d[i][1];
                        obj1["cName"]=res[1].d[i][2];
                        obj1["cShortName"]=res[1].d[i][3];
                        obj1["usedCap"]=res[1].d[i][10];
                        if(this.query.uName==null || this.query.uName==""){
                           this.tableData.push(obj1);
                        } else{
                            if(obj1.uName.indexOf(this.query.uName)>=0){
                            // this.tableData.push(res[1].d[i]); 
                                this.tableData.push(obj1);
                                console.log(obj1)
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
            this.query.uName="";
        },
        //详情
        handleDetail(index,row){
            this.editVisible=true;
            this.idx=index;
            this.form=row;
            this.title="详情";
            this.disabled=true;

        },
        //延长有效期
        handleTime(index,row){
            this.dialogFormVisible=true;
            this.title="延长有效期";
            this.idx=index;
            this.form=row;
            this.disabled=true;
        }
        // 触发搜索按钮
        // handleSearch() {
        //     this.$set(this.query, 'pageIndex', 1);
        //     this.getData();
        // },
        // // 删除操作
        // handleDelete(index, row) {
        //     // 二次确认删除
        //     this.$confirm('确定要删除吗？', '提示', {
        //         type: 'warning'
        //     })
        //         .then(() => {
        //             this.$message.success('删除成功');
        //             this.tableData.splice(index, 1);
        //         })
        //         .catch(() => {});
        // },
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
