import actionTypes from "../actions/actionTypes"
import ACTION from "../actions/actionTypes"

const initialState = {
  settleBillDetails: { isLoading: "idle",data:[],error:{}}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    // case ACTION.GET_SETTLEBILL_DEATILS:
    //   return{
    //     ...state,
    //     settleBillDetails: payload
    //   }
    case ACTION.SETTLE_BILL_REQ: 
    return {
      ...state,
      settleBillDetails:{...state.settleBillDetails,
        isLoading:true,
      }
    }
    case ACTION.SETTLE_BILL_SUCCESS: 
    return {
      ...state,
      settleBillDetails:{...state.settleBillDetails,
        isLoading:false,
        data: [...payload]
      }
    }
    case ACTION.SETTLE_BILL_FAILURE: 
    return {
      ...state,
      settleBillDetails:{...state.settleBillDetails,
        isLoading:true,
        error: payload
      }
    }
    default:
      return state
  }
}
