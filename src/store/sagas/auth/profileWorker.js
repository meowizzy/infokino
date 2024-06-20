import { put, call } from 'redux-saga/effects';
import { profile } from "@services/auth.service";
import { LOCAL_STORAGE_AUTH } from "@app/constants";
import { fetchFavorites } from "@services/favorites.service";
import { getRecommends } from "@services/recommends.service";
import { getRecommendFilms } from "@services/kinopoisk.service";
import { setUserData, setUserError, setUserIsLoading } from "../../reducers/auth/userReducer";
import { setUserFavoritesData } from "../../reducers/favorites/favoritesReducer";
import { setRecommendsData, setRecommendsQuery } from "../../reducers/recommends/recommendsReducer";

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
            const userRecommends = yield call(getRecommends);
            const { data: userRecommendsData } = userRecommends;
            yield put(setRecommendsQuery(userRecommendsData?.items));

            if (userRecommendsData?.items?.length) {
                const { data: recommends } = yield call(getRecommendFilms, userRecommendsData?.items);

                yield put(setRecommendsData(recommends?.docs));
            }

            const userFavorites = yield call(fetchFavorites);
            const { data: userFavoritesData } = userFavorites;
            yield put(setUserFavoritesData(userFavoritesData));
        }

        yield put(setUserIsLoading(false));
    } catch (e) {
        yield put(setUserError(e.message));
        yield put(setUserIsLoading(false));
    }
}