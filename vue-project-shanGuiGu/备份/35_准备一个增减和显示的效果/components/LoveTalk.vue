<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import axios from 'axios';
    import { reactive } from 'vue';
    import {nanoid} from 'nanoid'
    let talkList = reactive([
        {id:'dfawefsd01',title:'今天你有点怪，那里怪?怪好看的！'},
        {id:'dfawefsd02',title:'草莓，蓝莓，蔓越莓，今天想我了没？'},
        {id:'dfawefsd03',title:'心里给你留了一块地，我的死心塌地。'},

    ])

    async function getLoveTalk(){
        // 发请求
        // 下面这行写法是连续解构赋值+重命名
        // let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        console.log(result);

        // 把请求回来的字符串，包装成为一个对象
        let obj = {id:nanoid(),title:result.data.content};
        // console.log(obj);

        // 放到数组中
        talkList.unshift({id:'fsafaewfsj012',title:'啦啦啦啦啦'});
    }

    // 因为给出的地址证书过期了，导致无法获得请求
    // 所以只能够自己构造加入的信息
    // function addToList(){
    //     talkList.unshift({id:'fsafaewfsj012',title:'啦啦啦啦啦'});
    // }
</script>

<style scoped>
    .talk{
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>