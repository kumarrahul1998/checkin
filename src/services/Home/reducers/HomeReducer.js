import ACTION from "../actions/actionTypes"

const initState = {
    details: {
        isLoading: 'idle',
        data: {
            "pk": 0,
            "bill": "",
            "checked_in": "",
            "checked_out": null,
            "restaurant": {
                "pk": "",
                "display_name": "",
                "display_pic_url": ""
            },
            "is_public": true,
            "host": null,
            "customers": [
                {
                    "pk": 0,
                    "user": {
                        "pk": 0,
                        "display_name": "",
                        "display_pic_url": null
                    },
                    "is_owner": true,
                    "is_payee": false,
                    "is_accepted": true
                }
            ],
            "is_requested_checkout": false
        },
        error: ""
    },
    cart: {},
    trendingDishes: {
        isLoading: true,
        data: [],
        error: ""
    },
    serviceRequest : [],
    requestData:{
        isLoading:'idle',
        data:[],
        error:'',
    }
    
}


export const HomeReducer = (state = initState, action) => {
    switch (action.type) {

        case ACTION.SET_STATE:
            return {
                ...state,
                ...action.payload
            }

        case ACTION.LOAD_RESTAURENT_DETAILS_REQ:
            return {
                ...state,
                details: {
                    ...state.details,
                    error: "",
                    isLoading: true
                }
            }
        case ACTION.SEND_REQUEST:
            return {
                ...state,
                serviceRequest : [
                    ...state.serviceRequest,
                    {request : action.request, status: action.status}
                ]
            }
        case ACTION.LOAD_REQUEST_DATA_REQUEST:
            return {
                ...state,
                requestData:{
                    ...state.requestData,
                    isLoading:true,
                },
            }
            case ACTION.LOAD_REQUEST_DATA_SUCCESS:
            return {
                ...state,
                requestData:{
                    ...state.requestData,
                    data:[...action.payload],
                    isLoading:false,
                },
            }
            case ACTION.LOAD_REQUEST_DATA_FAILURE:
            return {
                ...state,
                requestData:{
                    ...state.requestData,
                    isLoading:false,
                    error:action.payload,
                },
            }
        case ACTION.LOAD_RESTAURENT_DETAILS_SUCCESS:
            return {
                ...state,
                details: {
                    isLoading: false,
                    data: action.payload,
                    error: ""
                }
            }

        case ACTION.LOAD_RESTAURENT_DETAILS_FAILURE:
            return {
                ...state,
                details: {
                    ...state.details,
                    error: action.payload,
                    isLoading: false
                }
            }

        case ACTION.LOAD_TRENDING_DISHES_REQ:
            return {
                ...state,
                trendingDishes: {
                    ...state.trendingDishes,
                    isLoading: true,
                    error: ""
                }
            }

        case ACTION.LOAD_TRENDING_DISHES_SUCCESS:
            return {
                ...state,
                trendingDishes: {
                    isLoading: false,
                    data: action.payload,
                    error: ""
                }
            }

        case ACTION.LOAD_TRENDING_DISHES_FAILURE:
            return {
                ...state,
                trendingDishes: {
                    isLoading: false,
                    data: [],
                    error: ""
                }
            }


        default:
            return state
    }
}