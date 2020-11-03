export default ({app,redirect})=>{
    // console.log('插件');
    // app.router.beforeEach((to,from,next)=>{
    //     if(to.name=='login' || to.name=='reg'){
    //         next()
    //     }else{
    //         // redirect('/login')
    //         redirect({name:'login'})
    //     }
    // })

    app.router.afterEach((to,from,next)=>{
        // if(to.name=='login' || to.name=='reg'){
        //     next()
        // }else{
        //     // redirect('/login')
        //     redirect({name:'login'})
        // }
        console.log('触发后置守卫');
    })
}