<template>
    <div class = "person">
        <h2>一辆{{car.brand}}车，价值{{ car.price }} 万</h2>
        <button @click="changePrice">修改汽车的价格</button>

        <ul>
            <li v-for="game in games" :key="game.id"> {{game.name}}</li>
        </ul>
        <button @click="changeFirstGame">改变第一个游戏</button>
        <hr>
        <h2>测试:{{obj.a.b.c}}</h2>
        <button @click="changeObj">改变obj</button>
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
    import { reactive } from 'vue';
    // import { Ref } from 'vue';

    // 数据
    // let temp = ref(100);
    let carNo = {brand:'奔驰',price:100}; // 此时不是响应式数据
    let car = reactive({brand:'奔驰',price:100});  // 此时就是响应式数据

    // 使用 reactive 包围使其成为 响应式数组
    let games = reactive([
        {id:'player1',name:'英雄联盟'},
        {id:'player2',name:'PUBG'},
        {id:'player3',name:'ow2'},
    ])

    // 使用 reactive 包围使其成为 响应式数组
    let obj = reactive({
        a:{
            b:{
                c:666,
            }
        }
    })

    console.log(carNo);
    console.log(car);

    function changePrice(){
        car.price += 10;
        console.log(car.price);
    }

    function changeFirstGame(){
        if (games[0]) {
            games[0].name = '不知道是啥';
        }
    }

    function changeObj(){
        obj.a.b.c = 999;
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