import router from './router'
// 获取token进进行全局拦截
import store from './store'
import { Message } from 'element-ui'
// 导航条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

// 全局守卫导航
router.beforeEach(async(to, from, next) => {
  // 每当你点击组件时都会又线条
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  // 获取token
  const hasToken = getToken()

  if (hasToken) {
    // 有token我就跳转到首页
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 对等成立才能为true
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/getInfo')

          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          router.addRoutes(accessRoutes)

          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
