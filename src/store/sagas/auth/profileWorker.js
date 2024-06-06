import { put, call } from 'redux-saga/effects';
import { profile } from "@services/auth.service";
import { LOCAL_STORAGE_AUTH } from "@app/constants";
import { fetchFavorites } from "@services/favorites.service";
import { setUserData, setUserError, setUserIsLoading } from "../../reducers/userReducer";
import { setUserFavoritesData } from "../../reducers/favoritesReducer";

export function* profileWorker() {
    try {
        const token = yield localStorage.getItem(LOCAL_STORAGE_AUTH);

        if (!token) throw new Error("Нет токена!");

        yield put(setUserIsLoading(true));

        const { data: profileData } = yield call(profile);

        yield put(setUserData({
            ...profileData,
            password: undefined
        }));

        if (profileData) {
            const { data: userFavoritesData } = yield call(fetchFavorites);

            yield put(setUserFavoritesData(userFavoritesData));
        }

        yield put(setUserIsLoading(false));
    } catch (e) {
        yield put(setUserError(e.message));
        yield put(setUserIsLoading(false));
    }
}