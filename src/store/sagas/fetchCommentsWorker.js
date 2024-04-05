import { put, call, select } from 'redux-saga/effects';
import { fetchCommentsByMovieId } from "../../services/movieComments";
import { setComments, setCommentsError, setCommentsLoading } from "../reducers/commentsReducer";
import { validateCommentsList } from "../../components/Comments/validateCommentsList";
export function* fetchCommentsWorker() {
    try {
        yield put(setCommentsLoading(true));
        const filmId = yield select(state => state.filmByIdReducer.id);
        const data = yield call(fetchCommentsByMovieId, filmId);

        yield put(setComments(data));
    } catch (e) {
        const err = yield validateCommentsList(e);
        yield put(setCommentsError(err));
    }
}