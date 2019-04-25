import Mock from 'mockjs';
const Random = Mock.Random;

const area_data = [];

for (let i = 0; i < 5; i++) {
    area_data.push({
        name: `Page ${String.fromCharCode(i+65)}`,
        uv: Random.integer(-20, 60) * 100,
        pv: Random.integer(20, 90) * 100,
        amt: Random.integer(20, 25) * 100
    });
}
export default area_data;