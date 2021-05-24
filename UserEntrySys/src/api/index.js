import request from '../utils/request';

//销售动态折线查询
export const topsaleList= () => {
    return request({
       url: 'http://192.168.2.114:9000/api/order/QuerySaleStatus',
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
        url: 'http://192.168.2.114:9000/api/order/GetSaleData',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

//删除用户列表
export const DelSaleStatus = (data) => {
    return request({
        url: 'http://192.168.2.114:9000/api/order/DeleteSaleStatus',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};

//新增用户列表
export const AddNoSaleStatus = (data) => {
    return request({
        url: 'http://192.168.2.114:9000/api/order/AddSaleStatus',
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
        url: 'http://192.168.2.114:9000/api/order/SetSaleData',
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
        url: 'http://192.168.2.114:9000/api/order/WorkOrderNumberDto',
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
        url: 'http://192.168.2.114:9000/api/order/DeleteWorkOrderNumber',
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
        url: 'http://192.168.2.114:9000/api/order/AddWorkOrderNumber',
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
        url: 'http://192.168.2.114:9000/api/order/QueryWorkCompleteNumber',
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
        url: 'http://192.168.2.114:9000/api/order/DeleteWorkCompleteNumber',
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
        url: 'http://192.168.2.114:9000/api/order/AddWorkCompleteNumber',
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
        url: 'http://192.168.2.114:9000/api/order/QueryProductPercent',
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
        url: 'http://192.168.2.114:9000/api/order/DeleteProductPercent',
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
        url: 'http://192.168.2.114:9000/api/order/AddProductPercent',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};

