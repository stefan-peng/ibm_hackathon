import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions/actionTypes'

const initialState = {}

export const authentication = (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                isAuthenticating: true,
                user: action.user
            }
        case LOGIN_SUCCESS:
            return {
                authenticated: true,
                user: action.user
            }
        case LOGIN_FAILURE:
            return {}
        case LOGOUT:
            return {}
        default:
            return state
    }
}