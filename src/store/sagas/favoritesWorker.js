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

export function* favoritesWotker() {
    try {
        const userData = yield select(state => state.userReducer.authData);
        yield put(setFavoritesLoading());
        
        if (userData) {
            const favoritesData = yield call(fetchFavorites, userData?.id);
            const ids = yield favoritesData[0]?.favorites;
            if (ids?.length) {
                const data = yield call(getFilmsByIds, 1, ids);
                yield put(setFavorites(data));
            }
        }
    } catch(e) {
        yield put(setFavoritesError(e.message));
    }
}
