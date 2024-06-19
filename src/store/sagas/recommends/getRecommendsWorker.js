import { put, call } from "redux-saga/effects";
import { getRecommendFilms } from "../../../services/kinopoisk.service";
import {setRecommendsData, setRecommendsError, setRecommendsLoading} from "../../reducers/recommends/recommendsReducer";
export function* getRecommendsWorker({ payload: query }) {
    try {
        yield put(setRecommendsLoading());

        if (query.length) {
            const { data } = yield call(getRecommendFilms, query);

            yield put(setRecommendsData(data.docs));
        }

    } catch(e) {
        const error = e.response ? e.response.data.message : e.message;
        yield put(setRecommendsError(error));
    }
}