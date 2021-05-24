import request from '../utils/request';

//销售动态
export const topsaleList= () => {
    return request({
       url: 'http://192.168.1.51:9000/api/order/QuerySaleStatus',
       // url: './topsale.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
//销售单条信息
export const topSaleNumber= () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/GetSaleData',
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
        url: 'http://192.168.1.51:9000/api/order/DeleteSaleStatus',
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
        url: 'http://192.168.1.51:9000/api/order/AddSaleStatus',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};
//
export const UpdateSaleData = (data) => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/SetSaleData',
        method: 'post',
        data: data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });
};