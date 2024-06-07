import { put, call, select } from 'redux-saga/effects';
import { getAllReviews } from "@services/reviews.service";
import { validateCommentsList } from "@components/Comments/validateCommentsList";
import { setComments, setCommentsError, setCommentsLoading } from "../../reducers/reviews/commentsReducer";

export function* fetchReviewsWorker() {
    try {
        yield put(setCommentsLoading(true));
        const movieId = yield select(state => state.filmByIdReducer.id);
        const { data } = yield call(getAllReviews, movieId);

        yield put(setComments(data));
    } catch (e) {
        const err = yield validateCommentsList(e.message);
        yield put(setCommentsError(err));
    }
}