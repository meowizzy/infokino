import { put, call, select } from 'redux-saga/effects';
import { validateRegisterForm } from "../../components/AuthComponent/Register/validateRegisterForm";
import {login, register} from "../../services/auth";
import {clearForm, setRegisterValidateError} from "../reducers/registerReducer";
import {setUserData, setUserIsLoading} from "../reducers/userReducer";
import {LOCAL_STORAGE_AUTH} from "../../services/constants";
export function* registerWorker() {
    try {
        const formData = yield select(state => state.registerReducer);
        const error = yield validateRegisterForm(formData);

        if (error?.length) throw new Error(error);

        yield put(setUserIsLoading(true));
        const data = yield call(register, formData);

        const loginResponseData = yield call(login, {
            email: formData?.email,
            password: formData?.password
        });

        yield localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(loginResponseData));

        yield put(setUserData({
            ...data,
            password: undefined
        }));
        yield put(setUserIsLoading(false));
        yield put(clearForm());

    } catch (e) {
        yield put(setRegisterValidateError(e.message.split("%")));
        yield put(setUserIsLoading(false));
    }
}