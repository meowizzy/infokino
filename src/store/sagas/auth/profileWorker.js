import { put, call, all } from 'redux-saga/effects';
import { profile } from "@services/auth.service";
import { LOCAL_STORAGE_AUTH } from "@app/constants";
import { fetchFavorites } from "@services/favorites.service";
import { getRecommends } from "@services/recommends.service";
import { setUserData, setUserError, setUserIsLoading } from "../../reducers/auth/userReducer";
import { setUserFavoritesData } from "../../reducers/favorites/favoritesReducer";
import { setRecommendsQuery } from "../../reducers/recommends/recommendsReducer";

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
            const [userFavorites, userRecommends] = yield all([
                call(fetchFavorites),
                call(getRecommends)
            ]);

            const { data: userFavoritesData } = userFavorites;
            const { data: userRecommendsData } = userRecommends;

            yield put(setUserFavoritesData(userFavoritesData));
            yield put(setRecommendsQuery(userRecommendsData?.items));
        }

        yield put(setUserIsLoading(false));
    } catch (e) {
        yield put(setUserError(e.message));
        yield put(setUserIsLoading(false));
    }
}