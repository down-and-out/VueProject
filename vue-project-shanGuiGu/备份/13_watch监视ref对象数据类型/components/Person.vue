<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <h1>情况 2 ：监视 [ref] 定义的 [对象类型] 数据</h1>
        <h2>姓名:{{person.name}}</h2>
        <h2>年龄:{{person.age}}</h2>
        <button @click="changeName">点我修改姓名</button>
        <button @click="changeAge">点我修改年龄</button>
        <button @click="changePerson">点我修改人</button>
        
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import { ref, watch } from 'vue';
    let person = ref({
        name:'张三',
        age:18,
    })

    function changeName(){
        person.value.name += '!';
    }

    function changeAge(){
        person.value.age += 1;
    }

    function changePerson(){
        person.value = {name:'李四',age:129};
    }

    // 情况 2 : 监视 [ref] 定义的 [对象类型] 数据
    // 监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    // watch的第一个参数是：被监视的数据
    // watch的第二个参数是：监视的回调
    // watch的第三个参数是：配置对象(deep,immediate等...)
    
    watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue);
    },{deep:true})
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