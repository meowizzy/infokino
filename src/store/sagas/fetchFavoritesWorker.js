import { put, call, select } from "redux-saga/effects";
import {
    setFavoritesData,
    setFavoritesError,
    setFavoritesLoading
} from "../reducers/favoritesReducer";
import { getFilmsByIds } from "@services/kinoinfo";

export function* fetchFavoritesWorker() {
    try {
        yield put(setFavoritesLoading());
        const { ids } = yield select(state => state.favoritesReducer);

        let data;

        if (ids && ids.length) {
            data = yield call(getFilmsByIds, 1, ids);
        } else {
            data = [];
        }

        yield put(setFavoritesData(data));
    } catch (e) {
        console.log(e);
        yield put(setFavoritesError(e.message));
    }
}