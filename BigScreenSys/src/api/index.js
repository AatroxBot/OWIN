import request from '@/utils/request'

export const getDomainList = () => {
    return request({
       // url: 'http://192.168.1.51:9000/api/order/saleOrder',
        url: './table.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
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
export const botlineList= () => {
    return request({
        //url: 'http://192.168.1.51:9000/api/order/billNumber',
        url:'./botlinedata.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};
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


export const ProductShipped= () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/ProductShipped?dateTime=123',
        //url: './userPermission.json',
        method: 'get',
        xhrFields: {
            withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
        },
        crossDomain: true,
    });

};

export const ProductAllShip= () => {
    return request({
        url: 'http://192.168.1.51:9000/api/order/ProductAllShip?dateTime=123',
        //url: './userPermission.json',
        method: 'get',
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