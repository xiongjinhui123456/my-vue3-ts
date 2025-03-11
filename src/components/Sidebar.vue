<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeMenu = ref(router.currentRoute.value.path);

//数据菜单 （可以从后端获取）
const menuList = ref([
  { path: '/', title: '首页', icon: 'elicon-house',children:'' },
  { path: '/2', title: '首页1', icon: 'elicon-house' },
  { path: '/3', title: '首页2', icon: 'elicon-house' },
  { path: '/about', title: '关于', icon: 'elicon-house' },
]);

const handleMenuSelect = (key: string) => {
  router.push(key);
};
</script>

<template>
  <el-aside width="200px">
    <el-menu :default-active="activeMenu" @select="handleMenuSelect" router>
      <template v-for="item in menuList" :key="item.path || item.title">
        <!-- 普通菜单项 -->
        <el-menu-item v-if="!item.children" :index="item.path">
          <el-icon><i :class="item.icon"></i></el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>

        <!-- 多级菜单 -->
        <el-sub-menu v-else :index="item.title">
          <template #title>
            <el-icon><i :class="item.icon"></i></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.path"
            :index="child.path"
          >
            <el-icon><i :class="child.icon"></i></el-icon>
            <span>{{ child.title }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-aside {
  background-color: #001529;
  color: white;
  min-height: 100vh;
}
.el-menu {
  background-color: #001529;
  border-right: none;
}
.el-menu-item,
.el-sub-menu__title {
  color: white;
}
.el-menu-item.is-active {
  background-color: #1890ff;
}
</style>
