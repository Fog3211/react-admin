import Mock from 'mockjs';

const legend_data = ['展现', '点击', '访问', '咨询', '订单'];
const expect_data = [];
const actual_data = [];

// 预期数据
let len = legend_data.length;
for (let i = 0; i < len; i++) {
    expect_data.push({
        // 等比例生成数据
        value: Mock.mock(`@integer(${100/len*(i)},${100/len*(i+1)})`),
        name: legend_data[i]
    });
}
// 实际数据
for (let i = 0; i < len; i++) {
    actual_data.push({
        value: Mock.mock(`@integer(${100/len*(i)},${100/len*(i+1)})`),
        name: legend_data[i]
    });
}

const funnel_option = {
    legend: {
        data: legend_data,
    },
    toolbox: {
        feature: {
            dataView: {readOnly: true},
            saveAsImage: {}
        }
    },
    series: [{
            name: '预期',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}预期',
                },
                emphasis: {
                    position: 'inside',
                    formatter: '{b}预期: {c}%',
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    opacity: 0.7,
                },
            },
            data: expect_data
        },
        {
            name: '实际',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff',
                    },
                },
                emphasis: {
                    position: 'inside',
                    formatter: '{b}实际: {c}%',
                },
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
            },
            data: actual_data
        },
    ],
};

export default funnel_option;