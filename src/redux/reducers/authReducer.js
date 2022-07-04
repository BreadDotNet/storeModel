import jwtDecode from 'jwt-decode'
import { AsyncStorage } from 'react-native'
import { AUTHENTICATED, NOT_AUTHENTICATED } from '../action/actionTypes'

const initialState = {
    authCheak: false,
    loggedIn: false,
    currentUser: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATED:
            return {
                authCheak: true,
                loggedIn: true,
                currentUser: action.payload
            }
        case NOT_AUTHENTICATED:
            return {
                authCheak: false,
                loggedIn: false,
                currentUser: {}
            }
        default:
            return state
    }
}

export default authReducer