<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <h2>需求：当水温达到 60°C 时，或水位达到80 cm 时，给服务器发送一个请求</h2>
        <h2>当前水温为：{{temp}}</h2>
        <button @click="changeTemp">水温 + 1</button>
        <h2>当前水位为：{{height}}</h2>
        <button @click="changeHeight">水位 +1</button>
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import { ref, watch ,watchEffect} from 'vue';

    let sum = ref(10);
    let temp = ref(10);
    let height = ref(10);

    function changeSum(){
        sum.value += 1;
    }

    function changeTemp(){
        temp.value += 10;
    }

    function changeHeight(){
        height.value += 10;
    }

    // 监视，watch 实现
    // watch([temp,height],(newValue,oldValue)=>{
    //     console.log(newValue,oldValue);

    //     // 从newValue 中获取最新的水温和水位
    //     let [newTemp,newHeight] = newValue;
    //     if(newTemp > 60 || newHeight > 80){
    //         console.log('给服务器发送消息');
    //     }
    // })

    // 监视 -- watchEffect 实现
    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 80){
            console.log('给服务器发送请求');
        }
    })
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