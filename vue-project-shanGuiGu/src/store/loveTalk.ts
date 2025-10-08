import { defineStore } from "pinia";
import { nanoid } from 'nanoid';

// export const useTalkStore = defineStore('talk', {
//     actions: {
//         getATalk() {
//             this.talkList.unshift({ id: nanoid(), title: '啦啦啦啦啦' });
//         }
//     },

//     // 真正存储数据的地方
//     state() {
//         return {
//             talkList: JSON.parse(localStorage.getItem('talkList') as string) || [],
//         }
//     }
// });

import { reactive } from "vue";
export const useTalkStore = defineStore('talk', () => {
    // talkList 就是 state
    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || [],
    );

    // 函数:
    function getATalk() {
        talkList.unshift({ id: nanoid(), title: '啦啦啦啦啦' });
    }

    return {talkList,getATalk};
});