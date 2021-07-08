import make_API_call from "../../../providers/REST_API";
import {
    // GET_SETTLE_BILL_DETAILS_SUCCESS,
    // GET_SETTLE_BILL_DETAILS_FAILED,
    settleBillReq,
    settleBillSuccess,
    settleBillFailure,
    razorpayCallReq,
    razorpayCallFailure,
    razorpayCallSuccess,
    razorpayCallbackReq,
    razorpayCallbackSuccess,
    razorpayCallbackFailure,
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
       dispatch(checkoutSuccess("success"));
     }
   }catch(err){
      dispatch(checkoutFailure(err));
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

  export const  razorpayCall = (id) =>async (dispatch,getState)=>{
    try{ dispatch(razorpayCallReq())
     const resp= await make_API_call('post',`/payments/pay/razorpay/sessions/${id}/`)
     if(resp.status===200){
       dispatch(razorpayCallSuccess(resp.data));
     }
   }catch(err){
      dispatch(razorpayCallFailure(err));
     }
   }

   export const  razorpayCallback = (response) =>async (dispatch,getState)=>{
    try{ dispatch(razorpayCallbackReq())
     const resp= await make_API_call('post',`/payments/callback/razorpay/`,{
      payment_id: response.payment_id,
      order_id: response.order_id,
      signature: response.signature,
      })
     if(resp.status===201){
       dispatch(razorpayCallbackSuccess(resp.data));
      }
   }catch(err){
      dispatch(razorpayCallbackFailure(err));
     }
   }
 