const express = require('express');
const app = express();
const router = express.Router();
const ejs = require('ejs')


app.set('view engine','ejs')

router.get('/',(req,res)=>{

    // res.render 渲染模板
    res.render('index',{title:'123'})
})

// 1.客户端是否发起了/user请求
// 2.服务端是否响应一段 html代码 没有
// 3.服务端是否响应json 数据 没有
// ---> 页面不是前端跳转 而是服务端跳转
// ---> 前端负责发送 通过改变url地址 发送get请求 由服务完成页面的跳转 以及动态数据的渲染

// 注意：千万不要认为 get 请求只能是 为了让服务端渲染页面 也可以响应数据
router.get('/user',(req,res)=>{
    res.render('user')
})

app.use(router)
app.listen(3000)

// axios中 get 请求与 post 请求的区别是什么

// 什么是ssr
// ---> 服务端渲染
// ssr 模式开发 与 前后端分离开发有什么区别
// ---> 利于seo 没有首屏卡顿问题
// ssr与传统模式开发有什么区别
// ---> 支持框架语法 提高开发效率