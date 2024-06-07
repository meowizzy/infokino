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
        const { data: tokens } = yield call(signUp, formData);

        yield localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(tokens));

        const { data: profileData } = yield call(profile);

        yield put(setUserData({
            ...profileData,
            password: undefined
        }));

        yield put(setUserIsLoading(false));
        yield put(clearForm());

        modalContext.closeModal();

    } catch (e) {
        yield put(setRegisterValidateError(e.message.split("%")));
        yield put(setUserIsLoading(false));
    }
}