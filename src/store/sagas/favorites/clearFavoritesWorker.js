import { put, call } from "redux-saga/effects";
import { clearFavorites } from "@services/favorites.service"
import {
    resetFavoritesData,
    setFavoritesError,
    setFavoritesLoading,
} from "../../reducers/favorites/favoritesReducer";
;

export function* clearFavoritesWorker() {
    try {
        yield put(setFavoritesLoading());

        yield call(clearFavorites);

        yield put(resetFavoritesData());
    } catch (e) {
        yield put(setFavoritesError(e.message));
    }
}