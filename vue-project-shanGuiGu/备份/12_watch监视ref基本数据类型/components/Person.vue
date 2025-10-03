<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <h1>情况一：监视 [ref] 定义的 [基本类型] 数据</h1>
        <h2>当前求和为 {{ sum }}</h2>
        <button @click="changeSum">点我 sum + 1</button>
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import { ref , watch} from 'vue';
    let sum = ref(0);

    function changeSum(){
        sum.value += 1;
    }

    // 监视 (监视谁，回调函数)  -> 监视不用写 .value
    const stopWatch = watch(sum,(newValue,oldValue)=>{
        console.log('sum变化了',newValue,oldValue);
        if(newValue >= 10){
            stopWatch();
        }
    })
    console.log(stopWatch);

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