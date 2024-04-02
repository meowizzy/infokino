import {
    SET_USER_AVATAR,
    SET_USER_EMAIL,
    SET_USER_NAME,
    SET_USER_PASSWORD,
    REGISTER,
    SET_REGISTER_VALIDATE_ERROR, CLEAR_FORM
} from "../constants/auth";
import {validateRegisterForm} from "../../components/AuthComponent/Register/validateRegisterForm";

const initialState = {
    name: "",
    email: "",
    password: "",
    avatar: "",
    error: undefined
}
export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload }
        case SET_USER_EMAIL:
            return { ...state, email: action.payload }
        case SET_USER_PASSWORD:
            return { ...state, password: action.payload }
        case SET_USER_AVATAR:
            return { ...state, avatar: action.payload }
        case SET_REGISTER_VALIDATE_ERROR:
            return { ...state, error: action.payload }
        case CLEAR_FORM :
            return {
                ...state,
                name: "",
                email: "",
                password: "",
                avatar: "",
                error: ""
            }
        default:
            return state;
    }
};

export const setRegisterUserName = (value) => {
    return {
        type: SET_USER_NAME,
        payload: value
    }
};

export const setRegisterEmail = (value) => {
    return {
        type: SET_USER_EMAIL,
        payload: value
    }
};

export const setRegisterPassword = (value) => {
    return {
        type: SET_USER_PASSWORD,
        payload: value
    }
};

export const setRegisterAvatar = (value) => {
    return {
        type: SET_USER_AVATAR,
        payload: value
    }
};

export const clearForm = () => {
    return {
        type: CLEAR_FORM
    }
};

export const setRegisterValidateError = (value) => {
    return {
        type: SET_REGISTER_VALIDATE_ERROR,
        payload: value
    }
};

export const registerAction = () => {
    return { type: REGISTER }
}