import {
    SET_FAVORITES,
    SET_FAVORITES_LOADING,
    SET_FAVORITES_ERROR,
    SET_USER_FAVORITES,
    FAVORITES_ACTION
} from "../constants/favorites";

const initialState = {
    data: undefined,
    dataId: undefined,
    userFavorites: undefined,
    isLoading: false,
    error: undefined
};

export const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FAVORITES:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: undefined
            };
        case SET_USER_FAVORITES:
            return {
                ...state,
                userFavorites: action.payload
            };
        case SET_FAVORITES_LOADING:
            return {
                ...state,
                isLoading: true,
                error: undefined
            };
        case SET_FAVORITES_ERROR:
            return {
                ...state,
                isLoading: false,
                data: undefined,
                error: action.payload
            };
        default:
            return state;
    }
};

export const setFavorites = (payload) => {
    return {
        type: SET_FAVORITES,
        payload
     }
};

export const setUserFavorites = (payload) => {
    return {
        type: SET_USER_FAVORITES,
        payload
    }
};

export const setFavoritesLoading = () => {
    return {
        type: SET_FAVORITES_LOADING
     }
};

export const setFavoritesError = (payload) => {
    return {
        type: SET_FAVORITES_ERROR,
        payload
     }
};

export const favoritesAction = () => {
    return { type: FAVORITES_ACTION };
}