<template>
    <div>
        <div class="container">
              <p class="pstyle">销售订单单条数据</p>
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
                <el-form-item label="销售收入">
                    <el-input v-model="form.SaleRevenue" ></el-input>
                </el-form-item>
                <el-form-item label="销售数量">
                    <el-input v-model="form.SaleNumber" ></el-input>
                </el-form-item>
                 <el-form-item label="生产成本">
                    <el-input v-model="form.ProductCost" ></el-input>
                </el-form-item>
                <el-form-item label="公司费用">
                    <el-input v-model="form.CompanyExpenses" ></el-input>
                </el-form-item>
                <el-form-item label="公司利润">
                    <el-input v-model="form.CompanyProfit" ></el-input>
                </el-form-item>
                <el-form-item label="营销业绩进度">
                    <el-input v-model="form.PercentComplet" ></el-input>
                </el-form-item>
                <el-form-item label="好易点">
                    <el-input v-model="form.PercentFirst" ></el-input>
                </el-form-item>
                <el-form-item label="战略发展中心">
                    <el-input v-model="form.PercentSecond" ></el-input>
                </el-form-item>
                <el-form-item label="邦先生">
                    <el-input v-model="form.PercentThree" ></el-input>
                </el-form-item>
                 <el-form-item label="杭州邦先生">
                    <el-input v-model="form.PercentFour" ></el-input>
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
import { topSaleNumber,UpdateSaleData} from '../../api/index';

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
             UpdateSaleData(this.form).then((res) => {                 
                    this.$message.success('更新成功');                   
                    this.getData();
                    
                });
        },
      
    }
};
</script>