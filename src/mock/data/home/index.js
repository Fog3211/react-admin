import tag_data from "./tag";
import visits_data from "./visits";
import age_data from "./age";
import dynamic_data from "./dynamic";

const age_option = {
    title: {
        text: '本管理系统人员年龄比例图',
        x: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: age_data.tag
    },
    calculable: true,
    series: [{
        name: '年龄占比',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: age_data.data
    }],
    color: ['#8378EA', '#E7BCF3', '#FFDB5C', '#37A2DA', '#FB7293', '#9FE688']
};

export {
    tag_data,
    visits_data,
    age_option,
    dynamic_data
};