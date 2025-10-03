<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <h1>情况三 ：监视 [reactive] 定义的 [对象类型] 数据</h1>
        <h2>姓名:{{person.name}}</h2>
        <h2>年龄:{{person.age}}</h2>
        <button @click="changeName">点我修改姓名</button>
        <button @click="changeAge">点我修改年龄</button>
        <button @click="changePerson">点我修改人</button>
        
        <h2>{{ obj.a.b.c }}</h2>
        <button @click="changeObj">修改 obj.a.b.c</button>
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import { reactive, watch } from 'vue';

    // reactive 定义的整个对象不能够整体修改。
    let person = reactive({
        name:'张三',
        age:18,
    })

    let obj = reactive({
        a : {
            b : {
                c: 66,
            }
        }
    })


    function changeName(){
        person.name += '!';
    }

    function changeAge(){
        person.age += 1;
    }

    
    function changePerson(){
        // reactive 定义的整个对象不能够整体修改。
        // 下面的写法不对  --> ref 下下面的写法才是真正的替换
        // person = {name:'李四',age:129};

        // 这个就是追加之后发现属性名重复，然后挤掉
        Object.assign(person,{name:'李四',age:129});
    }

    function changeObj(){
        obj.a.b.c += 999;
    }

    // 情况三：监视 [reactive] 定义的 [对象类型] 数据，默认开启深度监视
    watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue);
    });


    // 监视 reactive 对象，会隐式地开启深度监听
    // 且无法关闭
    watch(obj,(newValue,oldValue)=>{
        console.log('obj变化了',newValue,oldValue);
    })
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