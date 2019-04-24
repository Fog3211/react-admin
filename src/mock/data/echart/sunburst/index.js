import sunburst_data from "./data"

const sunburst_option = {
    title: {
        text: '数据固定的旭日图',
        subtext: '',
        textStyle: {
            fontSize: 14,
            align: 'center'
        },
        subtextStyle: {
            align: 'center'
        },
        sublink: ''
    },
    toolbox: {
        feature: {
            dataView: {readOnly: true},
            saveAsImage: {}
        }
    },
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: sunburst_data,
        radius: [0, '95%'],
        sort: null,
        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '70%',
            label: {
                align: 'right'
            }
        }, {
            r0: '70%',
            r: '72%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};

export default sunburst_option;