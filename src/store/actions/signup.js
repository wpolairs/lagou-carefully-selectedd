import { createActions } from 'redux-actions'

// 注册请求
export const signup = createActions("signup");
// 注册成功
export const signup_success = createActions("sign_success");
// 注册失败
export const signup_fail = createActions("signup_fail");
// 重置注册状态
export const signup_reset = createActions("signup_reset");