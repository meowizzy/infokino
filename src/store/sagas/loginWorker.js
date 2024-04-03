import { put, call, select } from 'redux-saga/effects';
import { login, profile } from "../../services/auth";
import { clearForm, setLoginValidateError } from "../reducers/loginReducer";
import { setUserData, setUserIsLoading } from "../reducers/userReducer";
import { LOCAL_STORAGE_AUTH } from "../../services/constants";
import {validateLoginForm} from "../../components/AuthComponent/Login/validateLoginForm";
import { getGlobalModalContextValue } from "@contexts";
export function* loginWorker() {
    try {
        const formData = yield select(state => state.loginReducer);
        const modalContext = yield getGlobalModalContextValue();
        const error = yield validateLoginForm(formData);

        if (error?.length) throw new Error(error);

        yield put(setUserIsLoading(true));

        const loginData = yield call(login, { email: formData.email, password: formData.password });

        yield localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(loginData));

        const profileData = yield call(profile);

        yield put(setUserData({
            ...profileData,
            password: undefined
        }));

        yield put(setUserIsLoading(false));

        yield put(clearForm());

        modalContext.closeModal();

    } catch (e) {
        yield put(setLoginValidateError(e.message.split("%")));
        yield put(setUserIsLoading(false));
    }
}