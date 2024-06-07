import { put, call, select } from 'redux-saga/effects';
import { getGlobalModalContextValue } from "@contexts";
import { signIn, profile } from "@services/auth.service";
import { LOCAL_STORAGE_AUTH } from "@app/constants";
import { validateLoginForm } from "@components/AuthComponent/Login/validateLoginForm";
import { clearForm, setLoginValidateError } from "../../reducers/auth/loginReducer";
import {setUserData, setUserError, setUserIsLoading} from "../../reducers/auth/userReducer";

export function* signInWorker() {
    try {
        const formData = yield select(state => state.loginReducer);
        const modalContext = yield getGlobalModalContextValue();
        const error = yield validateLoginForm(formData);

        if (error?.length) throw new Error(error);

        yield put(setUserIsLoading(true));

        const { data: tokens } = yield call(signIn, { email: formData.email, password: formData.password });

        yield localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(tokens));

        const { data: profileData } = yield call(profile);

        yield put(setUserData(profileData));
        yield put(clearForm());

        modalContext.closeModal();
    } catch (e) {
        const error = e?.response ? e.response.data.message : e.message;
        yield put(setLoginValidateError(error.split("%")));
    } finally {
        yield put(setUserIsLoading(false));
    }
}