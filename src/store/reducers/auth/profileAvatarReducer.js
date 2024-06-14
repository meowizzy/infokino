import { SET_PROFILE_AVATAR, SET_PROFILE_AVATAR_ERROR, SET_PROFILE_AVATAR_LOADING } from "../../constants/auth";

const initialState = {
    avatar: undefined,
    error: undefined,
    isLoading: false
}

export const profileAvatarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_AVATAR:
            return { ...state, avatar: action.payload, isLoading: action.payload };
        case SET_PROFILE_AVATAR_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_PROFILE_AVATAR_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
}

export const setProfileAvatar = (avatar) => {
    return { type: SET_PROFILE_AVATAR, payload: avatar };
};

export const setProfileAvatarLoading = (payload) => {
    return { type: SET_PROFILE_AVATAR_LOADING, payload };
};

export const setProfileAvatarError = (payload) => {
    return { type: SET_PROFILE_AVATAR_ERROR, payload };
};