/**
 * 路由配置文件
 * by tommyshao <shaojinhong@kuaizi.co>
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由配置
// import routes from './routes'

// 绑定路由插件
Vue.use(VueRouter)

/*
* 配置路由函数
* @param {Object} store vuex实例对象
*/
const Router = (store, routes, options = {}) => {
  options = Object.assign({ validate: true }, options)
  // 实例化路由
  const router = new VueRouter({
    // H5 history
    // mode: 'history',
    routes
  })

  // 全局路由切换
  router.beforeEach(({ meta, path }, from, next) => {
    // 判断是否登录
    // var { auth = true } = meta
    // var isLogin = Boolean(store.state.User.advertiser_name)
    // 显示Loading

    // if (options.validate) {
    //   if (auth && isLogin && path === '/login') { // 已经登录
    //     return next({ path: '/home/index' })
    //     // window.location.href = 'index.html'
    //   } else if (auth && !isLogin && path !== '/login') {  // 未登录
    //     return next({ path: '/login' })
    //     // window.location.href = '/#/login/index'
    //   }
    // }

    // 进入路由
    next()
  })

  // 页面就绪后
  router.afterEach(route => {
    // store.state.loading.progress = 100
    // store.commit(SHOW_LOADING, { progress: 100 })
    // // 设置一个延迟
    // setTimeout(() => {
    //   store.commit(HIDE_LOADING)
    // }, 300)
  })

  // 返回路由实例
  return router
}

export default Router
