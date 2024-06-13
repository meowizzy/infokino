import { put, call, select } from 'redux-saga/effects';
import { LOCAL_STORAGE_AUTH } from "@app/constants";
import { getGlobalModalContextValue } from "@contexts";
import { signUp, profile } from "@services/auth.service";
import { validateRegisterForm } from "@components/AuthComponent/Register/validateRegisterForm";
import { clearForm, setRegisterValidateError } from "../../reducers/auth/registerReducer";
import { setUserData, setUserIsLoading } from "../../reducers/auth/userReducer";

export function* signUpWorker() {
    try {
        const formData = yield select(state => state.registerReducer);
        const error = yield validateRegisterForm(formData);
        const modalContext = yield getGlobalModalContextValue();

        if (error?.length) throw new Error(error);

        yield put(setUserIsLoading(true));
        const { data: tokens } = yield call(signUp, {...formData, confirmPassword: undefined});

        yield localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(tokens));

        const { data: profileData } = yield call(profile);

        yield put(setUserData({
            ...profileData
        }));

        yield put(setUserIsLoading(false));
        yield put(clearForm());

        modalContext.closeModal();

    } catch (e) {
        const error = e?.response ? e.response.data.message : e.message;
        yield put(setRegisterValidateError(error.split("%")));
        yield put(setUserIsLoading(false));
    }
}