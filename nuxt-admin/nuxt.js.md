### nuxt.js

##### 安装

`npx create-nuxt-app <project-name>`

`npm init nuxt-app <project-name>`

npx 如果依赖项有新版本；会自动跟新；不需要重新安装；npm需要重新安装

##### 文件目录说明

~~~
assets 文件资源目录；这里存放的资源需要被webpack 打包的
components 页面组件构建
layout    页面组要布局的页面
page       页面
middlewe
~~~



### 基本使用

- `components` 中组件；在page/*.vue文件中，需要注册直接使用
- page 下的*.vue 会自动生成路由配置信息；并通过url 地址进行访问



##### 约定优先于配置

page目录中所有的 *.vue都会生成对应的路由配置；例如新建user.vue

~~~html
<template>
  <div>用户界面</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
~~~

`访问http://localhost:3000/user`

#### 路由

##### 导航

~~~
<nuxt-link to="路由地址"></nuxt-link> 
~~~

##### 基础路由

假设 `pages` 的目录结构如下：

~~~
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
~~~

***那么，Nuxt.js 自动生成的路由配置如下：***



~~~js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
~~~



##### 动态路由

~~~
pages/
--| user
-----| _id.vue
-----| index.vue
-----| one.vue
--| index.vue
~~~

***生成的路由匹配如下***

~~~
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }，
    {
      name:'user-id',
      path:'/user/:id',
      component:'pages/user/_id.vue'
    }
  ]
}
~~~



##### 嵌套路由

~~~
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
~~~



~~~js
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
~~~

#####  路由导航守卫

- 全局守卫服务端ssr 只是在首屏的进入一次



- 1:新建插件文件 plugins/router.js

~~~js
export default ({app})=>{
    // app 是vue 实例
    // app.router 获取的路由实例
    app.router.beforeEach((to,from,next)=>{
        console.log('进入全局导航守卫了......')
        next()
    })
}
~~~

- 2 在nuxt.config.js 中配置插件+

  

~~~
plugins:[
  '@plugins/router'
]
~~~



##### 自定义routes

nuxt.config.js进行router 的自定义配置

~~~js
// nuxt.config.js
// 需求；给每一个路由添加meta 元素
 router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
      routes.forEach(router => {
        // 第一步 获取需要权限的路由。然后写正则 对 path 进行匹配 并添加meta
        if(router.path==='/user'){
          router.meta = {
            auth:true
          }
        }else{
          router.meta = {
            auth:false
          }
        }
      });
    }
~~~



***推荐nuxt.js vue ssr 遇到路由问题；处理路由的只是点***

` https://zh.nuxtjs.org/api   中router `  

` https://zh.nuxtjs.org/guide/routing   中路由`

如何修改url

动态传参

子路由

路由导航守卫xxxx

如何对自动生成routes 数组配置进行修改呢；添加meta 

~~~
/users  page/users.vue

/user/one   ---page/user/one.vue
/user       --- page/user/index
~~~





##### 第三方ui

**如何手动配置第三方库？**

- 新建 /plugins/ant-design-vue.js

~~~js
import Vue from 'vue'
import  AntDsign from 'ant-design-vue';
Vue.use(AntDsign)

~~~

- 配置 Nuxt.config.js 中 plugins 

~~~js
// plugins 目录下 文件名与配置保持一致
  plugins: [
    '@plugins/ant-design-vue'
  ],
~~~

- 配置nuxt.config.js 中配置 ant-design 全局的css 样式

~~~js
 css: [
    'ant-design-vue/dist/antd.css'
  ],
~~~

***只有在配置文件（入口文件）注册过的插件；插件代码才能执行***



##### 使用axios

***安装***

`npm i @nuxtjs/axios --save-dev`

***配置nuxt.config.js***

~~~JS
modules:[
    '@nuxtjs/axios'
]
// 做代理配置
axios:{
    proxy: true
}
proxy: {
    '/api/':'http://localhost:3001/'
}
~~~

***在modules 中配置axios 模块；有什么用呢？***

可以在上下对象中 通过  $axios 获取@nuxtjs/axios 插件 ；就不需要每次Import 方式导入了

- 浏览器中；是不可能看到；服务器代理具体情况；只能查看浏览器自身的请求情况



##### 中间件

**nuxt.js 中的中间件在什么时候触发呢？**

- 进入路由之前触发，中间中；可以接收上下文对象- 

-  上下文对象中； 请求报文 自定义属性 通过module注册的模块  路由 vuex ，参数.

  - 总之；前端所有自动化生成内容；都集成到上下文对象中。

  - context.req context.res

- nuxt.js 大部分内置api  以及 插件，中间件；都可以接收到【上下文对象】 上下文对象；赋值给函数的参数

~~~js
// 新建文件 middlewars/user-argent.js
export default (context) => {
    console.log('执行中间件',process.server)
    // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取）
    // context.userAgent = process.server
    //     ? context.req.headers['user-agent']
    //     : navigator.userAgent

    // 可不可以在中间件中做权限控制

    // process.server 返回 true false 代表是否在服务端运行
    if(process.server){  // 在服务端运行
        context.userAgent = context.req.headers['user-argent'];
        context.WangYuHange = 'i am wanguuhang server'
        console.log(context.WangYuHange)
        // 服务端如何获取token  ????  
        // 1：生成token 时候将 session 中；
        // 2：从session 中获取token 
    }else{ // 在客户端运行
        context.userAgent = navigator.userAgent
        // localstorage cookies 获取token ???
        context.WangYuHange= 'chi pi'
    }
} 
~~~



~~~~js
// 配置进入路由前；触发的中间件 nuxt.config.js
router:{
        middleware: 'user-agent'
}

~~~~

***就可以在 asyncData fetch 中通过获取 WangYuHange属性***

##### 权限控制

***nuxt.js+ vue srr 如何设计权限控制呢****

- 1:注意：首屏 在服务端渲染的。
- 2：区分；服务端执行还是浏览器端执行；process.server
- 3:  服务端执行；由服务端做权限   同session 中获取token 
- 4:   浏览器端运行的 从cookies locastorage 获取token 

**方案一**

~~~
1: 路由中间件中做权限，区分 运行环境 获取token token 验证
   服务器端从session 中获取
   浏览器端从 cookies 中获取
~~~

***方案二***

~~~
0：nuxt.config.js 中router配置中 extentRouter 更改路由配置 添加meta
1:做插件  $axios.onRequest 请求拦截器 获取路集合meta +token
  token,判断是服务端；还是客户端
  
~~~

**方案三**

~~~
1:做插件  context.router.beforeEach 做拦截器；结合meata token
   区分环境；获取token 验证处理      
~~~

#### vuex

-  新建 store/index.js
~~~js
export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}
export const actions = {
    increment({commit}){
        commit("increment")
    }
}
~~~


- 新建 store/user.js
~~~js
export const state = () => ({
    list: []
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
}

export const actions = {
    add({commit},data){
        commit('add',data)
    },
}

~~~

- nuxt.js转义后的vuex 为以下结构
~~~js
new Vuex.Store({
  state: () => ({
    counter: 0
  }),
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  modules: {
    user: {
      namespaced: true,
      state: () => ({
        list: []
      }),
      mutations: {
        add(state, { text }) {
          state.list.push({
            text,
            done: false
          })
        },
      },
       actions = {
          add({commit},data){
              commit('add',data)
          },

    }
  }
})
~~~

- 使用
~~~
 在组件内部；获取 store 
 1：从上下文对象中获取
 2：import vuex  
 直接使用 
~~~

***vuex 非常自动化，怎么vuex ，自动转化后张什么样子****

~~~
NuxtServerInit 初始化服务

Route.middleware  执行所有的路由中间件
    在匹配路由之前执行的
  
validate 执行组件内部的validate 对路由传参的参数进行验证

asyncData 异步加载数据。
    只有在页面组件中（路由级别组件）可以使用 asyncData 方法
    asyncData 是在组件实例化之前被调用的，所以无法访问 this
    通过 retrun 向组件中(data)添加数据

fetch 
--------------- 以上执行流程中都this 指向上下文对象----------------
beforecreate

created

------------------ 首屏渲染时候以上全部执行 这里 this 指向实例componet------------------

moutend 首屏渲染不执行 
----------------- 以上浏览器端运行的全部都执行 -------------------------------

~~~













#### 总节

##### 自动生成的路由与page/*.vue的关系

- 1：*.vue 文件  其中 文件名；为路由地址，会自动注册该组件为路由对象
- 2:  _aa.vue  会自动配置为；路由地址中配置，动态params 传参

​        -  page/aa/_Id.vue   路由生成的路径   /aa/:idd

- 3  xxx/aa.vue  路由会匹配地址为 /xx/aa
- 4: 嵌套路由：1：page/aa.vue  page/aa文件 那么  aa文件下的/aa/*.vue 将作为 page/aa.vue 的子路由

##### component文件中的组件

- 1：可以直接使用不需要注册。也可以注册后再使用

##### elementUi 的处理

- 1：在  plugins/ele-ui.js插件。并通过导入vue 使用elementUI 插件
- 2：nuxt.config.js中；配置向 plugins 配置插件信息。这样插件才能起到效果
- 3：elementui需要由样式效果  next.config,.js  中 css 中配置全局样式
- 结论：只要是自定义的插件；需要插件能够在Nuxt.js 中使用。需要在nuxt.config.js 中配置
- 结论：所有的UI库，都需要全局的样式配置



##### nuxt.config.js

- 1: 这里的配置项一定都是全局的。全局的优先级级最低
- 2: 具体的配置项

~~~
head 修改html 中head标签中内容

css 默认加载全局样式。样式的路径问题。
    - node_moduel 文件直接加载就可以了；
    - 其他文件；需要通过路径查找方式 ；相对路径或者绝对路径 ./assets/reset.css


plugins 配置插件；注册插件。
    值为数组；数组中元素为插件路径
    用途：使用elementUI 自定义插件
    只有被注册过的插件；plugin 中代码才会执行
    
build 作用：如何在nuxt.js 中血webpack.js 代码？     自定义 webpack 的构建配置。
      analyze 使用的 webpack-bundle-analyzer 语法  启动页面；显示webpack 打包后的内容图解
      babel 项目运行环境的配置；浏览器版本；node版本；默认 ie9 node 当前环境下版本
 
module 作用 配置模块
       值数组；数组元素为模块
       这里配置的模块都会成为上下文对象中的属性。通过访问属性方式；使用模块

router 作用；自定义 vue 路由
      值为 对象
      extendRouter 更改routes 数组配置
      
~~~





##### layout

***如何自定一更改layout***、

`layout 在page 组件之前渲染。默认配置是可以被page 覆盖的`

- /layouts/default.vue 是所有页面组件；默认渲染的\
- 第一步 新建 layout/user.vue
- 在page/user.vue件中

~~~~js
export default {
    layout:"user"
}
~~~~

**如何更改head标签默认配置向信息呢 ？**

- 在page/*.vue中数组以下属性

~~~js
export default {
    layout:"user"
    head:{
     title:"自定义",
     meta:[] // 修改meta 标签
    link:{} // 修改logo
   }
}
~~~



### async await

***是promise 升级的写法；也是异步程序 ***

***await 必须在 async 函数内部使用****

- await 后面必须是一个Promise 对象。
- await 返回值为；await 后面promise 的 resolve 的实参

测试代码

~~~js
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "王宇航",
      });
    }, 500);
  });
}

export default {
  async asyncData(context) {
    try {
      let data = await getUser();
      let data1 = await new Promise((resolve, reject) => {
        resolve("aaa");
      });
      console.log(data, data1);
      // return 返回的数据；将于 vue 中data 合并到一起。
      // ——————> return 返回的数据可以作为当前组件的数据
      return data;
    } catch (err) {
      // 捕获 try 中所有promise 的失败状态 ；以及错误问题
      // 以第一个失败状态或者错误为主
      console.log("捕获错误====", err);
      throw new Error(err)
    }
  }
};
~~~



***错误处理***

-  `try...catch(){} catch` 捕获所有错误；只要发现一个错误；就会触发catch 不论是失败状态还是语法错，以及其他错误等..

#### 与传统的服务端渲染 还有 spa 不同

- 1：nuxt.js 的语法 ；页面  组件  路由 vuex  aixos 发请求
- 



#### nuxt.js +vuessr 生命周期

***注意：首屏除了beforecreate created  生命周期会触发其他都不会触发***

nuxt.js 生命周期

~~~
asyncData

~~~

