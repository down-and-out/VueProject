// 创建一个路由器，并暴露出去

// 第一步：引入 createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入一个个可能要呈现组件
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";

// 创建路由器
const router = createRouter({
    // history 模式 -> 不会显示 #，但是需要服务端手动处理路径问题
    history: createWebHistory(),

    // hash模式 -> 会显示 #，且在SEO优化方面较差
    // 但是兼容性更好，因为不需要处理路径问题
    // history:createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/news',
            component: News,
        },
        {
            path: '/about',
            component: About,
        },
    ],
});

export default router;