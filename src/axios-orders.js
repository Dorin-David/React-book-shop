import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://bookshop-2846c-default-rtdb.firebaseio.com/'
})

export default axiosInstance 