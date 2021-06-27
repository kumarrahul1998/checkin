import ACTION from "../actions/actionTypes"

const initState = {
    orderStatus : false,
    paymentSuccessDetails: false
}

export default (state = initState, action) => {
    switch (action.type) {

        case ACTION.GET_ORDER_STATUS:
            return {
                ...state,
                orderStatus : action.payload
            }

        case ACTION.FAILED_TO_GET_ORDER_STATUS:
            return {
                ...state,
                orderStatus : action.msg
            }

        case ACTION.GET_PAYMENT_DETAILS:
            return {
                ...state,
                paymentSuccessDetails : action.payload
            }
        
        case ACTION.PAYMENT_DEATILS_LOADING_FAILED:
            return {
                ...state,
                paymentSuccessDetails : action.payload
            }
        default:
            return state
    }
}