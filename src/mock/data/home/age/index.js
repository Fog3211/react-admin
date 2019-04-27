import Mock from "mockjs";

const Random = Mock.Random;
const tag_list = ['20岁以下', '20~30岁', '30~40岁', '40~50岁', '50~60岁', '60岁以上'];

const age_data = {
    tag: [...tag_list],
    data: []
};

for (let i = 0; i < 6; i++) {
    age_data.data.push({
        value: Random.integer(100, 999),
        name: age_data.tag[i]
    })
}

export default age_data;