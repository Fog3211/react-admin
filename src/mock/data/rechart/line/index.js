import Mock from 'mockjs';
const Random = Mock.Random;

const line_data = [];
for (let i = 0; i < 5; i++) {
    line_data.push({
        name: `图形 ${String.fromCharCode(i+65)}`,
        uv: Random.integer(10, 50) * 100,
        pv: Random.integer(10, 50) * 100,
        amt: Random.integer(20, 25) * 100
    });
}


export default line_data;