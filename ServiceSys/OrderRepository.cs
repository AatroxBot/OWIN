using Dapper;
using Dapper.Contrib.Extensions;
using IRtek.NaviT.ERP.Model;
using OWB.PdmIR.Contracts.Dto;
using OWB.PdmIR.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using Z.Dapper.Plus;

namespace IRtek.NaviT.ERP.Repositories
{
    public class OrderRepository : BaseRepository, IOrderRepository
    {
        //使用0716数据库

        
        /// <summary>
        /// 轮播图
        /// </summary>
        /// <param name="whereSql"></param>
        /// <param name="whereObj"></param>
        /// <returns></returns>
        public IEnumerable<SaleOrderDto> QuerySaleOrders(string whereSql, SaleOrderDto whereObj)
        {
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                var list = conn.Query<SaleOrderDto>("select entry.FEntryID as SerialNum,org.FName as CustomerName,entry.FItemID as ProductName,entry.FQty as OrderNum,entry.FCommitQty as ShipmemntNum,entry.FStockQty as OutStockNum,main.FDate as OrderTime from SEOrder main inner join SEOrderEntry entry on main.FInterID = entry.FInterID  join t_Organization org on main.FCustID = org.FItemID join t_icItem item on entry.FItemID = item.FItemID  where main.FHeadSelfS0154 != 01 and main.FHeadSelfS0154 != 02  and  entry.FHeadSelfS0163 !=01 and entry.FHeadSelfS0163 !=02  order by main.FDate desc");
                 

                //
                // 轮播图需要筛选条件,按照日期筛选
                //物料表t_icitem 关联  FitemID



                //FStatus ==1


                //var list = conn.Query<SEOrderModel, SEOrderEntryModel, SaleOrderDto>("select top (10) * from SEOrder as main left join SEOrderEntry entry on main.FInterID= entry.FInterID  " + whereSql + " order by main.FDate desc ", (order, entry) => {
                //    return SEOrderModel.trans2Dto(order, entry);
                //}, null);
                return list;
            }

        }

