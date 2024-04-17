import { put, call, select } from "redux-saga/effects";
import { createFavorites, toggleFavorites } from "../../services/favorites";
import { setToggleFavoriteError, setToggleFavoriteLoading } from "../reducers/toggleFavoriteReducer";
import {setFavorites} from "../reducers/favoritesReducer";

export function* addToFavoritesWorker() {
    try {
        yield put(setToggleFavoriteLoading(true));
        const { authData } = yield select(state => state.userReducer);
        const { favorites, id } = yield select(state => state.favoritesReducer.userFavorites);
        const { favoriteId } = yield select(state => state.toggleFavoriteReducer)
        const payload = {
            favoritesId: id,
            favorites: [...favorites, String(favoriteId)]
        };

        let data;

        if (favorites.length) {
            data = yield call(toggleFavorites, payload.favoritesId, payload.favorites)
        } else {
            data = yield call(createFavorites, {
                userId: authData.id,
                favorites: payload.favorites
            });
        }

        console.log(data);

        yield put(setFavorites(data.favorites));
        yield put(setToggleFavoriteLoading(false));
    } catch (e) {
        console.log(e);
        yield put(setToggleFavoriteError(e.message));
        yield put(setToggleFavoriteLoading(false));
    }
}