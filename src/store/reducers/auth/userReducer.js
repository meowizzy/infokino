import {
    SET_USER_DATA,
    CLEAR_USER_DATA,
    SET_USER_IS_LOADING,
    SET_USER_ERROR, USER, SET_USER_DATA_AVATAR,
} from "../../constants/auth";
import { LOCAL_STORAGE_AUTH } from "@app/constants";
import {toast} from "react-toastify";

const initialState = {
    authData: undefined,
    isLoading: false,
    _inited: false,
    error: undefined
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                authData: action.payload,
                _inited: true,
                isLoading: false,
                error: undefined
            };
        case SET_USER_DATA_AVATAR:
            return {
                ...state,
                authData: { ...state.authData, avatar: action.payload }
            }
        case CLEAR_USER_DATA:
            localStorage.removeItem(LOCAL_STORAGE_AUTH);
            return {
                ...state,
                authData: undefined,
                isLoading: false,
                error: undefined,
                _inited: false
            }
        case SET_USER_IS_LOADING:
            return {
                ...state,
                error: undefined,
                isLoading: action.payload
            }
        case SET_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                _inited: true,
                isLoading: false
            }
        default:
            return state;
    }
};

export const setUserDataAvatar = (payload) => {
    return { type: "SET_USER_DATA_AVATAR", payload };
}

export const setUserData = (payload) => {
    return { type: SET_USER_DATA, payload }
};

export const clearUserData = () => {
    return { type: CLEAR_USER_DATA }
};

export const setUserIsLoading = (payload) => {
    return { type: SET_USER_IS_LOADING, payload }
};

export const setUserError = (payload) => {
    return { type: SET_USER_ERROR, payload }
};

export const fetchUserData = () => {
    return { type: USER };
};
