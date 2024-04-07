import {
    CLEAR_COMMENT_FORM,
    CREATE_COMMENT,
    CREATE_COMMENT_ERROR,
    CREATE_COMMENT_LOADING,
    SET_COMMENT_FORM_DATA,
    SET_CREATED_COMMENT
} from "../constants/comments";

const initialState = {
    formData: {
        rating: "",
        comment: ""
    },
    isLoading: false,
    error: undefined
};
export const createCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENT_FORM_DATA:
            return {
                ...state,
                formData: action.payload,
                isLoading: false,
                error: undefined
            }
        case CREATE_COMMENT_LOADING:
            return {
                ...state,
                isLoading: true,
                error: undefined
            }
        case CREATE_COMMENT_ERROR:
            return {
                ...state,
                formData: {
                    rating: "",
                    comment: ""
                },
                error: action.payload,
                isLoading: false
            }
        case CLEAR_COMMENT_FORM:
            return {
                ...state,
                formData: {
                    rating: "",
                    comment: ""
                },
                error: undefined,
                isLoading: false
            }
        default: {
            return state;
        }
    }
};

export const setCommentFormData = (payload) => {
    return {
        type: SET_COMMENT_FORM_DATA,
        payload
    };
};

export const createCommentLoading = () => {
    return {
        type: CREATE_COMMENT_LOADING
    };
};

export const setCreatedComment = (payload) => {
    return {
        type: SET_CREATED_COMMENT,
        payload
    }
};

export const createCommentError = (payload) => {
    return {
        type: CREATE_COMMENT_ERROR,
        payload
    };
};

export const clearCommentForm = () => {
    return {
        type: CLEAR_COMMENT_FORM
    }
};

export const createCommentAction = () => {
    return { type: CREATE_COMMENT }
}