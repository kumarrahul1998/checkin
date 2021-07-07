import ACTION from "./actionTypes"

// export const GET_SETTLE_BILL_DETAILS_SUCCESS = (payload) => ({
//     type: ACTION.GET_SETTLEBILL_DEATILS,
//     payload
//   })

// export const GET_SETTLE_BILL_DETAILS_FAILED = (payload) => ({
//   type: ACTION.GET_SETTLEBILL_DEATILS,
//   payload
// })
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

export const settleBillReq = () =>({
  type: ACTION.SETTLE_BILL_REQ,
})

export const settleBillSuccess=(payload)=>({
  type: ACTION.SETTLE_BILL_SUCCESS,
  payload
})

export const settleBillFailure=(payload)=>({
  type: ACTION.SETTLE_BILL_FAILURE,
  payload
})

