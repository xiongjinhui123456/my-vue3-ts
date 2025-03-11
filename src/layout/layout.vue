<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// 获取当前路由
const route = useRoute();
// 计算面包屑路径
const breadcrumbs = computed(() => {
  return route.matched.map((item) => ({
    path: item.path,
    name: item.meta.title || item.name, // 从 meta 里取标题
  }));
});
</script>

<template>
  <el-container style="height: 100vh;">
    <!-- 左侧菜单 -->
    <Sidebar />

    <!-- 右侧内容 -->
    <el-container direction="vertical">
      <!-- 面包屑导航 -->
      <el-header style="background: #f5f5f5; display: flex; align-items: center;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            <router-link v-if="breadcrumb.path !== route.path" :to="breadcrumb.path">
              {{ breadcrumb.name }}
            </router-link>
            <span v-else>{{ breadcrumb.name }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
  </el-container>
</template>
