import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_REQUEST_API_URL

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000
})

export default api