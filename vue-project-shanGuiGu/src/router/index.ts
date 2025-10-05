// 创建一个路由器，并暴露出去

// 第一步：引入 createRouter
import { createRouter,createWebHistory } from "vue-router";
// 引入一个个可能要呈现组件
import News from "@/components/News.vue";
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";

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