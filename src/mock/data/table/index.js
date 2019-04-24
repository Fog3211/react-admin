import Mock from 'mockjs';

let basic_table = [];
let screening_table = [];
let editable_table = [];

for (let i = 0; i < 99; i++) {
    basic_table.push({
        key: i,
        name: Mock.mock('@cname'),
        address: Mock.mock('@county(true)'),
        age: Mock.mock('@integer(18,60)'),
        telphone: Mock.mock(/^1[34578]\d{1}-\d{4}-\d{4}$/),
        birthday: Mock.mock('@date'),
        sex: Mock.mock('@integer(0,1)') === 1 ? '男' : '女',
        introduction:Mock.mock('@cparagraph(2, 4)')
    })
}
for (let i = 0; i < 49; i++) {
    screening_table.push({
        key: i,
        name: Mock.mock('@cname'),
        address: Mock.mock('@county(true)'),
        age: Mock.mock('@integer(18,60)'),
        birthday: Mock.mock('@date'),
        sex: Mock.mock('@integer(0,1)') === 1 ? '男' : '女',
    })
}
for (let i = 0; i < 5; i++) {
    editable_table.push({
        key: i,
        name: Mock.mock('@cname'),
        address: Mock.mock('@county(true)'),
        age: Mock.mock('@integer(18,60)'),
    })
}

export {
    basic_table,
    screening_table,
    editable_table,
}