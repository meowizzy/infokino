import { put, call, select } from 'redux-saga/effects';
import { login, profile } from "@services/auth";
import { LOCAL_STORAGE_AUTH } from "@services/constants";
import { clearForm, setLoginValidateError } from "../reducers/loginReducer";
import { setUserData, setUserIsLoading } from "../reducers/userReducer";
import { validateLoginForm } from "@components/AuthComponent/Login/validateLoginForm";
import { getGlobalModalContextValue } from "@contexts";
export function* loginWorker() {
    try {
        const formData = yield select(state => state.loginReducer);
        const modalContext = yield getGlobalModalContextValue();
        const error = yield validateLoginForm(formData);

        if (error?.length) throw new Error(error);

        yield put(setUserIsLoading(true));

        // логинимся
        const loginData = yield call(login, { email: formData.email, password: formData.password });

        // записываем токен в localstorage
        yield localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(loginData));

        // запрашиваем данные пользователя
        const profileData = yield call(profile);

        // кладем в стор данные пользователя
        yield put(setUserData({
            ...profileData,
            password: undefined
        }));

        yield put(clearForm());

        modalContext.closeModal();

    } catch (e) {
        yield put(setLoginValidateError(e.message.split("%")));
    }
}