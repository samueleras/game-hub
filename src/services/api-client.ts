import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: '0d7651a113f6498ab80e665af8764b2f'
    }
})