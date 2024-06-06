import { select, put, call } from "redux-saga/effects";
import { toggleFavorites } from "@services/favorites.service";
import { setFavoritesLoading, setUserFavoritesData } from "../../reducers/favoritesReducer";

export function* toggleFavoritesWorker() {
    try {
        yield put(setFavoritesLoading());
        const { movieId } = yield select(state => state.favoritesReducer);
        const { data } = yield call(toggleFavorites, { movieId })

        yield put(setUserFavoritesData(data.items))
    } catch (e) {

    }
}