import { MessageBox, Message,Loading } from 'element-ui'

export default function({ $axios, redirect, route, store }) {
  //基本配置
  $axios.defaults.timeout = 10000;
  let loadingInstance;
  //请求拦截
  $axios.onRequest(config => {
    console.log("请求拦截");

    // config.header.token = 'cxrevrzvrgtzbzbzrtb';
    
    loadingInstance = Loading.service({
      text: "正在加载..."
    });
    return config;
  });

  //响应拦截
  $axios.onResponse(res => {
    if (res.data.err === 2 && route.fullPath !== "/login") {
      redirect("/login");
    }

    // loadingInstance.close()
    return res;
  });

  //错误处理
  $axios.onError(error => {
    return error;
  });
}
