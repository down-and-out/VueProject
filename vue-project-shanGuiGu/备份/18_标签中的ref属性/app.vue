<!--  能够写三种东西 -->

<template>
    <h2 ref="title2">你好</h2>
    <button @click="showLog">点我输出 你好</button>
    <!-- 写 html 结构 -->
    <Person ref = 'ren'></Person>
</template>

<script lang="ts" setup name = "App">
    import Person from './components/Person.vue'
    import { ref } from 'vue';
    let title2 = ref();
    let ren = ref();


    function showLog(){
        // console.log(title2.value);
        console.log(ren.value);
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


