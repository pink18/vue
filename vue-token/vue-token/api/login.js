import {serve} from '../utils/request'

export function getLogin(data) {
  return serve({
    url: '/login',
    method: 'post',
    data
  })
}