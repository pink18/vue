import {request} from '@/utils/request'

/**
 * 登陆接口
 */
export function getData(){
    return request({
        url:'/api/index',
        method:'get'
    })
}