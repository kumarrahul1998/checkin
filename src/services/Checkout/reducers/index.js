import actionTypes from "../actions/actionTypes"
import ACTION from "../actions/actionTypes"

const initialState = {
  settleBillDetails: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION.GET_SETTLEBILL_DEATILS:
      return{
        ...state,
        settleBillDetails: payload
      }

    default:
      return state
  }
}
