(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["table"],{"0f0b":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-cascades"}),e._v("销售动态\n            ")])],1)],1),r("div",{staticClass:"container"},[r("p",{staticClass:"pstyle"},[e._v("折线图数据")]),r("div",{staticClass:"handle-box"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:2}},[r("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-lx-add"},on:{click:e.addNewUser}},[e._v("新增")])],1)],1)],1),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{prop:"Number",label:"数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Number))]}}])}),r("el-table-column",{attrs:{prop:"Time",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Time))]}}])}),r("el-table-column",{attrs:{label:"操作",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),r("MarketNumber"),r("div",{staticClass:"container"},[r("p",[e._v("生产总体数据")]),r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"280px",disabled:e.disabled}},[r("el-form-item",{attrs:{label:"公司整体产能负荷"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{onkeyup:"this.value=this.value.replace(/\\D/g,'')"},model:{value:e.percentValue,callback:function(t){e.percentValue=t},expression:"percentValue"}}),e._v("%\n            ")],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.Submit}},[e._v("提交")])],1)],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"40%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",disabled:e.disabled}},[r("el-form-item",{attrs:{label:"数量"}},[r("el-input",{model:{value:e.form.Number,callback:function(t){e.$set(e.form,"Number",t)},expression:"form.Number"}})],1),r("el-form-item",{attrs:{label:"时间"}},[r("el-date-picker",{attrs:{type:"month",placeholder:"选择日期","value-format":"yyyy/MM"},model:{value:e.form.Time,callback:function(t){e.$set(e.form,"Time",t)},expression:"form.Time"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("p",{staticClass:"pstyle"},[e._v("销售订单单条数据")]),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"}},[r("el-table-column",{attrs:{prop:"SaleRevenue",label:"销售收入"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.SaleRevenue))]}}])}),r("el-table-column",{attrs:{prop:"SaleNumber",label:"销售数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.SaleNumber))]}}])}),r("el-table-column",{attrs:{prop:"ProductCost",label:"生产成本"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ProductCost))]}}])}),r("el-table-column",{attrs:{prop:"CompanyExpenses",label:"公司费用"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.CompanyExpenses))]}}])}),r("el-table-column",{attrs:{prop:"CompanyProfit",label:"公司利润"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.CompanyProfit))]}}])}),r("el-table-column",{attrs:{prop:"PercentComplet",label:"营销业绩完成进度"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.PercentComplet))]}}])}),r("el-table-column",{attrs:{prop:"PercentFirst",label:"好易点"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.PercentFirst))]}}])}),r("el-table-column",{attrs:{prop:"PercentSecond",label:"战略发展中心"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.PercentSecond))]}}])}),r("el-table-column",{attrs:{prop:"PercentThree",label:"邦先生"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.PercentThree))]}}])}),r("el-table-column",{attrs:{prop:"PercentFour",label:"杭州邦先生"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.PercentFour))]}}])}),r("el-table-column",{attrs:{label:"操作",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])})],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"40%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",disabled:e.disabled}},[r("el-form-item",{attrs:{label:"销售收入"}},[r("el-input",{model:{value:e.form.SaleRevenue,callback:function(t){e.$set(e.form,"SaleRevenue",t)},expression:"form.SaleRevenue"}})],1),r("el-form-item",{attrs:{label:"销售数量"}},[r("el-input",{model:{value:e.form.SaleNumber,callback:function(t){e.$set(e.form,"SaleNumber",t)},expression:"form.SaleNumber"}})],1),r("el-form-item",{attrs:{label:"生产成本"}},[r("el-input",{model:{value:e.form.ProductCost,callback:function(t){e.$set(e.form,"ProductCost",t)},expression:"form.ProductCost"}})],1),r("el-form-item",{attrs:{label:"公司费用"}},[r("el-input",{model:{value:e.form.CompanyExpenses,callback:function(t){e.$set(e.form,"CompanyExpenses",t)},expression:"form.CompanyExpenses"}})],1),r("el-form-item",{attrs:{label:"公司利润"}},[r("el-input",{model:{value:e.form.CompanyProfit,callback:function(t){e.$set(e.form,"CompanyProfit",t)},expression:"form.CompanyProfit"}})],1),r("el-form-item",{attrs:{label:"营销业绩进度"}},[r("el-input",{model:{value:e.form.PercentComplet,callback:function(t){e.$set(e.form,"PercentComplet",t)},expression:"form.PercentComplet"}})],1),r("el-form-item",{attrs:{label:"好易点"}},[r("el-input",{model:{value:e.form.PercentFirst,callback:function(t){e.$set(e.form,"PercentFirst",t)},expression:"form.PercentFirst"}})],1),r("el-form-item",{attrs:{label:"战略发展中心"}},[r("el-input",{model:{value:e.form.PercentSecond,callback:function(t){e.$set(e.form,"PercentSecond",t)},expression:"form.PercentSecond"}})],1),r("el-form-item",{attrs:{label:"邦先生"}},[r("el-input",{model:{value:e.form.PercentThree,callback:function(t){e.$set(e.form,"PercentThree",t)},expression:"form.PercentThree"}})],1),r("el-form-item",{attrs:{label:"杭州邦先生"}},[r("el-input",{model:{value:e.form.PercentFour,callback:function(t){e.$set(e.form,"PercentFour",t)},expression:"form.PercentFour"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},n=[],i=r("365c"),s={data:function(){return{query:{SaleRevenue:"",SaleNumber:"",ProductCost:"",CompanyExpenses:"",CompanyProfit:"",PercentComplet:"",PercentFirst:"",PercentSecond:"",PercentThree:"",PercentFour:""},tableData:[],editVisible:!1,form:{},idx:-1,id:-1,title:"",disabled:!1,visible:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this;Object(i["q"])().then((function(t){e.tableData.push(t)}))},handleEdit:function(e,t){this.editVisible=!0,this.idx=e,this.form=t,this.title="编辑"},saveEdit:function(){var e=this;this.editVisible=!1,Object(i["o"])(this.form).then((function(t){e.$message.success("更新成功"),e.$set(e.tableData,e.idx,e.form)}))}}},u=s,c=r("2877"),d=Object(c["a"])(u,o,n,!1,null,null,null),m=d.exports,f={name:"marketlist",data:function(){return{query:{Number:"",Time:""},tableData:[],tableDataNumber:[],editVisible:!1,form:{key:"",value:""},idx:-1,id:-1,title:"",value1:"",disabled:!1,visible:!1,Preference:"",percentValue:""}},components:{MarketNumber:m},created:function(){this.getData()},methods:{getData:function(){var e=this;Object(i["r"])().then((function(t){e.tableData=t})),Object(i["j"])("OrderCompletePercent").then((function(t){e.percentValue=t,console.log(e.percentValue)}))},Submit:function(){var e=this;this.form.key="OrderCompletePercent",this.form.value=this.percentValue,this.percentValue>100||this.percentValue<0?(this.$message.warning("修改失败"),this.percentValue=100):Object(i["n"])(this.form).then((function(t){e.$message.success("修改成功"),e.$set(e.form,e.value)}))},addNewUser:function(){this.editVisible=!0,this.idx=-1,this.form={},this.title="新增"},saveEdit:function(){var e=this;this.editVisible=!1,-1==this.idx?Object(i["a"])(this.form).then((function(t){e.$message.success("添加成功"),e.tableData.push(e.form)})):this.$message.warning("添加失败")},handleDelete:function(e,t){var r=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){Object(i["e"])(t).then((function(t){r.$message.success("删除成功"),r.tableData.splice(e,1)}))}))},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()}}},b=f,p=(r("8642"),Object(c["a"])(b,l,a,!1,null,"1ec37c2d",null));t["default"]=p.exports},"1a8b":function(e,t,r){},"2a17":function(e,t,r){"use strict";r("e8bd")},"365c":function(e,t,r){"use strict";r.d(t,"r",(function(){return i})),r.d(t,"q",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return c})),r.d(t,"o",(function(){return d})),r.d(t,"p",(function(){return m})),r.d(t,"h",(function(){return f})),r.d(t,"d",(function(){return b})),r.d(t,"l",(function(){return p})),r.d(t,"g",(function(){return h})),r.d(t,"c",(function(){return v})),r.d(t,"k",(function(){return _})),r.d(t,"f",(function(){return y})),r.d(t,"b",(function(){return N})),r.d(t,"i",(function(){return k})),r.d(t,"m",(function(){return w})),r.d(t,"j",(function(){return x})),r.d(t,"n",(function(){return C}));var l=r("bc3a"),a=r.n(l),o=a.a.create({timeout:5e3,headers:{"Content-Type":"application/json;charset=UTF-8"},withCredentials:!0});o.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject()})),o.interceptors.response.use((function(e){if(200===e.status)return e.data;Promise.reject()}),(function(e){return console.log(e),Promise.reject()}));var n=o,i=function(){return n({url:"http://192.168.1.51:9000/api/order/QuerySaleStatus",method:"get",xhrFields:{withCredentials:!0},crossDomain:!0})},s=function(){return n({url:"http://192.168.1.51:9000/api/order/GetSaleData",method:"get",xhrFields:{withCredentials:!0},crossDomain:!0})},u=function(e){return n({url:"http://192.168.1.51:9000/api/order/DeleteSaleStatus",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},c=function(e){return n({url:"http://192.168.1.51:9000/api/order/AddSaleStatus",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},d=function(e){return n({url:"http://192.168.1.51:9000/api/order/SetSaleData",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},m=function(){return n({url:"http://192.168.1.51:9000/api/order/WorkOrderNumberDto",method:"get",xhrFields:{withCredentials:!0},crossDomain:!0})},f=function(e){return n({url:"http://192.168.1.51:9000/api/order/DeleteWorkOrderNumber",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},b=function(e){return n({url:"http://192.168.1.51:9000/api/order/AddWorkOrderNumber",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},p=function(){return n({url:"http://192.168.1.51:9000/api/order/QueryWorkCompleteNumber",method:"get",xhrFields:{withCredentials:!0},crossDomain:!0})},h=function(e){return n({url:"http://192.168.1.51:9000/api/order/DeleteWorkCompleteNumber",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},v=function(e){return n({url:"http://192.168.1.51:9000/api/order/AddWorkCompleteNumber",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},_=function(){return n({url:"http://192.168.1.51:9000/api/order/QueryProductPercent",method:"get",xhrFields:{withCredentials:!0},crossDomain:!0})},y=function(e){return n({url:"http://192.168.1.51:9000/api/order/DeleteProductPercent",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},N=function(e){return n({url:"http://192.168.1.51:9000/api/order/AddProductPercent",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},k=function(){return n({url:"http://192.168.1.51:9000/api/order/GetBotData",method:"get",xhrFields:{withCredentials:!0},crossDomain:!0})},w=function(e){return n({url:"http://192.168.1.51:9000/api/order/SetBotData",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})},x=function(e){return n({url:"http://192.168.1.51:9000/api/order/GetPreference?key="+e,method:"get",xhrFields:{withCredentials:!0},crossDomain:!0})},C=function(e){return n({url:"http://192.168.1.51:9000/api/order/SetPreference",method:"post",data:e,xhrFields:{withCredentials:!0},crossDomain:!0})}},"5afa":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 客户总体分析\n            ")])],1)],1),r("div",{staticClass:"container"},[r("p",{staticClass:"pstyle"},[e._v("工单数量对比数据")]),r("div",{staticClass:"handle-box"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:2}},[r("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-lx-add"},on:{click:e.addNewUser}},[e._v("新增")])],1)],1)],1),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{prop:"ThisMonth",label:"本月"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ThisMonth))]}}])}),r("el-table-column",{attrs:{prop:"LastMonth",label:"上月"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.LastMonth))]}}])}),r("el-table-column",{attrs:{prop:"Time",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Time))]}}])}),r("el-table-column",{attrs:{label:"操作",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),r("ImproveOrderList"),r("ImproveServiceList"),r("ImproveSingleData"),r("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"40%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",disabled:e.disabled}},[r("el-form-item",{attrs:{label:"本月"}},[r("el-input",{model:{value:e.form.ThisMonth,callback:function(t){e.$set(e.form,"ThisMonth",t)},expression:"form.ThisMonth"}})],1),r("el-form-item",{attrs:{label:"上月"}},[r("el-input",{model:{value:e.form.LastMonth,callback:function(t){e.$set(e.form,"LastMonth",t)},expression:"form.LastMonth"}})],1),r("el-form-item",{attrs:{label:"时间"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy/MM/dd"},model:{value:e.form.Time,callback:function(t){e.$set(e.form,"Time",t)},expression:"form.Time"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("p",{staticClass:"pstyle"},[e._v("完工好评")]),r("div",{staticClass:"handle-box"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:2}},[r("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-lx-add"},on:{click:e.addNewUser}},[e._v("新增")])],1)],1)],1),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{prop:"CompleteNumber",label:"完工"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.CompleteNumber))]}}])}),r("el-table-column",{attrs:{prop:"EvaluateNumber",label:"好评"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.EvaluateNumber))]}}])}),r("el-table-column",{attrs:{prop:"Time",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Time))]}}])}),r("el-table-column",{attrs:{label:"操作",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"40%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",disabled:e.disabled}},[r("el-form-item",{attrs:{label:"完工"}},[r("el-input",{model:{value:e.form.CompleteNumber,callback:function(t){e.$set(e.form,"CompleteNumber",t)},expression:"form.CompleteNumber"}})],1),r("el-form-item",{attrs:{label:"好评"}},[r("el-input",{model:{value:e.form.EvaluateNumber,callback:function(t){e.$set(e.form,"EvaluateNumber",t)},expression:"form.EvaluateNumber"}})],1),r("el-form-item",{attrs:{label:"时间"}},[r("el-date-picker",{attrs:{type:"month",placeholder:"选择日期","value-format":"yyyy/MM"},model:{value:e.form.Time,callback:function(t){e.$set(e.form,"Time",t)},expression:"form.Time"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},n=[],i=r("365c"),s={name:"domainlist",data:function(){return{query:{CompleteNumber:"",EvaluateNumber:"",Time:""},tableData:[],editVisible:!1,form:{},idx:-1,id:-1,title:"",disabled:!1,visible:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this;Object(i["l"])().then((function(t){e.tableData=t}))},addNewUser:function(){this.editVisible=!0,this.idx=-1,this.form={},this.title="新增"},saveEdit:function(){var e=this;this.editVisible=!1,-1==this.idx?Object(i["c"])(this.form).then((function(t){e.$message.success("添加成功"),e.tableData.push(e.form)})):this.$message.warning("添加失败")},handleDelete:function(e,t){var r=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){Object(i["g"])(t).then((function(t){r.$message.success("删除成功"),r.tableData.splice(e,1)}))})).catch((function(){}))}}},u=s,c=(r("db2e"),r("2877")),d=Object(c["a"])(u,o,n,!1,null,"4cd785a4",null),m=d.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("p",{staticClass:"pstyle"},[e._v("服务类型")]),r("div",{staticClass:"handle-box"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:2}},[r("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-lx-add"},on:{click:e.addNewUser}},[e._v("新增")])],1)],1)],1),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{prop:"ProductName",label:"服务类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ProductName))]}}])}),r("el-table-column",{attrs:{prop:"ProductNumber",label:"服务数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ProductNumber))]}}])}),r("el-table-column",{attrs:{label:"操作",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"40%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",disabled:e.disabled}},[r("el-form-item",{attrs:{label:"服务类型"}},[r("el-input",{model:{value:e.form.ProductName,callback:function(t){e.$set(e.form,"ProductName",t)},expression:"form.ProductName"}})],1),r("el-form-item",{attrs:{label:"服务数量"}},[r("el-input",{model:{value:e.form.ProductNumber,callback:function(t){e.$set(e.form,"ProductNumber",t)},expression:"form.ProductNumber"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},b=[],p={name:"domainlist",data:function(){return{query:{ProductName:"",ProductNumber:""},tableData:[],editVisible:!1,form:{},idx:-1,id:-1,title:"",disabled:!1,visible:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this;Object(i["k"])().then((function(t){e.tableData=t}))},addNewUser:function(){this.editVisible=!0,this.idx=-1,this.form={},this.title="新增"},saveEdit:function(){var e=this;this.editVisible=!1,-1==this.idx?Object(i["b"])(this.form).then((function(t){e.$message.success("添加成功"),e.tableData.push(e.form)})):this.$message.warning("添加失败")},handleDelete:function(e,t){var r=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){Object(i["f"])(t).then((function(t){r.$message.success("删除成功"),r.tableData.splice(e,1)}))})).catch((function(){}))}}},h=p,v=(r("eead"),Object(c["a"])(h,f,b,!1,null,"dea771bc",null)),_=v.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("p",{staticClass:"pstyle"},[e._v("客服单条数据")]),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"}},[r("el-table-column",{attrs:{prop:"WorkNumber",label:"工单总数"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.WorkNumber))]}}])}),r("el-table-column",{attrs:{prop:"CustoNumber",label:"客户总数"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.CustoNumber))]}}])}),r("el-table-column",{attrs:{prop:"NewAddNumber",label:"本月新增"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.NewAddNumber))]}}])}),r("el-table-column",{attrs:{prop:"BuyNumber",label:"今日已购"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.BuyNumber))]}}])}),r("el-table-column",{attrs:{prop:"ServiceNumber",label:"服务商"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ServiceNumber))]}}])}),r("el-table-column",{attrs:{prop:"FinishNumber",label:"本月完工"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.FinishNumber))]}}])}),r("el-table-column",{attrs:{prop:"TodayNumber",label:"今日工单"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.TodayNumber))]}}])}),r("el-table-column",{attrs:{prop:"CallNumber",label:"今日呼入"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.CallNumber))]}}])}),r("el-table-column",{attrs:{prop:"OutNumber",label:"今日呼出"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.OutNumber))]}}])}),r("el-table-column",{attrs:{prop:"ProjectNumber",label:"工程师"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ProjectNumber))]}}])}),r("el-table-column",{attrs:{label:"操作",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])})],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.editVisible,width:"40%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",disabled:e.disabled}},[r("el-form-item",{attrs:{label:"工单数量"}},[r("el-input",{model:{value:e.form.WorkNumber,callback:function(t){e.$set(e.form,"WorkNumber",t)},expression:"form.WorkNumber"}})],1),r("el-form-item",{attrs:{label:"客户总数"}},[r("el-input",{model:{value:e.form.CustoNumber,callback:function(t){e.$set(e.form,"CustoNumber",t)},expression:"form.CustoNumber"}})],1),r("el-form-item",{attrs:{label:"本月新增"}},[r("el-input",{model:{value:e.form.NewAddNumber,callback:function(t){e.$set(e.form,"NewAddNumber",t)},expression:"form.NewAddNumber"}})],1),r("el-form-item",{attrs:{label:"今日已购"}},[r("el-input",{model:{value:e.form.BuyNumber,callback:function(t){e.$set(e.form,"BuyNumber",t)},expression:"form.BuyNumber"}})],1),r("el-form-item",{attrs:{label:"服务商"}},[r("el-input",{model:{value:e.form.ServiceNumber,callback:function(t){e.$set(e.form,"ServiceNumber",t)},expression:"form.ServiceNumber"}})],1),r("el-form-item",{attrs:{label:"本月完工"}},[r("el-input",{model:{value:e.form.FinishNumber,callback:function(t){e.$set(e.form,"FinishNumber",t)},expression:"form.FinishNumber"}})],1),r("el-form-item",{attrs:{label:"今日工单"}},[r("el-input",{model:{value:e.form.TodayNumber,callback:function(t){e.$set(e.form,"TodayNumber",t)},expression:"form.TodayNumber"}})],1),r("el-form-item",{attrs:{label:"今日呼入"}},[r("el-input",{model:{value:e.form.CallNumber,callback:function(t){e.$set(e.form,"CallNumber",t)},expression:"form.CallNumber"}})],1),r("el-form-item",{attrs:{label:"今日呼出"}},[r("el-input",{model:{value:e.form.OutNumber,callback:function(t){e.$set(e.form,"OutNumber",t)},expression:"form.OutNumber"}})],1),r("el-form-item",{attrs:{label:"工程师"}},[r("el-input",{model:{value:e.form.ProjectNumber,callback:function(t){e.$set(e.form,"ProjectNumber",t)},expression:"form.ProjectNumber"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)],1)},N=[],k={data:function(){return{query:{WorkNumber:"",CustoNumber:"",NewAddNumber:"",BuyNumber:"",ServiceNumber:"",FinishNumber:"",TodayNumber:"",CallNumber:"",OutNumber:"",ProjectNumber:""},tableData:[],editVisible:!1,form:{},idx:-1,id:-1,title:"",disabled:!1,visible:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this;Object(i["i"])().then((function(t){e.tableData.push(t)}))},handleEdit:function(e,t){this.editVisible=!0,this.idx=e,this.form=t,this.title="编辑"},saveEdit:function(){var e=this;this.editVisible=!1,Object(i["m"])(this.form).then((function(t){e.$message.success("更新成功"),e.$set(e.tableData,e.idx,e.form)}))}}},w=k,x=Object(c["a"])(w,y,N,!1,null,null,null),C=x.exports,g={name:"domainlist",data:function(){return{query:{ThisMonth:"",LastMonth:"",Time:""},tableData:[],editVisible:!1,form:{},idx:-1,id:-1,title:"",disabled:!1,visible:!1}},components:{ImproveOrderList:m,ImproveServiceList:_,ImproveSingleData:C},created:function(){this.getData()},methods:{getData:function(){var e=this;Object(i["p"])().then((function(t){e.tableData=t}))},addNewUser:function(){this.editVisible=!0,this.idx=-1,this.form={},this.title="新增"},saveEdit:function(){var e=this;this.editVisible=!1,-1==this.idx?Object(i["d"])(this.form).then((function(t){e.$message.success("添加成功"),e.tableData.push(e.form)})):this.$message.warning("添加失败")},handleDelete:function(e,t){var r=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){Object(i["h"])(t).then((function(t){r.$message.success("删除成功"),r.tableData.splice(e,1)}))})).catch((function(){}))}}},D=g,S=(r("2a17"),Object(c["a"])(D,l,a,!1,null,"05a4304b",null));t["default"]=S.exports},8642:function(e,t,r){"use strict";r("1a8b")},c1ec:function(e,t,r){},db2e:function(e,t,r){"use strict";r("c1ec")},e8bd:function(e,t,r){},eead:function(e,t,r){"use strict";r("f88b")},f88b:function(e,t,r){}}]);