
# React-admin

react后台管理系统 : [预览地址](https://fog3211.com/react-admin/build)  
扫码预览:  
![avatar](https://img.fog3211.com/1556718573.png)  

## 介绍

&nbsp; &nbsp; 本项目基于`React`16.x开发，使用了大量Antd组件，可用做一般的后台管理系统，支持移动端，兼容所有主流浏览器。  

> 总体技术栈为: React16.x + React-Router4.x + Redux + ES6 + Less + mockjs + axios。

## 实现功能

- [x] 用户/游客/超级管理员登录  
- [x] 统计面板  
- [x] 全屏展示  
- [x] 表格数据展示  
- [x] 拖拽，抽屉，弹窗，步骤条，标签页等组件库功能  
- [x] 富文本编辑及实时转换HTML/JSON  
- [x] 主题切换  
- [x] 基本动画和Lottie动画展示  
- [x] 数据的图表展示  
- [x] 多种表单的模板  
- [x] 画廊功能
- [x] Antd图标及第三方图表库展示  
- [x] 常规地图及卫星地图  
- [x] 路由拦截，权限识别  
- [ ] 个人信息修改昵称功能  
- [ ] 懒加载  
- [ ] 开屏动画  

## 功能展示

![avatar](https://img.fog3211.com/8U6EY4W5$I]6F`32_PWGN.png)  
![avatar](https://img.fog3211.com/{X1[XT}S~R613WHG1GLC5.png)  
![avatar](https://img.fog3211.com/~7QZN39H%7BS2%25HX%5DA78%7B%60OAE.png)  
![avatar](https://img.fog3211.com/~HS%5DBR%7BVO80FZ@4K5%258SZK.png)  
![avatar](https://img.fog3211.com/~RGK7%5B$YHP9%5DEBCCQ%25%25GCC.png)  
![avatar](https://img.fog3211.com/Q%5D%60WULP%7DS5W%25ID72NXLPPJ.png)  
![avatar](https://img.fog3211.com/OM}20NJQG}_[RKSJ6G1W1R8.png)  
![avatar](https://img.fog3211.com/G5A9L%25N~WJ65%7BAX%25ZSQQVE.png)  
![avatar](https://img.fog3211.com/OF`6Y7$Q65WAS]F}RVDHWQ.png)  
![avatar](https://img.fog3211.com/JB}D3VW_NRQX}LVOL80H[GG.png)  
![avatar](https://img.fog3211.com/ZJ5$7~P6QJ_}4C_`K@@N$HS.png)  
![avatar](https://img.fog3211.com/WBYGPWV@4Q4KRXVW08SNZQU.png)  
![avatar](https://img.fog3211.com/AXH5WZ7TQRS0BP~E5WKN~I.png)  
![avatar](https://img.fog3211.com/2O83BZ159_W%258J1SAYCCF.png)  

## 相关依赖

- [animate.css](https://github.com/daneden/animate.css) : &nbsp;css动画库  
- [antd](https://ant.design/index-cn) : &nbsp;蚂蚁金服ui组件库  
- [axios](https://github.com/axios/axios) : &nbsp;http请求模块  
- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) : &nbsp;按需引入组件，优化前端性能  
- [classnames](https://github.com/JedWatson/classnames) : &nbsp;简化React类名写法  
- [d3-scale](https://github.com/d3/d3-scale) : &nbsp;recharts的插件  
- [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) : &nbsp;recharts的插件  
- [draft-js](https://github.com/facebook/draft-js) : &nbsp;富文本编辑器  
- [draftjs-to-html](https://github.com/jpuri/draftjs-to-html) : &nbsp;富文本转Html  
- [draftjs-to-markdown](https://github.com/jpuri/draftjs-to-markdown) : &nbsp;富文本转MarkDown  
- [echarts](https://github.com/apache/incubator-echarts) : &nbsp;React的图表插件  
- [echarts-for-react](https://github.com/hustcc/echarts-for-react) : &nbsp;React封装的echart插件  
- [less](https://github.com/less/less.js) : &nbsp;css预处理器  
- [mockjs](http://mockjs.com/) : &nbsp;模拟生成数据，拦截登录等  
- [photoswipe](https://github.com/dimsemenov/photoswipe) : &nbsp;图片弹层查看插件  
- [prop-types](https://github.com/facebook/prop-types) : &nbsp;props属性类型检查  
- [react-color](https://github.com/casesandberg/react-color) : &nbsp;调色板组件  
- [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) : &nbsp;富文本组件  
- [react-draggable](https://github.com/mzabriskie/react-draggable) : &nbsp;React拖拽插件  
- [react-highlight-words](https://github.com/bvaughn/react-highlight-words) : &nbsp;table表格字体高亮  
- [react-lottie](https://github.com/chenqingspring/react-lottie) : &nbsp;React版Lottie动画  
- [react-qmap](https://github.com/yezihaohao/react-qmap) : &nbsp;React版地图组件  
- [recharts](https://github.com/recharts/recharts) : &nbsp;另一个React的图表插件  
- [screenfull](https://github.com/sindresorhus/screenfull.js/) : &nbsp;全屏插件  

## 技术障碍

### 主观障碍

图表功能中部分文字超出隐藏（echart本身生成canvas时的bug）  
日历坐标系在移动端显示太过密集（echart部分组件没有实现响应式）  
旭日图偶尔会出现宽度为100px不变的情况（疑似echart的bug）

### 客观障碍

富文本功能无法上传预览图片（[imgur](https://api.imgur.com/3/image)接口不可用）  
旭日图图表子节点太复杂无法模拟生成数据  
全屏图标无法随屏幕变换而变换

### 项目使用

``` bash
# 安装依赖
yarn  

# 运行
yarn start

# 打包（本地会跨域建议使用nginx代理）
yarn build
```

## 感谢

蚂蚁金服的组件库[Ant Design](https://ant.design/index-cn)  
yezihaohao开源的[react-admin](https://github.com/yezihaohao/react-admin)项目  
Ciwing·Jon提供的[漫威头像图标](https://www.iconfont.cn/collections/detail?cid=15515)
