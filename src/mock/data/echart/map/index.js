import Mock from 'mockjs';

const sale_data = [];
const tag_list = ['华为', '小米', '苹果'];
const province_list = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门'];

for (let i = 0; i < tag_list.length; i++) {
    let data = [];
    for (let j = 0; j < 34; j++) {
        data.push({
            name: province_list[Mock.mock('@integer(0,34)')],
            value: Mock.mock('@integer(0,1000)')
        })
    }
    sale_data.push({
        name: tag_list[i],
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: true,
            },
            emphasis: {
                show: true,
            },
        },
        data: data
    })
}

const map_option = {
    title: {
        text: '智能手机销量',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    toolbox: {
        feature: {
            dataView: {readOnly: true},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: tag_list,
    },
    visualMap: {
        min: 0,
        max:3000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
    },
    series: sale_data
};


export default map_option;