const initialState = {
    data: undefined,
    error: undefined,
    isLoading: false,
    query: [],
    _inited: false
};
export const recommendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RECOMMENDS_DATA":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: undefined,
                _inited: true,
            };
        case "SET_RECOMMENDS_LOADING":
            return {
                ...state,
                isLoading: true
            };
        case "SET_RECOMMENDS_ERROR":
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case "SET_RECOMMENDS_QUERY":
            return {
                ...state,
                query: action.payload
            }
        default:
            return state;
    }
};

export const setRecommendsData = (payload) => {
    return {
        type: "SET_RECOMMENDS_DATA",
        payload
    }
};

export const setRecommendsLoading = () => {
    return {
        type: "SET_RECOMMENDS_LOADING"
    }
};

export const setRecommendsError = (payload) => {
    return {
        type: "SET_RECOMMENDS_ERROR",
        payload
    }
};

export const setRecommendsQuery = (payload) => {
    return {
        type: "SET_RECOMMENDS_QUERY",
        payload
    }
};

export const recommendsQueryTrigger = (payload) => {
    return {
        type: "RECOMMENDS_QUERY_TRIGGER",
        payload
    }
};

export const fetchRecommendMovies = (payload) => {
    return {
        type: "FETCH_RECOMMEND_MOVIES",
        payload
    }
}