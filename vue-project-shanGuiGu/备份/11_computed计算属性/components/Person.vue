<!-- 需要尽可能的让模板变得简单 -->
<template>
    <div class = "person">
        <!-- v-bind / : 只是单向绑定 -> 只能够从数据流向页面 -->
        <!-- v-model ： 是双向绑定 -->
        姓：<input type="text" v-model=firstName> <br>
        名：<input type="text" v-model="lastName"> <br>
        全名：<span> {{fullName}} </span> <br>
        <button @click="changeFullName">修改全名</button>
        <!-- 全名：<span> {{fullName}} </span> <br>
        全名：<span> {{fullName2()}} </span> <br>
        全名：<span> {{fullName2()}} </span> <br> -->
    </div>
</template>

<script lang="ts" setup name = "Person"> // 相当于写了一个 setup 函数
    import { ref,computed } from 'vue';
    let firstName = ref('张');
    let lastName = ref('三');

    // 方法是没有缓存的
    function fullName2(){
        console.log('fullName2');
        return firstName.value.slice(0,1).toLocaleUpperCase() 
        + firstName.value.slice(1)
        + '-'
        + lastName.value; 
    }
    
    // 这么定义的 fullName 是一个计算属性，是只读的，不可修改
    // let fullName = computed(()=>{
    //     console.log('fullName');
    //     return firstName.value.slice(0,1).toLocaleUpperCase() 
    //     + firstName.value.slice(1)
    //     + '-'
    //     + lastName.value;
    // });

    // 这么定义的 fullName 是一个计算属性，可读可写
    let fullName = computed({
        get(){
            return firstName.value.slice(0,1).toLocaleUpperCase() 
            + firstName.value.slice(1)
            + '-'
            + lastName.value;
        },
        set(val){
            const [str1 = '', str2 = ''] = val.split('-');
            firstName.value = str1;
            lastName.value = str2;
        } 
    });

    function changeFullName(){
        console.log(fullName.value);

        // 无法为 value 赋值，因为它为只读属性
        fullName.value = 'li-si';
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