import axios from 'axios'

const AUTH_TOKEN = window.localStorage.getItem('token')

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.headers.common.Authorization = AUTH_TOKEN || ''

export const defaultClient = axios.create({})
