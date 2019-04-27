import Mock from "mockjs";

const Random = Mock.Random;
const tag_data = [];
const icon_list = ['team', 'eye', 'pay-circle', 'download'];
const info_list = ['在线人数', '访问次数', '累计收入', '下载次数'];

for (let i = 0; i < 4; i++) {
    tag_data.push({
        icon: icon_list[i],
        color: Random.color(),
        count: Random.natural(1000, 99999),
        info: info_list[i]
    })
}

export default tag_data;