export default [{
        title: '全局总览',
        key: '/overview',
    },
    {
        title: '成员管理',
        key: '/member',
    },
    {
        title: '成果汇总',
        key: '/achievement',
        children: [{
                title: '论文',
                key: '/achievement/dissertation',
            },
            {
                title: '纵向课题',
                key: '/achievement/longitudinal-topic',
            },
            {
                title: '横向课题',
                key: '/achievement/horizontal-topic',
            },
            {
                title: '专利',
                key: '/achievement/patent',
            },
            {
                title: '个人获奖',
                key: '/achievement/individual-award',
            },
            {
                title: '团队获奖',
                key: '/achievement/team-award',
            }
        ]
    },
    {
        title: '材料生成',
        key: '/city'
    },
    {
        title: '系统设置',
        key: '/setting',
        btnList: [{
                title: '订单详情',
                key: '/detail'
            },
            {
                title: '结束订单',
                key: '/finish'
            }
        ]
    },
];