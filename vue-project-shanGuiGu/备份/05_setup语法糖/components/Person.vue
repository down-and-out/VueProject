<template>
    <div class = "person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <!-- <h2></h2> -->
         <button @click = "showTel">查看联系方式</button>
         <button @click = "changeName">修改名字</button>
         <button @click = "changeAge">修改年龄</button>
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
<script lang="ts" setup name = "Person112345"> // 相当于写了一个 setup 函数
    let name = '张三';
    let age = 18;
    let tel = '13344447777';

    function changeAge(){
        age += 1;
    }

    function changeName(){
        name = 'zhang-san';
    }

    function showTel(){
        alert(tel);
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
</style>