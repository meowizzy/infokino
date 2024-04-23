import { select, put, call } from "redux-saga/effects";
import { toggleFavorites, createFavorites } from "@services/favorites";
import { setFavoritesLoading, setUserFavoritesData } from "../reducers/favoritesReducer";

export function* toggleFavoritesWorker() {
    try {
        yield put(setFavoritesLoading());
        const { ids, userFavoritesData } = yield select(state => state.favoritesReducer);
        const userData = yield select(state => state.userReducer.authData);

        let data;
        const payload = {
            userId: String(userData.id),
            favorites: ids
        };

        if (!userFavoritesData) {
            data = yield call(createFavorites, payload);
        } else {
            data = yield call(toggleFavorites, userFavoritesData.id, payload.favorites);
        }

        yield put(setUserFavoritesData(data))
    } catch (e) {

    }
}