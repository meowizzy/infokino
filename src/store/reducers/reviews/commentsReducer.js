import {
    SET_COMMENTS,
    SET_COMMENTS_LOADING,
    SET_COMMENTS_ERROR,
    CLEAR_COMMENTS, FILM_COMMENTS,
    SET_CREATED_COMMENT,
    DELETE_COMMENT
} from "../../constants/comments";
import { deleteReview } from "@services/reviews.service";

const initialState = {
    data: undefined,
    isLoading: false,
    error: undefined
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: undefined
            };
        case SET_CREATED_COMMENT:
            return {
                ...state,
                data: [ action.payload, ...state.data ],
                isLoading: false,
                error: undefined
            }
        case DELETE_COMMENT:
            const newData = state.data.filter(item => item.id !== action.payload);
            deleteReview(action.payload);

            return {
                ...state,
                data: newData
            }
        case SET_COMMENTS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_COMMENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLEAR_COMMENTS:
            return {
                ...state,
                data: undefined,
                error: undefined,
                isLoading: false
            };
        default:
            return state;
    }
};

export const setComments = (payload) => {
    return {
        type: SET_COMMENTS,
        payload
    }
}

export const deleteCommentAction = (id) => {
    return {
        type: DELETE_COMMENT,
        payload: id
    }
}

export const setCommentsLoading = (payload) => {
    return {
        type: SET_COMMENTS_LOADING,
        payload
    }
}

export const setCommentsError = (payload) => {
    return {
        type: SET_COMMENTS_ERROR,
        payload
    }
}
export const clearComments = () => {
    return {
        type: CLEAR_COMMENTS
    }
}
export const fetchFilmCommentsAction = () => {
    return {
        type: FILM_COMMENTS
    }
};