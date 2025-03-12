import http from '@/utils/http';

export interface MenuItem {
  title: string;
  icon?: string;
  path?: string;
  children?: MenuItem[];
}
// 获取菜单列表
export const getMenus = (): Promise<MenuItem[]> => {
  return http.get('/menuList');
};

// 获取单个用户
export const getUserById = (id: number) => {
  return http.get(`/users/${id}`);
};

// 创建用户
export const createUser = (data: { name: string }) => {
  return http.post('/users', data);
};

// 更新用户
export const updateUser = (id: number, data: { name: string }) => {
  return http.put(`/users/${id}`, data);
};

// 删除用户
export const deleteUser = (id: number) => {
  return http.delete(`/users/${id}`);
};
