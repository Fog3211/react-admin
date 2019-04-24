import Mock from "mockjs";
import {
    user_list
} from "./data/user";
import {
    basic_table,
    screening_table,
    editable_table,
} from "./data/table";
import {
    graph_option,
    funnel_option
} from "./data/echart";

// 正则取get参数
function getQueryByName(url, name) {
    var reg = new RegExp('[?&]' + name + '=([^&#]+)');
    var query = url.match(reg);
    return query ? query[1] : null;
}

//登录
Mock.mock('/login', 'post', (params) => {
    let user = JSON.parse(params.body);
    let has_user = false;
    let can_login = user_list.some((item) => {
        if (item.userName === user.userName) {
            has_user = true;
            if (item.passWord === user.passWord) {
                return true;
            }
        }
        return false;
    })
    if (!has_user) {
        return {
            resCode: 2,
            msg: '用户名不存在'
        }
    }
    if (can_login) {
        return {
            resCode: 1,
            msg: '登录成功',
        }
    } else {
        return {
            resCode: 0,
            msg: '密码错误'
        }
    }
})

// 获取table数据
Mock.mock(/^\/get_table_data/, 'get', (params) => {
    let data_type = getQueryByName(params.url, 'type');

    if (data_type === 'basic_table') {
        return {
            code: 1,
            data: basic_table
        }
    } else if (data_type === 'screening_table') {
        return {
            code: 1,
            data: screening_table
        }

    } else if (data_type === 'editable_table') {
        return {
            code: 1,
            data: editable_table
        }
    } else {
        return {
            code: 0
        }
    }
})


// 获取graph数据
Mock.mock(/^\/get_graph_data/, 'get', () => {

    return {
        code: 1,
        data: graph_option
    }
})

// 获取funnel数据
Mock.mock(/^\/get_funnel_data/, 'get', () => {

    return {
        code: 1,
        data: funnel_option
    }
})