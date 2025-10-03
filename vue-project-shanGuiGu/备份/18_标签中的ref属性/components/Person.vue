<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <h1>中国</h1>
        <h2 ref="title2">重庆</h2>
        <h3>重庆大学</h3>
        <button @click="showLog">点我输出 h2 元素</button>
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import { ref,defineExpose } from 'vue';

    let title2 = ref();
        
    let a = ref(0);
    let b = ref(1);
    let c = ref(2);

    function showLog(){
        // console.log(document.getElementById('title2'));
        console.log(title2.value);
    }

    defineExpose({a,b,c});
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
</style>