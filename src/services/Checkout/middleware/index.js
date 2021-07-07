import { checkoutReq,checkoutSuccess,checkoutFailure } from "../actions/actionCreator";

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

