import Mock from 'mockjs';
const Random = Mock.Random;

const bar_data = [];
for (let i = 1; i <= 40; i++) {
    bar_data.push({
        name: i,
        uv: Random.integer(-500, 1000),
        pv: Random.integer(-500, 1000)
    });
}

export default bar_data;