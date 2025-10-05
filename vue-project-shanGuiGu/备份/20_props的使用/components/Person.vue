<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <ul>
            <li v-for="person in list" :key="person.id">{{person.name}} -- {{ person.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import { withDefaults } from 'vue';
    import {type Persons} from '@/types'
    // 接受list
    // let x = defineProps(['list']);
    // console.log(x.list)

    // 接收a同时保存a
    // let x = defineProps(['a','b']);
    // console.log(x);

    // 接收 list + 限制类型
    // defineProps<{list:Persons}>();

    // 接收 list + 限制类型 + 限制必要性 + 指定默认值
    withDefaults(defineProps<{list?:Persons}>(),{
        list:()=>[{id:'fasesaf',name:'康师傅',age:18}],
    });
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