import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://127.23.101.22:8000',
    timeout: 5000
  })
  // 拦截器
  // 拦截请求
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // 拦截响应
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 发送真正的网络请求
  return instance(config)
}
