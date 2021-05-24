<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i>销售订单单条数据
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
               
            >
                <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
                <el-table-column prop="SaleRevenue" label="销售收入" >
                    <template slot-scope="scope">{{scope.row.SaleRevenue}}</template>
                </el-table-column>
                <el-table-column prop="SaleNumber" label="销售数量">
                     <template slot-scope="scope">{{scope.row.SaleNumber}}</template>
                </el-table-column>
                 <el-table-column prop="ProductCost" label="生产成本">
                     <template slot-scope="scope">{{scope.row.ProductCost}}</template>
                </el-table-column>
                 <el-table-column prop="CompanyExpenses" label="公司费用">
                     <template slot-scope="scope">{{scope.row.CompanyExpenses}}</template>
                </el-table-column>
                 <el-table-column prop="CompanyProfit" label="公司利润">
                     <template slot-scope="scope">{{scope.row.CompanyProfit}}</template>
                </el-table-column>
                 <el-table-column prop="PercentComplet" label="营销业绩完成进度">
                     <template slot-scope="scope">{{scope.row.PercentComplet}}</template>
                </el-table-column>
                 <el-table-column prop="PercentFirst" label="好易点">
                     <template slot-scope="scope">{{scope.row.PercentFirst}}</template>
                </el-table-column>
                 <el-table-column prop="PercentSecond" label="战略发展中心">
                     <template slot-scope="scope">{{scope.row.PercentSecond}}</template>
                </el-table-column>
                 <el-table-column prop="PercentThree" label="邦先生">
                     <template slot-scope="scope">{{scope.row.PercentThree}}</template>
                </el-table-column>
                 <el-table-column prop="PercentFour" label="杭州邦先生">
                     <template slot-scope="scope">{{scope.row.PercentFour}}</template>
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
// import MarketNumber from "./MarketNumber";
import { topSaleNumber} from '../../api/index';

export default {
    // name: 'marketlist',
    data() {
        return {
            query: {
                SaleRevenue: '',
                SaleNumber: '',                
                ProductCost: '',
                CompanyExpenses: '',  
                 CompanyProfit: '',
                PercentComplet: '', 
                 PercentFirst: '',  
                 PercentSecond: '',
                PercentThree: '',
                PercentFour: '',   
            },
            tableData: [],
            tableDatalist:{},
            list: [{}],
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
           topSaleNumber().then((res)=>{              
                this.tableData=res             
                console.log(this.tableData)
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
        // addNewUser(){
        //     this.editVisible=true;
        //     this.idx=-1;
        //     this.form={};
        //     this.title="新增";
        // },
        //保存
        saveEdit(){
            this.editVisible=false;       
            if(this.idx==-1){
                // this.$message.success("添加成功");
                // this.tableData.push(this.form)
                console.log(this.form)
                AddNoSaleStatus(this.form).then((res) => {                 
                    this.$message.success(`添加成功`);                   
                    this.getData();
                    
                });
            }else{
                 this.$message.warning(`添加失`);
            }
        },
        //搜索
        // handleSearch(){
        //     this.getData();
        // },
        //清空
        // handleCancel(){
        //     this.query.Number="";
        // },
        
         // 删除操作
        // handleDelete(index, row) {
        //     // 二次确认删除
        //  // console.log(row);
        //     this.$confirm('确定要删除吗？', '提示', {
        //         type: 'warning'
        //      }).then(()=>{
        //             DelSaleStatus(row).then((res) => {          
        //                  this.$message.success('删除成功');
        //                  this.tableData.splice(index, 1);
        //              }); 

        //      });     
                   
                                  
        // },
      
        // 分页导航
        // handlePageChange(val) {
        //     this.$set(this.query, 'pageIndex', val);
        //     this.getData();
        // }
    }
};
</script>