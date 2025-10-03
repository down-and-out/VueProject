<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        ？？？
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    let person = {id:'60岁的程序员',name:'张三',age:60};
    import {type PersonInter,type Persons} from '@/types'

    let personImpl:PersonInter = {id:'asfawe ',name:'张三',age:18};


    // 数组中的元素类型在 <> 中
    let personList:Persons = [
        {id:'asdfa',name:'张三',age:90},
        {id:'awsfsadf ',name:'李四',age:32},
        {id:'fawfsafeas',name:'王五',age:123},
    ]

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