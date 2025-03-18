import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta:{ title: '首页' ,requiresAuth: true},
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta:{ title: '关于' , requiresAuth: true}
  },
  {
    path: '/user1',
    name: 'User',
    component: () => import('@/views/user/UserView.vue'),
    meta:{ title: '用户1', requiresAuth: true }
  },
  {
    path: '/user2',
    name: 'User2',
    component: () => import('@/views/user/User2View.vue'),
    meta:{ title: '用户2', requiresAuth: true }
  },
  {
    path: '/role1',
    name: 'Role',
    component: () => import('@/views/user/UserView.vue'),
    meta:{ title: '用户1', requiresAuth: true }
  },
  {
    path: '/role2',
    name: 'Role2',
    component: () => import('@/views/user/User2View.vue'),
    meta:{ title: '用户2', requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { title: '登录', requiresAuth: false },
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { title: '注册用户', requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// **全局前置守卫**，检查用户是否登录
router.beforeEach((to, _from,next) => {
  const isLoggedIn = localStorage.getItem('token'); // 判断是否有 token
  console.log('isLoggedIn,isLoggedIn',isLoggedIn);
  

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login'); // 未登录，跳转到登录页面
  } else {
    next(); // 已登录，正常访问
  }
});
export default router;
