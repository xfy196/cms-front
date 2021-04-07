import * as service from "@/services/login";
import { message } from "antd";
import { push } from "react-router-redux";
export default {
  namespace: "loginmodel",

  state: {
    isLogin: false,
    token: null,
    userInfo: {},
  },

  // 加入了react-saga
  effects: {
    *signup({ payload }, { call, put }) {
      let result = yield call(service.signup, payload);
      if (result.data.status == 200) {
        message.success({
          content: result.data.message,
        });
      } else {
        message.error({
          content: result.data.message,
        });
      }
      yield put({ type: "save", payload: { isLogin: true } });
    },
    *singin({ payload }, { call, put }) {
      let result = yield call(service.signin, payload);
      if (result.data.status == 200) {
        message.success({
          duration: 1,
          content: result.data.message,
        });
      } else {
        message.error({
          content: result.data.message,
        });
        return Promise.reject();
      }
      localStorage.setItem("cmsToken", result.data.data);
      yield put({ type: "save", payload: { token: result.data.data } });
      yield put(push("/"));
    },
    *captcha({ payload }, { call, put }) {
      let result = yield call(service.captcha, payload);
      if (result.data.status == 200) {
        delete payload.data.captcha;
        yield put({
          type: "singin",
          payload: {
            method: "POST",
            data: {
              ...payload.data,
            },
          },
        });
      } else {
        document.getElementById("captchaImg").getElementsByTagName("img")[0].src = `http://localhost:7001/api/getCaptcha?_time=${Date.now()}`
        message.error({
          content: result.data.message,
        });
        return Promise.reject();
      }
    },
    *getUserInfo({payload}, { call, put }) {
      let result = yield call(service.getUserInfo, payload);
      if (result.data.status == 200) {
        yield put({type: "save", payload: {userInfo: result.data.data}})
      } else {
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
