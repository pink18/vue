import {request} from '@/utils/request'

/**
 * 登陆接口
 */
export function getUser(){
    return request({
        url:'/api/index2/333',
        method:'post'
    })
}