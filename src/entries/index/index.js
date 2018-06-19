// 共用模块
import bootstrap from '@/bootstrap'
import Router from '@/router'
import routes from './router'
// 入口视图组件
import Component from './view'
import Vue from 'vue'
import Vant, { Locale } from 'vant'
import 'vant/lib/vant-css/index.css'

import enUS from 'vant/lib/locale/lang/en-US'
Locale.use('en-US', enUS)

Vue.use(Vant)

// 注册多页面共用组件
// 启动app
bootstrap({
  Router,
  Component,
  routes
})
