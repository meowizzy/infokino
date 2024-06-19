import {
    CLEAR_USERS_LIST,
    GET_USERS_LIST,
    SET_USERS_ERROR,
    SET_USERS_LIST,
    SET_USERS_LOADING
} from "../../constants/usersList";

const initialState = {
    data: undefined,
    isLoading: false,
    error: undefined
}

export const usersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: undefined
            };
        case SET_USERS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case SET_USERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLEAR_USERS_LIST:
            return {
                ...state,
                isLoading: false,
                error: undefined,
                data: undefined
            };
        default:
            return state;
    }
}

export const getUsersList = () => {
    return {
        type: GET_USERS_LIST
    }
}

export const setUsersList = (payload) => {
    return {
        type: SET_USERS_LIST,
        payload
    }
}

export const setUsersListLoading = () => {
    return {
        type: SET_USERS_LOADING
    }
}

export const setUsersListError = (payload) => {
    return {
        type: SET_USERS_ERROR,
        payload
    }
}

export const clearUsersList = () => {
    return {
        type: CLEAR_USERS_LIST
    }
}