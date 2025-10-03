<!--  能够写三种东西 -->

<template>
    <!-- 写 html 结构 -->

    <Person></Person>

</template>


<script>
    import Person from './components/Person.vue'
    // JS 或 ts
    export default{
        name:'App',
        components:{Person} // 注册组件
    }
</script>

<!-- <style>
    /* 写样式 */
    .app{
        background-color:  #ddd;
        box-shadow:0 0 10 px;
        border-radius: 20px;
        padding: 20px;
    }
</style> -->


