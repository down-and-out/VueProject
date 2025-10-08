// 创建一个路由器，并暴露出去

// 第一步：引入 createRouter
import { createRouter,createWebHistory } from "vue-router";
// 引入一个个可能要呈现组件
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";

// 创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/news',
            component:News,
        },
        {
            path:'/about',
            component:About,
        },
    ],
});

export default router;