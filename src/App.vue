<script setup lang="ts">
import { ref } from 'vue';
import Layout from '@/layout/layout.vue';
const size = ref<'default' | 'small' | 'large'>('default'); // 控件默认大小
const zIndex = ref(3000); // 全局 zIndex 层级
</script>

<template>
  
  <el-config-provider :size="size" :z-index="zIndex" >
    <Layout />
  </el-config-provider>
</template>

<style scoped></style>
