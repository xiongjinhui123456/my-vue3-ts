<template>
  <div>
    <h1>Home Page {{ text }}</h1>
    <p>Count:{{ store.count }}</p>
    <ElButton @click="store.increment" type="primary">Increment</ElButton>
    <ElButton @click = "handleHomeViewClick" type="success">点击事件</ElButton>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
import { ElMessage } from 'element-plus';
const store = useMainStore();
defineProps({
  text:String
})

function handleHomeViewClick(){
  ElMessage({
    message: `一共点击了${store.count} 次`,
    type: 'success',
  })
}
</script>

<style lang="scss" scoped>
/* 样式代码 */
</style>
