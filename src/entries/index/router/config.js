
  const routes = [
  // --- 首页
    {
      path: '/index',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      component: r => require.ensure([], () => r(require('../view/home/index.vue')), 'home_index'),
      meta: {
        title: '首页'
      }
    }
  ]
  export default routes
