import {
    put,
    call,
    select
} from 'redux-saga/effects';
import { fetchFavorites } from "@services/favorites";
import { getFilmsByIds } from "@services/kinoinfo";
import {
    setFavorites,
    setFavoritesError,
    setFavoritesLoading
} from "../reducers/favoritesReducer";

export function* favoritesWorker() {
    try {
        const userData = yield select(state => state.userReducer.authData);
        const userFavoritesData = yield select(state => state.favoritesReducer.userFavorites);
        yield put(setFavoritesLoading());
        console.log(userFavoritesData)

        if (userData) {
            if (userFavoritesData && userFavoritesData.favorites.length) {
                const data = yield call(getFilmsByIds, 1, userFavoritesData.favorites);
                yield put(setFavorites(data));
            }
        }
    } catch(e) {
        if (e?.response?.status === 404) {
            yield put(setFavorites([]));
        } else {
            yield put(setFavoritesError(e.message));
        }
    }
}
