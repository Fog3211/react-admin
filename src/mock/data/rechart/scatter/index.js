import Mock from 'mockjs';
const Random = Mock.Random;

const scatter_data = [];
const name_list = ['A', 'B', 'C'];
const shape_list = ['star', 'cross', 'diamond'];

for (let i = 0; i < 3; i++) {
    const data = [];
    for (let j = 0; j < 10; j++) {
        data.push({
            x: Mock.mock('@integer(0,60)') * 10,
            y: Mock.mock('@integer(0,60)') * 10,
            z: Mock.mock('@integer(0,60)') * 10,
        })
    }
    scatter_data.push({
        name: name_list[i],
        shape: shape_list[i],
        fill: Random.color(),
        data: data
    });
}

export default scatter_data;