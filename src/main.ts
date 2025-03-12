import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import { createPinia } from 'pinia';
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-message-box.css';
import * as Icons from '@element-plus/icons-vue';

const app = createApp(App);
// 遍历所有 Element Plus 图标，并全局注册
Object.keys(Icons).forEach((key) => {
  app.component(key, (Icons as any)[key]);
});
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount('#app');
