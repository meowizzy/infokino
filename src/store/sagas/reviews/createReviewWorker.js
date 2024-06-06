import { put, call, select } from 'redux-saga/effects';
import { createReview } from "@services/reviews.service";
import { validateCommentsForm } from '@components/Comments/validateCommentsForm';
import { clearCommentForm, createCommentError, createCommentLoading} from "../../reducers/createCommentReducer";
import { setComments } from '../../reducers/commentsReducer';

export function* createReviewWorker() {
    try {
        yield put(createCommentLoading(true));
        const movieId = yield select(state => state.filmByIdReducer.id);
        const comments = yield select(state => state.commentsReducer.data);
        const { comment, rating } = yield select(state => state.createCommentReducer.formData);

        const errors = validateCommentsForm({ comment, rating });

        if (errors.length) {
            throw new Error(errors);
        }

        const { data } = yield call(createReview, {
            movieId,
            comment,
            rating
        });

        if (comments) {
            yield put(setComments([data, ...comments]));
        } else {
            yield put(setComments([data]));
        }

        yield put(clearCommentForm());
    } catch (e) {
        yield put(createCommentError(e.message.split("%")));
    }
}