import { defineStore } from "pinia";

export const useCountStore = defineStore('Count',{
    // actions 里面放置的是一个一个的方法，用于响应组件中的‘动作’
    actions:{
        increment(value: number){
            console.log('increment被调用了');
            this.sum += value;
        }
    },

    // 真正存储数据的地方
    state(){
        return {
            sum:6,
            address:'重庆',
            school:'cqdax',
        }
    }
});