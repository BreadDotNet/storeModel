import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { GET_PRODUCTS, ADD_TO_ORDER, REMOVE_TO_ORDER, AUTHENTICATED, NOT_AUTHENTICATED } from './actionTypes'

const THEAME_OF_BOOK = 'quilting'

const BASE_URl = 'http://localhost:3000'



const setToken = (token) => {
    AsyncStorage.setItem('token', token)
}

const deleteToken = () => {
    AsyncStorage.removeItem('token')
}

export const signUp = (user) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BASE_URl}/register`, {name: user.name, password: user.password})
            if (res.data) {
                setToken(res.data.token)
                return res.json().then((userJson) => {
                    dispatch({
                        type: AUTHENTICATED,
                        payload: userJson
                    })
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
                setToken(res.data.token)
                return res.json().then((userJson) => {
                    dispatch({
                        type: AUTHENTICATED,
                        payload: userJson
                    })
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
            const res = await axios.post(`${BASE_URl}/login`, {name: user.name, password: user.password})
            if (res.data) {
                setToken(res.data.token)
                return res.json().then((userJson) => {
                    dispatch({
                        type: AUTHENTICATED,
                        payload: userJson
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
            const res = await axios.post(`${BASE_URl}/login`, {name: user.name, password: user.password})
            if (res.data) {
                setToken(res.data.token)
                return res.json().then((userJson) => {
                    dispatch({
                        type: AUTHENTICATED,
                        payload: userJson
                    })
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