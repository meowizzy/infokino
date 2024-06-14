import { toast } from "react-toastify";
import { select, put, call } from 'redux-saga/effects';
import { setAvatar } from "@services/auth.service";
import { setProfileAvatarError, setProfileAvatarLoading } from "../../reducers/auth/profileAvatarReducer";
import { setUserDataAvatar } from "../../reducers/auth/userReducer";

export function* profileAvatarWorker() {
    try {
        yield put(setProfileAvatarLoading(true));

        const { avatar } = yield select(state => state.profileAvatarReducer);
        const formData = new FormData();

        formData.append("avatar", avatar);

        const { data } = yield call(setAvatar, formData);

        yield put(setUserDataAvatar(data.avatar));
        toast.success("Фотография профиля успешно изменена");

    } catch (e) {
        const error = e.response ? e.response.data.message : e.message;

        yield put(setProfileAvatarError(error));
        toast(error);
    } finally {
        yield put(setProfileAvatarLoading(false));
    }
}