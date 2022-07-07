import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { GET_PRODUCTS, ADD_TO_ORDER, REMOVE_TO_ORDER, AUTHENTICATED, NOT_AUTHENTICATED } from './actionTypes'

const THEAME_OF_BOOK = 'quilting'

const BASE_URl = 'http://192.168.100.3:8000'



const setToken = (token) => {
    AsyncStorage.setItem('token', token)
}

const getToken = () => {
    AsyncStorage.getItem('token')
}

const deleteToken = () => {
    AsyncStorage.removeItem('token')
}

export const signUp = ({name, password}) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BASE_URl}/register`, {name: name, password: password})
            if (res.data) {
                setToken(res.data.accessToken)
                dispatch({
                    type: AUTHENTICATED,
                    payload: res.data.accessToken
                }) 
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const logIn = (user) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BASE_URl}/login`, {name: user.name, password: user.password})
            if (res.data) {
                setToken(res.data.accessToken)
                console.log(res.data.accessToken)
                dispatch({
                    type: AUTHENTICATED,
                    payload: res.data.accessToken
                })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const logOut = () => {
    return async dispatch => {
        try {
            const token = getToken()
            const res = await axios.post(`${BASE_URl}/logout`, {token: token})
            if (res.data.user) {
                deleteToken()
                return res.json().then(() => {
                    dispatch({
                        type: NOT_AUTHENTICATED
                    })
                }) 
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const cheakAuth = () => {
    return async dispatch => {
        try {
            if (getToken()) {
                dispatch({
                    type: AUTHENTICATED
                })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const getProducts = () => {
    try {
        return async dispatch => {
            const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${THEAME_OF_BOOK}`)

            if (res.data) {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data.items,
                })
            }
            else console.log('Unable to fetch')
        }
    }
    catch (error) {
        console.log(error)
    }
} 

export const addToOrder = product => dispatch => {
    dispatch({
        type: ADD_TO_ORDER,
        payload: product,
    })
}

export const removeToOrder = product => dispatch => {
    dispatch({
        type: REMOVE_TO_ORDER,
        payload: product,
    })
}