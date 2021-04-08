import request from "@/utils/request"
/**
 * 注册
 * @param {*} payload 
 * @returns 
 */
export function signup(payload){
    return request("/api/signUp", payload)
}
/**
 * 登录
 * @param {*} payload 
 * @returns 
 */
export function signin(payload){
    return request("/api/signIn", payload)
}
/**
 * 验证验证码
 */
export function captcha(payload){
    return request("/api/checkCaptcha", payload)
}
/**
 * 获取用户信息
 * @param {*} payload 
 */
export function getUserInfo(payload){
    return request("/api/getUserInfo", payload)
}

/**
 * 获取数据
 * @param {*} payload 
 */
export function getMenus(payload){
    return request("/api/getResource", payload)
}