import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const addItem =(payload)=>({
  type: ACTION.ADD_ITEM,
  payload,
})

export const increaseItem =(payload)=>({
  type: ACTION.INCREASE_ITEM,
  payload,
})

export const removeItem =(payload)=>({
  type: ACTION.REMOVE_ITEM,
  payload,
})

export const decreaseItem =(payload)=>({
  type: ACTION.DECREASE_ITEM,
  payload,
})

export const calculateAmount =(payload)=>({
  type: ACTION.CALCULATE_AMOUNT,
  payload,
})



export const placeOrderReq = () =>({
  type: ACTION.PLACE_ORDER_REQ,
})

export const placeOrderSuccess=(payload)=>({
  type: ACTION.PLACE_ORDER_SUCCESS,
  payload
})

export const placeOrderFailure=(payload)=>({
  type: ACTION.PLACE_ORDER_FAILURE,
  payload
})