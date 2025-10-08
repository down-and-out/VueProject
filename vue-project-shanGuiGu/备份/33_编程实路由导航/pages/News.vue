<template>
    <div class="news">
        <ul>
            <li v-for="news in newsList" key="news.id"> 
                <!-- 第一种写法 -->
                <!-- <router-link :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</router-link> -->

                <button @click="showNews(news)">查看新闻</button>

                <!-- 第二种写法 -->
                <router-link 
                    :to="{
                        // 这里只能够使用 name 来找，
                        // 不能够使用 path 来找
                        name:'xiangqing',
                        query:{
                            id:news.id,
                            title:news.title,
                            content:news.content,
                        }
                    }"
                >
                    {{ news.title }}
                </router-link>
            </li>
        </ul>
        <div class="news-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
    import { onErrorCaptured, reactive } from 'vue';
import { useRouter } from 'vue-router';
    const newsList = reactive([
        {id:'asfe01',title:'十种抗癌事物',content:'西兰花'},
        {id:'asfe02',title:'如何一夜暴富',content:'学IT'},
        {id:'asfe03',title:'震惊，万万没想到',content:'明天是周一'},
        {id:'asfe04',title:'好消息！好消息！',content:'快过年了'},
    ])

    onErrorCaptured((error)=>{
        console.log('error',error);
    })

    interface newsInter{
        id:string,
        title:string,
        content:string,
    }

    const router = useRouter();

    // 编程式导航:
    //    1.定时任务
    //    2.鼠标划过就跳转
    function showNews(news:newsInter){    
        router.push({
            name:'xiangqing',
            query:{
                id:news.id,
                title:news.title,
                content:news.content,
            }
        });
    }
</script>

<style scoped>
    .news{
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        height: 100%;
    }
    .news ul{
        margin-top: 30px;
        /* list-style: none; */
        padding-left: 10px;
    }
    .news li>a{
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color: #64967E;
        text-shadow: 0 0 1px rgb(0,84,0);
    }
    .news-content{
        width: 70%;
        height: 90%;
        border: 1px solid;
        margin-top: 20px;
        border-radius: 10px;
    }
</style>