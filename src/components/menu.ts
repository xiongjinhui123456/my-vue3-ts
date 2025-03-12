// src/api/menu-paths.ts
export interface MenuItem {
  path: string;
  title: string;
  children?: MenuItem[]; // 可选的子菜单
}

export const pathList: MenuItem[] = [
  {
    path: '/',
    title: '首页',
  },
  {
    path: '',
    title: '用户管理',
    children: [
      { path: '/user1', title: '用户1' },
      { path: '/user2', title: '用户2' },
    ],
  },
  {
    path: '',
    title: '角色管理',
    children: [
      { path: '/role1', title: '角色1' },
      { path: '/role2', title: '角色2' },
    ],
  },
  {
    path: '/about',
    title: '关于',
  },
];
