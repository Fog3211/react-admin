import Mock from "mockjs";

const Random = Mock.Random;
const dynamic_data = [];
const content_list = ['那是一种内在的东西，他们到达不了，也无法触及的', '希望是一个好东西，也许是最好的，好东西是不会消亡的', '生命就像一盒巧克力，结果往往出人意料', '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆', '那时候我只会想自己想要什么，从不想自己拥有什么'];

for (let i = 0; i < 15; i++) {
    dynamic_data.push({
        name: Random.first(),
        avatar: require(`@/assets/img/avatar/${i%5+1}.png`),
        time: Random.date(),
        content: content_list[i % 5],
    });
}
export default dynamic_data;