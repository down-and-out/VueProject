<template>
    <div class = "person">
        <h2>汽车信息：一辆{{car.brand}}车，价值{{ car.price }} 万</h2>
        <button @click="changePrice">修改汽车的价格</button>

        <ul>
            <li v-for="game in games" :key="game.id"> {{game.name}}</li>
        </ul>
        <button @click="changeFirstGame">改变第一个游戏</button>
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
    import { ref,reactive } from 'vue';
    // import { Ref } from 'vue';

    // 数据
    // let temp = ref(100);

    // ref 的数据需要 .value 才能够使用
    let carNo = {brand:'奔驰',price:100}; // 此时不是响应式数据
    let car = ref({brand:'奔驰',price:100});  // 此时就是响应式数据

    // 使用 reactive 包围使其成为 响应式数组
    let games = ref([
        {id:'player1',name:'英雄联盟'},
        {id:'player2',name:'PUBG'},
        {id:'player3',name:'ow2'},
    ])

    let obj = reactive([
        {x:999}
    ])

    console.log(car);
    console.log(games);
    console.log(obj);

    // reactive 只能够处理对象类型
    // let name = reactive('人民');

    function changePrice(){
        car.value.price += 10;
        console.log(car.value.price);
    }

    function changeFirstGame(){
        if (games.value[0]) {
            games.value[0].name = '不知道是啥';
        }
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