import request from '@/utils/request'
export function login(data) { // 登录
  return request({
    url: '/openApi/jindie/gettokenInfo',
    method: 'post',
    data: {
      ...data,
      client_id: 10173
    }
  })
}
export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
// 获取科目
export function hqugemu(data) {
  return request({
    url: '/openApi/jindie/kj/report/account',
    method: 'post',
    data
  })
}
