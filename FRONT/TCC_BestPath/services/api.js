import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:2024'
})

export default api