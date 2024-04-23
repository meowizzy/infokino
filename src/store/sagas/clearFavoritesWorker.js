import { put, call, select } from "redux-saga/effects";
import {
    resetFavoritesData,
    setFavoritesError,
    setFavoritesLoading,
} from "../reducers/favoritesReducer";
import { clearFavorites } from "@services/favorites";

export function* clearFavoritesWorker() {
    try {
        yield put(setFavoritesLoading());
        const { id } = yield select(state => state.favoritesReducer.userFavoritesData);
        yield call(clearFavorites, id);
        yield put(resetFavoritesData());
    } catch (e) {
        yield put(setFavoritesError(e.message));
    }
}