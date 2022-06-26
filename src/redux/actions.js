import axios from 'axios'

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_TO_ORDER = 'ADD_TO_ORDER'
export const REMOVE_TO_ORDER = 'REMOVE_TO_ORDER'

const THEAME_OF_BOOK = 'quilting'

export const getProducts = () => {
    try {
        return async dispatch => {
            const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${THEAME_OF_BOOK}`)
            console.log(res)
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