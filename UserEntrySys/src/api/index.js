import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });

};


export const Login = query => {
    return request({
        url:'http://pdmir.fotric.cn/pdmir-test/api/login',
        method:'post',
        params:query,
    })
};
export const getDomainList= query => {
    return request({
        url: './domain.json',
        method: 'get',
        params: query
    });

};
export const tableList= query => {
    return request({
        url: './table1.json',
        method: 'get',
        params: query
    });

};
export const barList= query => {
    return request({
        url: './bar.json',
        method: 'get',
        params: query
    });

};
export const productList= query => {
    return request({
        url: './product.json',
        method: 'get',
        params: query
    });

};
//销售动态
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
//销售单条信息
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