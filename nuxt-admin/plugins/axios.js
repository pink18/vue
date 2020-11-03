export default function({$axios,redirect,route,store}){
    //基本配置
    $axios.defaults.timeout = 1000;

    //请求拦截
    // $axios.onRequest(config=>{
    //     console.log('请求拦截');

    //     config.header.token = '加token';

    //     return config;
    // });

    //响应拦截
    $axios.onResponse(res=>{

        // if(res.data.code != 2000){
        //     alert('用户名或密码错误')
        //     redirect('/')
        // }
        return res;
    })

    //错误处理
    $axios.onError(error=>{
        
        return error
    })
}