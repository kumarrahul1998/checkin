import ACTION from "./actionTypes"

export const checkoutReq = () =>({
  type: ACTION.CHECKOUT_REQ,
})

export const checkoutSuccess=(payload)=>({
  type: ACTION.CHECKOUT_SUCCESS,
  payload
})

export const checkoutFailure=(payload)=>({
  type: ACTION.CHECKOUT_FAILURE,
  payload
})


