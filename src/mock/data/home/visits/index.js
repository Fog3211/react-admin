import Mock from "mockjs";

const Random = Mock.Random;
const week_list = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];

const visits_data = [];

for (let i = 0; i < 7; i++) {
    visits_data.push({
        name: week_list[i],
        count: Random.natural(2000, 8000),
    });
}

export default visits_data;