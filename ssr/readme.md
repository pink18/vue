### ssr与spa应用的区别

ssr 服务端渲染
- 1.方案多 ejs art-template ...
- 2.采用框架 ssr 方案 vue react angular 都有对应ssr方案

spa 单页面应用
- 1.路由
- 2.vue react anuglar

1.vueSSR 不会只渲染#app,渲染很多html
- 没有首屏卡顿问题
- 有利于seo
弊端：不是前后端分离开发 所有的渲染都由服务端完成

适合什么技术选型
- php开发 jsp开发重写
- 公司要求纯服务端开发
- 有利于seo
- 公司既想要使用vue 又要服务端开发

spa应用
- 1.页面源代码中只有#app 所有的子组件一次性渲染的问题>>> 首屏卡顿问题
- 2.由于源代码中只有#app 不利于seo（搜索引擎）

优势
- 有自己的路由 单页面应用 前后端独立开发

采用 vue ssr 方式解决 首屏卡顿 seo问题

### 根据公司要求技术选择问题

- vue + nuxt.js 实现服务端ssr