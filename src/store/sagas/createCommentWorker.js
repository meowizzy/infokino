import { put, call, select } from 'redux-saga/effects';
import { createComment } from "../../services/movieComments";
import { setCreatedComment } from "../reducers/createCommentReducer";
import { clearCommentForm, createCommentError, createCommentLoading} from "../reducers/createCommentReducer";
import { setComments } from '../reducers/commentsReducer';
export function* createCommentWorker() {
    try {
        yield put(createCommentLoading(true));
        const filmId = yield select(state => state.filmByIdReducer.id);
        const userData = yield select(state => state.userReducer.authData);
        const comments = yield select(state => state.commentsReducer.data);
        const { comment, rating } = yield select(state => state.createCommentReducer.formData);
        const data = yield call(createComment, {
            movieId: filmId,
            comment,
            rating,
            reviewer: {
                id: String(userData.id),
                role: userData?.role,
                avatar: userData?.avatar,
                name: userData?.name,
                email: userData?.email
            },
            userId: String(userData.id),
            commentId: comments ? Number(comments[0].id) + 1 : 1
        });

        if (comments) {
            yield put(setComments([data, ...comments]));
        } else {
            yield put(setComments([data]));
        }

        yield put(clearCommentForm());
    } catch (e) {
        yield put(createCommentError(e.message));
        yield put(clearCommentForm());
    }
}