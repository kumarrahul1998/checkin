import { setStateAction,sendPhoneNoReq,sendPhoneNoSuccess,sendPhoneNoFailure,sendNameReq,sendNameFailure,sendNameSuccess,checkOtpReq,checkOtpFailure,checkOtpSuccess } from "../actions/actionCreator"
import fb from "firebase"
import firebase from "../../../fbConfig"
import make_API_call from "../../../providers/REST_API"

export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}

export const _authenticate_via_number = (number) =>async (dispatch) => {
  try{ dispatch(sendPhoneNoReq()) 
  const resp = await make_API_call('post','/auth/login',number);
   if(resp.status===200){
     dispatch(sendPhoneNoSuccess(number));
   }
  }catch(err){
    dispatch(sendPhoneNoFailure(err))

  } 
  // window.recaptchaVerifier = new fb.auth.RecaptchaVerifier('recaptcha-container', {
  //   'size': 'normal',
  //   'callback': function (response) {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     onFinish();
  //   }
  // });
  // // [END appVerifier]
  // window.recaptchaVerifier.render().then(function (widgetId) {
  //   window.recaptchaWidgetId = widgetId;

  // });

  // function onFinish() {
  //   const appVerifier = window.recaptchaVerifier;
  //   return firebase.auth().signInWithPhoneNumber(number, appVerifier)
  //     .then((confirmationResult) => {
  //       console.log(confirmationResult);
  //       // return make_api_call
  //     }).catch(err => {
  //       console.error(err)
  //     })
  // }

}

export const checkOtp =(otp)=>async (dispatch)=>{
  try{ dispatch(checkOtpReq()) 
    const resp = await make_API_call('post','/auth/otp',otp);
     if(resp.status===200){
       dispatch(checkOtpSuccess(resp.data));
     }
    }catch(err){
      dispatch(checkOtpFailure(err))
  
    } 
}

export const sendName =(firstName,lastName)=>async (dispatch)=>{
  try{ dispatch(sendNameReq()) 
    const resp = await make_API_call('post','/auth/otp',{firstName,lastName});
     if(resp.status===200){
       dispatch(sendNameSuccess(resp.data));
     }
    }catch(err){
      dispatch(sendNameFailure(err))
  
    } 
}

