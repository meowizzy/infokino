import { put, call } from 'redux-saga/effects';
import { profile } from "../../services/auth";
import {setUserData, setUserError, setUserIsLoading} from "../reducers/userReducer";
import {LOCAL_STORAGE_AUTH} from "../../services/constants";
export function* fetchUserDataWorker() {
    try {
        const token = yield localStorage.getItem(LOCAL_STORAGE_AUTH);
        if (!token) throw new Error("Нет токена!");
        yield put(setUserIsLoading(true));

        const profileData = yield call(profile);

        yield put(setUserData({
            ...profileData,
            password: undefined
        }));

        yield put(setUserIsLoading(false));
    } catch (e) {
        yield put(setUserError(e.message));
        yield put(setUserIsLoading(false));
    }
}