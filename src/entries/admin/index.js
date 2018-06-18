// 共用模块
import bootstrap from '@/bootstrap'
import Router from '@/router'
import routes from './router'
// 入口视图组件
import Component from './view'
// 启动app
bootstrap({
  Router,
  Component,
  routes
})
