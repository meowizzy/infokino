import { select, put, call } from 'redux-saga/effects';
import { setAvatar } from "@services/auth.service";
import { setProfileAvatarError, setProfileAvatarLoading } from "../../reducers/auth/profileAvatarReducer";
import {setUserDataAvatar} from "../../reducers/auth/userReducer";

export function* profileAvatarWorker() {
    try {
        yield put(setProfileAvatarLoading(true));
        const { avatar } = yield select(state => state.profileAvatarReducer);
        const formData = new FormData();

        formData.append("avatar", avatar);

        const { data } = yield call(setAvatar, formData);

        yield put(setUserDataAvatar(data.avatar));

    } catch (error) {
        yield put(setProfileAvatarError(error.response.data.message));
    } finally {
        yield put(setProfileAvatarLoading(false));
    }
}