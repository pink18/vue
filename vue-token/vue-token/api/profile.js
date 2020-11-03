import {serve} from '../utils/request'

export function getProfile(data) {
  return serve({
    url: '/profile',
    method: 'get',
    params:data
  })
}