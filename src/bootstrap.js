import Vue from 'vue'
// 使用多语言插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.config.lang = window.localStorage.getItem('language') || 'zh'

// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// // 配置以application/x-www-form-urlencoded方式
// Vue.http.options.emulateJSON = true
// // REST/HTTP方式
// Vue.http.options.emulateHTTP = true;
// 入口布局组件
// vuex state管理
import store from './store'

var bootstrap = function ({ Router, Component, routes, options }) {
  // 注册本地全局组件
  // Object.values(Components).forEach(component => {
  //   Vue.component(component.name, component)
  // })

  // ---- 全局路由设置
  // 将store跟路由绑定
  const router = Router ? Router(store, routes, options) : {}
  const renderComponent = Component // || App
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    render: h => h(renderComponent),
    store,
    router
  })
}
export default bootstrap
