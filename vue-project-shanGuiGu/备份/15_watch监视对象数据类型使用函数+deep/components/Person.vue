<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <!-- 情况四 -->

        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }},{{ person.car.c2 }}</h2>

        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一辆车</button>
        <button @click="changeC2">修改第二辆车</button>
        <button @click="changeCar">修改所有车</button>


    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import { reactive, watch } from 'vue';

    // 数据
    let person = reactive({
        name:'张三',
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马',
        }
    })

    function changeName(){
        person.name += '!'
    }

    function changeAge(){
        person.age += 1;
    }

    function changeC1(){
        person.car.c1 = '奥迪';
    }

    function changeC2(){
        person.car.c2 = '大众';
    }

    function changeCar(){
        person.car = {c1:'雅迪',c2:'爱玛'};
    }

    // 监视：情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
    watch(()=>{return person.name},(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue);
    })

    // 监视：情况四：监视响应式对象中的某个属性，且该属性是函数类型的，可以直接写，也可以写函数
    // 直接写：只能够监听某个属性，无法监听大局变化（无论是否打开 deep:true）
    // 写函数：不加deep:true -> 只能够监听大局。  加上 deep:true -> 能够监听所有内容
    watch(()=>person.car,(newValue,oldValue)=>{
        console.log('person.car变化了',newValue,oldValue);
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