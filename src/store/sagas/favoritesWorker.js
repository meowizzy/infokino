import { 
    put, 
    call 
} from 'redux-saga/effects';
import { fetchFavorites } from "@services/favorites";
import { 
    setFavorites, 
    setFavoritesError, 
    setFavoritesLoading 
} from "../reducers/favoritesReducer";

export function* favoritesWotker() {
    try {
        yield put(setFavoritesLoading());
        const data = yield call(fetchFavorites());
        yield put(setFavorites(data));
    } catch(e) {
        yield put(setFavoritesError(e.message));
    }
}