import { CLEAR_FORM, SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN, SET_LOGIN_VALIDATE_ERROR } from "../constants/auth";

const initialState = {
    email: "",
    password: "",
    error: undefined
}
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_EMAIL:
            return { ...state, email: action.payload }
        case SET_USER_PASSWORD:
            return { ...state, password: action.payload }
        case SET_LOGIN_VALIDATE_ERROR:
            return { ...state, error: action.payload }
        case CLEAR_FORM:
            return {
                ...state,
                email: "",
                password: "",
                error: ""
            }
        default:
            return state;
    }
};

export const setLoginEmail = (payload) => {
    return {
        type: SET_USER_EMAIL,
        payload
    }
};

export const setLoginPassword = (payload) => {
    return {
        type: SET_USER_PASSWORD,
        payload
    }
};

export const setLoginValidateError = (payload) => {
    return {
        type: SET_LOGIN_VALIDATE_ERROR,
        payload
    }
}

export const clearForm = () => {
    return {
        type: CLEAR_FORM
    }
};

export const loginAction = () => {
    return {
        type: LOGIN
    }
};