        /// <summary>
        /// 订单总量分布图
        /// </summary>
        public IEnumerable<NumberTimeDto> QueryOrderNumberByYear()
        {

            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select entry.FQty as Number,bill.FDate as Time  from ICStockBill bill inner join ICStockBillEntry entry on bill.FInterID = entry.FInterID where bill.FTranType = 21 order by bill.FDate desc ";
                //todo: 按年份分组计算
                var result = conn.Query<NumberTimeDto>(sql);
                //改为按年算
                var data = from c in result
                           group c by c.Time.ToString("yyyy-MM") into g
                           select new NumberTimeDto {Time=Convert.ToDateTime(g.Key), Number = g.Sum(n => n.Number) };


                return data;
            }
        }

        /// <summary>
        /// 整体产能负荷
        /// </summary>
        /// <returns></returns>
        public int QueryOverallCapacityLoad()
        {
            //产品预测单  PPOrder-表体PPOrderEntry
            //取值上浮10%
            //按年查 FNeedDate



            return 0;
        }


        /// <summary>
        /// 产品预测完成情况
        /// </summary>
        /// <returns></returns>
        public List<float> QueryProductForecastCompletionStatus()
        {
            List<float> returnValues = new List<float>();
            //整体产能负荷
            int count1;
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select entry.FQty from PPOrder main join PPOrderEntry entry on  main.FInterID =entry.FInterID";
                count1= conn.QueryFirst<int>(sql);
            }
            returnValues.Add(count1/100);
            //产品入库情况
            int countIn;
            int count;
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select count(*) from ICStockBill bill where bill.FDeptID=21  and bill.FTranType=2 and FDate >=convert(varchar(10),Getdate(),120) and FDate<convert(varchar(10),dateadd(d, 1, Getdate()),120)";
                countIn = conn.QueryFirst<int>(sql);
            }
            //产品预测情况 
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select count(*) from PPOrder where FNeedDate >=convert(varchar(10),Getdate(),120) and FNeedDate<convert(varchar(10),dateadd(d, 1, Getdate()),120)";
                count = conn.QueryFirst<int>(sql);
            }
            if (count==0)
            {
                returnValues.Add(0);
            }
            else
            {
                returnValues.Add(countIn / count);
            }
            return returnValues;



            //此UI改为生产总体完成情况
            //预测完成情况 按年度和数量统计
            //过滤交货部门


        }

        /// <summary>
        /// 生产执行情况
        /// </summary>
        public IEnumerable<ProductionExecutionDto> QueryProductionExecution(string whereSql)
        {


            //FItemID 换FWORKSHOP,   workSHOP与部门表id关联
            //此UI需要加按照时间筛选的过滤条件

            List<ProductionExecutionDto> dtos = new List<ProductionExecutionDto>();
            //金工
            //派工数量
            ProductionExecutionDto dto = new ProductionExecutionDto();
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select FQty as Number,FPlanCommitDate as Time from ICMO where FPlanCommitDate>=convert(varchar(10),Getdate(),120) and FItemID=17720";
                var countIn = conn.Query<NumberTimeDto>(sql);
                foreach (var item in countIn)
                {
                    dto.SendNumber += item.Number;
                }
                
            }
            //完工数量
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select entry.FQty as Number,bill.FDate as Time from ICStockBill bill join ICStockBillEntry entry on bill.FInterID=entry.FInterID where bill.FDate>=convert(varchar(10),Getdate(),120)  and entry.FItemID=17720";
                var countIn = conn.Query<NumberTimeDto>(sql);
                foreach (var item in countIn)
                {
                    dto.CompleteNumber += item.Number;
                }
            }
            dtos.Add(dto);
            //装配
            ProductionExecutionDto dto1 = new ProductionExecutionDto();
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select FQty as Number,FPlanCommitDate as Time from ICMO where FPlanCommitDate>=convert(varchar(10),Getdate(),120) and FItemID=17722";
                var countIn = conn.Query<NumberTimeDto>(sql);
                foreach (var item in countIn)
                {
                    dto1.SendNumber += item.Number;
                }
            }
            //完工数量
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select entry.FQty as Number,bill.FDate as Time from ICStockBill bill join ICStockBillEntry entry on bill.FInterID=entry.FInterID where bill.FDate>=convert(varchar(10),Getdate(),120)  and entry.FItemID=17722";
                var countIn = conn.Query<NumberTimeDto>(sql);
                foreach (var item in countIn)
                {
                    dto.CompleteNumber += item.Number;
                }
                
            }
            dtos.Add(dto1);
            //喷漆
            ProductionExecutionDto dto2 = new ProductionExecutionDto();
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select FQty as Number,FPlanCommitDate as Time from ICMO where FPlanCommitDate>=convert(varchar(10),Getdate(),120) and FItemID=17721";
                var countIn = conn.Query<NumberTimeDto>(sql);
                foreach (var item in countIn)
                {
                    dto2.SendNumber += item.Number;
                }
            }
            //完工数量
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select entry.FQty as Number,bill.FDate as Time from ICStockBill bill join ICStockBillEntry entry on bill.FInterID=entry.FInterID where bill.FDate>=convert(varchar(10),Getdate(),120)  and entry.FItemID=17721";
                var countIn = conn.Query<NumberTimeDto>(sql);
                foreach (var item in countIn)
                {
                    dto2.CompleteNumber += item.Number;
                }
              
            }
            dtos.Add(dto2);
            //包装
            ProductionExecutionDto dto3 = new ProductionExecutionDto();
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select FQty as Number,FPlanCommitDate as Time from ICMO where FPlanCommitDate>=convert(varchar(10),Getdate(),120) and FItemID=17723";
                var countIn = conn.Query<NumberTimeDto>(sql);
                foreach (var item in countIn)
                {
                    dto3.SendNumber += item.Number;
                }
            }
            //完工数量
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select entry.FQty as Number,bill.FDate as Time from ICStockBill bill join ICStockBillEntry entry on bill.FInterID=entry.FInterID where bill.FDate>=convert(varchar(10),Getdate(),120)  and entry.FItemID=17723";
                var countIn = conn.Query<NumberTimeDto>(sql);
                foreach (var item in countIn)
                {
                    dto3.CompleteNumber += item.Number;
                }
                dtos.Add(dto3);
            }
            return dtos;

        }




        /// <summary>
        /// 取值整体的销售出库情况按天进行
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SaleOutDto> QueryBillNumber()
        {
            //Y轴表示FQTY，按天累加
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select bill.FDate as BillTime,COUNT(*) as Number from ICStockBill bill join ICStockBillEntry entry on bill.FInterID=entry.FInterID where bill.FTranType=21 group by bill.FDate order by bill.FDate desc";
                return conn.Query<SaleOutDto>(sql);

            }


            //UI 选择那天，下面图形对应当天的数据
        }

        /// <summary>
        /// 成品当天出库
        /// </summary>
        public IEnumerable<ProductShipDto> ProductShipped()
        {
            //取当天数据   FQTY

            //只查图上的类型

            // FTypeID 在SubMessage
            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select bill.FHeadSelfB0941 as ProductName,count(*) as ProductNum from ICStockBill bill join ICStockBillEntry entry on bill.FInterID=entry.FInterID where FDate >=convert(varchar(10),Getdate(),120) and FDate<convert(varchar(10),dateadd(d, 1, Getdate()),120) group by bill.FHeadSelfB0941";
                //string sql = "select bill.FHeadSelfB0941 as ProductName,count(*) as ProductNum from ICStockBill bill join ICStockBillEntry entry on bill.FInterID=entry.FInterID where FDate >='2010-01-01' and FDate<convert(varchar(10),dateadd(d, 1, Getdate()),120) group by bill.FHeadSelfB0941";
                return conn.Query<ProductShipDto>(sql);

            }
        }
        /// <summary>
        /// 成品出库情况前6位
        /// </summary>
        public IEnumerable<ProductShipDto> ProductAllShipped()
        {
            //查全部类型的前几位

            //物料表t_icitem 关联  FitemID
             

            using (System.Data.IDbConnection conn = GetSqlConnection())
            {
                string sql = "select bill.FHeadSelfB0941 as ProductName,count(*) as ProductNum from ICStockBill bill join ICStockBillEntry entry on bill.FInterID=entry.FInterID  group by bill.FHeadSelfB0941";
                return conn.Query<ProductShipDto>(sql);
            }
        }



    }
}
