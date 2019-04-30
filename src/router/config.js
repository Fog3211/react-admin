const menus = [{
        key: '/app/home',
        title: '首页',
        icon: 'home',
        component: 'Home'
    },
    {
        key: '/app/ui',
        title: 'UI',
        icon: 'scan',
        subs: [{
                key: '/app/ui/icons',
                title: '图标',
                component: 'Icons'
            },
            {
                key: '/app/ui/step-bar',
                title: '步骤条',
                component: 'StepBar'
            },
            {
                key: '/app/ui/tab-nav',
                title: '标签页',
                component: 'TabNav'
            },
            {
                key: '/app/ui/drawer',
                title: '抽屉',
                component: 'DrawerUI'
            },
            {
                key: '/app/ui/rich-text',
                title: '富文本',
                component: 'RichText'
            },
            {
                key: '/app/ui/drag',
                title: '拖拽',
                component: 'Drag'
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
        icon: 'table',
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
        icon: 'form',
        component: 'AllForm'
    },
    {
        key: '/app/chart',
        title: '图表',
        icon: 'area-chart',
        subs: [{
                key: '/app/charts/echart',
                title: 'echarts',
                component: 'Echart'
            },
            {
                key: '/app/charts/rechart',
                title: 'recharts',
                component: 'Rechart'
            },
        ],
    },
    {
        key: '/app/auth',
        title: '权限测试',
        icon: 'lock',
        subs: [{
                key: '/app/auth/basic-test',
                title: '基本测试',
                component: 'BasicAuth'
            },
            {
                key: '/app/auth/router-test',
                title: '路由拦截',
                component: 'RouterAuth',
                auth: ['super_admin','admin']
            },
        ],
    },
];
export default menus;