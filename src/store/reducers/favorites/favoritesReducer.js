const initialState = {
    movieId: undefined,
    data: undefined,
    userFavoritesData: undefined,
    isLoading: false,
    error: undefined
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_FAVORITES":
            return {
                ...state,
                movieId: action.payload
            };
        case "SET_USER_FAVORITES_DATA":
            return {
                ...state,
                isLoading: false,
                userFavoritesData: action.payload,
                error: undefined
            }
        case "SET_FAVORITES_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SET_FAVORITES_DATA":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: undefined
            }
        case "SET_FAVORITES_ERROR":
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case "RESET_FAVORITES_DATA":
            return {
                ...state,
                data: undefined,
                userFavoritesData: undefined,
                movieId: undefined,
                isLoading: false
            }
        default:
            return state;
    }
};

export const toggleFavoritesAction = (payload) => {
    return {
        type: "TOGGLE_FAVORITES",
        payload
    }
};

export const setFavoritesLoading = () => {
    return {
        type: "SET_FAVORITES_LOADING"
    }
};

export const setFavoritesData = (payload) => {
    return {
        type: "SET_FAVORITES_DATA",
        payload
    }
};

export const setFavoritesError = (payload) => {
    return {
        type: "SET_FAVORITES_ERROR",
        payload
    }
};

export const setUserFavoritesData = (payload) => {
    return {
        type: "SET_USER_FAVORITES_DATA",
        payload
    }
};

export const resetFavoritesData = () => {
    return {
        type: "RESET_FAVORITES_DATA"
    };
};
export const getFavoritesAction = () => {
    return { type: "FAVORITES_ACTION" }
}

export const clearFavoritesAction = () => {
    return { type: "CLEAR_FAVORITES_ACTION" }
}