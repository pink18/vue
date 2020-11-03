export default({$axios})=>{
    // 请求拦截器
    $axios.onRequest=config=>{
        // config 返回 request 对象
        // 拦截器 可能是由服务端触发 也可能是由 服务器出触发
        // 如果是服务器触发 是不能 localStorage
        // config.header.token = 'ss'
        if(!process.server) config.header.token = localStorage.getItem('token')

    }

    // 响应拦截器 服务端触发 浏览器触发 服务端触发是不能获取localStorage中token的
    $axios.onRequest=config=>{
        
    }
}