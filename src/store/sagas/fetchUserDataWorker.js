import { put, call } from 'redux-saga/effects';
import { profile } from "@services/auth";
import { LOCAL_STORAGE_AUTH } from "@services/constants";
import { fetchFavorites } from "@services/favorites";
import { setUserData, setUserError, setUserIsLoading } from "../reducers/userReducer";
import { setUserFavorites} from "../reducers/favoritesReducer";

export function* fetchUserDataWorker() {
    try {
        const token = yield localStorage.getItem(LOCAL_STORAGE_AUTH);
        if (!token) throw new Error("Нет токена!");
        yield put(setUserIsLoading(true));

        const profileData = yield call(profile);

        // запрашиваем список id избранных
        const favoritesData = yield call(fetchFavorites, profileData?.id);
        const userFavoritesData = yield favoritesData[0];

        // кладем в стор избранные
        yield put(setUserFavorites(userFavoritesData));

        yield put(setUserData({
            ...profileData,
            password: undefined
        }));

        yield put(setUserIsLoading(false));
    } catch (e) {
        yield put(setUserError(e.message));
        yield put(setUserIsLoading(false));
    }
}