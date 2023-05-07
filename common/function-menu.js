/**
 * @Description: 功能页面列表
 * @Author: Wu Jiahao
 * @Date: 2023-02-05 19:39:20
 */

export const MARKETER_LIST = [
    {
        title: '产品',
        functions: [
            {
                name: '产品列表',
                iconPath: '/static/icon/image/ProductList.png',
                pagePath: '/pages/product/ProductList',
            },
            {
                name: '产品查看',
                iconPath: '/static/icon/image/ProductList.png',
                pagePath: '/pages/product/ProductList',
            },
            {
                name: '产品记录',
                iconPath: '/static/icon/image/ProductHistory.png',
                pagePath: '/pages/product/ProductHistory',
            },
        ]
    },
    {
        title: '商户建档',
        functions: [
            {
                name: '建档',
                iconPath: '/static/icon/image/MerchantCreate.png',
                pagePath: '/pages/merchant/MerchantCreate',
            },
            {
                name: '我的建档',
                iconPath: '/static/icon/image/MerchantView.png',
                pagePath: '/pages/merchant/MerchantView',
            },
        ]
    },
    {
        title: '网格',
        functions: [
            {
                name: '我的轨迹',
                iconPath: '/static/icon/image/GridTrack.png',
                pagePath: '/pages/grid/GridTrack',
            },
            {
                name: '网格分析',
                iconPath: '/static/icon/image/GridManage.png',
                pagePath: '/pages/grid/GridManage',
            },
        ]
    },
]

export const ADMIN_LIST = [
    {
        title: '产品',
        functions: [
            {
                name: '产品发布',
                iconPath: '/static/icon/image/ProductCreate.png',
                pagePath: '/pages/product/ProductCreate',
            },
            {
                name: '产品管理',
                iconPath: '/static/icon/image/ProductManage.png',
                pagePath: '/pages/product/ProductManage',
            },
			{
			    name: '产品管理',
			    iconPath: '/static/icon/image/ProductManage.png',
			    pagePath: '/pages/product/ProductManage',
			},
			{
			    name: '预约列表',
			    iconPath: '/static/icon/image/ReserveList.png',
			    pagePath: '/pages/product/ReserveList',
			},
        ]
    },
    {
        title: '人员',
        functions: [
            {
                name: '人员审核',
                iconPath: '/static/icon/image/UserCheck.png',
                pagePath: '/pages/user/UserCheck',
            },
            {
                name: '人员管理',
                iconPath: '/static/icon/image/UserManage.png',
                pagePath: '/pages/user/UserManage',
            },
        ]
    },
    {
        title: '商户',
        functions: [
            {
                name: '建档审核',
                iconPath: '/static/icon/image/MerchantCheck.png',
                pagePath: '/pages/merchant/MerchantCheck',
            },
            {
                name: '商户管理',
                iconPath: '/static/icon/image/MerchantManage.png',
                pagePath: '/pages/merchant/MerchantManage',
            },
        ]
    },
    {
        title: '网格',
        functions: [
            {
                name: '网格审核',
                iconPath: '/static/icon/image/GridCheck.png',
                pagePath: '/pages/grid/GridCheck',
            },
            {
                name: '网格管理',
                iconPath: '/static/icon/image/GridManage.png',
                pagePath: '/pages/grid/GridManage',
            },
        ]
    },
]


