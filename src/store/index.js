import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import User from './modules/User'

Vue.use(Vuex)

// 开发环境开启 debug 模式
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    User
  },
  plugins,
  strict: debug
})
