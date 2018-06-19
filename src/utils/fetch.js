import axios from 'axios'
import qs from 'qs'

const fetch = axios.create({
  baseURL: '/',
  timeout: 5000,
  withCredentials: true
})

// http request 拦截器
// fetch.interceptors.request.use(function (config) {
//   console.log('config', config)
//   if (config.data) {
//     Object.keys(config.data).forEach(key => {
//       if (typeof config.data[key] === 'object') {
//         config.data[key] = JSON.stringify(config.data[key])
//       }
//     })
//     config.data = qs.stringify(config.data)
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// http response 拦截器
fetch.interceptors.response.use(
  response => {
    return response
  }, (error) => {
  return Promise.reject(error)
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    fetch.get(url, {
      params: params
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data, extraOpt) {
  console.log('extraOpt', extraOpt)
  let datas = data
  let extraOpts = extraOpt || {}
  const config = Object.assign({
    headers: {
      withCredentials: true,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }, extraOpts)
  // 处理不是form-data形式时的数据处理
  if (config.headers['Content-Type'] !== 'multipart/form-data') {
    Object.keys(datas).forEach(key => {
      if (typeof datas[key] === 'object') {
        datas[key] = JSON.stringify(datas[key])
      }
    })
    datas = qs.stringify(datas)
  }
  return new Promise((resolve, reject) => {
    fetch.post(
      url,
      datas,
      config
    )
    .then(response => {
      resolve(response.data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    fetch.patch(url, data)
         .then(response => {
           resolve(response.data)
         }, err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    fetch.put(url, data)
     .then(response => {
       resolve(response.data)
     }, err => {
       reject(err)
     })
  })
}

export default {
  get,
  post,
  patch,
  put
}
