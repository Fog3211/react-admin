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
        subs: [{
                key: '/app/ui/buttons',
                title: '按钮',
                component: 'Buttons'
            },
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
                component: 'MapUi'
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
                key: '/app/animation/transition-animation',
                title: '过渡动画',
                component: 'TransitionAnimation'
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
                key: '/app/table/senior-table',
                title: '高级表格',
                component: 'SeniorTable'
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
        key: '/subs4',
        title: '页面',
        icon: 'switcher',
        subs: [{
                key: '/login',
                title: '登录'
            },
            {
                key: '/404',
                title: '404'
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