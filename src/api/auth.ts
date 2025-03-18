import http from '@/utils/http';

// 注册
export const register = (data: { username: string,password:string,email:string }) => {
  return http.post('/auth/register', data);
};
// 登录
export const login = (data: { username: string,password:string }) => {
  return http.post('/auth/login', data);
};