import {
    ADD_TO_FAVORITES_ACTION, REMOVE_FROM_FAVORITES_ACTION,
    SET_TOGGLE_FAVORITE_ERROR,
    SET_TOGGLE_FAVORITE_LOADING
} from "../constants/favorites";

const initialState = {
    favoriteId: undefined,
    isLoading: false,
    error: undefined
};
export const toggleFavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES_ACTION:
            return {
                ...state,
                favoriteId: action.payload,
                isLoading: true,
                error: undefined
            };
        case REMOVE_FROM_FAVORITES_ACTION:
            return {
                ...state,
                favoriteId: action.payload,
                isLoading: true,
                error: undefined
            }
        case SET_TOGGLE_FAVORITE_LOADING:
            return {
                ...state,
                isLoading: action.payload,
                error: undefined
            };
        case SET_TOGGLE_FAVORITE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const setToggleFavoriteLoading = (payload) => {
    return {
        type: SET_TOGGLE_FAVORITE_LOADING,
        payload
    }
};

export const setToggleFavoriteError = (payload) => {
    return {
        type: SET_TOGGLE_FAVORITE_ERROR,
        payload
    }
};

export const addToFavoritesAction = (payload) => {
    return {
        type: ADD_TO_FAVORITES_ACTION,
        payload
    };
};

export const removeFromFavoritesAction = (payload) => {
    return {
        type: REMOVE_FROM_FAVORITES_ACTION,
        payload
    };
};