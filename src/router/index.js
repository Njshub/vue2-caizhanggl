import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect/index')
  //     }
  //   ]
  // },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  // 首页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '首页',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  // 客户
  {
    path: '/documentation',
    component: Layout,
    meta: {
      title: '客户',
      icon: 'icon'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: '客户', icon: 'documentation', affix: true }
      },
      // 客户资料
      {
        path: 'khuziLi',
        component: () => import('@/views/documentation/khu/khuziLi'),
        name: 'khuziLi',
        meta: {
          title: '客户资料',
          icon: 'icon'
        }
      },
      // 工作交接
      {
        path: 'Handoverofitems',
        component: () => import('@/views/documentation/khu/Handoverofitems'),
        name: 'Handoverofitems',
        meta: {
          title: '工作交接',
          icon: 'icon'
        }
      },
      // 回收站
      {
        path: 'RecycleBin',
        component: () => import('@/views/documentation/khu/RecycleBin'),
        name: 'RecycleBin',
        meta: {
          title: '回收站',
          icon: 'icon'
        }
      },
      // 设置
      {
        path: 'SeTup',
        component: () => import('@/views/documentation/khu/SeTup'),
        name: 'SeTup',
        meta: {
          title: '设置',
          icon: 'icon'
        }
      }
    ]
  },
  // 发票
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    meta: {
      title: '发票',
      icon: 'icon'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: '发票开具', icon: 'guide', noCache: true }
      },
      {
        path: 'Faipingkju',
        component: () => import('@/views/guide/LnvoiceIssuance/Faipingkju'),
        name: 'Faipingkju',
        meta: {
          title: '票家家',
          icon: 'guide'
        }
      },
      // 发票汇总表
      {
        path: 'FphuiZongb',
        component: () => import('@/views/guide/LnvoiceIssuance/FphuiZongb'),
        name: 'FphuiZongb',
        meta: {
          title: '发票汇总表',
          icon: 'icon'
        }
      },
      // 抄报监控管理
      {
        path: 'ShoukjKLing',
        component: () => import('@/views/guide/LnvoiceIssuance/ShoukjKLing'),
        name: 'ShoukjKLing',
        meta: {
          title: '抄报监控管理',
          icon: 'icon'
        }
      },
      // 开票代办
      {
        path: 'kaiFpingdaib',
        component: () => import('@/views/guide/LnvoiceIssuance/kaiFpingdaib'),
        name: 'kaiFpingdaib',
        meta: {
          title: '开票代办',
          icon: 'icon'
        }
      },
      // 机柜管理
      {
        path: 'JiGuigli',
        component: () => import('@/views/guide/LnvoiceIssuance/JiGuigli'),
        name: 'JiGuigli',
        meta: {
          title: '机柜管理',
          icon: 'icon'
        }
      },
      // 开票设置
      {
        path: 'JiGuigli',
        component: () => import('@/views/guide/LnvoiceIssuance/JiGuigli'),
        name: 'JiGuigli',
        meta: {
          title: '开票设置',
          icon: 'icon'
        }
      }
    ]
  },
  // 财务
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

// 基础设置
export const asyncRoutes = [
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: '财务', icon: 'icon', noCache: true }
      }
    ]
  },
  // 税务
  {
    path: '/taxadministration',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/taxadministration/index'),
        name: 'Index',
        meta: {
          title: '税务',
          icon: 'icon'
        }
      }
    ]

  },
  // 风控
  {
    path: '/riskmanagement',
    component: Layout,

    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/riskmanagement/index.vue'),
        meta: {
          title: '风控',
          icon: 'icon'
        }
      }
    ]
  },
  // 微企业
  {
    path: '/Microenterprise',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/Microenterprise/index.vue'),
        meta: {
          title: '微企业',
          icon: 'icon'
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
