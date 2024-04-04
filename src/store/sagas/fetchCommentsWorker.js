import { put, call, select } from 'redux-saga/effects';
import {fetchCommentsByMovieId} from "../../services/movieComments";
import {setComments, setCommentsError, setCommentsLoading} from "../reducers/commentsReducer";
export function* fetchCommentsWorker() {
    try {
        yield put(setCommentsLoading(true));
        const filmId = yield select(state => state.filmByIdReducer.id);
        const data = yield call(fetchCommentsByMovieId, filmId);

        console.log(data);

        if (!data) {
            throw new Error("Комментариев к этому фильму пока нет.")
        }

        yield put(setComments(data));
    } catch (e) {
        yield put(setCommentsError(e.message));
    }
}