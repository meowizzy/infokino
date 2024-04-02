import { put, call, select } from 'redux-saga/effects';
import { validateRegisterForm } from "../../components/AuthComponent/Register/validateRegisterForm";
import {login, profile, register} from "../../services/auth";
import {clearForm, setRegisterValidateError} from "../reducers/registerReducer";
import {setUserData, setUserIsLoading} from "../reducers/userReducer";
import {LOCAL_STORAGE_AUTH} from "../../services/constants";
export function* loginWorker() {
    try {
        const formData = yield select(state => state.loginReducer);

        const loginData = yield call(login, formData);
        yield put(setUserIsLoading(true));

        yield localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(loginData));

        const profileData = yield call(profile);

        yield put(setUserData({
            ...profileData,
            password: undefined
        }));
        yield put(setUserIsLoading(false));
        yield put(clearForm());

    } catch (e) {
        // yield put(setRegisterValidateError(e.message.split("%")));
        yield put(setUserIsLoading(false));
    }
}