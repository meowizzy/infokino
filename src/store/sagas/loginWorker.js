import { put, call, select } from 'redux-saga/effects';
import { login, profile } from "../../services/auth";
import { clearForm, setLoginValidateError } from "../reducers/loginReducer";
import { setUserData, setUserIsLoading } from "../reducers/userReducer";
import { LOCAL_STORAGE_AUTH } from "../../services/constants";
export function* loginWorker() {
    try {
        const formData = yield select(state => state.loginReducer);

        yield put(setUserIsLoading(true));

        const loginData = yield call(login, formData);

        yield localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(loginData));

        const profileData = yield call(profile);

        yield put(setUserData({
            ...profileData,
            password: undefined
        }));

        yield put(setUserIsLoading(false));

        yield put(clearForm());

    } catch (e) {
        yield put(setLoginValidateError(e.message.split("%")));
        yield put(setUserIsLoading(false));
    }
}