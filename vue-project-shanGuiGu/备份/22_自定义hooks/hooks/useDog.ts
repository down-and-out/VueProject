import { onMounted, reactive } from 'vue';
import axios from 'axios'

// https://dog.ceo/api/breed/pembroke/images/random

export default function () {
    // 数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_7062.jpg',
    ])

    // 方法
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log(result.data);
            dogList.push(result.data.message);
        } catch (error) {
            alert(error);
        }
    }

    onMounted(()=>{
        getDog();
    })

    // 向外部提供东西
    return { dogList, getDog };
}