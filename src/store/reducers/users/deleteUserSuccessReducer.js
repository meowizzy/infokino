const initialState = {
    isLoading: false,
    success: undefined,
    error: undefined,
}
export const deleteUserSuccessReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_USER_LOADING":
            return {
                ...state,
                success: undefined,
                isLoading: true
            };
        case "DELETE_USER_ERROR":
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                success: false
            };
        case "DELETE_USER_SUCCESS":
            return {
                ...state,
                error: undefined,
                isLoading: false,
                success: true
            };
        default:
            return state;
    }
};

export const deleteUserLoading = () => {
    return {
        type: "DELETE_USER_LOADING"
    }
}

export const deleteUserError = () => {
    return {
        type: "DELETE_USER_ERROR"
    }
}

export const deleteUserSuccess = () => {
    return {
        type: "DELETE_USER_SUCCESS",
    }
}

export const triggerDeleteUser = (payload) => {
    return {
        type: "TRIGGER_DELETE_USER",
        payload
    }
}