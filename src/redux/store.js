import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productsReducer from './reducers/productReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    productsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))