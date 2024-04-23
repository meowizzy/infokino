import { put, call } from 'redux-saga/effects';
import { profile } from "@services/auth";
import { LOCAL_STORAGE_AUTH } from "@services/constants";
import { setUserData, setUserError, setUserIsLoading } from "../reducers/userReducer";
import {fetchFavorites} from "../../services/favorites";
import {setUserFavoritesData} from "../reducers/favoritesReducer";

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

        if (profileData) {
            const userFavoritesData = yield call(fetchFavorites, String(profileData.id));

            yield put(setUserFavoritesData(...userFavoritesData));
        }

        yield put(setUserIsLoading(false));
    } catch (e) {
        yield put(setUserError(e.message));
        yield put(setUserIsLoading(false));
    }
}