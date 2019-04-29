
# react-admin

react后台管理系统，开发中ing

## 目录结构  

## 相关依赖

[animate.css](https://github.com/daneden/animate.css) : &nbsp;css动画库  
[antd](https://ant.design/index-cn) : &nbsp;蚂蚁金服ui组件库  
[axios](https://github.com/axios/axios) : &nbsp;http请求模块  
[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) : &nbsp;按需引入组件，优化前端性能  
[classnames](https://github.com/JedWatson/classnames) : &nbsp;简化React类名写法  
[d3-scale](https://github.com/d3/d3-scale) : &nbsp;recharts的插件  
[d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) : &nbsp;recharts的插件  
[draft-js](https://github.com/facebook/draft-js) : &nbsp;富文本编辑器  
[draftjs-to-html](https://github.com/jpuri/draftjs-to-html) : &nbsp;富文本转Html  
[draftjs-to-markdown](https://github.com/jpuri/draftjs-to-markdown) : &nbsp;富文本转MarkDown  
[echarts](https://github.com/apache/incubator-echarts) : &nbsp;React的图表插件  
[echarts-for-react](https://github.com/hustcc/echarts-for-react) : &nbsp;React封装的echart插件  
[less](https://github.com/less/less.js) : &nbsp;css预处理器  
[mockjs](http://mockjs.com/) : &nbsp;模拟生成数据，拦截登录等  
[photoswipe](https://github.com/dimsemenov/photoswipe) : &nbsp;图片弹层查看插件  
[prop-types](https://github.com/facebook/prop-types) : &nbsp;props属性类型检查  
[react-color](https://github.com/casesandberg/react-color) : &nbsp;调色板组件  
[react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) : &nbsp;富文本组件  
[react-draggable](https://github.com/mzabriskie/react-draggable) : &nbsp;React拖拽插件  
[react-highlight-words](https://github.com/bvaughn/react-highlight-words) : &nbsp;table表格字体高亮  
[react-lottie](https://github.com/chenqingspring/react-lottie) : &nbsp;React版Lottie动画  
[react-qmap](https://github.com/yezihaohao/react-qmap) : &nbsp;React版地图组件  
[recharts](https://github.com/recharts/recharts) : &nbsp;另一个React的图表插件  
[screenfull](https://github.com/sindresorhus/screenfull.js/) : &nbsp;全屏插件  

## 功能实现

## 功能展示

## 技术障碍

### 主观障碍

图表功能中部分文字超出隐藏（echart本身生成canvas时的bug）  
日历坐标系在移动端显示太过密集（echart部分组件没有实现响应式）  
旭日图偶尔会出现宽度为100px不变的情况（疑似echart的bug）

### 客观障碍

富文本功能无法上传预览图片（[imgur](https://api.imgur.com/3/image)接口不可用）  
旭日图图表子节点太复杂无法模拟生成数据  

## 感谢

蚂蚁金服的组件库[Ant Design](https://ant.design/index-cn)  
yezihaohao开源的[react-admin](https://github.com/yezihaohao/react-admin)项目  
Ciwing·Jon提供的[漫威头像图标](https://www.iconfont.cn/collections/detail?cid=15515)