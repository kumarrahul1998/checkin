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
})


export const checkOtpReq = (payload)=>({
  type: ACTION.CHECK_OTP_REQ,
  payload,
})

export const checkOtpSuccess =(payload)=>({
  type: ACTION.CHECK_OTP_SUCCESS,
})

export const checkOtpFailure = (payload)=>({
  type: ACTION.CHECK_OTP_FAILURE,
})

export const sendNameReq=(payload)=>({
  type: ACTION.SEND_NAME_REQ,
})

export const sendNameSuccess= (payload)=>({
  type: ACTION.SEND_NAME_SUCCESS,
})

export const sendNameFailure= (payload)=>({
  type: ACTION.SEND_NAME_FAILURE,
})
