import { select, put, call } from "redux-saga/effects";
import { collectRecommends } from "@services/recommends.service";
import { setRecommendsQuery } from "../../reducers/recommends/recommendsReducer";
export function* collectRecommendsWorker({ payload }) {
    try {
        const { _id: userId } = yield select(state => state.userReducer.authData);
        const { query } = yield select(state => state.recommendsReducer);

        let newQuery;

        if ((query.length + payload.length) > 3) {
            newQuery = Array.from(new Set([...payload, ...query]));
            newQuery.length = 3;
        } else {
            newQuery = Array.from(new Set([...payload, ...query]));
        }

        yield put(setRecommendsQuery(newQuery));

        yield call(collectRecommends, {
            userId,
            items: newQuery
        });

    } catch (e) {
        const error = e.response ? e.response.data.message : e.message;
        console.error(error);
    }
}