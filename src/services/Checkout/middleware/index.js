import make_API_call from "../../../providers/REST_API";
import {
    // GET_SETTLE_BILL_DETAILS_SUCCESS,
    // GET_SETTLE_BILL_DETAILS_FAILED,
    settleBillReq,
    settleBillSuccess,
    settleBillFailure
} from '../actions/actionCreator';
import { checkoutReq,checkoutSuccess,checkoutFailure } from "../actions/actionCreator";

// export const SEND_SETTLE_BILL_DETAILS_REQ = (id) => (dispatch) => {
    
//     return make_API_call('get',`/promos/active/restaurants/${id}`)
//       .then(res => {
//         dispatch(GET_SETTLE_BILL_DETAILS_SUCCESS(res))
//       })
//       .catch(err => {
//         const msg = 'Failed to get Settle Bill Details'
//         dispatch(GET_SETTLE_BILL_DETAILS_FAILED(msg))
//       })
//   }

export const  checkout = () =>async (dispatch,getState)=>{
    try{ dispatch(checkoutReq())
     const resp= await make_API_call('post',"/sessions/active/request/checkout/",{payment_mode:"rzrpay"})
     if(resp.status===200){
       dispatch(checkoutSuccess());
     }
   }catch(err){
      dispatch(checkoutFailure(err.message));
     }
   }

export const  getSettleBill = (session_id) =>async (dispatch,getState)=>{
    try{ dispatch(settleBillReq())
     const resp= await make_API_call('get',`/sessions/${session_id}/manage/bill/ `)
     if(resp.status===200){
       dispatch(settleBillSuccess(resp.data));
     }
   }catch(err){
     console.log(err);
      dispatch(settleBillFailure(err));
     }
   }
