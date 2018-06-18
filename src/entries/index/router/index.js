import routeMaps from './config'

// 公共路由配置
let Common = [
  {
    path: '/',
    redirect: '/index'
  }
]

// 统一处理页面
const Handler = [
  // {
  //   path: '/500',
  //   component: r => require.ensure([], () => r(require(`@/components/Common/500.vue`)), '500')
  // },
  // {
  //   path: '*',
  //   component: r => require.ensure([], () => r(require(`@/components/Common/404/index.vue`)), '404')
  // }
]

// Handler 必须放最后
const routes = Common.concat(routeMaps, Handler)
export default routes
