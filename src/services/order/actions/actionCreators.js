import ACTION from "./actionTypes";

export const GET_ORDER_STATUS_SUCCESS = (payload) => ({
    type: ACTION.GET_ORDER_STATUS,
    payload
  })

export const GET_ORDER_STATUS_FAILED = (msg) => ({
    type: ACTION.FAILED_TO_GET_ORDER_STATUS,
    msg
  })

export const SEND_PAYMENT_REQUEST_SUCCESS = payload => ({
  type: ACTION.GET_PAYMENT_DETAILS,
  payload
})

export const SEND_PAYMENT_REQUEST_FAILED = payload => ({
  type : ACTION.PAYMENT_DEATILS_LOADING_FAILED,
  payload
})