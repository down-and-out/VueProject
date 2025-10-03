<template>
    <div class = "person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <!-- <h2></h2> -->
         <button @click = "showTel">查看联系方式</button>
         <button @click = "changeName">修改名字</button>
         <button @click = "changeAge">修改年龄</button>
         <h2>{{a}}</h2>
         <h2>{{b}}</h2>
         <h3>{{c}}</h3>
         <h4>{{d}}</h4>
    </div>

</template>

<script>
    export default{
        name:'Person',
        beforeCreate(){
            console.log('beforeCreate');
        },
        // data(){ // vue2 中的 选项式(配置式) API写法
        //     return {
        //         name:'张三',
        //         age:18,
        //         tel:13333333333
        //     }
        // },
        // methods:{ // vue2 中的 选项式(配置式) API写法
        //     showTel(){
        //         // alert -> 弹窗
        //         alert(this.tel);
        //     },
        //     changeName(){
        //         this.name = 'zhang-san';
        //     },
        //     changeAge(){
        //         this.age += 10;
        //     }
        // },

        // data 和 methods 能够和 setup 同时存在
        // data 和 methods 中能够使用 setup 中的值
        // 但是 setup 中不能够使用 data 中的值
        data(){
            return {
                a:100,
                b:200,
                c:this.name,
                d:900
            }
        }, 


        setup(){ 
            // setup 中不能够使用 this
            // setup 的生命周期在 beforeCreate 之前
            console.log('setup');
            // 数据

            // 以下三种写法不是响应式的
            let name = '张三';
            let age = 18;
            let tel = '13344447777';
            
            // 不允许在 setup 中使用 data 中的值
            // let x = d;

            // 响应式数据

            // 方法:
            // 在方法中不能够写 this
            function changeName(){
                console.log(1);
                name = 'zhang-san'; // 这样修改，name 页面是没有变化的
                console.log(name);
            }

            function changeAge(){
                console.log(2);
                age += 1;
                console.log(age);
            }

            function showTel(){
                console.log(3);
                alert(tel);
            }

            // 需要抛出去
            return {name,age,changeName,changeAge,showTel};


            // setup 的返回值也可以是一个返回函数
            // 下去了解箭头函数
            // return ()=>'哈';
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
</style>