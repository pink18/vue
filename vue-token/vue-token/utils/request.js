import axios from "axios";

export const serve = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

serve.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = localStorage.getItem("token");
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

serve.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert("请求超时");
    console.log(error);
  }
);
