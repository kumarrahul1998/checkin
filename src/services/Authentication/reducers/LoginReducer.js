import ACTION from "../actions/actionTypes"

const initState = {
  isLoggedIn: false,
  contact: {
    isLoading:'idle',
    payload:'',
    error:null
  },
  otp: {
    isLoading:'idle',
    payload:'',
    error:null
  },
  name: {
    isLoading:'idle',
    payload:'',
    error:null
  },
}

export const LoginReducer = (state = initState, action) => {
  switch (action.type) {

    case ACTION.SET_STATE:
      return {
        ...state,
        ...action.payload
      }
    case ACTION.SEND_PHONE_NO_REQ:
      return {
        ...state,
        contact:{
          ...state.contact,
          isLoading:true,
        }
      }
      case ACTION.SEND_PHONE_NO_SUCCESS:
        return {
          ...state,
          contact:{
            ...state.contact,
            isLoading:false,
            payload: action.payload
          }
        }
        case ACTION.SEND_PHONE_NO_FAILURE:
          return {
            ...state,
            contact:{
              ...state.contact,
              isLoading:false,
              error: action.payload
            }
          }
          case ACTION.CHECK_OTP_REQ:
            return {
              ...state,
              otp:{
                ...state.otp,
                isLoading:true,
              }
            }
            case ACTION.CHECK_OTP_SUCCESS:
              return {
                ...state,
                otp:{
                  ...state.otp,
                  isLoading:false,
                  payload: action.payload
                }
              }
              case ACTION.CHECK_OTP_FAILURE:
                return {
                  ...state,
                  otp:{
                    ...state.otp,
                    isLoading:false,
                    error: action.payload
                  }
                }
                case ACTION.SEND_NAME_REQ:
                  return {
                    ...state,
                    name:{
                      ...state.name,
                      isLoading:true,
                    }
                  }
                  case ACTION.SEND_NAME_SUCCESS:
                    return {
                      ...state,
                      name:{
                        ...state.name,
                        isLoading:false,
                        payload: action.payload
                      }
                    }
                    case ACTION.SEND_NAME_FAILURE:
                      return {
                        ...state,
                        name:{
                          ...state.name,
                          isLoading:false,
                          error: action.payload
                        }
                      }
                     
    default:
      return state
  }
}
