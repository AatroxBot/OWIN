import request from '@/utils/request'

export const getDomainList = (data) => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/saleOrder',
        //url: './table.json',
        method: 'post',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        data:data,
        crossDomain: true,
    });

};
export const barList = () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/OrderNumber',
        //url: './userPermission.json',
        method: 'get',
        timeout: 40000,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};


export const OverallCapacity = () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/OverallCapacity',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

export const ProductForecast = () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/ProductForecast',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};



export const ProductionExecution = query=> {
    return request({
        url: 'http://192.168.1.51:9000/api/order/ProductionExecution?departcode='+query,
        //url: './yearMonthProduct.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
export const botlineList= (data) => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/billNumber',
        //url:'./botlinedata.json',
        method: 'post',
        data:data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
export const topsaleList= () => {
    return request({
       url: 'http://192.168.1.51:9000/api/order/QueryOrderDate',
      //  url: './topsale.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

export const topsaleListEntry= () => {
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
export const orderDateNumber= () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/QueryOrderDateNumber',
      //  url: './orderDate.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};


export const WorkNumberList= () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/WorkOrderNumberDto',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
export const EvaluateNumber= () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/QueryWorkCompleteNumber',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
export const botpieNumber= () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/QueryProductPercent',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};


export const ProductShipped= (data) => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/ProductShipped',
        //url: './userPermission.json',
        method: 'post',
        data:data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

export const ProductAllShip= (data) => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/ProductAllShip',
        //url: './userPermission.json',
        method: 'post',
        data:data,
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

export const GetBotData= () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/GetBotData',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

//销售订单生产完成情况
export const GetPreference= query => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/GetPreference?key='+query,
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

//库存总量
export const StorageALLNumber = () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/StorageALLNumber',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
