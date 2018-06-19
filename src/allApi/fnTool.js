import request from 'utils/fetch.js'
import api from './index.js'

function genrateFn (opt) {
  // 方法函数
  const fnList = opt.fnList
  const fnObject = {}
  fnList.forEach(fn => {
    fnObject[fn] = (data, extraOpt) => {
      let method = (extraOpt && extraOpt.method) || 'post'
      // 处理图片格式
      let config = null
      if (extraOpt && extraOpt.type === 'form') {
        config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      }
      return request[method](api[opt.apiName][fn], data, config)
    }
  })
  return fnObject
}

export default genrateFn
