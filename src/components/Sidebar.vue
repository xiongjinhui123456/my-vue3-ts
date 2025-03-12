<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getMenus, type MenuItem } from '@/api/menu-list';
import { pathList } from './menu';
const router = useRouter();
const route = useRoute();
const activeMenu = ref(route.path);

const menuList = ref<MenuItem[]>([]);

const fetchMenus = async () => {
  try {
    menuList.value = await getMenus();
    // 遍历 menuList，为每个菜单项匹配 path
    const setMenuPaths = (menus: MenuItem[], paths: any[]) => {
      menus.forEach((menu) => {
        // 查找与菜单 title 匹配的 path
        const matchedPath = paths.find((p) => p.title.includes(menu.title));
        if (matchedPath) {
          menu.path = matchedPath.path;
        }
        // 处理子菜单
        if (menu.children && menu.children.length > 0) {
          console.log('menu.children',menu.children);
          
          menu.children.forEach((child, index) => {
            const matchedChildPath = paths.find((p) =>
              p.children?.some((c:MenuItem) => c.title.includes(child.title))
            );
            
            if (matchedChildPath) {
              child.path = matchedChildPath.children?.[index]?.path || '';
            }
          });
        }
      });
    };

    setMenuPaths(menuList.value, pathList);
  } catch (err: any) {
    console.log(err);
  }
};
watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath;
  },
);
const handleMenuSelect = (key: string) => {
  router.push(key);
};

onMounted(() => {
  fetchMenus();
});
</script>

<template>
  <el-aside width="200px">
    <el-menu :default-active="activeMenu" @select="handleMenuSelect" router>
      <template v-for="item in menuList" :key="item.title">
        <!-- 普通菜单项 -->
        <el-menu-item v-if="!item.children?.length" :index="item.path">
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>

        <!-- 多级菜单 -->
        <el-sub-menu v-else :index="item.title">
          <template #title>
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.title"
            :index="child.path"
          >
            <el-icon><component :is="child.icon" /></el-icon>
            <span>{{ child.title }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-aside {
  background-color: rgb(10, 10, 10);
  color: white;
  min-height: 100vh;
}
.el-menu {
  background-color: rgb(10, 10, 10);
  border-right: none;
}
.el-menu-item {
  background-color: rgb(10, 10, 10);
  color: white;
}
.el-menu-item.is-active {
  background-color: #126688;
  color: rgb(243, 241, 241);
}
.el-sub-menu.is-active {
  background-color: #264e5e;
  color: rgb(243, 241, 241);
}
::v-deep(.el-sub-menu__title) {
  background-color: rgba(10, 10, 10, 0.4);
  color: white;
}
</style>
