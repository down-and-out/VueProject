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
    import { useTalkStore } from '@/store/loveTalk';
    import { storeToRefs } from 'pinia';

    const talkStore = useTalkStore();

    const {talkList} = storeToRefs(talkStore);


    console.log(talkStore.talkList[0]?.id,talkStore.talkList[0]?.title);


    async function getLoveTalk(){
        // 发请求
        // 下面这行写法是连续解构赋值+重命名
        // let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        // let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        // console.log(result);

        // 把请求回来的字符串，包装成为一个对象
        // let obj = {id:nanoid(),title:result.data.content};
        // console.log(obj);

        // 放到数组中
        // talkStore.talkList.unshift({id:nanoid(),title:'啦啦啦啦啦'});
        // console.log(talkStore.talkList[0]?.id,talkStore.talkList[0]?.title);

        talkStore.getATalk();
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