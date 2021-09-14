import request from '../utils/request';

//销售动态折线查询
export const topsaleList= () => {
    return request({
       url: 'http://192.168.1.51:9001/api/order/QuerySaleStatus',
       // url: './topsale.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
//销售单条信息查询
export const topSaleNumber= () => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/GetSaleData',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

//删除
export const DelSaleStatus = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/DeleteSaleStatus',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};

//新增
export const AddSaleStatus = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/AddSaleStatus',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//编辑
export const UpdateSaleStatus = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/UpdateSaleStatus',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};


//销售单条信息编辑
export const UpdateSaleData = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/SetSaleData',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};


//工单查询
export const WorkOrderNumberDto= () => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/WorkOrderNumberDto',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
//工单删除
export const DeleteWorkOrderNumber = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/DeleteWorkOrderNumber',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//新增工单
export const AddWorkOrderNumber = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/AddWorkOrderNumber',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};


//完工查询
export const QueryWorkCompleteNumber= () => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/QueryWorkCompleteNumber',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

//完工删除
export const DeleteWorkCompleteNumber = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/DeleteWorkCompleteNumber',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//新增完工
export const AddWorkCompleteNumber = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/AddWorkCompleteNumber',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//服务类型查询
export const QueryProductPercent= () => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/QueryProductPercent',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

//服务类型删除
export const DeleteProductPercent = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/DeleteProductPercent',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//新增服务类型
export const AddProductPercent = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/AddProductPercent',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//客服单条信息查询
export const GetBotData= () => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/GetBotData',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

//客服单条信息编辑
export const SetBotData = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/SetBotData',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//销售订单生产完成情况查询
export const GetPreference= query => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/GetPreference?key='+query,
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

//销售订单生产完成情况编辑
export const SetPreference = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/SetPreference',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//年度订单查询
export const QuerySaleYear= () => {
    return request({
       url: 'http://192.168.1.51:9001/api/order/QuerySaleYear',
       // url: './topsale.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
//删除年度订单
export const DelSaleYear = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/DeleteSaleYear',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};

//新增年度订单
export const AddNoSaleYear = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/AddSaleYear',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};

//编辑年度订单
export const UpdateSaleYear = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/UpdateSaleYear',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};


export const UpdateWorkCompleteNumber = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/UpdateWorkCompleteNumber',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};


export const UpdateWorkOrderNumber = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/UpdateWorkOrderNumber',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};


export const UpdateProductPercent = (data) => {
    return request({
        url: 'http://192.168.1.51:9001/api/order/UpdateProductPercent',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};