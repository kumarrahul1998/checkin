import ACTION from "./actionTypes";
import make_API_call from "../../../providers/REST_API";
export const getAmountSuccess = payload => ({
  type: ACTION.GET_AMOUNT_SUCCESS,
  payload
})

export const getAmountFail = payload => ({
  type: ACTION.GET_AMOUNT_FAIL,
  payload
})

export const getOrderStatusSuccess = payload => ({
  type: ACTION.GET_ORDER_STATUS_SUCCESS,
  payload
})

export const getOrderStatusFailure = payload => ({
  type: ACTION.GET_ORDER_STATUS_FAIL,
  payload
})

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload
})

export const loadRestaurentDetailsReq = () => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_REQ,
})

export const loadRestaurentDetailsSuccess = (payload) => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_SUCCESS,
  payload
})

export const loadRestaurentDetailsFailure = () => ({
  type: ACTION.LOAD_RESTAURENT_DETAILS_FAILURE,
})

export const loadOrdersReq = () => ({
  type: ACTION.LOAD_ORDERS_REQ,
})

export const loadOrdersSuccess = (payload) => ({
  type: ACTION.LOAD_ORDERS_SUCCESS,
  payload
})


export const loadOrdersFailure = (payload) => ({
  type: ACTION.LOAD_ORDERS_FAILURE,
  payload
})

export const loadTrendingDishesReq = () => ({
  type: ACTION.LOAD_TRENDING_DISHES_REQ,
})

export const loadTrendingDishesSuccess = (payload) => ({
  type: ACTION.LOAD_TRENDING_DISHES_SUCCESS,
  payload,
})
export const loadTrendingDishesFailure = (payload) => ({
  type: ACTION.LOAD_TRENDING_DISHES_FAILURE,
  payload
})
export const sendServiceRequest = (req,status)=>async (dispatch)=>{
  dispatch({type: ACTION.SEND_REQUEST, request : req, status : status,isLoading:true})
  let serviceCode;
  if(req==='Please send a person to clean the room.'){
    serviceCode= 1;
  }else{
    serviceCode= 3;
  }
  try{
  const resp =  await make_API_call('post','/sessions/active/request/service/',{service:serviceCode,message:req});
  if(resp.status===200) dispatch({type:ACTION.SEND_REQUEST_SUCCESS,payload:resp.data,isLoading:false})
  
}catch(err){
    dispatch({type:ACTION.SEND_REQUEST_FAILURE,payload:"request cant be sent",isLoading:false})
  }
}

export const loadRequestData=()=>async (dispatch)=>{
  dispatch({type:ACTION.LOAD_REQUEST_DATA_REQUEST});
  try{
    const resp = await make_API_call('get','/sessions/active/events/')
    if(resp.status===200) dispatch({type:ACTION.LOAD_REQUEST_DATA_SUCCESS,payload:[...resp.data]})
  }
  catch(err){
    dispatch({type:ACTION.LOAD_REQUEST_DATA_FAILURE,payload:"Data cant be loaded"});
  }
}