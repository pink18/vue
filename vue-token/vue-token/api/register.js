import {serve} from '../utils/request'

export function getRegister(data) {
  return serve({
    url: '/register',
    method: 'post',
    data
  })
}