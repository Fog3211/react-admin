import Mock from 'mockjs';
const Random = Mock.Random;

const radialbar_data=[];

for (let i = 0; i < 7; i++) {
    radialbar_data.push({
        name: `${i*10}-${(i+1)*10}`,
        uv: Random.float(5, 30, 0, 9).toFixed(2),
        pv: Random.integer(20, 50) * 100,
        fill: Random.color(),
    });
}
export default radialbar_data;