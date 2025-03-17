import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';

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
    component: () => import('@/views/UserView.vue'),
    meta:{ title: '用户1', requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { title: '登录', requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// **全局前置守卫**，检查用户是否登录
router.beforeEach((to, _from,next) => {
  const isLoggedIn = localStorage.getItem('token'); // 判断是否有 token

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login'); // 未登录，跳转到登录页面
  } else {
    next(); // 已登录，正常访问
  }
});
export default router;
