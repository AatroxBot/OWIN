import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/marketlist',
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/marketlist',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/MarketList.vue'),
                    meta: { title: '销售动态' }
                },
                // ,
                // {
                //     path: '/orderlist',
                //     component: () => import(/* webpackChunkName: "table" */ '../components/page/OrderList.vue'),
                //     meta: { title: '销售订单统计动态列表' }
                // },
                // {
                //     path: '/producelist',
                //     component: () => import(/* webpackChunkName: "table" */ '../components/page/ProduceList.vue'),
                //     meta: { title: '生产总体数据' }
                // },
                // {
                //     path: '/stocklist',
                //     component: () => import(/* webpackChunkName: "table" */ '../components/page/StockList.vue'),
                //     meta: { title: '发货与库存分析' }
                // },
                {
                    path: '/improvelist',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/ImproveList.vue'),
                    meta: { title: '客户总体分析' }
                }
                
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        // {
        //     path: '*',
        //     redirect: '/404'
        // }
    ]
});
