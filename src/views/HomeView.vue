<template>
  <div>
    <h1>Home Page {{ text }}</h1>
    <p>Count:{{ store.count }}</p>
    <button @click="store.increment">Increment</button>
    <button @click = "handleClick">点击事件</button>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
const store = useMainStore();
defineProps({
  text:String
})
const emit = defineEmits<{(e:'qq'):void}>()
function handleClick(){
  //触发父组件的事件
emit('qq')
}
</script>

<style lang="scss" scoped>
/* 样式代码 */
</style>
