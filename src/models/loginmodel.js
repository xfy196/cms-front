import * as service from "@/services/login"
import { message } from "antd";
import {push} from "react-router-redux"
export default {
  namespace: "loginmodel",

  state: {
      isLogin: false,
      userInfo:null
  },

  // 加入了react-saga
  effects: {
    *signup({ payload }, { call, put }) {
        let result = yield call(service.signup, payload)
        if(result.data.status == 200){
            message.success({
                content: result.data.message
            })
        }else {
            message.error({
                content: result.data.message
            })  
        }
        yield put({type: "save", payload: {isLogin: true}})
    },
    *singin({payload}, {call, put}){
        let result = yield call(service.signin, payload)
        if(result.data.status == 200){
            message.success({
                duration: 0.5,
                content: result.data.message
            })
        }else {
            message.error({
                content: result.data.message
            })
            return Promise.reject()
        }
        localStorage.setItem("cmsToken", result.data.data)
        yield put({type: "save", payload: {userInfo:result.data.data}})
        yield put(push("/"))
    },
    *captcha({payload}, {call, put}){
        let result = yield call(service.captcha, payload)
        if(result.data.status == 200){
            delete payload.data.captcha
            yield put({type: "singin", payload: {
                method: "POST",
                data: {
                    ...payload.data
                },
            }})
        }else {
            message.error({
                content: result.data.message
            })
            return Promise.reject()
        }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
