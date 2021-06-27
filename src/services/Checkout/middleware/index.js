import make_API_call from "../../../providers/REST_API";
import {
    GET_SETTLE_BILL_DETAILS_SUCCESS,
    GET_SETTLE_BILL_DETAILS_FAILED
} from '../actions/actionCreator';

export const SEND_SETTLE_BILL_DETAILS_REQ = (id) => (dispatch) => {
    
    return make_API_call('get',`/promos/active/restaurants/${id}`)
      .then(res => {
        dispatch(GET_SETTLE_BILL_DETAILS_SUCCESS(res))
      })
      .catch(err => {
        const msg = 'Failed to get Settle Bill Details'
        dispatch(GET_SETTLE_BILL_DETAILS_FAILED(msg))
      })
  }