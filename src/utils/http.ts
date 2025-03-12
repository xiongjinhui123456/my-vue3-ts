import axios from 'axios';

//创建axios实例
const http = axios.create({
  baseURL: 'http://localhost:3000/api', //后端接口地址
  timeout: 5000,
});

//请求拦截器
http.interceptors.request.use(
  (config) => {
    //这里添加token之类的请求头
    //config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// 响应拦截器
http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
