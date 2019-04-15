import Mock from "mockjs";
import {
    user_list
} from "./data/user";

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