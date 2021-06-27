import make_API_call from "../../../providers/REST_API";
import {GET_ORDER_STATUS_SUCCESS,
  GET_ORDER_STATUS_FAILED,
  SEND_PAYMENT_REQUEST_SUCCESS,
  SEND_PAYMENT_REQUEST_FAILED
} from '../actions/actionCreators';

export const SEND_ORDER_STATUS_REQ = (id) => (dispatch) => {
    
    return make_API_call('get',`/promos/active/restaurants/${id}`)
      .then(res => {
        dispatch(GET_ORDER_STATUS_SUCCESS(res))
      })
      .catch(err => {
        const msg = 'Failed to get Order Status'
        dispatch(GET_ORDER_STATUS_FAILED(msg))
      })
  }

export const PAYMENT_SUCCESS_REQ = (id) => (dispatch) => {
  
  return make_API_call('get',`/promos/active/restaurants/${id}`)
    .then(res => {
      dispatch(SEND_PAYMENT_REQUEST_SUCCESS(res))
    })
    .catch(err => {
      const msg = 'Failed to get Payment Details'
      dispatch(SEND_PAYMENT_REQUEST_FAILED(msg))
    })
}