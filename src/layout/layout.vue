<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { ElMessageBox } from 'element-plus';

// 获取当前路由
const route = useRoute();
const router = useRouter();

// 计算面包屑路径
const breadcrumbs = computed(() => {
  return route.matched.map((item) => ({
    path: item.path,
    name: item.meta.title || item.name, // 从 meta 里取标题
  }));
});

// 退出登录
const handleLogout = () => {
  ElMessageBox.confirm('确定要退出登录吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    center: true,
  })
    .then(() => {
      // 清除本地存储（如果有 token）
      localStorage.removeItem('token');
      // 跳转到登录页
      router.push('/login');
    })
    .catch(() => {});
};

const isLoginPage = computed(() => route.path === '/login' ||  route.path === '/register'); //登录页时不显示退出登录按钮
</script>

<template>
  <el-container style="height: 100vh">
    <!-- 左侧菜单 -->
    <Sidebar />

    <!-- 右侧内容 -->
    <el-container direction="vertical">
      <!-- 面包屑导航 + 退出按钮 -->
      <el-header class="header">
        <div class="breadcrumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="(breadcrumb, index) in breadcrumbs"
              :key="index"
            >
              <router-link
                v-if="breadcrumb.path !== route.path"
                :to="breadcrumb.path"
              >
                {{ breadcrumb.name }}
              </router-link>
              <span v-else>{{ breadcrumb.name }}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-button
          v-if="!isLoginPage"
          type="danger"
          size="small"
          class="logout-btn"
          @click="handleLogout"
        >
          退出登录
        </el-button>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.header {
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 让面包屑在左，按钮在右 */
  padding: 0 20px;
  height: 60px;
}

.breadcrumbs {
  flex-grow: 1; /* 面包屑占据剩余空间 */
}

.logout-btn {
  margin-left: auto; /* 按钮靠右 */
}
</style>
