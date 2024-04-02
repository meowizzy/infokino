import { CLEAR_FORM, SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from "../constants/auth";

const initialState = {
    email: "",
    password: "",
}
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_EMAIL:
            return { ...state, email: action.payload }
        case SET_USER_PASSWORD:
            return { ...state, password: action.payload }
        case CLEAR_FORM:
            return {
                ...state,
                email: "",
                password: ""
            }
        default:
            return state;
    }
};

export const setLoginEmail = (value) => {
    return {
        type: SET_USER_EMAIL,
        payload: value
    }
};

export const setLoginPassword = (value) => {
    return {
        type: SET_USER_PASSWORD,
        payload: value
    }
};

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