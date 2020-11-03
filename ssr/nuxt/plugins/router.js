export default(({app})=>{
    // console.log(app);
    // app 是vue实例
    // app.router 获取路由实例
    app.router.beforeEach((to, from, next) => {
        console.log('进入全局导航守卫');
        next()
    })
})