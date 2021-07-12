import { setStateAction,sendPhoneNoReq,sendPhoneNoSuccess,sendPhoneNoFailure,sendNameReq,sendNameFailure,sendNameSuccess,checkOtpReq,checkOtpFailure,checkOtpSuccess, getSessionDetailsReq, getSessionDetailsSuccess, getSessionDetailsFailure} from "../actions/actionCreator"
import fb from "firebase"
// import firebase from "../../../fbConfig"
import make_API_call from "../../../providers/REST_API"
import firebase from "../../../firebase";
export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}


export const _authenticate_via_number = (number) =>async (dispatch) => {
  try{ dispatch(sendPhoneNoReq()) 
  // const resp = await make_API_call('post','/auth/login',number);
  let recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
      const el = window.document.getElementById('recaptcha-container');
    if (el != null) {
      el.remove();
    }
      console.log("captcha")
    },
  });
  const resp = await firebase.auth().signInWithPhoneNumber(`+91${number}`,recaptchaVerifier);
  if(resp){
   console.log(resp);
    window.confirmationResult = resp;
     dispatch(sendPhoneNoSuccess(resp));
     dispatch(_set_state({
      askingProfileDetails: false,
      askingContact: false,
      askingOTP: true,
    }));
   }
  }catch(err){
    console.log(err);
    dispatch(sendPhoneNoFailure(err.message))

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
    // const resp = await make_API_call('post','/auth/otp',otp);
   const resp = await window.confirmationResult.confirm(otp);
    if(resp){
      console.log(resp);
       dispatch(checkOtpSuccess(resp.user));
       dispatch(_set_state({
        askingProfileDetails: true,
        askingContact: false,
        askingOTP: false,
      }));
      }
    }catch(err){
      dispatch(checkOtpFailure(err))
  
    } 
}
export const getSessionDetails =()=>async (dispatch)=>{
  try{ dispatch(getSessionDetailsReq()) 
    const resp = await make_API_call('get','/sessions/active/');
     dispatch(getSessionDetailsSuccess(resp));
      
    }catch(err){
      dispatch(getSessionDetailsFailure(err))
    } 
}

export const sendName =(firstName,lastName,token)=>async (dispatch)=>{
  try{ dispatch(sendNameReq()) 
    // const resp = await make_API_call('post','/auth/authenticate/',{username:`${firstName} ${lastName}`,id_token:token.ya});
    //  if(resp.status===200){
       dispatch(sendNameSuccess({username:`${firstName} ${lastName}`}));
        // dispatch(setLoginState())
        dispatch(getSessionDetails())
        dispatch(_set_state({
          login: {
            isLoggedIn: true
          }
        }))
 
      // }
    }catch(err){
      dispatch(sendNameFailure(err))
  
    } 
}


