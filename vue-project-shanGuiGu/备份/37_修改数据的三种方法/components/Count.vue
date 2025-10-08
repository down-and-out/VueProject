<template>
    <div class="count">
        <h2> 当前求和为：{{ countStore.sum }}  </h2>
        <h2> 学校名称为：{{ countStore.school }}，学校位于：{{ countStore.address }}  </h2>
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

    // 使用 useCountStore，得到一个专门保存 count 相关的 store
    const countStore = useCountStore();

    // 以下两种方式都能够拿到 state 中的数据
    // console.log(countStore.sum);
    // console.log(countStore.$state.sum);

    let n = ref(1); // 用户选择的数字

    function add(){
        // 第一种修改方式
        // countStore.sum += n.value;
        
        // 第二种修改方式：批量修改
        // countStore.$patch({
        //     sum:888,
        //     school:'重庆大学',
        //     address:'cqu'
        // })

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