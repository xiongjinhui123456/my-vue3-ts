<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import { useMainStore } from '@/store';
const store = useMainStore();
function handleHomeViewClick(){
  window.alert(store.count);
}
</script>

<template>
  <HomeView text="text" @qq="handleHomeViewClick"/>
</template>

<style scoped>
</style>
