import ACTION from "../actions/actionTypes";
import HOMEACTION from '../../Home/actions/actionTypes';

const initialState = {
  items: {
    isLoading: false,
    data: [],
    error: ""
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION.SET_STATE:
      return { ...state, ...payload }

    case HOMEACTION.SEND_TO_CART:
      return {
        ...state,
        items: {
          ...state.items,
          data: [...state.items.data, payload]
        }
      }

    case ACTION.ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          data: [...state.items.data, payload]
        }
      }

    case ACTION.REMOVE_ITEM:
    const index= state.items.data.findIndex((item)=>item.name==payload.name)  
    const list= state;
    list.items.data.splice(index,1);
    return {
        ...state,
        items: {
          ...state.items,
          data: list.items.data,
        }
      }

    default:
      return state
  }
}
const initialAmountState= {
  Total: 0,
}

export const AmountReducer = (state=initialAmountState,{type,payload})=>{
  switch(type){
    case ACTION.CALCULATE_AMOUNT: return {
      ...state,
      ...payload,
    } 
    default: return state
  }
}