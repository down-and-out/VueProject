<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <h2>当前求和为： {{ sum }},放大10倍后{{bigSum}}</h2>
        <button @click="add">点我 sum +1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <button @click="getDog">再来一只狗</button>
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';

    const {sum,add,bigSum} = useSum();
    const {dogList,getDog} = useDog();
</script>

<style scoped>
    .person{
        background-color: aliceblue;
        box-shadow: 0 0 10x;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
    li{
        font-size: 20px;
    }
    img{
        height: 100px;
        margin-right: 10px;
    }
</style>