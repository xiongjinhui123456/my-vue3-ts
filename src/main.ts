import { createApp } from 'vue';
import App from './App.vue';
import './style.css'
import router from './router';
import { createPinia } from 'pinia';
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css"; 

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount('#app');
