import {
    SET_USER_DATA,
    CLEAR_USER_DATA,
    SET_USER_IS_LOADING,
    SET_USER_ERROR, USER,
} from "../constants/auth";

const initialState = {
    authData: undefined,
    isLoading: false,
    error: undefined
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                authData: action.payload
            };
        case CLEAR_USER_DATA:
            return state;
        case SET_USER_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case SET_USER_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
};


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
