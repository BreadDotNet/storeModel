import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productsReducer from './reducers'

const rootReducer = combineReducers({
    productsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))