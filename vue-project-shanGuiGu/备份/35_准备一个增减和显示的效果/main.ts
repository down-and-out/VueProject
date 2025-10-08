// 引入 createApp 用于创建应用
import { createApp } from 'vue'
// 引入app 根组件
import App from './App.vue'

// createApp(App).mount('#app');

// 创建一个应用
const app = createApp(App);

// 挂载整个应用到 app 容器中
app.mount('#app');
