// 创建一个路由器，并暴露出去

// 第一步：引入 createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入一个个可能要呈现组件
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import Detail from "@/pages/Detail.vue";

// 创建路由器
const router = createRouter({
    // history 模式 -> 不会显示 #，但是需要服务端手动处理路径问题
    history: createWebHistory(),

    // hash模式 -> 会显示 #，且在SEO优化方面较差
    // 但是兼容性更好，因为不需要处理路径问题
    // history:createWebHashHistory(),
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiangqing',
                    // 子集不用写斜杠
                    // 加上问号配置参数的必要性
                    path: 'detail/:id/:title/:content?',
                    component: Detail,


                    // 第一种写法：将路由收到的所有的 params 参数
                    // 作为 props 传给路由组件
                    // props: true,

                    // 第二种写法：函数写法，可以自己决定将什么作为 props 给路由组件
                    props(route) {
                        // console.log(route);
                        return route.query;
                    }

                    // 第三种写法：对象写法，
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300,
                    // }
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About,
        },
    ],
});

export default router;