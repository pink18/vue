### vuex
- 模块方式 `store`目录下的每个`.js`文件会被转换成为状态树[指定命名的子模块]( `index`是根模块)

- Classic(不建议使用) `store/index.js`返回创建Vuex.Store实例的方法

### 生命周期
- nuxtServerInit

- middleware
    中间件执行顺序
    nuxt.config.js--->匹配布局--->匹配页面

- validate
    参数校验，校验失败，则自动跳转到错误页面

### 路由
- 约定式
    展示区：<nuxt/>
    声明式跳转：<nuxt-link :to="{name:'goods-id',params:{id:3},query:{a:111,b:222}}">商品03</nuxt-link>
        name：路由名 目录名-其他目录-文件名
        params：key 要对等文件名

    子路由：
        目录代表子路由，子路由内部同级的文件，代表是同一级路由

    展示区层级控制
    pages/一级展示/二级展示
                  / index.vue 会在一级展示
                  / index.vue 空文档 代表 有默认页，不会找寻其他 _详情.vue
- 配置

路由守卫
    前置
      依赖中间件middleware 插件
      全局守卫 nuxt.config 指向 middleware
               layouts定义中间件
       组件独享守卫
             middleware   
    后置
      使用vue的 beforeRouterLeave钩子