import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const sendPhoneNoReq = (payload)=>({
  type: ACTION.SEND_PHONE_NO_REQ,
  payload,
})

export const sendPhoneNoSuccess = (payload)=>({
  type: ACTION.SEND_PHONE_NO_SUCCESS,
  payload,
})

export const sendPhoneNoFailure = (payload)=>({
  type: ACTION.SEND_PHONE_NO_FAILURE,
  payload,
})


export const checkOtpReq = (payload)=>({
  type: ACTION.CHECK_OTP_REQ,
  payload,
})

export const checkOtpSuccess =(payload)=>({
  type: ACTION.CHECK_OTP_SUCCESS,
  payload
})

export const checkOtpFailure = (payload)=>({
  type: ACTION.CHECK_OTP_FAILURE,
  payload
})

export const sendNameReq=(payload)=>({
  type: ACTION.SEND_NAME_REQ,
})

export const sendNameSuccess= (payload)=>({
  type: ACTION.SEND_NAME_SUCCESS,
  payload
})

export const sendNameFailure= (payload)=>({
  type: ACTION.SEND_NAME_FAILURE,
  payload
})

// export const setLoginState = (payload)=>({
//   type: ACTION.SET_LOGIN,
//   payload
// })