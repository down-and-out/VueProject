import { defineStore } from "pinia";
import { nanoid } from 'nanoid';
export const useTalkStore = defineStore('talk', {
    actions: {
        getATalk() {
            this.talkList.unshift({ id: nanoid(), title: '啦啦啦啦啦' });
        }
    },

    // 真正存储数据的地方
    state() {
        return {
            talkList: [
                { id: 'dfawefsd01', title: '今天你有点怪，那里怪?怪好看的！' },
                { id: 'dfawefsd02', title: '草莓，蓝莓，蔓越莓，今天想我了没？' },
                { id: 'dfawefsd03', title: '心里给你留了一块地，我的死心塌地。' },
            ]
        }
    }
});