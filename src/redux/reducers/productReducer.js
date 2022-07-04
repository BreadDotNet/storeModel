import { GET_PRODUCTS, ADD_TO_ORDER, REMOVE_TO_ORDER} from '../action/actionTypes'

const initialState = {
    products: [],
    orders: [],
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case ADD_TO_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload],
            }
        case REMOVE_TO_ORDER:
            return {
                ...state,
                orders: state.orders.filter( product => product.id !== action.payload.id),
            }
        default:
            return state
    }
}

export default productsReducer
