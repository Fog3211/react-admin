const menus = [{
        key: '/app/home',
        title: '首页',
        icon: 'mobile',
        component: 'Home'
    },
    {
        key: '/app/ui',
        title: 'UI',
        icon: 'scan',
        subs: [
            {
                key: '/app/ui/icons',
                title: '图标',
                component: 'Icons'
            },
            {
                key: '/app/ui/spins',
                title: '加载中',
                component: 'Spins'
            },
            {
                key: '/app/ui/modals',
                title: '对话框',
                component: 'Modals'
            },
            {
                key: '/app/ui/notifications',
                title: '通知提醒框',
                component: 'Notifications'
            },
            {
                key: '/app/ui/tabs',
                title: '标签页',
                component: 'Tabs'
            },
            {
                key: '/app/ui/banners',
                title: '轮播图',
                component: 'Banners'
            },
            {
                key: '/app/ui/wysiwyg',
                title: '富文本',
                component: 'WysiwygBundle'
            },
            {
                key: '/app/ui/drags',
                title: '拖拽',
                component: 'Drags'
            },
            {
                key: '/app/ui/gallery',
                title: '画廊',
                component: 'Gallery'
            },
            {
                key: '/app/ui/map',
                title: '地图',
                component: 'Map'
            },
        ],
    },
    {
        key: '/app/animation',
        title: '动画',
        icon: 'rocket',
        subs: [{
                key: '/app/animation/basic-animation',
                title: '基础动画',
                component: 'BasicAnimation'
            },
            {
                key: '/app/animation/complex-animation',
                title: '复杂动画',
                component: 'ComplexAnimation'
            },
        ],
    },
    {
        key: '/app/table',
        title: '表格',
        icon: 'copy',
        subs: [{
                key: '/app/table/basic-table',
                title: '基础表格',
                component: 'BasicTable'
            },
            {
                key: '/app/table/screening-table',
                title: '可筛选表格',
                component: 'ScreeningTable'
            },
            {
                key: '/app/table/editable-table',
                title: '可编辑表格',
                component: 'EditableTable'
            },
            {
                key: '/app/table/dynamic-table',
                title: '动态控制表格',
                component: 'DynamicTable'
            }
        ],
    },
    {
        key: '/app/form',
        title: '表单',
        icon: 'edit',
        component: 'AllForm'
    },
    {
        key: '/app/chart',
        title: '图表',
        icon: 'area-chart',
        subs: [{
                key: '/app/chart/echarts',
                title: 'echarts',
                component: 'Echarts'
            },
            {
                key: '/app/chart/recharts',
                title: 'recharts',
                component: 'Recharts'
            },
        ],
    },
    {
        key: '/app/auth',
        title: '权限管理',
        icon: 'safety',
        subs: [{
                key: '/app/auth/basic',
                title: '基础演示',
                component: 'AuthBasic'
            },
            {
                key: '/app/auth/routerEnter',
                title: '路由拦截',
                component: 'RouterEnter',
                auth: 'auth/testPage'
            },
        ],
    },
];
export default menus;