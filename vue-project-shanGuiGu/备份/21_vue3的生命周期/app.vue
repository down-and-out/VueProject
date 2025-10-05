<!--  能够写三种东西 -->
<template>
    <!-- 写 html 结构 -->
     <!-- <h2 a = '1 + 1' :b="1+1" c="x" :d="x"></h2> -->
    <Person v-if="isShow"></Person>
</template>

<script lang="ts" setup name = "App">
    import Person from './components/Person.vue'
    import {ref,onMounted} from 'vue'

    let isShow = ref(true);  

    // 子先执行，父后执行
    // 这里和执行顺序相关
    onMounted(()=>{
        console.log('父 -- 挂载完毕');
    })
</script>


