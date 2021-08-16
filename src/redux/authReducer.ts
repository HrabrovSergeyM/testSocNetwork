import { Action } from 'redux';
import { BaseThunkType, InferActionsTypes } from './reduxStore';
import { ResultCodesEnum } from './../api/api';
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/authApi";
import { securityAPI } from '../api/securityApi';

export type InitialStateType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean | false,
  captchaUrl: string | null,
}
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>


let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "SN/AUTH/SET_USER_DATA",
    payload: { userId, email, login, isAuth },
  } as const ),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: "SN/AUTH/GET_CAPTCHA_URL_SUCCESS",
    payload: { captchaUrl },
  } as const)
} 

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SN/AUTH/SET_USER_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "SN/AUTH/GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.payload,
        
      };
    default:
      return state;
  }
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  // делаем функцию асинхронной
  let meData = await authAPI.me(); // await заставляет ждать до тех пор, пока промис справа от await не выполнится
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string): ThunkType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodesEnum.Success) {
    // success, get auth data
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === ResultCodesEnum.Captcha) {
      dispatch(getCaptchaUrl());
    }

    let message =
      data.messages.length > 0
        ? data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  try {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
  } catch (error) {
    debugger;
  }
};

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};
export default authReducer;
