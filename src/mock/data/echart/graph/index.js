import Mock from 'mockjs';

const relation = ['朋友', '亲戚', '师生', '同事']
const graph_data = {
    data: [{
        // 主角
        name: Mock.mock('@cname'),
        draggable: true,
    }],
    link: []
};
// 人物节点
for (let i = 0; i < 15; i++) {
    graph_data.data.push({
        name: Mock.mock('@cname'),
        category: i % 2,
        draggable: true,
    })
    graph_data.link.push({
        source: Mock.mock('@integer(0,15)'),
        target: Mock.mock('@integer(0,15)'),
        value: relation[i % 4],
    })
}
// 丰富主角关系连线
for (let i = 0; i < 10; i++) {
    graph_data.link.push({
        source: 0,
        target: Mock.mock('@integer(1,15)'),
        value: relation[i % 4],
    })
}
// 关系图配置数据
const graph_option = {
    title: {
        text: '人物关系图',
    },
    toolbox: {
        feature: {
            dataView: {readOnly: true},
            saveAsImage: {}
        }
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12,
            },
        },
    },
    legend: {
        x: 'center',
        show: false,
    },
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 45,
        focusNodeAdjacency: true,
        roam: true,
        // 三种节点
        categories: [{
                itemStyle: {
                    normal: {
                        color: '#009800',
                    },
                },
            },
            {
                itemStyle: {
                    normal: {
                        color: '#4592FF',
                    },
                },
            },
            {
                itemStyle: {
                    normal: {
                        color: '#3592F',
                    },
                },
            },
        ],
        label: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
            },
        },
        force: {
            repulsion: 1000,
        },
        edgeSymbolSize: [4, 50],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10,
                },
                formatter: '{c}',
            },
        },
        data: graph_data.data,
        links: graph_data.link,
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0,
            },
        },
    }, ],
};

export default graph_option;