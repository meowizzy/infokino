import { put, call, select } from "redux-saga/effects";
import { getFilmsByIds } from "@services/kinopoisk.service";
import {
    setFavoritesData,
    setFavoritesError,
    setFavoritesLoading
} from "../../reducers/favoritesReducer";

export function* fetchFavoritesWorker() {
    try {
        yield put(setFavoritesLoading());
        const { userFavoritesData } = yield select(state => state.favoritesReducer);

        console.log(userFavoritesData);

        let data;

        if (userFavoritesData && userFavoritesData.length) {
            data = yield call(getFilmsByIds, 1, userFavoritesData);
        } else {
            data = [];
        }

        yield put(setFavoritesData(data.data?.docs));
    } catch (e) {
        yield put(setFavoritesError(e.message));
    }
}