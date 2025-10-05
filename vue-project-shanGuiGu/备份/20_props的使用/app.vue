<!--  能够写三种东西 -->
<template>
    <!-- 写 html 结构 -->
     <!-- <h2 a = '1 + 1' :b="1+1" c="x" :d="x"></h2> -->
    <Person a = 'haha' ></Person>
</template>

<script lang="ts" setup name = "App">
    import Person from './components/Person.vue'
    import { reactive } from 'vue';
    import { type Persons } from './types';

    // 可以，但是不是最优
    // let personList:Persons = reactive([
    //     {id:'asdfasfda01',name:'张三',age:18},
    //     {id:'asdfasfda02',name:'李四',age:19},
    //     {id:'asdfasfda03',name:'王五',age:20},
    // ])

    let x = 9;

    // 更加推荐
    let personList = reactive<Persons>([
        {id:'asdfasfda01',name:'张三',age:18},
        {id:'asdfasfda02',name:'李四',age:19},
        {id:'asdfasfda03',name:'王五',age:20},
    ])


</script>


