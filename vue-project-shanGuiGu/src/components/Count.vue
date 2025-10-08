<template>
    <div class="count">
        <h2> 当前求和为：{{ sum }} ，放大10倍后：{{ bigSum }} </h2>
        <h2> 学校名称为：{{ countStore.school }}，学校位于：{{ countStore.address }} 大写：{{upperSchool}} </h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import { ref } from 'vue';
    // 引入 useCountStore
    import { useCountStore } from '@/store/Count';
    import { storeToRefs } from 'pinia';

    // 使用 useCountStore，得到一个专门保存 count 相关的 store
    const countStore = useCountStore();

    // storeToRefs 只会关注 store 中的数据，不会对方法进行 ref 包裹
    const {sum,school,address,bigSum,upperSchool} = storeToRefs(countStore);


    // 以下两种方式都能够拿到 state 中的数据
    // console.log(countStore.sum);
    // console.log(countStore.$state.sum);

    let n = ref(1); // 用户选择的数字

    function add(){
        countStore.increment(n.value);
    }

    function minus(){
        countStore.sum -= n.value;
    }
</script>

<style scoped>
    .count{
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select,button{
        margin: 0px;
        height: 25px;
    }
</style>