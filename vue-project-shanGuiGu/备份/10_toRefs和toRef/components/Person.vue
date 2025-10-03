<template>
    <div class = "person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }},{{ nl }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        
    </div>
</template>

<!-- 用来配置组件名 -->
<!-- <script lang="ts">
    export default{
        name:'Person',
        beforeCreate(){
            console.log('beforeCreate');
        }
    }
</script> -->

<!-- 这里能够注释掉上述的部分，是因为添加了插件，同时在头上加上了 name 标签 -->
<!-- 相当于写了 setup，同时还不用手动 return -->
<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
   import { reactive, toRefs , toRef } from 'vue';

   // 数据
   let person = reactive({
        name:'张三',
        age:18,
   });

   // 只要修改 name，person.name 也会一同进行修改
   let {name,age} = toRefs(person);
   let nl = toRef(person,'age')

   console.log(name);
   console.log(age);
   console.log(nl,nl.value);


   // 方法
   function changeName(){
        name.value += '!';
   }    

   function changeAge(){
        age.value += 1;
   }  
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