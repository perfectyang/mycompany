
  const routes = [
  // --- 首页
    {
      path: '/about',
      name: 'About',
      redirect: '/about/index',
      component: r => require.ensure([], () => r(require('../common/layout.vue')), 'common_layout'),
      children: [
        {
          path: 'index',
          component: r => require.ensure([], () => r(require('../view/about/index.vue')), 'about_index')
        }
      ]
    }
  ]
  export default routes
