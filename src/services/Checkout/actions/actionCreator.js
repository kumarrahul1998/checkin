import ACTION from "./actionTypes"

export const GET_SETTLE_BILL_DETAILS_SUCCESS = (payload) => ({
    type: ACTION.GET_SETTLEBILL_DEATILS,
    payload
  })

export const GET_SETTLE_BILL_DETAILS_FAILED = (payload) => ({
  type: ACTION.GET_SETTLEBILL_DEATILS,
  payload
})